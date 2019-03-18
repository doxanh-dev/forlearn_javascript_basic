function validate() {

    // get value
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re-password").value;

    // check value
    if (username == "") {
        alert("You need enter username");
        return false;
    }

    if (password == "") {
        alert("You need enter password");
        return false;
    }

    if (password != re_password) {
        alert("You need enter dont\'t same");
        return false;
    }

    return true;
}