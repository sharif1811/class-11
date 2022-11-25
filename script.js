let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(){
    let invalue = document.getElementById("invalue").value;
    let orderList = document.getElementById("orderList");
    let content = document.createTextNode(invalue);
    let tagEle = document.createElement("li");
    tagEle.appendChild(content);
    orderList.appendChild(tagEle);

})