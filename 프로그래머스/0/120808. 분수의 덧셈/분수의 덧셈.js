function solution(numer1, denom1, numer2, denom2) {
    let anumer1 = numer1;
    let adenom1 = denom1;
    let anumer2 = numer2;
    let adenom2 = denom2 ;
    
    if(denom1 != denom2){
        anumer1 *= denom2
        adenom1 *= denom2
        anumer2 *= denom1
        adenom2 *= denom1
    }
    
    let rv =  [anumer1 + anumer2 , adenom1] 
    let gcd = getGcd(rv[0],rv[1])
    if(gcd == 1){
        return rv
    } else {
        return [rv[0] / gcd, rv[1]/gcd]
    }
    
}

function getGcd(num1,num2){
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd != 1 ?gcd : 1;
}