function getURL(dataSet){

    const URL_Pattern = /https?:\/\/[^\s]+/g

    let match = dataSet.match(URL_Pattern)

    if (match === null){
            return []
        }

    return match
}

function greedyQuery(dataSet){

    const greedyPattern = /https?:\/\/[^\s?]+(\?[^\s&=]+=[^\s&=]+(&[^\s&=]+=[^\s&=]+){2,})/g

    let match = dataSet.match(greedyPattern)

    if (match === null){
            return []
        }

    return match

}

function notSoGreedy(dataSet){
    const notSoGreedyPattern = /https?:\/\/[^\s?]+(\?[^\s&=]+=[^\s&=]+(&[^\s&=]+=[^\s&=]+){1,2})/g

    let match = dataSet.match(notSoGreedyPattern)

    if (match === null){
            return []
        }

    return match
}