 let count=0
 let display=document.getElementById("display")

 function updatedisplay(){
    display.value = count
    if(count >= 10){
        display.classList.add("red")
    }
    else{
     display.classList.remove("red")

    }
 }

 function increase(){
    count++;
    updatedisplay(); 
 }

 function decrease(){
   if(count>0){
    count--;
    updatedisplay()
   }
 } 