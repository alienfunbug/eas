
const MAX_GRID_SIZE = 100*100;
console.log(MAX_GRID_SIZE);

const container = document.querySelector('.container');


//const sketchUnit = document.querySelector(#sketchUnit)


//grid needs to have appropriate class and be dynamically created
for (let i =0; i < MAX_GRID_SIZE; i++){
    const div = document.createElement('div');
    div.setAttribute('class','sketchUnit');
    container.appendChild(div);
}


//need hover background changes to be permanent

const sketchUnit = document.querySelector('.sketchUnit');
sketchUnit.addEventListener('mouseenter',()=>{
    sketchUnit.style.background = "#89cfef";
    alert("test");
}); 

/*
element = document.getElementById('sketchUnit');
element.addEventListener("mouseover",function(){
    this.style.background = "#0000ff";
});
element.addEventListener("mouseout",function(){
    this.style.background = "#ff0000";
}); */

