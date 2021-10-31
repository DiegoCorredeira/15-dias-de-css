const inputs = document.querySelectorAll(".input");

function addc() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remo() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", addc);
	input.addEventListener("blur", remo);
});
