var toggleViewport = function() {
	if ( localStorage.getItem("viewport") == "true" ) {
		toggleViewport.remove();
	} else {
		toggleViewport.add();
	}
	window.location.reload();
}

toggleViewport.add = function() {
	var viewportTag = document.createElement("meta");
	viewportTag.setAttribute("name", "viewport");
	viewportTag.setAttribute("content", "width = device-width, initial-scale = 1, user-scalable = no");

	localStorage.setItem("viewport", "true");
	document.head.appendChild(viewportTag);
}

toggleViewport.remove = function() {
		localStorage.setItem("viewport", "false");
		var viewportTag = document.head.querySelector("[name=viewport]");
		document.head.removeChild(viewportTag);
}


// Check on ready
if ( localStorage.getItem("viewport") == "true" ) {
	toggleViewport.add();
}
