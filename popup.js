


let changeColor = document.getElementById("changeColor");
changeColor.innerHTML = "U menya bivaut"

changeColor.addEventListener("mouseenter", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    function setPhrase () {
        return function () {
            var el = document.querySelector('textarea');
            el.value =  'У меня бывают разные аксессуары на консоль, часто выгодней оф цен, подпишитесь на меня, чтобы не потеряться)'
            el.style.height = "200px";
        }
    }
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPhrase(),
  });
});


// ----------------------------------------------------------------------------
let two = document.getElementById("two");
two.innerHTML = "Krasavcheg"

two.addEventListener("mouseenter", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setTwo,
  });
});

function setTwo() {

  var el = document.querySelector('textarea');
  el.value =  'У меня просьба!\n\nНапишите, пожалуйста, отзыв. Расскажите, что вы внесли предоплату, а я моментально отправил вам код и инструкцию по погашению.\n\nЧтобы люди понимали, как я работаю и тоже могли мне доверять🤝'
}


