var miniHearts = document.getElementById("mini-hearts");
var zIndex = -900;
function createHeart(x,y, zIndex){
    const miniHeart = `
        <div class="mini-heart" style="top: ${y}px; left: ${x}px; z-index: ${zIndex}"></div>
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