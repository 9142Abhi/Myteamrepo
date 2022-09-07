
function  students(n,c,u,i,b) {
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
}

let data =JSON.parse(localStorage.getItem('details'))||[];
console.log(data);
function student_details(event){
    event.preventDefault();
    let form=document.getElementById('form');
    let name=form.name.value;
    let course=form.course.value;
    let unit= form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
    let student= new students(name,course,unit,image,batch);
    data.push(student)
    localStorage.setItem('details',JSON.stringify(data));
}
