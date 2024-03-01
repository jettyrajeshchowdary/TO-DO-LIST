function updateDate(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum=now.getDate(),
        yr = now.getFullYear();

    var months=["January","Fabruary","March","April","May","June","July","August","Setpember","October","November","December"];
    var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ids=["dayname","daynum","month","year"];
    var values=[weeks[dname],dnum,months[mo],yr];
    for(var i=0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    
}

    updateDate();
    
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value === ''){
        alert("You must write somthing to add!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();
