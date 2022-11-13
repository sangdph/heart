var miniHearts = document.getElementById("mini-hearts");
var zIndex = -900;

function createHeart(x,y, zIndex){
    var size = (Math.floor(Math.random() * 300)+100)/100;
    
    var red = Math.floor(Math.random() * 50)+Math.floor(Math.random() * 4)+200;
    var green = Math.floor(Math.random() * 150)+Math.floor(Math.random() * 30)+20;
    var blue = Math.floor(Math.random() * 95)+Math.floor(Math.random() * 5)+100;
    const miniHeart = `
        <div class="mini-heart" style="top: ${y}px; left: ${x}px; z-index: ${zIndex}; --red: ${red}; --green: ${green}; --blue: ${blue}; --size: ${size}"></div>
    `;
    return miniHearts.insertAdjacentHTML("beforeend",miniHeart);
}


function printMousePos(event) {
    var x= event.clientX;
    var y = event.clientY;
    zIndex++;
    console.log(x, y);
    createHeart(x,y, zIndex);
  }
  
  document.addEventListener("click", printMousePos);