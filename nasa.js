function nasa(N){
    let result = ""

    for (let i = 1; i<=N; i++){
        if (i%3 ===0 && i%5===0){
            result= result + "NASA"
        }else if(i%3 ===0){
            result= result + "NA"      
        }else if(i%5 ===0){
            result= result + "SA"           
        }
        else {
            result= result + i           
        }

        if (i !== N) {
        result += " ";
        }
    }
  

    return result
}