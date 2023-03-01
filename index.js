// Parte 1

function calcularGastoCombustivel(distanciaMetros, tipoCombustivel) {
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

const passageiros = ['adulto', 'adulto', 'crianca', 'crianca', 'adulto'];
const duracaoHoras = 5;

const qtdParadas = calcularNumeroParadas(passageiros, duracaoHoras);

console.log(`Serão necessárias ${qtdParadas} paradas para a viagem.`);

  