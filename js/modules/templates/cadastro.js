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
                                <label for="form_email">E-mail</label>
                                <input type="email" name="email" id="form_email"
                                        aria-describedby="form_email-error"
                                        required
                                        placeholder="nome@exemplo.com">
                                <span class="field-error" id="form_email-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_password">Senha</label>
                                <input type="password" name="password" id="form_password"
                                        aria-describedby="form_password-error"
                                        required
                                        placeholder="8 a 12 números"
                                        pattern="\\d{8,12}"
                                        title="A senha deve ter de 8 a 12 números">
                                <span class="field-error" id="form_password-error" aria-live="polite"></span>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <div class="field-row two-up">
                            <div>
                                <label for="form_number">Telefone</label>
                                <input type="tel" name="number" id="form_number"
                                        aria-describedby="form_number-error"
                                        required
                                        placeholder="(00) 00000-0000"
                                        pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
                                        title="Digite o número no formato (00) 00000-0000">
                                <span class="field-error" id="form_number-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_cep">CEP</label>
                                <input type="text" name="cep" id="form_cep"
                                        aria-describedby="form_cep-error"
                                        required
                                        placeholder="00000-000"
                                        pattern="[0-9]{5}-[0-9]{3}"
                                        title="Digite o CEP no formato 00000-000">
                                <span class="field-error" id="form_cep-error" aria-live="polite"></span>
                            </div>
                            <div>
                                <label for="form_cpf">CPF</label>
                                <input type="text" name="cpf" id="form_cpf"
                                        aria-describedby="form_cpf-error"
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
