function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}




var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
	timer = setTimeout(function () {
		var evt;
		evt = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: 4
		});

		var ele = "." + testimonialItems[index].className;
		var ele2 = document.querySelector(ele)
		ele2.dispatchEvent(evt);
		index++;
		if (index >= testimonialItems.length) {
			index = 0; // Set it back to `0` when it reaches `3`
		}
		cycleTestimonials(index);
		document.querySelector(".category").addEventListener("click", function () {
			clearTimeout(timer);
		});
	}, 400);
}
cycleTestimonials(0);
