
function findProduct(n,c,u,p,gen,sold){
this.name=n;
this.category=c;
this.url=u;
this.price=p;
this.gender=gen;
this.sold=sold;
}
let arr= JSON.parse(localStorage.getItem('products'))||[];

function adminPanel(event){
    event.preventDefault();
    
    let form=document.getElementById('form');
    let name=form.name.value;
    let category=form.category.value;
    let url=form.url.value;
    let price=form.price.value;
    let select=document.getElementById('gender');
    let  gender = select.options[select.selectedIndex].innerText;
    
    let sold=document.getElementById('sold').value;
    

    let product=new findProduct(name,category,url,price,gender,sold);
    // console.log(product);
    arr.push(product)
    let local = localStorage.setItem('products',JSON.stringify(arr));
}

