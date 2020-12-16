
var id1  = "0";
var titleList = [];

function getValues(){
    var val = document.getElementById("inputc");
    if (!val.value) {
        alert("kindly fill the title: ");
        return;
    }

    let obj = {
        id: id1++,
        title: val.value
    };
    titleList.unshift(obj);
    val.value = "";
    renderList();
}

function renderList() {
    const list = document.getElementById('pvalue');
    list.innerHTML = '';
    let data = '';
    titleList.forEach((d) => {
        data += `<div class="list-data" ondblclick="editFun('${d.id}')">
        <p>${d.title}</p> 
        <button onclick="dltItm('${d.id}')">X</button>
        </div>`
    });
    list.innerHTML = data;
}

function editFun(id){
    const list = document.getElementById('pvalue');
    list.innerHTML = '';
    let data = '';
    titleList.forEach((d) => {
        if(d.id!=id){
            data += `<div class="list-data" ondblclick="editFun('${d.id}')">
            <p>${d.title}</p> 
            <button onclick="dltItm('${d.id}')">x</button>
            </div>`
        }else{
            data += `<div class="list-data" ondblclick="editFun('${d.id}')">
            <input type="text" id="saveTitle" value = ${d.title}> 
            <button onclick="addItm('${d.id}')">save</button>
            </div>`
        }
    });
    list.innerHTML = data;
}

function addItm(id1){

    var newData = document.getElementById("saveTitle");
    if (!newData.value) {
        alert("kindly fill the title: ");
        return;
    }

    const ref = titleList.find((d) => d.id === +id1);
    ref.title = newData.value

    renderList();
    
}

function dltItm(id){
    titleList = titleList.filter((d) => d.id != id)
    renderList();
}

