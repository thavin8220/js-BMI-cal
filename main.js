let btn1=document.getElementById("btn");
btn1.addEventListener("click",myfunction);
function myfunction(){
    let weight1=parseInt(document.getElementById("weight").value);
    let height1=parseInt(document.getElementById("height").value)/100;
    let cal=weight1/(height1*height1);
    let total1=document.getElementById("total");


    if(cal<18){
        
        document.getElementById("total").innerText="Under weight";
        document.getElementById("total").style.color="Yellow";
        console.log(cal);
    }
    else if(cal>18 && cal<25){
        
        document.getElementById("total").innerText="Health weight"
        document.getElementById("total").style.color="green";
        console.log(cal);
    }
    else{
        
        document.getElementById("total").innerText="Over Weight"
        document.getElementById("total").style.color="Red";
        console.log(cal);
    }

}