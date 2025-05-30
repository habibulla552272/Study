

let romanToInt= function(s){
    const romN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
   let sum = 0;
   for(i=0;i<s.length;i++){
        const curr= romN[s[i]];
        const next=romN[s[i+1]];
        if(next > curr){
            sum += next -curr
            i++;
        }else{
            sum += curr;
   }
}

    return sum;
    
}

console.log(romanToInt('MCMXCIV'));
