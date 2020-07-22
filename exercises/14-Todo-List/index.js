let liList = ["Eat", "Drink", "Sleep"];
let listToShow = liList.map(function(li) {
	return '<li><span><i class="fa fa-trash"></i></span>' + li + "</li>";
});
function keyupfunction(event) {
	if (event.KeyCode === 13) {
		liList.push(document.querySelector("#addToDo").value);
		listToShow = liList.map(function(li) {
			return '<li><span><i class="fa fa-trash"></i></span>' + li + "</li>";
		});
	}
}

console.log(listToShow);
document.querySelector("#ulElem").innerHTML = listToShow.join(" ");
document.querySelector("#addToDo").addEventListener("keyup", keyupfunction);

// liList.map(function(li) {
// 	document.querySelector("#ulElem").innerHTML = li;
// });
