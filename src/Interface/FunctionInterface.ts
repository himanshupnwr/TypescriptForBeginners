interface Add{
    (x:number,y:number):void
}

interface Sub{
    (x:number,y:number):number
}

var add:Add;
var sub:Sub;

//if return type in interface is void we can change the return type in our function 
//but not when it is something other than void
add=function (x:number,y:number):number{
 return x+y;
}

sub=function(a:number,b:number):number{
    return a-b;
}
