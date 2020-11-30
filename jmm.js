// Set the date we're counting down to
var connectionTime = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var nowTime = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = ~~((nowTime-connectionTime)/1000);
  document.getElementById("demo").innerHTML = distance

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
  console.log(cord[0]);
  return cord;
}
sphericalToCartesian(25,10,12);

// Made with Zdog
const offWhite = '#FED';
const gold = '#EA0';
const garnet = '#C25';
const eggplant = '#636';
// create illo
const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 5,
  rotate: { y: -TAU/4 },
  dragRotate: true,
});
// add circle
let earth = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 50,
  color: ' #000099',
});

// update & render
illo.updateRenderGraph();
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();


// let the trees begin
//let isSpinning = true;
function trees(xcart,ycart,zcart,angle1,angle2){
  new Zdog.Cone({
    addTo: earth,
    diameter: 7,
    length: 9,
    translate: {x:xcart,y:ycart,z:zcart},
    stroke: false,
    color: '#006400',
    backface: '#148414',
    rotate: {z:angle1,y:-angle2},
  });
  
  /*new Zdog.Cylinder({
    addTo: earth,
    diameter: 2,
    length: 6,
    translate: {x:xcart,y:ycart,z:zcart},
    stroke: false,
    color: '#a0522d',
    backface: '#E62',
    //rotate: { z: -TAU/8 },
    
  }); */ 
}

let coord= sphericalToCartesian(25,0,0);
//trees(coord[0],coord[1],coord[2],90*TAU/360,0);
for (let i=0; i<360;i=i+60){
  for (let j=0; j<180;j=j+60){
    coord= sphericalToCartesian(25,j,i);
    trees(coord[0],coord[1],coord[2],j*TAU/360,i*TAU/360);
  }
}
//console.log(xnew);
//sphericalToCartesian(25,10,12);
// for (let i=0; i<360;i=i+30){
//   for (let jmm=0; jmm<180; jmm=jmm+30){
//     trees(sphericalToCartesian(25,jmm,i)[0],sphericalToCartesian(25,jmm,i)[1],sphericalToCartesian(25,jmm,i)[2],i*TAU/360)
//     } 
//   }
     
let xaxe = new Zdog.Shape({
  addTo: earth,
  path: [ { x: 0 }, { x: 100 } ],
  stroke: 2,
  color: '#636',
});
let yaxe = new Zdog.Shape({
  addTo: earth,
  path: [ { y: 0 }, { y: 100 } ],
  stroke: 2,
  color: '#EA0',
});

let zaxe = new Zdog.Shape({
  addTo: earth,
  path: [ { z: 0 }, { z: 100 } ],
  stroke: 2,
  color: '#F0F',
}); 



function animate() {
  //illo.rotate.x += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();






//translate: {x:6.25, y:10.82531755,z:21.65063509},