document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var form = document.getElementById("jurosForm");
    form.addEventListener("submit", calcularJuros);
}

function calcularJuros(event) {
    event.preventDefault();

    var principal = document.getElementById("principal").value;
    var taxa = document.getElementById("taxa").value / 100;

    var tempo = document.getElementById("tempo").value;
    var tempoTipo = document.getElementById("tempoTipo").value;

    var juros = 0;
    if (tempoTipo === "anos") {
        juros = principal * taxa * tempo;
    } else if (tempoTipo === "meses") {
        juros = principal * taxa * tempo;
    }

    document.getElementById("resultado").value = juros.toFixed(2);
}
