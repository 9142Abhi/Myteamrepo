


function acceptData(){
    
let image=document.getElementById('image').value;

    let data=JSON.parse(localStorage.getItem('acceptData'))||[];
    data.push(image);
    localStorage.setItem('acceptData',JSON.stringify(data));
    
}


