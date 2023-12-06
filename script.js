window.onload = quadrados ();

function test (){
    console.log("oi");
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function quadrados (x) {
    let gridsize = document.getElementById('gridsize').value;
    let gridcounter = gridsize ** 2;
    let backgroundcolor = document.getElementById('backgroundcolor').value

    if(x == "backgroundcolor"){
        let boxes = document.getElementsByClassName("box");
        [...boxes].forEach((box) =>{
            if(box.className == "box"){box.style.backgroundColor = backgroundcolor}
        })
    } else {
    removegrid();
    for (let i = 0; i < gridcounter; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${16/ gridsize}cm`;
    box.style.height = `${16/ gridsize}cm`;
    box.addEventListener("mouseover", colorchange);
    box.addEventListener("mousedown", colorchange);
    box.style.backgroundColor = backgroundcolor;
    document.getElementById("quadro").appendChild(box);
    }}
}

function colorchange (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    let color = document.getElementById('color').value;
    e.target.style.backgroundColor = color;
    e.target.classList.add('colorido');
}

function slidenumbers (x) {
    let y = document.getElementById("gridsize");

    y.nextElementSibling.value = x;
    y.nextElementSibling.style.paddingLeft = `${((Number(x)/16)-1) * 40}px`;
    console.log (`${(Number(x)/16-1)}`);
}

function removegrid () {
    document.querySelectorAll('.box').forEach(boxRemove => {boxRemove.remove();});
}