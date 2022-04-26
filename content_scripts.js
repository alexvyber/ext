
console.log("content shit")



window.addEventListener('load',(e) => {
    // handle load event

    console.log("page loaded")


const container = document.createElement("div");
    container.style.background = "#e4e4e4"
    container.style.position = "absolute"
    container.style.height = "768px"
    container.style.padding = "15px"
    container.style.width = "200px"
    container.style.top = "35px"
    container.style.right = "0"
    

function createButton (title, text) {
    const button = document.createElement("button");
    button.style.background = "#ffffff" 
    button.style.padding = "8px 20px" 
    button.style.margin = "5px" 
    button.style.display = "block" 
    button.style.border = "2px solid gray" 
    button.innerHTML = title

    button.addEventListener("mouseenter", () => {
            // function re (text) { return text }
            var el = document.querySelector('textarea');
            el.value = text
            el.style.height = "160px";
            // alert(text)
    });
    
    return button
}


const myState = {
    val: [
      {
        title: 'Prosba',
        text: 'У меня просьба!\n\nНапишите, пожалуйста, отзыв. Расскажите, что вы внесли предоплату, а я моментально отправил вам код и инструкцию по погашению.\n\nЧтобы люди понимали, как я работаю и тоже могли мне доверять🤝',
      },
      {
        title: 'U menya bivaet',
        text: 'У меня бывают разные аксессуары на консоль, часто выгодней оф цен, подпишитесь на меня, чтобы не потеряться)',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
    ]
  };


myState.val.map( val => {
    container.appendChild(createButton(val.title, val.text));
})

document.body.appendChild(container);




















    // container.appendChild(btn2);
    // container.appendChild(btn3);

// let changeColor = document.getElementById("zalupa");
// changeColor.innerHTML = "U menya bfffffffffffffffffffffffffffivaut"
// changeColor.style.background = "red"
// changeColor.addEventListener("mouseenter", async () => {
//
//     function re (text) { return text }
//             var el = document.querySelector('textarea');
//             el.value = re(myState.values[0].text)
//             el.style.height = "200px";
//             alert(myState.values[0].text)
//
// });






});

