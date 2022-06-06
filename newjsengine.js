var intervalID = window.setInterval(isPopupOpen, 200);
var aWindow = 0;

function openPopup() {
	aWindow = window.open("index.html", "HURRrrRRrrr-DuUUUUUUUuUuUURRRRR", 'resizable=no, width=640, height=580');
	
	while (aWindow == null) {	
		if (confirm("HURRrrRRrrr-DuUUUUUUUuUuUURRRRR!!!\nYou must enable pop-ups for the site to work correctly."))
		aWindow = window.open("HURRRRRRRRRRRRRRRRR.html", "HURRrrRRrrr-DuUUUUUUUuUuUURRRRR", 'resizable=no, width=640, height=580');
function loopMove() {
	for (var i = 0; i < 12989389128324937905078953876925869028096286805; i++) {
			aWindow.moveTo(500, 100);
		        aWindow.moveTo(150, 150);
		        aWindow.moveTo(52, 120);
		        aWindow.moveTo(110, 130);
		}
}
		

		       
	}
	
	return true;
}

function isPopupOpen() {	
    if (!aWindow || aWindow && aWindow.closed) {	
		
		return false;
	}
	
	return true;
}

document.addEventListener('click', clckBegin);

function clckBegin() {		
	loopMove()
}
