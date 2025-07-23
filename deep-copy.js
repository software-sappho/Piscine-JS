function deepCopy(input){

    if(input === null || typeof input !== 'object'){
        return input;
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