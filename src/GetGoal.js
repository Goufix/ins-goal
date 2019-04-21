import React from 'react';
import csvSplit from './utils/csvSplit';
import getDict from './utils/getDict';

export default function getGoal(props) {
  const data = csvSplit(props.rawData)
  const object = getDict(data)
  // Transforma o objeto em array
  let resultArray = Object.entries(object)
  // Organiza o array por número de pontos
  function sortFunction(a, b) {
    return b[1] - a[1]
  }
 let response = resultArray.sort(sortFunction)
    // Adiciona a palavra "Pontos", depois de cada índice do array
    .map((value, index, array) => {
      let val = array[index]
      val += ' pontos' // += ' Pontos'
      return val
    })
  response = response.join('\n')
  return <h1>{response}</h1>
}
