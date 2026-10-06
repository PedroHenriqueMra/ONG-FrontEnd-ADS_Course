import { getItem, setItem } from "../services/storage.js";

const STORAGE_KEY = "ong:cadastros";

export function getRegistrations() {
    return getItem(STORAGE_KEY, []);
}

export function saveRegistration(form) {
    const formData = new FormData(form);

    const registration = {
        email: formData.get("email"),
        telefone: formData.get("number"),
        cep: formData.get("cep"),
        cpf: formData.get("cpf"),
        cadastradoEm: new Date().toISOString(),
    };

    const registrations = getRegistrations();
    registrations.push(registration);
    setItem(STORAGE_KEY, registrations);

    return registration;
}