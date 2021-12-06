/* code.js by David Garcia, 2021 */


function formValid() {
    var fname = document.form1.firstname;
    var lname = document.form1.lastname;
    var bnum = document.form1.badgenumber;

    if (firstNameValid(fname, 20)) {
        if (lettersOnlyFN(fname)) {
            if (lastNameValid(lname, 20)) {
                if (lettersOnlyLN(lname)) {
                    if (numOnly(bnum)) {
                        if (badgeNumValid(bnum, 4)) {

                        }
                    }
                }
            }
        }
    }
    return false;
}

function firstNameValid(fname, max) {
    var fname_len = fname.value.length;
    if (fname_len == 0 || fname_len > max) {
        alert("First Name must not be empty.\nThe length needs to be less than " + max);
        fname.focus();
        return false;
    }
    return true;
}

function lettersOnlyFN(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('First Name must have alphabet characters only');
        fname.focus();
        return false;
    }
}

function lastNameValid(lname, max) {
    var lname_len = lname.value.length;
    if (lname_len == 0 || lname_len > max) {
        alert("Last Name must not be empty.\nThe length needs to be less than " + max);
        lname.focus();
        return false;
    }
    return true;
}

function lettersOnlyLN(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value.match(letters)) {
        return true;
    }
    else {
        alert('Last Name must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function numOnly(bnum) {
    var numbers = /^[0-9]+$/;
    if (bnum.value.match(numbers)) {
        return true;
    }
    else {
        alert('Badge Number must have numeric characters only');
        bnum.focus();
        return false;
    }
}

function badgeNumValid(bnum, max) {
    var bnum_len = bnum.value.length;
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;

    if (bnum_len == 0 || bnum_len >= max) {
        alert("Badge Number should not be empty.\nThe length needs three or less digits");
        bnum.focus();
        return false;
    }
    else {
        alert("Welcome " + first_name + " " + last_name);
        window.location.reload()
        return true;
    }
}