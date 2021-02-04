const secondsFilter = function(value) {
    if (!value)
        return '00:00'

    let minutes = parseInt(value / 60); 
    let seconds= parseInt((value - (minutes * 60)) % 60); 

    let dMins = (minutes > 9 ? minutes : '0' + minutes);
    let dSecs = (seconds > 9 ? seconds : '0' + seconds);

    return dMins + ":" + dSecs;        
}

const numberFilter = function(value) {
    if (!value)
        return '0'

    return Number(value).toLocaleString()
}


export {
    secondsFilter,
    numberFilter,
}