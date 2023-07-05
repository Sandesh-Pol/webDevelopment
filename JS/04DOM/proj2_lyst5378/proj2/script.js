const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center =  document.querySelector(".center");



const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element,color) => {
   return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBgColor(red));
magicColorChanger(cyan,getBgColor(cyan));
magicColorChanger(violet,getBgColor(violet));
magicColorChanger(orange,getBgColor(orange));
magicColorChanger(pink,getBgColor(pink));


// console.log(window.getComputedStyle(red).backgroundColor);

// var orangeElementColor = getBgColor(pink)

// pink.addEventListener("click", () => {
//     center.style.background = orangeElementColor;
// });