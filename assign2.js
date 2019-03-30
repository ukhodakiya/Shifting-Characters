
var myVar;
document.getElementById("forward").addEventListener("click", function(){
    clearInterval(myVar);
    var first = document.getElementById("leftfield");
    var second = document.getElementById("rightfield");

    myVar = setInterval(function(){

        if(first.value.length > 0)
        {

            second.value += first.value[0];
            first.value = first.value.slice(1);


        }
        else{
            clearInterval(myVar);
        }
    }, 1000);
});



document.getElementById("backward").addEventListener("click", function(){
    clearInterval(myVar);

    var first = document.getElementById("leftfield");
    var second = document.getElementById("rightfield");

    myVar = setInterval(function(){
        if(second.value.length > 0)
        {

            first.value = second.value[second.value.length - 1] + first.value;
            second.value = second.value.slice(0,-1);
        }
    }, 1000);
});

document.getElementById("pause1").addEventListener("click",function () {
    console.log("cleared");
    clearInterval(myVar);
});