let btn=document.getElementById('btn');
btn.addEventListener('click',myfun);

function myfun(){
    
    let winner=document.getElementById('winner');
    winner.innerText=null;
    
    let member_1=document.getElementById('member-1');
    let member_2=document.getElementById('member-2');
    let member_3=document.getElementById('member-3');
    member_1.style.backgroundColor='transparent';
    member_2.style.backgroundColor='transparent';
    member_3.style.backgroundColor='transparent';
    
 let mem1=   member_1.innerText=parseInt(Math.random()*6);
  let mem2=  member_2.innerText=parseInt(Math.random()*6);
    let mem3 = member_3.innerText=parseInt(Math.random()*6);
   
   if(mem1>mem2 && mem1>mem3) {
    winner.innerText='member-1';
    member_1.style.backgroundColor="green";
   }else if(mem2>mem1 && mem2>mem3){
    winner.innerText='member-2';
    member_2.style.backgroundColor="green";
   }
   else if(mem3>mem1 && mem3>mem2){
    winner.innerText='member-3';
    member_3.style.backgroundColor="green";
   }
  else if(mem1==mem2 && mem2==mem3) {
    winner.innerHTML='Draw';
    member_1.style.backgroundColor='blue';
    member_2.style.backgroundColor='blue';
    member_3.style.backgroundColor='blue';

  }
  if(mem1>mem2 && mem1<mem3 || mem1<mem2 && mem1>mem3){
    member_1.style.backgroundColor='yellow';
  }
 else if(mem2>mem1 && mem2<mem3  || mem2<mem1 && mem2>mem3){
    member_2.style.backgroundColor='yellow';
  }
 else if(mem3>mem2 && mem3<mem1 || mem3<mem2 && mem3>mem1){
    member_3.style.backgroundColor='yellow';
  }
  
  if(mem1<mem2 && mem1<mem3){
    member_1.style.backgroundColor='red';
  }
  else if(mem2<mem1 && mem2<mem3){
    member_2.style.backgroundColor='red';
  }
else  if(mem3<mem2 && mem3<mem1){
    member_3.style.backgroundColor='red';
  } 
  
  if(mem1==mem2 && mem1<mem3 ||mem1==mem2 && mem1>mem3){
    member_1.style.backgroundColor='blue';
    member_2.style.backgroundColor='blue';
  }
  else if(mem2==mem3 && mem2<mem1 ||mem2==mem3 && mem2>mem1){
    member_2.style.backgroundColor='blue';
    member_3.style.backgroundColor='blue';
  }
  else if(mem1==mem3 && mem1<mem2 || mem1==mem3 && mem1>mem2){
    member_1.style.backgroundColor='blue';
    member_3.style.backgroundColor='blue';
  }

}
