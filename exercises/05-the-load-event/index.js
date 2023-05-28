// your function goes here
window.loadListener = function loadListener(){
    //alert("loading finished...")
    const firstP = document.getElementById("firstP");
    
    let secondP = document.createElement("p");
    let t = document.createTextNode("loading finished...");
    secondP.appendChild(t);
    firstP.appendChild(secondP);
}
