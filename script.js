var rotation = '';
var waitSound = true;
$( "#chooseColor" ).spectrum({
  color: "#A9CCFE"
});
$( "#chooseRotate" ).checkboxradio().click(function(){
  if(this.checked == true) rotation = ' fa-spin';
  else rotation = '';
});
$( "input[id^='radio']" ).checkboxradio().click(function(){
  if(waitSound == true) waitSound = false;
  else waitSound = true;
  console.log(waitSound);
});
$( "#progressbar" ).progressbar({
  value: 0
});
$( "#butFantom" ).button({disabled: true});
$( "#prepare" ).dialog({
  dialogClass: "no-close",
  closeOnEscape: false,
  modal: true,
  width: 400,
  buttons: [
    {
      text: "Start",
      click: function() {
        $( this ).dialog( "close" );
        $( "#settings" ).hide();
        $( "#progressbar" ).show();
        start();
      }
    }
  ]
});
$( "#loading" ).dialog({
  autoOpen: false,
  dialogClass: "no-close",
  closeOnEscape: false,
  modal: true,
  width: 400,
});
$( "button[title='Close']" ).hide();

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var i = 0, x = 0;
var countOfElements = Object.keys(faIcons).length;

function start() {
  $( "#loading" ).dialog( "open" );
  $.each(faIcons, function(index, value) {
    $( "body" ).append('<audio id="a' + index + '" onloadeddata="resOnLoadedData(\'a'+index+'\')" ' +
       'src="sounds/' + value.sound + '.mp3"></audio>');
  }); 
}

function resOnLoadedData(t) {
  x++;
  $( "#progressbar" ).progressbar({"value": x , "max": countOfElements});
  if (x == countOfElements) {
    $( "#loading" ).dialog( "close" );
    $( "body" ).css( "background-color",$( ".sp-preview-inner" ).css( "background-color" ));
    document.onkeydown = document.onkeyup = document.onkeypress = handle;
  }
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
  if (waitSound == false) {
    var audio = new Audio('sounds/' + faIcons[e.keyCode].sound + '.mp3');
    audio.play();
  } else {
    document.getElementById('a' + e.keyCode).play();
  }
  document.getElementById('returnArea').innerHTML += text;
  e.preventDefault();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}