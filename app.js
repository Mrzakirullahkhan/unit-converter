let feet = document.querySelector('.feetinput');
let inch = document.querySelector('.inchinput');



let feetToInch = function(){
    let f = this.value;
    let a = 12 * f;
    inch.value = a;
    
}
feet.addEventListener('input', feetToInch)


// for feet
let inchToFeet = function(){
    let a =this.value;
    let f= a/12;
    if(!Number.isInteger(f)){
        f=f.toFixed(2)
    }
    feet.value = f;
    
}
inch.addEventListener('input', inchToFeet)