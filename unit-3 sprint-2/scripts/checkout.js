let confirm=document.getElementById("confirm");
confirm.addEventListener("click",fun);
function fun(event){
    event.preventDefault();
    console.log("yes");
}