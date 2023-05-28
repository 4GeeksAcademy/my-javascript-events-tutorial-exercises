window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		const text = event.target.id
		alert(text)
	});
};
