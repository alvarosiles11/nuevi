let contenedor = document.body;
let heading = document.createElement("h1")
let unordered_list = document.createElement("ul")

heading.style.color = "green"
heading.textContent = "Tecnologías"
contenedor.appendChild(heading)

unordered_list.setAttribute("id", "ulele")
contenedor.appendChild(unordered_list)
for (let i = 0; i < 4; i++) {
	let li_elem = document.createElement("li")
	unordered_list.appendChild(li_elem)
}

unordered_list.childNodes[0].textContent = "Java"
unordered_list.childNodes[1].textContent = "Python"
unordered_list.childNodes[2].textContent = "Javascript"
unordered_list.childNodes[3].textContent = "C#"

let div = document.createElement("div")
let p = document.createElement("p")
div.append("www.alvarosiles.com", p)
contenedor.appendChild(div)