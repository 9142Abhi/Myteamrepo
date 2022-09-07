
let arr=JSON.parse(localStorage.getItem('products'));
let container=document.getElementById('container');
arr.forEach(el => {
    console.log(el);
    let div=document.createElement('div');
    let btn=document.createElement('button');
    btn.innerText='remove';
    let btn2=document.createElement('button');
    btn2.innerText='sold';
    let name=document.createElement('p');
    name.innerText='Product-Name'+' : '+el.name;
    let category=document.createElement('p');
    category.innerText=`Category : ${el.category}`;
    let url=document.createElement('img');
    url.src=el.url;
    let price=document.createElement('p');
    price.innerText=`Price : ${el.price}`;
    let gender=document.createElement('p');
    gender.innerText=`Gender : ${el.gender}`;
    div.append(url,name,category,price,gender,btn,btn2);
    container.append(div);
});