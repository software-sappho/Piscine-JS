function filterKeys(obj, condition){
    const result = {};
    const keys = Object.keys(obj);

    for(const key of keys){
        if(condition(key)){
            result[key]= obj[key];
        }
    }

    return result
}

function mapKeys(obj, modifier){
    const result = {};
    const keys = Object.keys(obj);

    for(const key of keys){
        newkey=modifier(key)
        result[newkey]=obj[key];
    }

    return result;
}

function reduceKeys(obj, callback, initialValue){
    
    const keys = Object.keys(obj);

    let accumulator;
    let startIndex;

    if (initialValue !== undefined){
        accumulator = initialValue;
        startIndex = 0; 
    }else{
        accumulator = keys[0]
        startIndex = 1;
    }

    for (let i = startIndex; i < keys.length; i++){
        accumulator= callback(accumulator, keys[i])
    }
    return accumulator;
}