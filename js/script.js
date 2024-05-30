var zar = document.getElementById("zar");
var info = document.getElementById("info");
var pageNum = 1;

zar.addEventListener("click",function(){
    var xReq = new XMLHttpRequest();
    xReq.open("GET","js/cars_"+pageNum+".json");
    xReq.onload = function(){
        var xData = JSON.parse(xReq.responseText);
        addHTML(xData);
    };
    pageNum++;
    xReq.send();

    if (pageNum > 3) {
        zar.classList.add("hide");
        zar.style.backgroundColor = "#eee";
        zar.style.color = "lightgray";
    };
});

function addHTML(data){
    var jsonText = "";
    for (let i = 0; i < data.length; i++) {
        jsonText += "<p><span class='red'>"+
        data[i].name+"</span>"+
        " is a <span class='green'>"+
        data[i].model+"</span>"+
        "<br> <span class='bold'>That has 4x4 cars like:</span> ";
        for (let j = 0; j < data[i].type.four.length; j++) {
            if (j == 0) {
                jsonText += "<span class='orange'>"+data[i].type.four[j];
            }
            else{
                jsonText += " and "+ data[i].type.four[j]+"</span>";
            }
        }
        jsonText += "<br> <span class='bold'>and salon cars like:</span> ";
        for (let j = 0; j < data[i].type.salon.length; j++) {
            if (j == 0) {
                jsonText += "<span class='orange'>"+data[i].type.salon[j];   
            }
            else{
                jsonText += " and "+data[i].type.salon[j]+"</span>";
            }
        }
        jsonText += "<br><span class='italic'>Which was made in "+data[i].year+".</span>";
        jsonText += "<hr></p>";
    }
    info.insertAdjacentHTML("beforeend",jsonText)

    // for (let i = 0; i < data.length; i++) {
    //     info.innerHTML += "<h2>"+data[i].name+"</h2>";
    //     info.innerHTML += "<p>"+data[i].model+"</p>";
    //     info.innerHTML += "<hr>";
    // }
}