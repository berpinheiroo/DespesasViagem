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

