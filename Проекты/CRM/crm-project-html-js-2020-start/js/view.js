let viewController = (function() {
    let DOMstrings = {
        inputName:"#fio",
        inputNumber:"#number",
        inputEmail:"#email",
        form:"#request-form"
    }

    return {
        getInput:function(){
            return{
                name:document.querySelector('#fio').value,
                telephone:document.querySelector('#number').value,
                email:document.querySelector('#email').value,
                product:document.querySelector('#exampleFormControlSelect1').value
            }
        },

        getDomStrings:function(){
            return  DOMstrings;
        }
    }
})();