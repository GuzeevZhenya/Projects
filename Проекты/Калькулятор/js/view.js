let viewController = (function() {

    let DOMstrings = {
        inputType:"input__type",
        inputDescription:"input__description",
        inputValue:"input__value",
        form:"#budget-form"
    }

    return {
        getInput:function(){
            return {
                type:document.querySelector('#input__type').value,
                description:document.querySelector('#input__description').value,
                value:document.querySelector('#input__type').value
            }
        },
        getDomStrings:function(){
            return  DOMstrings
        }
    }

})();