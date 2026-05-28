// Captura dos elementos do DOM
const sliderTech = document.getElementById('slider-tech');
const sliderAgro = document.getElementById('slider-agro');
const valTech = document.getElementById('val-tech');
const valAgro = document.getElementById('val-agro');
const statusMensagem = document.getElementById('status-mensagem');

// Função principal que calcula o equilíbrio
function calcularEquilibrio() {
    const techValue = parseInt(sliderTech.value, 10);
    const agroValue = parseInt(sliderAgro.value, 10);

    // Atualiza o texto dos valores na tela
    valTech.textContent = `${techValue}%`;
    valAgro.textContent = `${agroValue}%`;

    // Diferença estrita entre tecnologia e meio ambiente
    const diferenca = Math.abs(techValue - agroValue);

    // Lógica de verificação do tema Agrinho 2026
    if (techValue > 70 && agroValue > 70 && diferenca <= 15) {
        statusMensagem.textContent = "🌱 Perfeito! Agro forte e futuro sustentável alcançados com tecnologia de ponta!";
        statusMensagem.className = "status-alerta status-sucesso";
    } else if (diferenca <= 20) {
        statusMensagem.textContent = "⚡ Sistema em equilíbrio estável. A programação apoia a natureza.";
        statusMensagem.className = "status-alerta status-sucesso";
    } else if (techValue > agroValue) {
        statusMensagem.textContent = "⚠️ Alerta: Excesso de tecnologia sem foco ambiental. Risco de esgotamento de recursos.";
        statusMensagem.className = "status-alerta status-aviso";
    } else {
        statusMensagem.textContent = "⚠️ Alerta: Falta de tecnologia. O agro precisa de programação para ser eficiente e forte!";
        statusMensagem.className = "status-alerta status-aviso";
    }
}

// Ouvintes de eventos (Event Listeners) para atualização em tempo real
sliderTech.addEventListener('input', calcularEquilibrio);
sliderAgro.addEventListener('input', calcularEquilibrio);

// Executa uma vez ao carregar a página para definir o estado inicial
document.addEventListener('DOMContentLoaded', calcularEquilibrio);
