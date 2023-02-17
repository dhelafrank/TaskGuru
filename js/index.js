let userText = document.getElementById("name-input");
let goButton = document.getElementById("go");
let nameForm = document.getElementById("namediv")
byDefault()


function byDefault(){
goButton.value = "Input Your Name"
goButton.style = "box-shadow:0;"
nameForm.addEventListener("submit", go)
checkUser()
function checkUser(){
userText.value = (localStorage.getItem("user"))
   if(userText.value.length > 3 ){
   window.location.href = "./tasks.html"
}
else{
   return;
}
}
}

//change submit btn style while name is valid
userText.addEventListener("keyup", () =>{
   if (userText.value.length < 3){
goButton.value = "Input Your Name"
goButton.style = "box-shadow:0;"
   }
   else {
goButton.value = "Submit"
   }
})


//check for name validity
function go(){
   if (userText.value.length < 3){
      alert("Please Input Your Name")
      userText.value = ""
   }
   else{
      proceed()
   }
}

//Store Username in local stroage
function proceed(){
  localStorage.setItem ("user", (userText.value))
  window.location.href = "./tasks.html"
}

//BUILD redirect link
document.getElementById("info").addEventListener("click", ()=>{
 window.location.href="https://ubj.vercel.app/subpages/build.html"
})