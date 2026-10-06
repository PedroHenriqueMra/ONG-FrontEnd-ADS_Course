import { setupCadastroForm } from "../features/form-validation.js";

export function renderCadastro() {
    const html = `
        <section class="register-section">
            <h2>Cadastre-se</h2>
            <section class="form-wrapper">
                <form action="" novalidate id="form_cadastro">
                    <fieldset>
                        <legend>Dados de acesso</legend>
                        <div class="field-row two-up">
                            <div>
                                <label for="form_email">Email</label>
                                <input type="email" name="email" id="form_email"
                                        required
                                        placeholder="Email">
                                <span class="field-error" id="form_email-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_password">Password</label>
                                <input type="password" name="password" id="form_password"
                                        required
                                        placeholder="Password"
                                        pattern="\\d{8,12}">
                                <span class="field-error" id="form_password-error" aria-live="polite"></span>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <div class="field-row two-up">
                            <div>
                                <label for="form_number">Fone number</label>
                                <input type="tel" name="number" id="form_number"
                                        required
                                        placeholder="(00) 00000-0000"
                                        pattern="\\d{2}\\ \\d{4,5}-\\d{4}"
                                        title="Digite o numero no formato 00000-0000">
                                <span class="field-error" id="form_number-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_cep">CEP</label>
                                <input type="text" name="cep" id="form_cep"
                                        required
                                        placeholder="00000-000"
                                        pattern="[0-9]{5}-[0-9]{3}"
                                        title="Digite o CEP no formato 00000-000">
                                <span class="field-error" id="form_cep-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_cpf">CPF</label>
                                <input type="text" name="cpf" id="form_cpf"
                                        required
                                        placeholder="000.000.000-00"
                                        pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                                        title="Digite o CPF no formato 000.000.000-00">
                                <span class="field-error" id="form_cpf-error" aria-live="polite"></span>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </section>
    `;

    return { html, afterRender: setupCadastroForm };
}
