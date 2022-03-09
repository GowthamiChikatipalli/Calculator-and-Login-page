
function a(){
    var r = document.getElementById("calci").value;
    var r1 = eval(r);
    document.getElementById("calci").value=r1;
    alert(r1);
}