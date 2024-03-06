document.addEventListener("DOMContentLoaded", function() {
    const verMaisBtn = document.getElementById("verMaisBtn");
    const novosVeiculos = document.querySelectorAll(".new-vehicle");

    verMaisBtn.addEventListener("click", function() {
        // Alterna a classe "hidden" dos novos veículos para mostrar ou ocultar
        novosVeiculos.forEach(function(veiculo) {
            veiculo.classList.toggle("hidden");
        });

        // Altera o texto do botão para "Ver Mais" ou "Ver Menos" com base na visibilidade dos novos veículos
        if (novosVeiculos[0].classList.contains("hidden")) {
            verMaisBtn.textContent = "Ver Mais";
        } else {
            verMaisBtn.textContent = "Ver Menos";
        }
    });
});
