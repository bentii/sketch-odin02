window.onload = quadrados ();

function quadrados () {
    let gridsize = document.getElementById('gridsize').value;
    let gridcounter = gridsize ** 2;
    removegrid();

    for (let i = 0; i < gridcounter; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${16/ gridsize}cm`;
    box.style.height = `${16/ gridsize}cm`;
    box.style.backgroundColor = "rgba(255, 255, 255)"; 
    document.getElementById("quadro").appendChild(box);
    }
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