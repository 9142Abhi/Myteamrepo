
let data = JSON.parse(localStorage.getItem('movies'));
let container=document.getElementById('container');

data.forEach(el => {
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.src=el.url;
    let p =document.createElement('p');
    p.innerText=`Movie-Name:- ${el.name}`;
    p.style.fontWeight="bold";
    p.style.fontSize="20px";
    let p2=document.createElement('p');
    p2.innerText=`Release-Date:- ${el.date}`;
    p2.style.fontWeight="bold";
    p2.style.fontSize="16px";
    let p3 =document.createElement('p');
    p3.innerText=`Rating:- ${el.rating}`;
    p3.style.fontWeight="bold";
    p3.style.fontSize="16px";
    div.append(img,p,p2,p3);
    container.append(div);
});

