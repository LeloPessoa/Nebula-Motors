document.addEventListener("DOMContentLoaded", function() {
    const verMaisBtn = document.getElementById("verMaisBtn");
    const novosVeiculos = document.querySelectorAll(".new-vehicle");
    verMaisBtn.addEventListener("click", function() {
        novosVeiculos.forEach(function(veiculo) {
            veiculo.classList.toggle("hidden");
        });
        if (novosVeiculos[0].classList.contains("hidden")) {
            verMaisBtn.textContent = "Ver Mais";
        } else {
            verMaisBtn.textContent = "Ver Menos";
        }
    });
});
