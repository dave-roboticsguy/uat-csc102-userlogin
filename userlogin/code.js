/* code.js by David Garcia, 2021 */

// function that flows and checks each field for validation
function formValid() {
    //variable definitions
    var fname = document.form1.firstname;
    var lname = document.form1.lastname;
    var bnum = document.form1.badgenumber;

    // if statement tree that goes through all validations needed.
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

// method that checks for first name validation.
// takes in the fnam var and max 20 and checks if the input is equal to 0 or greater than 20 characters.
// its an or operator so if any is true, then it will alert a message.
// if not, then it will return true.
function firstNameValid(fname, max) {
    var fname_len = fname.value.length;
    if (fname_len == 0 || fname_len > max) {
        alert("First Name must not be empty.\nThe length needs to be less than " + max);
        fname.focus();
        return false;
    }
    return true;
}

// method that checks for only for letters.
// assigns the letters var to a known RegEx pattern (letters only).
// if any value matches the pattern, then it will return true.
// else it will alert a message.
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

// similar method to firstNameValid()
function lastNameValid(lname, max) {
    var lname_len = lname.value.length;
    if (lname_len == 0 || lname_len > max) {
        alert("Last Name must not be empty.\nThe length needs to be less than " + max);
        lname.focus();
        return false;
    }
    return true;
}

// similar method to lettersOnlyFN()
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

// method that checks for only for numbers.
// assigns the numbers var to a known RegEx pattern (numbers only).
// if any value matches the pattern, then it will return true.
// else it will alert a message.
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

// method that checks badge length.
// assigns the bnum_len var to a length property for the input of the form1.
// also assigns two variables for first name & last name from the html for JS to use.
// if input value from the form is 0 or greater than max parameter, then it will return false
// else it will alert a message, welcome first name + last name string concatenation
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
        // locatio reload() method reloads and refreshes the current doc
        window.location.reload()
        return true;
    }
}