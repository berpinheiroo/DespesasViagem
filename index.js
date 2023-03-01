// Parte 1

exports.calcularGastoCombustivel = function(distanciaMetros, tipoCombustivel) {
    if (!distanciaMetros || typeof distanciaMetros !== 'number' || distanciaMetros <= 0) {
        return 'Distância inválida'
    }
    if (!tipoCombustivel || typeof tipoCombustivel !== 'string' || !['gasolina', 'etanol'].includes(tipoCombustivel)) {
        return 'Tipo de combustível inválido'
    }

    let kmPorLitro
    if (tipoCombustivel === 'gasolina') {
        kmPorLitro = 16
    } else if (tipoCombustivel === 'etanol') {
        kmPorLitro = 11
    } else {
        return 'Tipo de combustível inválido'
    }
    const distanciaKm = distanciaMetros / 1000
    const litrosNecessarios = distanciaKm / kmPorLitro
    return (parseFloat(litrosNecessarios.toFixed(2)))
}

// Parte 2

exports.calcularNumeroParadas = function (passageiros, duracaoHoras) {
    if (!passageiros || !Array.isArray(passageiros) || passageiros.length <= 0) {
        return 'Lista de passageiros inválida'
    }

    if (!duracaoHoras || typeof duracaoHoras !== 'number' || duracaoHoras <= 0) {
        return 'Duração inválida'
    }

    let qtdAdultos = 0
    let qtdCriancas = 0

    passageiros.forEach(passageiro => {
        if (passageiro === 'adulto') {
            qtdAdultos++
        } else if (passageiro === 'crianca') {
            qtdCriancas++
        }
    });

    let intervaloMinutos;
    if (qtdAdultos > 0 && qtdCriancas === 0) {
        intervaloMinutos = 90
    } else if (qtdAdultos === 0 && qtdCriancas > 0) {
        intervaloMinutos = 60
    } else if (qtdCriancas > qtdAdultos) {
        intervaloMinutos = 40
    } else {
        intervaloMinutos = 90
    }

    const duracaoMinutos = duracaoHoras * 60
    const qtdParadas = Math.ceil(duracaoMinutos / intervaloMinutos)

    return qtdParadas
}

// Parte 3

exports.calcularValorRefeicoes = function(qtdParadas, passageiros) {
    let adultos = 0
    let criancas = 0
    let completas = 0
    let leves = 0
    let completa = true
    let gastoCriancas
    let gastoAdultos

    for (let i = 0; i < passageiros.length; i++) {  //Calcular número de adultos
        if (passageiros[i] === "adulto") {
            adultos++
        }
    }

    criancas = passageiros.length - adultos  //Calcular número de criancas

    for (let i = 0; i < qtdParadas; i++) {  //Calcular número de refeições completas e leves
        if (completa === true) {
            completas++
            completa = false
        }

        if (leves === completas + 2) {
            completa = true
        }
        if (completa === false) {
            leves++
        }
    }
    //Calcular gasto por adultos e criancas
    gastoAdultos = adultos * (leves * 30 + completas * 50)
    gastoCriancas = criancas * (leves * 20 + completas * 40)

    //Calcular gasto total
    let gastoTotal = gastoAdultos + gastoCriancas
    return (gastoTotal)
}
  