let controller = (function(appCtrl, uiCtrl) {

<<<<<<< HEAD

    let DOM = uiCtrl.getDomStrings();

    //Функция срабатывает при отправке формы
    function ctrlAddRequest(event) {
        event.preventDefault();
        console.log('fired');

        let input = uiCtrl.getInput();
        console.log(input);

    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector(DOM.form).addEventListener('submit', ctrlAddRequest);
=======
    function ctrlAddRequest(event) {
        event.preventDefault();
        console.log('fired')
    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector('#budget-form').addEventListener('submit', ctrlAddRequest);
>>>>>>> 06111c3ac3e1cb27c497680a57797f830e162927
})(
    //Передаем модель и шаблон
    modelController, viewController
);