let viewController = (function() {
    let DOMstrings = {
        form: "#request-form",
        inputName: "#fio",
        inputNumber: "#number",
        inputEmail: "#email",
        inputSelector: "#exampleFormControlSelect1"

    }

    function getInput() {
        return {
            name: document.querySelector(DOMstrings.inputName).value,
            phone: document.querySelector(DOMstrings.inputNumber).value,
            mail: document.querySelector(DOMstrings.inputEmail).value,
            cours: document.querySelector(DOMstrings.inputSelector).value
        }
    }

    return {
        getInput: getInput,
        // возвращаем id элементов формы
        getDomStrings: function() {
            return DOMstrings;
        }
    }
})();