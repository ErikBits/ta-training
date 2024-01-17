function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && //numeric 0-9
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            !(32 === code) //space
        ) {
            return false;
        }
    }
    return true;
}


const validateUserDetails = (user_id, data) => {
    var validation = {
        status: false,
        error_message: ""
    };

    //as explicit as possible with the error messages as this is all for testing purposes
    if (!user_id) {
        validation.error_message = "No user id present.";
        return validation;
    }

    if (!(user_id > 0 && user_id < 5000)) {
        validation.error_message = "Invalid user id.";
        return validation;
    }

    //GENDER
    if (!(data.gender > 0 && data.gender < 4)) {
        validation.error_message = "Gender input out of bounds or non-numeric.";
        return validation;
    }

    //ADDRESS
    if (!(data.address.length < 150)) {
        validation.error_message = "Address length cannot be longer than 150 characters.";
        return validation;
    }

    if (data.address) {
        if (!(isAlphaNumeric(data.address))) {
            validation.error_message = "Address cannot contain non alpha-numeric symbols.";
            return validation;
        }
    }

    //COUNTRY
    if (!(data.country > 0 && data.country < 4)) {
        validation.error_message = "Country input out of bounds or non-numeric.";
        return validation;
    }

    //POSTAL CODE
    if (!(data.postal_code.length < 9)) {
        validation.error_message = "Postal code length cannot be longer than 8 characters.";
        return validation;
    }

    if (data.postal_code) {
        if (!(isAlphaNumeric(data.postal_code))) {
            validation.error_message = "Postal code cannot contain non alpha-numeric symbols.";
            return validation;
        }
    }

    validation.status = true;

    return validation;
};

module.exports = {
    validateUserDetails
};