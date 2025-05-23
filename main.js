const myDropdown = document.querySelector("#myDropdown");
const dropBtn = document.querySelector(".dropbtn");
dropBtn.addEventListener("click", function () {
	myDropdown.classList.toggle('show')
});




var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
	timer = setTimeout(function () {
		var evt;
		evt = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: 2
		});

		var ele = "." + testimonialItems[index].className;
		var ele2 = document.querySelector(ele);
		ele2.dispatchEvent(evt);
		index++;
		if (index >= testimonialItems.length) {
			index = 1; // Set it back to `0` when it reaches `3`
		}
		cycleTestimonials(index);
		document.querySelector(".category").addEventListener("click", function () {
			clearTimeout(timer);
		});
	}, 1500);
}
cycleTestimonials(2);


// ==================
function openTab(tabName) {
	let i;
	let tabContent;

	tabContent = document.getElementsByClassName("tab-content");

	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

	document.getElementById(tabName).style.display = "grid";
	// document.getElementById(tabName).style.justifyItems = "center";
}

let listD = document.getElementById("list");
let rankD = document.getElementById("rank");
let BudgetingRC = document.getElementById("budget");

listD.addEventListener("click", function () { openTab("ListDebt") }, false);
rankD.addEventListener("click", function () { openTab("RankDebt") }, false);
BudgetingRC.addEventListener("click", function () { openTab("Budgeting") }, false);
// ===============
