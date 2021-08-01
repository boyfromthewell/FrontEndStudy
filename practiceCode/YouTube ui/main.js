const clickBtn=document.querySelector('.fa-caret-down');
const name1=document.querySelector('.information>.title>.name');

function rotate(){
    name1.classList.toggle('active');
    clickBtn.classList.toggle('rotate180');
    console.log(name1.classList);
}

clickBtn.addEventListener("click", rotate)

let infoAddBtn=false;
const contentInfo=document.querySelector('.information>.contentsInfo');
const infoAdd=document.querySelector('.information>.infoAdd>span');

infoAdd.addEventListener("click", (event)=>{
    contentInfo.classList.toggle('active')
    if(infoAddBtn==false){
        console.log("false");
        infoAddBtn=true;
        infoAdd.innerHTML="간략히";
    }
    else{
        console.log("true");
        infoAddBtn=false;
        infoAdd.innerHTML="더보기";
    }
});

const clickAction=document.querySelectorAll('.information > .actionsList li i');
let currentColor;

function changeColor(){
    if(currentColor){
        currentColor.classList.remove('menu-active');
    }
    this.classList.add('menu-active');
    currentColor=this;
}

for(let i=0; i<clickAction.length; i++){
    clickAction[i].addEventListener("click", changeColor);
}
