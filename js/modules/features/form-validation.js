import { throwSnippetSuccess } from "./alert.js";
import { getRegistrations, saveRegistration } from "./registrations.js";

const FIELD_MESSAGES = {
    form_email: "Digite um e-mail válido.",
    form_password: "A senha deve ter de 8 a 12 números.",
    form_number: "Formato esperado: 00 00000-0000.",
    form_cep: "Formato esperado: 00000-000.",
    form_cpf: "Formato esperado: 000.000.000-00.",
};

function validateField(input) {
    const errorEl = document.getElementById(input.id + "-error");
    if (!errorEl) return true;

    if (input.validity.valid) {
        errorEl.textContent = "";
        return true;
    }

    if (input.validity.valueMissing) {
        errorEl.textContent = "Este campo é obrigatório.";
    } else if (input.validity.patternMismatch || input.validity.typeMismatch) {
        errorEl.textContent = FIELD_MESSAGES[input.id] || "Valor inválido.";
    } else {
        errorEl.textContent = "Valor inválido.";
    }

    return false;
}

function clearAllErrors(fields) {
    fields.forEach((input) => {
        const errorEl = document.getElementById(input.id + "-error");
        if (errorEl) errorEl.textContent = "";
    });
}

export function setupCadastroForm(root) {
    const form = root.querySelector("#form_cadastro");
    if (!form) return;

    const fields = Array.from(form.querySelectorAll("input[id]"));

    // log dos cadastros ja realizados
    const previousRegistrations = getRegistrations();
    console.log(`storage: ${previousRegistrations.length} cadastro(s) recuperado(s).`, previousRegistrations);

    // Regex em tempo real
    fields.forEach((input) => {
        input.addEventListener("input", () => validateField(input));
        input.addEventListener("blur", () => validateField(input));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const results = fields.map((input) => validateField(input));
        const formIsValid = results.every(Boolean);

        if (formIsValid) {
            saveRegistration(form);
            throwSnippetSuccess("Formulario enviado com sucesso!");
            form.reset();
            clearAllErrors(fields);
        }
    });
}
