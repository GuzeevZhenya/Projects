<<<<<<< HEAD
let controller = (function(appCtrl, uiCtrl) {

    let DOM = uiCtrl.getDomStrings();

    function ctrlAddItem(event) {
        event.preventDefault();
        console.log('fired');

        let inputs = uiCtrl.getInput();
        console.log(inputs);
        appCtrl.setItemInLocalStorage(inputs);
    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
=======
let controller = (function(budgetCtrl, uiCtrl) {

    function ctrlAddItem(event) {
        event.preventDefault();
        console.log('fired')
    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector('#request-form').addEventListener('submit', ctrlAddItem);
>>>>>>> 06111c3ac3e1cb27c497680a57797f830e162927
})(
    //Передаем модель и шаблон
    modelController, viewController
);