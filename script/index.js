// pra facilitar a preguica
const log = message => console.log(message);

// aloca uma cor pra label dinamicamente
types = document.querySelectorAll(".type")
types.forEach(type => {
    let color = type.className.split(" ")[1];
    type.style.backgroundColor = color;
})
