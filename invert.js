let object = 

function invert(object){

    let newObj={};

    for (let key of Object.keys(object)){
        let value = object[key];
        newObj[value]= key;
    }

    // console.log(newObj)

    return newObj;

}



// invert(object)