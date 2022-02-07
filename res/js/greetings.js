// login form
const loginFrm = document.querySelector("#login-frm");
// login input(text)
const loginInput = document.querySelector("#login-frm input");
// h1 tag
const greeting = document.querySelector("#greeting");

// class name hidden(event property)
const HIDDEN_CLASSNAME = "hidden";
// user key
const USERNAME_KEY = "username";

// login submit click
function onLoginSubmit(e) {
  e.preventDefault(); // not event disturb
  loginFrm.classList.add(HIDDEN_CLASSNAME); // form class name add hidden property
  const username = loginInput.value; // login input value
  localStorage.setItem(USERNAME_KEY, username); // username storage value
  paintGreetings(username); // username value
}

// username not null function
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // Fixed text + user writing
  greeting.classList.remove(HIDDEN_CLASSNAME); // form class name
}

// username save storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

// save event
if (savedUsername === null) {
  loginFrm.classList.remove(HIDDEN_CLASSNAME);
  // login button event callback
  loginFrm.addEventListener("submit", onLoginSubmit);
} else {
  // save username
  paintGreetings(savedUsername);
}
