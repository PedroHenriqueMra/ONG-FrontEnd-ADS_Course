const AUTO_DISMISS_MS = 4000;

export function throwSnippetSuccess(message) {
    createSnippet(message, "success");
}

function createSnippet(message, type) {
    // remove um toast anterior, se ainda estiver na tela
    const existing = document.querySelector(".snippet-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "snippet-toast snippet-" + type;
    toast.setAttribute("role", "alert");

    const icon = document.createElement("span");
    icon.className = "snippet-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = type === "success" ? "✓" : "✕";

    const text = document.createElement("p");
    text.className = "snippet-message";
    text.textContent = message;

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "snippet-close";
    closeBtn.setAttribute("aria-label", "Fechar");
    closeBtn.textContent = "×";

    const dismiss = () => toast.remove();
    closeBtn.addEventListener("click", dismiss);

    toast.appendChild(icon);
    toast.appendChild(text);
    toast.appendChild(closeBtn);
    document.body.appendChild(toast);

    setTimeout(dismiss, AUTO_DISMISS_MS);
}
