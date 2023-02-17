//Check if User is logged in

checkUser()

function checkUser() {
	if (localStorage.length < 1) {
		window.location.href = "./index.html"
	} else {
		return;
	}
}
