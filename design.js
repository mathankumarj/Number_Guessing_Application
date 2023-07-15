var a=Math.floor(Math.random()*100)+1;
var count=0;
console.log(a);
function guessNumber()
{
    var val=parseInt(document.getElementById("gg").value);
    console.log(typeof(val));
    if (val==a)
    {
        document.getElementById("result").textContent="Congrats!!,You got the Number in " + count +" Tries";    
    }
     else if(val<a)
    {
        document.getElementById("result").textContent=("Try with Greater Number");
        count++;
    }
    else if(val>a)
    {
        document.getElementById("result").textContent=("Try with Smaller Number");
        count++;
    }
}