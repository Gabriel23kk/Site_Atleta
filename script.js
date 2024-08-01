const Torecover = document.querySelector(".recover");
const recoverBox = document.querySelector(".rocover-box");
const imgClose = document.querySelector(".close-recover");
const bodyBlur = document.querySelector(".main")


Torecover.addEventListener('click',recuperar)
function recuperar(){
    recoverBox.classList.add('recover-animation');
    recoverBox.style.visibility = "visible";
    bodyBlur.classList.add('corpo')
    


}
imgClose.addEventListener('click',closeRecover)
function closeRecover(){
    recoverBox.classList.remove('recover-animation');
    recoverBox.style.visibility = "hidden";
    recoverBox.classList.add('close');
    bodyBlur.classList.remove('corpo')
    
}
