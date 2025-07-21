function invert(object){

    let newObj={};

    for (let key in object){
        let value = object[key];
        newObj[value]= key;
    }

    return newObj;

}

