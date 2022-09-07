
let data = JSON.parse(localStorage.getItem('dataProd'))||[];
let products_data=document.getElementById('products_data');
data.forEach(el => {
    let div=document.createElement('div');
    let image=document.createElement('img');
    image.src=el.image;
    let brand =document.createElement('p');
    brand.innerText=el.brand;
    let name=document.createElement('p');
    name.innerText=el.name;
    let price=document.createElement('p');
    price.innerText=el.price;
    let btn=document.createElement('button');
    btn.innerText='Remove';
    btn.setAttribute('id','remove_product');
//     btn.addEventListener('click', remove({
        
        
// }));

    div.append(image,brand,name,price,btn);
    products_data.append(div);
});

