function teamname(team){
    console.log("We are " + team);
}
teamname("4Ns");

function teammate(name){
    console.log("She is " + name)
}
teammate("Gilim");
teammate("Yeonsoo");
teammate("Jihyun");
teammate("Haeun");
teammate("Sein");


const h1 = document.querySelector(".hello h1");
h1.innerText = "Welcome!";

function handleTitleClick() {
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);

function handleWindowResize() {
    document.body.style.backgroundColor = "beige";
}

window.addEventListener("resize", handleWindowResize);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);