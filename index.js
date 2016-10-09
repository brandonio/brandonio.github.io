var yos = document.getElementsByClassName("yo");

if (yos.length) {
	var yo = yos[0];

	var colors = ["blue", "red", "green", "white",
				"yellow", "black", "magenta",
				"#6a0136", "#91a6ff", "#16db93",
				"#0e6ba8", "#efea5a", "#87F1FF",
				"#2DE1C2", "#9368B7", "#AF125A",
				"#031A6B", "#75DDDD", "#09BC8A",
				"#B1DDF1", "#FFA5AB", "#383B53",
				"#A53860", "#9F87AF", "#E55934"];
	var i = 0;

	var add = true;
	yo.addEventListener("click", function() {
		if (add) {
			yo.innerHTML = yo.innerHTML.slice(0, yo.innerHTML.length - 1) + "o.";
			if (yo.offsetWidth > document.body.clientWidth - 150) {
				add = false;
			}
		} else {
			yo.innerHTML = yo.innerHTML.slice(0, yo.innerHTML.length - 2) + ".";
			if (yo.innerHTML.length === 3) {
				add = true;
			}
		}
		yo.style.color = colors[i];
		i = (i + 1) % colors.length;
	});
}
