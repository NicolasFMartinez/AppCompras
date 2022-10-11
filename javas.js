const input=document.querySelector("input");
const addBtn=document.querySelector(".btn-add"); 
const ol=document.querySelector("ol");
const empty=document.querySelector(".empty");

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const text=input.value;
    //Se verifica que el input no este vacio para proceder
    if(text!==""){
        const li =document.createElement("li");
        const p=document.createElement("p");
        p.textContent=text;//Se le asigna al parrafo el valor del input
        li.appendChild(p);
        li.appendChild(addDeleteBtn());//se le agrega el boton de eliminar
        ol.appendChild(li);   
        input.value="";//Cuando se agregue un producto se vacia el input
        empty.style.display="none";//Desaparece el parrafo que indica que no hay nada agregado
    }
});

function addDeleteBtn(){
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="X";
    deleteBtn.className="btn-delete btn btn-danger";

    deleteBtn.addEventListener("click",(e)=>{
        const item=e.target.parentElement;
        ol.removeChild(item);
        const items=document.querySelectorAll("li");
        if(items.length===0){//se verifica si quedan productos en la lista
        empty.style.display="block";//cambia el display del p que dice que no hay productos
        }
    });
    return deleteBtn;
}