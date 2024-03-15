const obj = {
    quote: document.querySelector("#quote"),
    blockquote: document.createElement("blockquote"),
    url: "https://type.fit/api/quotes",
    button: document.createElement("button"),
    flag: true
}


let func = async function () {
    let genQuote = await axios.get(obj.url);
    let randNum = await Math.floor(Math.random() * 17);

    let funcCall = await fetchData(genQuote, randNum);
    let btn = await createBtn();
}

function fetchData(genQuote, randNum) {
    obj.blockquote.innerText = genQuote.data[randNum].text;
    obj.quote.append(obj.blockquote);
    obj.blockquote.classList.add("feature");
}

function createBtn() {
    obj.button.innerText = "Click!!"
    obj.button.classList.add("featureBtn");
    obj.quote.append(obj.button);
}

obj.quote.addEventListener("click", async (e) => {
    if (e.target.nodeName === "BUTTON") {
        await obj.quote.classList.toggle("clicked");
        if (obj.flag === true) {
            obj.blockquote.style.transform = "rotateY(-180deg)";
            obj.button.style.transform = "rotateY(-180deg)";
            obj.flag = false;
        } else {
            obj.blockquote.style.transform = "rotateY(360deg)";
            obj.button.style.transform = "rotateY(360deg)";
            obj.flag = true;
        }
        // obj.blockquote.classList.add("rotatecontent");
        // obj.btn.classList.add("rotatecontent");
        func();
    }
});

func();

