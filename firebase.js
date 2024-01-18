const ajout = document.getElementById("Input1");
const ajouter = document.getElementById("taskList");
const btn = document.getElementById("Add");
const table = document.getElementById('table-body');
btn.addEventListener('click', () => {
    let cellule=document.createElement('td');
    // let cellule2=document.createElement('td');
    let tr=document.createElement('tr');
    table.appendChild(tr);
    tr.appendChild(cellule)
    table.appendChild(tr)
    cellule.innerText=`${ajout.value}`;
ajout.value="";
//    cellule2.innerText=ajout.value;

});
