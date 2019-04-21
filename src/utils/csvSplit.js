// O código abaixo transforma a planilha no modelo: Nick / Pontos
export default function csvSplit(rawData) {
  let data = ''
  rawData.split('\n').forEach((value, index, array) => {
    const line = value.split(',')
    const nick = line[1]
    const className = line[5]
    let points = 0
    switch (className) {
      case 'Curso de Formação de Soldados (CFSd)':
        points = 2
        break
      case 'Curso de Formação de Cabos (Parte 2) (CFC2)':
        points = 1
        break
      case 'Curso de Formação de Cabos (Parte 1) (CFC1)':
        points = 2
        break
      case 'Curso de Aperfeiçoamento de Praças (CAP)':
        points = 1
        break
      default:
        return
    }
    data += nick + ' / ' + points + '\n'
  })
  return data
}
