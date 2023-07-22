const courses = [
    {
        name: "Complete C Course",
        price: "2.5",
    },
    {
        name: "Complete Angular Course",
        price: "2.1",
    },
    {
        name: "Complete C++ Course",
        price: "2.6",
    },
    {
        name: "Complete Python Course",
        price: "2.4",
    },
    {
        name: "Complete CSS Course",
        price: "2.3",
    },

];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(element => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(element.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        
        const price = document.createTextNode("$ "+element.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);
    });
}

// generateList();  


window.addEventListener("load", generateList);

const button1 = document.querySelector(".sort-btn1");
const button2 = document.querySelector(".sort-btn2");

button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});

button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();
});





