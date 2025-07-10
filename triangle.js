function triangle(string, num){
    if (num===1){
        return string
    }else{
        return triangle(string, num-1)+ "\n" + string.repeat(num)
    }
}

