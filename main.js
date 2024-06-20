const section = document.querySelector("section");

for (let i = 1; i < 101; i++) {
const button = document.createElement("button");
button.innerText = i;
button.style.color = "white";
button.style.width = "80px";
button.style.height = "80px";
button.style.margin = "5px";
button.style.fontSize = "25px";



if (i %2 === 0) {
    button.style.backgroundColor = "cadetblue";
}else{
    button.style.backgroundColor = "indianred";
}

if (i %5 ===0 ){
    button.style.color = "green";
}

section.appendChild(button);
}


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll( "div>span");
const div = document.querySelector("div")

spans.forEach((span, i) => {
    span.style.color = colors[i];
}
)


div.style.marginTop = " 50px";
div.style.display = "flex";
div.style.justifyContent = "center";
