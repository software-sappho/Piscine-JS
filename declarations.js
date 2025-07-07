const escapeStr = "`\\/\"'";

const arr=[4,'2']

const obj={
    'str':"aromantic",
    'num': 69,
    'bool': true,
    'undef': undefined,
}

const nested={
    'arr': [4,undefined,'2'],
    'obj': {
        'str': "asexual",
        'num': 1,
        'bool': false,
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)