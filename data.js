var maxCountElements = 100;
var minSize = 30, maxSize = 300;
var keyCodeArr = [8, 9, 12, 13, 16, 17, 18, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 144, 145, 173, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222, 224, 226];
var faIcons = {
	'27': {winKey: 'Esc', icon: 'sign-language', sound: 'applause'},
	'112': {winKey: 'F1', icon: 'futbol-o', sound: 'ball-kick'},
	'113': {winKey: 'F2', icon: 'snapchat-ghost', sound: 'ghost'},
	'114': {winKey: 'F3', icon: 'car', sound: 'car'},
	'115': {winKey: 'F4', icon: 'volume-control-phone', sound: 'phone'},
	'116': {winKey: 'F5', icon: 'bell', sound: 'bell'},
	'117': {winKey: 'F6', icon: 'bomb', sound: 'bomb'},
	'118': {winKey: 'F7', icon: 'bicycle', sound: 'bicycle'},
	'119': {winKey: 'F8', icon: 'taxi', sound: 'police'},
	'120': {winKey: 'F9', icon: 'camera-retro', sound: 'camera-timer'},
	'121': {winKey: 'F10', icon: 'birthday-cake', sound: 'happy-birthday'},
	'122': {winKey: 'F11', icon: 'bolt', sound: 'bolt'},
	'123': {winKey: 'F12', icon: 'bus', sound: 'bus'},
	'145': {winKey: 'ScrollLock', icon: 'clock-o', sound: 'clock'},

	'192': {winKey: '~', icon: 'camera', sound: 'camera-auto'},
	'49': {winKey: '1', icon: 'child', sound: 'child'},
	'50': {winKey: '2', icon: 'cloud', sound: 'thunder'},
	'51': {winKey: '3', icon: 'coffee', sound: 'drink'},
	'52': {winKey: '4', icon: 'cutlery', sound: 'pour-food'},
	'53': {winKey: '5', icon: 'female', sound: 'laugh-woman'},
	'54': {winKey: '6', icon: 'fighter-jet', sound: 'plain'},
	'55': {winKey: '7', icon: 'fax', sound: 'phone-fax'},
	'56': {winKey: '8', icon: 'fire-extinguisher', sound: 'fire-extinguisher'},
	'57': {winKey: '9', icon: 'flag', sound: 'flag'},
	'48': {winKey: '0', icon: 'users', sound: 'noise-crowd'},
	'189': {winKey: '-', icon: 'heartbeat', sound: 'heartbeat'},
	'187': {winKey: '=', icon: 'gavel', sound: 'gavel'},
	'8': {winKey: 'Backspace', icon: 'magic', sound: 'magic'},
	'45': {winKey: 'Insert', icon: 'fire ', sound: 'fire'},
	'36': {winKey: 'Home', icon: 'cogs', sound: 'cogs'},
	'33': {winKey: 'PageUp', icon: 'gift', sound: 'magic2'},
	'144': {winKey: 'NumLock', icon: 'headphones', sound: 'rap'},
	'111': {winKey: '/', icon: 'key', sound: 'keys'},
	'106': {winKey: '*', icon: 'lock', sound: 'lock'},
	'109': {winKey: '-', icon: 'smile-o', sound: 'laugh'},

	'9': {winKey: 'Tab', icon: 'star', sound: 'magic3'}
};