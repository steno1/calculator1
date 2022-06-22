
let display=document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("button")); //Array.from() static method creates a new, shallow-copied Array.
buttons.map(function(button){
    button.addEventListener("click",function(exp){
        switch(exp.target.innerText){
            case "AC": display.innerText="";
            break;
            case "DEL":
		
			display.innerText=display.innerText.slice(0, -1);
			
           break;
		   case "=":
		   try{
			   display.innerText=eval(display.innerText);
		   }catch{
			   display.innerText="Error";
		   }
		   
		   break;
            default:
display.innerText+=exp.target.innerText;
        };
    })
});
// map() calls a function once for each element in an array
// The eval() function is used to evaluates the expression.
