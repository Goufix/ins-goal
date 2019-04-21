export default function getDict(string) {
  // Criamos o nosso objeto:
  const dict = {}

  // Transformamos a nossa string em um array com arrays dentro:
  // [[nick, pontos], [nick, pontos]]
  const data = string
    .trim()
    .split('\n')
    .map((line) => line.split('/'))
  //Inserimos os valores no objeto:
  for (const [nick, pointsString] of data) {
    const points = parseInt(pointsString)

    // Se o nick ainda não está no objeto, criamos uma nova propriedade
    // para o usuário.
    if (!dict.hasOwnProperty(nick)) {
      Object.assign(dict, { [nick]: points })
    } else {
      // Caso o usuário seja repetido, simplesmente some os pontos à
      // quantidade já existente:
      dict[nick] += points
    }
  }
  return dict
}
