function deepCopy(input){

    if(input === null || typeof input !== 'object'){
        return input;
    }

    if (input instanceof RegExp) {
    return new RegExp(input.source, input.flags);
  }

    if (typeof input === 'function') {
        return input;  // just return the function itself
    }

    let result;
    if (Array.isArray(input)){
        result = [];
    }else{
        result= {};


    }

    for(let key in input){
        result[key]=deepCopy(input[key])
    }

    return result;
}