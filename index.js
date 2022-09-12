{//Data Types

//1,Number (or) Integer(1 2 3...)
//2,string (" ")
//3,boolean (true or false)
//4,undefined (same)
// 5,null  (nothing)
//6,Array []
let favcolors = ["red","blue","yellow"]
    favcolors[4]= "green"
     console.log(favcolors)
//7,function (unction is defined with the function keyword, followed by a name, followed by parentheses ())
   function add(number1,number2){
	 console.log(number1+number2)
   } 
   add(54,453);
//8,object {bundle of data type}
	{
		let car={
			brand:"honda",
			model:"civic",
			type:"diesel"
		}
		console.log(car.type);
		console.log("<br>")
		
		
	}

}

{//js operators

{//strict equality operator(datatype + value)
console.log(1==1)
}  
{//ternary operator(condition ? 'value 1':'value 2'
 
let a=5;
let type=a>18 ? "adult ticket":"child ticket"
console.log (type);
}
{//logical operators
//logical and (&&)
//returns true if both operands are true

let highincome=true;
let CIBILscore=true;
let eligible=highincome&&CIBILscore
console.log(eligible);

//logical or (||)
//returns true if any one operands are true
 
let Highincome=false;
let cIBILscore=false;
let Eligible=Highincome||cIBILscore
console.log(Eligible);

//non-boolean-values
//falsey[undefined,null,0,false,"",NaN]
let usercolor="red";
let defaultcolor="blue";

let currentcolor=usercolor||defaultcolor
console.log(currentcolor);

//truthy [anything that is not falsy]
let Usercolor=null;
let Defaultcolor="blue";

let Currentcolor=Usercolor || Defaultcolor
console.log(Currentcolor);
}
   
{
//BitWise Operators
//HUman code ->machine code(0,1)
// 1-> 00000001 ->1
// 2-> 00000010 ->2
// 3-> 00000011 ->3	

console.log(1|2);
console.log(5|4);
}

{//operator precedence

let x=2+4*5;
console.log(x);
//in this upper statement it calculated based on preference so we have to tell abou the priority.

let y=(2+4)*5;
console.log(y);
}
}
{
  //if else condition
  let israining=true;
  let iscloudy=false;
  
  if(israining&&iscloudy){
	  console.log("don't forget to get umberlla")
  }
  else{
	  console.log("enjoy the climate")
  }
  console.log();
  console.log("<br>")
}
{
 //java-script loops
 //for-loops ,while-loop ,dowhile-loop ,forin-loop ,forof-loop
 
 //1,for-loop syntx
 
 // for(initial expression;condition;step)
	 //  document.write();
	 {
		 //for-loop
		 for(let i=0;i <= 5;i++){
			 if (i % 2 !==0){
		 console.log("number#"+i)
		 console.log("<br>")
			 } 
}
}
    {
		//while-loop
	    let i=15
		while (i >= 2){
			 if (i % 2 !==0){			
			console.log("oddnumber" +i);
			 }
			 i--;
		}	
	}	
}

{
	
        function calc1()
        {
            var addition1 = parseInt(document.getElementById("addition1").value);
            var addition2 = parseInt(document.getElementById("addition2").value);
            document.getElementById("Aresult").value = addition1 + addition2;

        }
		  function calc2()
        {
            var subraction1 = parseInt(document.getElementById("subraction1").value);
            var subraction2 = parseInt(document.getElementById("subraction2").value);
            document.getElementById("sresult").value = subraction1 - subraction2;

        }
		  function calc3()
        {
            var multiplication1 = parseInt(document.getElementById("multiplication1").value);
            var multiplication2 = parseInt(document.getElementById("multiplication2").value);
            document.getElementById("mresult").value = multiplication1 * multiplication2;

        }
		  function calc4()
        {
            var division1 = parseInt(document.getElementById("division1").value);
            var division2 = parseInt(document.getElementById("division2").value);
            document.getElementById("dresult").value = division1 / division2;

        }
}