const body = document.querySelector("body");
const modeText = body.querySelector(".mode-text");
const modeSwitch = body.querySelector(".toggle-switch");

modeSwitch.addEventListener ("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "theme"
    }else{
        modeText.innerText = "theme"
    }
})
function darkmode(){
    var setTheme = document.body;

setTheme.classList.toggle("dark");
var theme;
if(setTheme.classList.contains("dark")){
    console.log("Dark mode");
    theme = "DARK";
}else{
    console.log("Light mode");
    theme = "LIGHT";
}
localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);
if(GetTheme==="DARK"){
    document.body.classList = "dark";
}