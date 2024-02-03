const validator = require("validator");

const check = (mail) => {
    return validator.isEmail(mail);
}


console.log(validator.isEmail("іфвфівфів@urk.net"));