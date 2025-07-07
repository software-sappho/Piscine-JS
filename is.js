const is = {}

is.num = function (num){
    return typeof num === 'number';
}

is.nan = function (nan){
    return Number.isNaN(nan);
}

is.str = function (string){
    return typeof string === 'string';
}

is.bool = function(bool){
    return typeof bool === 'boolean'
}

is.undef = function(undef){
    return undef === undefined;
}

is.def = function(def){
    return def !== undefined;
}

is.arr = function (arr){
    return Array.isArray(arr);
}

is.obj = function (obj){
    return typeof obj === 'object';
}

is.fun = function(fun){
    return typeof fun === 'function';
}

is.trythy = function(truthy){
    return Boolean(truthy);
}

is.falsy = function(falsy){
    return Boolean(falsy);
}