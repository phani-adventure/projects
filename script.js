//var is function scope - through the function
//let and const are block scope - with in the brases('{}')
let a=20 //gobal scope
function add()
{
    var b=30;  //function scoped
    if(true)
    {
        var c=40;
        let d=50;
    }
    function subadd()
    {
      console.log(a)
      console.log(b)
      console.log(c)
      console.log(d)
    }    
}