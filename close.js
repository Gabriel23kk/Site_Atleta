const  logOut = document.querySelector(".button-fechar");
const  logOUT = document.querySelector(".configuracao-da-conta");
const  user1 = document.querySelector(".user")

user1.addEventListener("click",abrir )
function abrir(){
    logOUT.style.visibility = "visible"
}
logOut.addEventListener("click",fechar)
function fechar(){
    logOUT.style.visibility = "hidden"
}