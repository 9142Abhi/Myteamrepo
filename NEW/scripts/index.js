// Add the coffee to local storage with key "coffee"
async function coffeepage(){
    let x=await fetch(`https://masai-api.herokuapp.com/coffee/menu`);
    let data=await x.json();
    console.log(data);
    let actual_data=data.menu.data;
    
    append(actual_data);
   }
   coffeepage();
   function append(data){
    let menu=document.getElementById("menu");
    let bucket=document.getElementById("bucket");
    
    data.forEach(function (el){
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image;
      let p=document.createElement("p");
      p.innerText=el.title;
    //   bucket.addEventListener("click",bucketfill);
      
      let btn=document.createElement("button");
      btn.innerText="Add to Bucket";
     btn.addEventListener("click",myfun);
    
    
      div.append(img,p,btn);
      menu.append(div);
    })
    
    let y=document.getElementById("coffee_count") ;
    let count=0;
    function myfun(){
        
        y.innerHTML=null;
      count++;
      y.append(localStorage.getItem("coffee"));
      let data= localStorage.setItem("coffee",(count));
  
    }
    
    
    // function bucketfill(event){
    //   event.preventDefault();
      
    // }
   }
   
  
  
