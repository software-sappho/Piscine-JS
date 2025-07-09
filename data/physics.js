function getAcceleration({f, m, Δv, Δt, d, t}){

    if (typeof f === 'number' && f !== 0 && typeof m === 'number' && m !==0){
        return f/m;
    }else if (typeof Δv === 'number' && Δv !== 0 && typeof Δt === 'number' && Δt !==0){
        return Δv/Δt;
    }else if (typeof d === 'number' && d !== 0 && typeof t === 'number' && t !==0){
        return (d*2)/(t*t);
    }else{
        return "impossible"
    }
    
}