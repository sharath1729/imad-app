console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New value';
// move the image
var img = document.getElementById('madi');
var marginleft=0;
function moveright()  {
    marginleft =marginleft + 10;
    img.style.marginleft=marginleft + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveright,100);
};