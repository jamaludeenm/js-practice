{//Data Types

//1,Number (or) Integer(1 2 3...)
//2,string (" ")
//3,boolean (true or false)
//4,undefined (same)
// 5,null  (nothing)
//6,Array ()
//7,function
//8,object

}


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

