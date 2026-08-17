function showdata()
{
    var data = document.getElementById("input-field");
console.log(data.value);
//show hide resultcontainer
var resultcontainer = document.querySelector(".resultcontainer");
//add class active
resultcontainer.classList.add("active");
document.getElementById("result").innerHTML = data.value;

}