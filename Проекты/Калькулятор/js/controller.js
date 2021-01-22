let controller = (function(appCtrl, uiCtrl) {

    function ctrlAddRequest(event) {
        event.preventDefault();
        console.log('fired')
    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector('#budget-form').addEventListener('submit', ctrlAddRequest);
})(
    //Передаем модель и шаблон
    modelController, viewController
);