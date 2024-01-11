
function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && //numeric 0-9
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            !(code === 32) //space
        ) {
            return false;
        }
    }
    return true;
}

export const validateUserDetails = (userDetails) => {
    // if (!userDetails.address.trim()) {
    //     alert("Address cannot be empty");
    // }

    // ADDRESS CHECKS 
    if (!(userDetails.address.length < 150)) {
        alert("Address cannot be longer than 150 characters.");
        return false;
    };

    if (userDetails.address) {
        if (!isAlphaNumeric(userDetails.address)) {
            alert("Address cannot contain non alpha-numeric values.");
            return false;
        }
    }

    //POSTAL CODE CHECKS
    if (!(userDetails.postal_code.length < 9)) {
        alert("Postal code cannot be longer than 8 characters.");
        return false;
    };

    if (userDetails.postal_code) {
        if (!isAlphaNumeric(userDetails.postal_code)) {
            alert("Postal code cannot contain non alpha-numeric values.");
            return false;
        }
    }


    return true;
}