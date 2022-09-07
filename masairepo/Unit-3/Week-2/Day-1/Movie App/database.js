

function moviesData(n,d,u,r){
    this.name=n;
    this.date=d;
    this.url=u;
    this.rating=r
}

function showMovies(event){
    event.preventDefault();
    let form=document.getElementById('form');
    let div=document.createElement('div');
    let name=form.name.value;
    let date=form.release.value;
    let url=form.poster.value;
    let rating=form.rating.value;
    let arr=JSON.parse(localStorage.getItem('movies'))||[];
    let data= new moviesData(name,date,url,rating);
    arr.innerHTML=null;
    arr.push(data);
    localStorage.setItem('movies',JSON.stringify(arr));
    console.log(arr);

}
