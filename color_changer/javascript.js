const buttons = document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
          console.log(e);
          console.log(e.target);
           if(e.target.id==='rebeccapurple'){
            body.style.backgroundColor='rebeccapurple';
           }
           else if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
           }
           else if(e.target.id==='greenyellow'){
            body.style.backgroundColor='greenyellow';
           }
           else {
            body.style.backgroundColor='yellow';
           }
    })
})
