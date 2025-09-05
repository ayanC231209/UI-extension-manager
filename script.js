const list=document.getElementById("extensionlist")

list.addEventListener("click",function(e){

    if(e.target.classList.contains("removebtn")){
        const l =e.target.parentElement.parentElement
      
      l.remove()
    }

})

