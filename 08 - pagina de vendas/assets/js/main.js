/**
 * Chronos Elite - Main Interactions & Animations Script
 * Powered by Native IntersectionObserver for Maximum Performance & Reliability
 */

function init() {
    console.log("Chronos Elite: Iniciando scripts...");
    
    // 1. Remove a classe 'no-js' do HTML indicando suporte a Javascript ativo
    document.documentElement.classList.remove("no-js");

    const reveals = document.querySelectorAll(".reveal");
    console.log("Chronos Elite: Elementos .reveal encontrados:", reveals.length);

    if (!reveals.length) return;

    // Fallback caso o IntersectionObserver não seja suportado pelo navegador
    if (!window.IntersectionObserver) {
        console.warn("Chronos Elite: IntersectionObserver não suportado pelo navegador. Ativando elementos diretamente.");
        reveals.forEach(el => el.classList.add("active"));
        return;
    }

    // Configuração do Observer
    const observerOptions = {
        root: null, // usa o viewport
        rootMargin: "0px 0px -80px 0px", // ativa ligeiramente antes de entrar na tela
        threshold: 0.05 // ativa quando pelo menos 5% do elemento está visível
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Chronos Elite: Elemento interseccionado, adicionando classe .active", entry.target);
                // Adiciona a classe active para acionar a animação no CSS
                entry.target.classList.add("active");
                // Deixa de observar o elemento após a primeira exibição (comportamento "once")
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Registra todos os elementos com a classe .reveal
    reveals.forEach((element) => {
        revealObserver.observe(element);
    });
}

// Inicializa imediatamente se o DOM já estiver pronto, ou aguarda o evento DOMContentLoaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
