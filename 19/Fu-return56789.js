class 5

function tenTimes(num){
    const result=num*10;
    return result;
}
const output=tenTimes(5);
console.log(output);





function tenTimes(num){
    let resul=num*10;
       resul=resul-10;
        resul=resul+10;
           resul=resul/10;
    return resul;
}
const output=tenTimes(8);
console.log(output);





class6

function tenTimes(num){
   
    if(num%2===0){
        return num*10;
    }
    else{   
             return num*5;
    }
}

const output=tenTimes(7);
console.log(output);







function tenTimes(str){
   
    if(str==="Dhaka"){
        return true;
    }
    else{   
             return false;
    }
}

const output=tenTimes("Dhaa");
console.log(output);



class7


function tenTimes(arr)
{
    let long=arr[2];
    return long;
}

const O=['a','b','c','d'];
const output=tenTimes(O);
console.log(output);



class8


function Times(sum)
{ 
    let long=0;
   for(let add of sum){
    long=long+add;
   }

 return long;
}

const O=[1,2,3,4,5,6,7,8,9];
const output=Times(O);
console.log(output);


class9



function Times(sum)
{  
    let e=0;
    let e1=0;

   for(i=0;i<sum.length;i++){ 
    if (sum[i]%2===0){
         e=sum[i];
       console.log (e,"= even");
    }
    else{
     e1=sum[i];
        console.log(e1,"= odd");     
    }

   }
return sum;
}

const y=[16,32,53,46,45,676,67,78,99];
const outp=Times(y);
console.log(outp);



function Times(sum)
{  
    let e=0;
    let e1=0;
    
   for(i=0;i<sum.length;i++){ 
    if (sum[i]%2===0){
         e=sum[i];
       console.log (e,"= even");
    }
   }

return sum;
}

const y=[16,32,53,46,45,676,67,78,99];
const outp=Times(y);
console.log(outp);



 let e=[];
function Times(sum)
{  
   
   for(i=0;i<sum.length;i++){ 

    if (sum[i]%2===0){
          e.push(sum[i]);
        console.log (e,"= even");
        
    } 
   }

return  e;

}

const y=[16,32,53,46,45,676,67,78,99];
const outp=Times(y);
console.log(outp);



 
function Times(sum){ 
    let add=0;
   for(i=0;i<sum.length;i++){ 
    
    add =add+sum[i];
    
   }
return  add;
}


const y=[16,32,53,46,45,676,67,78,99];
const outp=Times(y);
console.log(outp);













