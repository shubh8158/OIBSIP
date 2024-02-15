let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")
btn.addEventListener("click", function(){
    let val=inp.value;
    let item=document.createElement("li");
    item.innerText=val;


    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    
    
    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value="";
    // li.innerHTML=li;

    
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})

// let btns=document.querySelectorAll(".del")
// for(delbtn of btns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     }
// )}
