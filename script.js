var rotation = '';
$("#chooseColor").spectrum({
  color: "#A9CCFE"
});
$("#chooseRotate").checkboxradio().click(function(){
  if(this.checked == true) rotation = ' fa-spin';
  else rotation = '';
});
$("#butStart").button();
$("#butFantom").button({disabled: true});
$("#prepare").dialog({
  dialogClass: "no-close",
  closeOnEscape: false,
  modal: true,
  buttons: [
    {
      text: "Start",
      click: function() {
        $( this ).dialog( "close" );
        start();
      }
    }
  ]
});
$("button[title='Close']").hide();

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var i = 0;

function start() {
  $("#prepare").hide();
  $("body").css("background-color",$(".sp-preview-inner").css("background-color"));
  document.onkeydown = document.onkeyup = document.onkeypress = handle;
}

function handle(e) {
  if (e.type == 'keydown') console.log('keycode:' + e.keyCode);
  if (e.type == 'keypress' || e.type == 'keyup' || typeof faIcons[e.keyCode] == 'undefined') return;
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
  var text = '<div id="div' + i + '" style="border: 0px; position: fixed; width: ' + 
    size + 'px; height: ' + size + 'px; left:'+left+'px; top:'+top+'px;">' + 
    '<i class="fa fa-' + faIcons[e.keyCode].icon + rotation + '" style="font-size:' + 
    size + 'px; color:rgb(' + color + ');"></i></div>';
  var audio = new Audio('sounds/' + faIcons[e.keyCode].sound + '.mp3');
  audio.play();  
  document.getElementById('returnArea').innerHTML += text;
  e.preventDefault();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}