// Parte 1

function calcularGastoCombustivel(distanciaMetros, tipoCombustivel) {
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
    return Math.ceil(litrosNecessarios)
}

const distanciaMetros = 14500
const tipoCombustivel = 'etanol'
const litrosNecessarios = calcularGastoCombustivel(distanciaMetros, tipoCombustivel)
console.log(litrosNecessarios)

// Parte 2

function calcularNumeroParadas(passageiros, duracaoHoras) {
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

const passageiros = ['adulto', 'adulto', 'crianca', 'crianca', 'adulto']
const duracaoHoras = 5

const qtdParadas = calcularNumeroParadas(passageiros, duracaoHoras)

console.log(`Serão necessárias ${ qtdParadas } paradas para a viagem.`)

// Parte 3

function calcularValorRefeicoes(qtdParadas, passageiros) {
    if (!Number.isInteger(qtdParadas) || qtdParadas <= 0) {
      return 'A quantidade de paradas deve ser um número inteiro positivo.'
    }
    if (!Array.isArray(passageiros) || passageiros.length === 0) {
      return 'A lista de passageiros deve ser um array não vazio.'
    }
  
    const precoRefeicaoLeveAdulto = 30
    const precoRefeicaoLeveCrianca = 20
    const precoRefeicaoCompletaAdulto = 50
    const precoRefeicaoCompletaCrianca = 40
    let totalGasto = 0
  
    // Primeira parada
    totalGasto += precoRefeicaoCompletaAdulto * countAdultos(passageiros)
    totalGasto += precoRefeicaoCompletaCrianca * countCriancas(passageiros)
  
    // Cada duas paradas de refeições leves, uma é de refeições completas
    for (let i = 2; i <= qtdParadas; i += 2) {
      totalGasto += precoRefeicaoCompletaAdulto * countAdultos(passageiros)
      totalGasto += precoRefeicaoCompletaCrianca * countCriancas(passageiros)
    }
  
    // Demais paradas são de refeições leves
    for (let i = 1; i < qtdParadas; i += 2) {
      totalGasto += precoRefeicaoLeveAdulto * countAdultos(passageiros)
      totalGasto += precoRefeicaoLeveCrianca * countCriancas(passageiros)
    }
  
    return totalGasto
  }
  
  function countAdultos(passageiros) {
    if (!Array.isArray(passageiros) || passageiros.length === 0) {
      return 0
    }
    return passageiros.filter(passageiro => passageiro === 'adulto').length
  }
  
  function countCriancas(passageiros) {
    if (!Array.isArray(passageiros) || passageiros.length === 0) {
      return 0
    }
    return passageiros.filter(passageiro => passageiro === 'crianca').length
  }
  
  // (Dados reutilizados da parte 2)
  if (typeof qtdParadas === 'string') {
    console.log(qtdParadas)
  } else {
    const gastosRefeicoes = calcularValorRefeicoes(qtdParadas, passageiros)
    if (typeof gastosRefeicoes === 'string') {
      console.log(gastosRefeicoes)
    } else {
      console.log(`O gasto total com refeições será de R$${gastosRefeicoes}.`)
    }
  }
  