document.onkeydown = document.onkeyup = document.onkeypress = handle;

var iconsArr = ['fa fa-adjust', 'fa fa-american-sign-language-interpreting', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asl-interpreting', 'fa fa-assistive-listening-systems', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-audio-description', 'fa fa-balance-scale', 'fa fa-ban', 'fa fa-bank', 'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-battery-0', 'fa fa-battery-1', 'fa fa-battery-2', 'fa fa-battery-3', 'fa fa-battery-4', 'fa fa-battery-empty', 'fa fa-battery-full', 'fa fa-battery-half', 'fa fa-battery-quarter', 'fa fa-battery-three-quarters', 'fa fa-bed', 'fa fa-beer', 'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars', 'fa fa-birthday-cake', 'fa fa-blind', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o', 'fa fa-braille', 'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn', 'fa fa-bullseye', 'fa fa-bus', 'fa fa-cab', 'fa fa-calculator', 'fa fa-calendar', 'fa fa-calendar-o', 'fa fa-calendar-check-o', 'fa fa-calendar-minus-o', 'fa fa-calendar-plus-o', 'fa fa-calendar-times-o', 'fa fa-camera', 'fa fa-camera-retro', 'fa fa-car', 'fa fa-caret-square-o-down', 'fa fa-caret-square-o-left', 'fa fa-caret-square-o-right', 'fa fa-caret-square-o-up', 'fa fa-cart-arrow-down', 'fa fa-cart-plus', 'fa fa-cc', 'fa fa-certificate', 'fa fa-check', 'fa fa-check-circle', 'fa fa-check-circle-o', 'fa fa-check-square', 'fa fa-check-square-o', 'fa fa-child', 'fa fa-circle', 'fa fa-circle-o', 'fa fa-circle-o-notch', 'fa fa-circle-thin', 'fa fa-clock-o', 'fa fa-clone', 'fa fa-close', 'fa fa-cloud', 'fa fa-cloud-download', 'fa fa-cloud-upload', 'fa fa-code', 'fa fa-code-fork', 'fa fa-coffee', 'fa fa-cog', 'fa fa-cogs', 'fa fa-comment', 'fa fa-comment-o', 'fa fa-comments', 'fa fa-comments-o', 'fa fa-commenting', 'fa fa-commenting-o', 'fa fa-compass', 'fa fa-copyright', 'fa fa-credit-card', 'fa fa-credit-card-alt', 'fa fa-creative-commons', 'fa fa-crop', 'fa fa-crosshairs', 'fa fa-cube', 'fa fa-cubes', 'fa fa-cutlery', 'fa fa-dashboard', 'fa fa-database', 'fa fa-deaf', 'fa fa-deafness', 'fa fa-desktop', 'fa fa-diamond', 'fa fa-dot-circle-o', 'fa fa-download', 'fa fa-edit', 'fa fa-ellipsis-h', 'fa fa-ellipsis-v', 'fa fa-envelope', 'fa fa-envelope-o', 'fa fa-envelope-square', 'fa fa-eraser', 'fa fa-exchange', 'fa fa-exclamation', 'fa fa-exclamation-circle', 'fa fa-exclamation-triangle', 'fa fa-external-link', 'fa fa-external-link-square', 'fa fa-eye', 'fa fa-eye-slash', 'fa fa-eyedropper', 'fa fa-fax', 'fa fa-female', 'fa fa-fighter-jet', 'fa fa-file-archive-o', 'fa fa-file-audio-o', 'fa fa-file-code-o', 'fa fa-file-excel-o', 'fa fa-file-image-o', 'fa fa-file-movie-o', 'fa fa-file-pdf-o', 'fa fa-file-photo-o', 'fa fa-file-picture-o', 'fa fa-file-powerpoint-o', 'fa fa-file-sound-o', 'fa fa-file-video-o', 'fa fa-file-word-o', 'fa fa-file-zip-o', 'fa fa-film', 'fa fa-filter', 'fa fa-fire', 'fa fa-fire-extinguisher', 'fa fa-flag', 'fa fa-flag-checkered', 'fa fa-flag-o', 'fa fa-flash', 'fa fa-flask', 'fa fa-folder', 'fa fa-folder-o', 'fa fa-folder-open', 'fa fa-folder-open-o', 'fa fa-frown-o', 'fa fa-futbol-o', 'fa fa-gamepad', 'fa fa-gavel', 'fa fa-gear', 'fa fa-gears', 'fa fa-genderless', 'fa fa-gift', 'fa fa-glass', 'fa fa-globe', 'fa fa-graduation-cap', 'fa fa-group', 'fa fa-hard-of-hearing', 'fa fa-hdd-o', 'fa fa-hashtag', 'fa fa-headphones', 'fa fa-heart', 'fa fa-heart-o', 'fa fa-heartbeat', 'fa fa-history', 'fa fa-home', 'fa fa-hotel', 'fa fa-hourglass', 'fa fa-hourglass-1', 'fa fa-hourglass-2', 'fa fa-hourglass-3', 'fa fa-hourglass-end', 'fa fa-hourglass-half', 'fa fa-hourglass-o', 'fa fa-hourglass-start', 'fa fa-i-cursor', 'fa fa-image', 'fa fa-inbox', 'fa fa-industry', 'fa fa-info', 'fa fa-info-circle', 'fa fa-institution', 'fa fa-key', 'fa fa-keyboard-o', 'fa fa-language', 'fa fa-laptop', 'fa fa-leaf', 'fa fa-legal', 'fa fa-lemon-o', 'fa fa-level-down', 'fa fa-level-up', 'fa fa-life-bouy', 'fa fa-life-buoy', 'fa fa-life-ring', 'fa fa-life-saver', 'fa fa-lightbulb-o', 'fa fa-line-chart', 'fa fa-location-arrow', 'fa fa-lock', 'fa fa-low-vision', 'fa fa-magic', 'fa fa-magnet', 'fa fa-mail-forward', 'fa fa-mail-reply', 'fa fa-mail-reply-all', 'fa fa-male', 'fa fa-map', 'fa fa-map-o', 'fa fa-map-pin', 'fa fa-map-signs', 'fa fa-map-marker', 'fa fa-meh-o', 'fa fa-microphone', 'fa fa-microphone-slash', 'fa fa-minus', 'fa fa-minus-circle', 'fa fa-minus-square', 'fa fa-minus-square-o', 'fa fa-mobile', 'fa fa-mobile-phone', 'fa fa-money', 'fa fa-moon-o', 'fa fa-mortar-board', 'fa fa-motorcycle', 'fa fa-mouse-pointer', 'fa fa-music', 'fa fa-navicon', 'fa fa-newspaper-o', 'fa fa-object-group', 'fa fa-object-ungroup', 'fa fa-paint-brush', 'fa fa-paper-plane', 'fa fa-paper-plane-o', 'fa fa-paw', 'fa fa-pencil', 'fa fa-pencil-square', 'fa fa-pencil-square-o'];
var soundsArr = ['cat','goose','ding'];
var keyCodeArr = [8, 9, 12, 13, 16, 17, 18, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 144, 145, 173, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222, 224, 226];
var maxCountElements = 100;
var minSize = 30, maxSize = 300;

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var i = 0;

function handle(e) {
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
    '<i class="' + iconsArr[e.keyCode] + '" style="font-size:' + size + 'px; color:rgb(' + color + ');"></i></div>';
  var audio = new Audio('sounds/' + soundsArr[getRandomInt(0,2)] + '.mp3');
  audio.play();  
  document.getElementById('returnArea').innerHTML += text;
  console.log('keycode:' + e.keyCode);
  e.preventDefault();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}