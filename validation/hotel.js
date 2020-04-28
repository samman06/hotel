const isEmpty = require('./is-empty');

class validationInputs {
    validateName(name) {
        let errors = {};
        if (name.match(/^[a-zA-Z0-9\s]+$/g) === null)
            errors.name = "hotel name should has chars and numbers and spaces only ";
        return {
            errors,
            isValid: isEmpty(errors),
        }
    };

    validateCity(city) {
        let errors = {};
        if (city.match(/^[a-zA-Z0-9\s]+$/g) === null)
            errors.city = "city name should has chars and numbers and spaces only ";
        return {
            errors,
            isValid: isEmpty(errors),
        }
    };

    validateDate(start, end) {
        let errors = {};
        const datePattern = /^((20[2-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
        if (start.match(datePattern) === null)
            errors.start = "start date should be formatted";
        if (end.match(datePattern) === null)
            errors.end = "start date should be formatted";
        return {
            errors,
            isValid: isEmpty(errors),
        }
    };

    validatePrice(min, max) {
        let errors = {};
        if (min.match(/^[0-9]+$/g) === null)
            errors.min = "price should be a number";
        if (max.match(/^[0-9]+$/g) === null)
            errors.max = "price should a number";
        return {
            errors,
            isValid: isEmpty(errors),
        }
    };

    validateMulti(city, min, max) {
        let errors = {...this.validateCity(city).errors,...this.validatePrice(min,max).errors};
        return {
            errors,
            isValid: isEmpty(errors),
        }
    };
}

let validation = new validationInputs();
module.exports = validation;
