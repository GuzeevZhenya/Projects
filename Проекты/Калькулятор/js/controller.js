let controller = (function(appCtrl, uiCtrl) {


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
})(
    //Передаем модель и шаблон
    modelController, viewController
);