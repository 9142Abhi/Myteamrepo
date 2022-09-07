
let id;

function Start(){
    let data=JSON.parse(localStorage.getItem('acceptData'));
    let time=document.getElementById('time').value;

    let container=document.getElementById('container');
    container.innerHTML=null;
    let image=document.createElement('img');
    image.src=data[0];
    container.append(image);
    let i=0;
    i++;
    
  id=  setInterval(function(){
        if(i==5){
            i=0;
        }
        image.src=data[i];
        container.innerHTML=null;
        container.append(image);
        i++;
    },time);

}

function Stop(){
    clearInterval(id)
}