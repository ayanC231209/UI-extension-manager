const list=document.getElementById("extensionlist")

list.addEventListener("click",function(e){

    if(e.target.classList.contains("removebtn")){
        const l =e.target.parentElement.parentElement
      
      l.remove()
    }

})

let currentfilter="all"


function display(){

  const status =document.querySelectorAll(".card")

  status.forEach(e =>{

    const s=e.dataset.status
   if(currentfilter==="all"){
 e.classList.remove("hidden")

   }
   else{

if(s === currentfilter){
  e.classList.remove("hidden")
}
else{

  e.classList.add("hidden")
}

   }


  })



}




document.querySelectorAll(".choose").forEach(e =>{

e.addEventListener("change",()=>{

  currentfilter=e.dataset.target
  display()

})

})



document.querySelectorAll(".toggle").forEach(e =>{

e.addEventListener("change",()=>{

const cards=e.closest(".card")

cards.dataset.status=e.checked?"active" : "inactive"
display()

})

})


