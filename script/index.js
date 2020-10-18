// pra facilitar a preguica
const log = message => console.log(message);

// aloca uma cor pra label dinamicamente
const recolor = () => {
    let types = document.querySelectorAll(".type")
    types.forEach(type => {
        let color = type.className.split(" ")[1];
        type.style.backgroundColor = color;
    })
}

recolor()

const handleSubmit = e => {
    e.preventDefault();
    const label = document.querySelector(".label")
    const item = document.querySelector("input.item").value;
    const listEl = document.createElement("li");
    
    listEl.setAttribute("draggable", true);
    listEl.setAttribute("type", "checkbox");
    listEl.setAttribute("class", "item");

    const labelEl = document.createElement("div");
    labelEl.setAttribute("class", `type ${label.value}`);

    const textEl = document.createElement("div");
    textEl.setAttribute("class", "content");
    textEl.appendChild(document.createTextNode(item));

    listEl.appendChild(labelEl);
    listEl.appendChild(textEl);

    document.querySelector("#todo").appendChild(listEl);
    
    recolor()
    window.location.href = "#";
    getItems()
}
/*
<li draggable="true" type="checkbox" class="item">
    <div class="type green"></div>
    <div class="content">Isso é um todo</div>
</li>
*/
const form = document.querySelector(".createItem");
form.addEventListener("submit", handleSubmit);