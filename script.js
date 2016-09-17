document.onkeydown = document.onkeyup = document.onkeypress = handle;

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var i = 0;

function handle(e) {
  console.log('keycode:' + e.keyCode);
  if (e.type == 'keypress' || e.type == 'keyup') return;
  if (i > maxCountElements) {
    var parent = document.getElementById('returnArea');
    var child = document.getElementById('div' + (i - maxCountElements));
    parent.removeChild(child);
  }
  i++;
  var color = getRandomInt(0,255) + ',' + 
    getRandomInt(0,255) + ',' + 
    getRandomInt(0,255);
  var size = getRandomInt(minSize,maxSize);
  var top = getRandomInt(0, (h-size));
  var left = getRandomInt(0, (w-size));
  var text = '<div id="div' + i + '" style="border: 0px; position: fixed; width: ' + size + 'px; height: ' + size + 'px; left:'+left+'px; top:'+top+'px;">' + 
    '<i class="' + faIcons[e.keyCode].icon + '" style="font-size:' + size + 'px; color:rgb(' + color + ');"></i></div>';
  var audio = new Audio('sounds/' + faIcons[e.keyCode].sound + '.mp3');
  audio.play();  
  document.getElementById('returnArea').innerHTML += text;
  e.preventDefault();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}