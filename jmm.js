// Set the date we're counting down to
var connectionTime = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var nowTime = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = ~~((nowTime-connectionTime)/1000);
  document.getElementById('output').innerHTML =distance

}, 1000);

const TAU = Zdog.TAU;
// function to translate from spherical to cartesian
function sphericalToCartesian(r,θ,ϕ){
  θ=θ*TAU/360;
  ϕ=ϕ*TAU/360;
  x=r*Math.sin(ϕ)*Math.cos(θ);
  y=r*Math.sin(ϕ)*Math.sin(θ);
  z=r*Math.cos(ϕ);
  let cord=[x,y,z];
  return cord;
}
sphericalToCartesian(25,10,12);


// create illo
const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 4,
  rotate: { y: -TAU/4 },
  dragRotate: true,
});

// creation of the earth using Shape
let earth = new Zdog.Shape({
  addTo: illo,
  stroke: 50,
  color: '#23278f',
});
let eye = new Zdog.Ellipse({
  addTo: earth,
  diameter: 4,
  quarters: 2, // semi-circle
  translate: { x: -4, y: 1, z: 24 },
  // rotate semi-circle to point up
  rotate: { z: -TAU/4 },
  color: "#ffffff",
  stroke: 1,
  backface: false,
});

let eye2 = new Zdog.Ellipse({
  addTo: earth,
  diameter: 4,
  quarters: 2, // semi-circle
  translate: { x: 4, y: 1, z: 24 },
  // rotate semi-circle to point up
  rotate: { z: -TAU/4 },
  color: "#ffffff",
  stroke: 1,
  // hide when front-side is facing back
  backface: false,
});

let mouth = new Zdog.Ellipse({
  addTo: earth,
  diameter: 3,
  quarters: 2,
  translate: { y: 8, z: 24 },
  rotate: { z: -TAU/4 },
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
  backface: false,
});


// let the trees begin
function trees(angle1,angle2){
  let anchor = new Zdog.Anchor({
  addTo: earth,
  rotate: { y: angle2 },
});
  let anchor2 = new Zdog.Anchor({
  addTo: anchor,
  rotate: { x: angle1 },
});
  anchor3 = new Zdog.Anchor({
    addTo: anchor2,
    translate: {z:25},
  });

  new Zdog.Cylinder({
    addTo: anchor3,
    diameter: 2,
    length: 6,
    stroke: false,
    color: '#a0522d',
    backface: '#E62',
  }); 
  new Zdog.Cone({
    addTo: anchor3,
    diameter: 7,
    length: 9,
    stroke: false,
    color: '#006400',
    backface: '#148414',
  });
  return anchor3;
}
// loops to put the trees on the earth

let arbres=[];

for (let i=0; i<360;i=i+30){
  for (let j=0; j<360;j=j+30){
    arbres.push(trees(j*TAU/360,i*TAU/360));
  }
}

let iterator = arbres.values();
for (let arbre of iterator) {
  for (let i=0; i<25;i=i+1){
    setTimeout(function(){arbre.translate={z:i+25}},i*1000); 
  }
}


// plant one tree random
function plantTree(){
  let randomTree=Math.floor(Math.random()*arbres.length);
  arbres[randomTree].translate={z:25};
 }



// update & render

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();

// Event Button
let btn = document.getElementById("bouton");
console.log(btn);

let  numberalerte = 0;
btn.addEventListener("click", function() {
  if (numberalerte==0) {
    alert("Félicitation vous venez de replanter un arbre sur la terre!\nVotre action permettra de sauvegarder la forêt!");
    plantTree();
    numberalerte++;
} else {
    plantTree();
  }
})