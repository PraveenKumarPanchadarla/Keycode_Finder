const output=document.getElementById("matter");
const copy=document.getElementById("copy");
const hii=document.getElementById("hii");


window.addEventListener("keydown",clicks);

function clicks(event){
    const keypressed=event.keyCode || event.which;
    output.innerHTML=keypressed;
    hii.textContent=event.key;
    console.log(keypressed);
}

copy.addEventListener("click",copied);



function copied(){
    navigator.clipboard.writeText(output.textContent)
    .then(es=>{
        alert("KeyCode Copied");
    })
}