function selectContent(section) {
  var others = document.querySelectorAll(".content");
  others.forEach((element) => (element.style.display = "none"));
  var selected = document.getElementById(section);
  selected.style.display = "block";
}
