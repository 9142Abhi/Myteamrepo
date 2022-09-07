//store the products array in localstorage as "data"


function storeProduct(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;
}

let data=JSON.parse(localStorage.getItem('dataProd'))||[];

function displayProduct(event){
    event.preventDefault();
    let form=document.getElementById('form');
    let brand=form.brand.value;
    let name=form.name.value;
    let price=form.price.value;
    let image=form.image.value;
    let prod=new storeProduct(brand,name,price,image);
    data.push(prod);
    localStorage.setItem('dataProd',JSON.stringify(data));

}

