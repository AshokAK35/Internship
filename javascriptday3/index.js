const marks=100;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else if(marks>=50){
    console.log("Grade E");
}
else{
    console.log("Grade F");
}


// check if number is odd or even


const number=10;
if (number%2==0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}


// swap two numbers

 a=10;
 b=23;
var temp=a; //temp ma aayo
a=b; //a ma b(23)
b=temp; //b ma temp(10)
console.log(a,b)


var text="";
for(let i=0;i<7;i++){
    text= "the number is "  + i + "\n";
    console.log(text);
}






// function use garera 
// odd even
//garde
//positive negative
//sum
//percantage


c=80
oddeven=()=>{
    if(c%2==0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}
oddeven();


positivenegative=()=>{
    if(c>0){
        console.log("number is positive");
    }
    else if(c<0){
        console.log("number is negative");
    }
    else{
        console.log("number is zero");
    }
}
positivenegative();

sum=()=>{
    console.log(c+c);   
}
sum();

let g ;


percentage=()=>{
    g = (c/100)*100;

}
percentage();


grade=()=>{
    if(g>=90){
        console.log("Grade A");
    }
    else if(g>=80){
        console.log("Grade B");
    }
    else if(g>=70){
        console.log("Grade C");
    }
    else if(g>=60){
        console.log("Grade D");
    }
    else if(g>=50){
        console.log("Grade E");
    }
    else{
        console.log("Grade F");
    }
}
grade();    
