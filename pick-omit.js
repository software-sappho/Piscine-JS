function pick(object, keys){

    let newObj= {};
    if (typeof keys === 'string'){
        keys = [keys];
    }

    for (let key of Object.keys(object)){
        if (keys.includes(key)){
            newObj[key]=object[key];
        }
    }

    // console.log(newObj);
    return newObj;

}

function omit(object, keys){
    let newObj = {}

    if (typeof keys === 'string'){
        keys = [keys];
    }

    for (let key of Object.keys(object)){
        if (!keys.includes(key)){
            newObj[key]=object[key];
        }
    }

    // console.log(newObj);
    return newObj;
}


// pick({a:1, b:2, c:3}, ['a', 'c'])
// omit({a:1, b:2, c:3}, ['a', 'c'])