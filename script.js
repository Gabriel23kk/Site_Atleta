const Torecover = document.querySelector(".recover");
const recoverBox = document.querySelector(".rocover-box");
const imgClose = document.querySelector(".close-recover");
const backgroudBlur = document.querySelector(".corpo")
const Menu = document.querySelector(".signup");
const login = document.querySelector(".login");

Torecover.addEventListener('click',recuperar)
function recuperar(){
    recoverBox.classList.add('recover-animation');
    recoverBox.style.visibility = "visible";
    
//     backgroudBlur.style.backdropFilter = "blur(15px)"
//     Menu.style.backdropFilter = "blur(16px)"
//     login.style.backdropFilter = "blur(17px)"
// 
}
imgClose.addEventListener('click',closeRecover)
function closeRecover(){
    recoverBox.classList.remove('recover-animation');
    recoverBox.style.visibility = "hidden";
    recoverBox.classList.add('close');
    
    // backgroudBlur.style.backdropFilter = "blur(0px)"
    // Menu.style.backdropFilter = "blur(0px)"
    // login.style.backdropFilter = "blur(0px)"
    
}
