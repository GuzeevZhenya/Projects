let controller = (function(budgetCtrl, uiCtrl) {

    function ctrlAddItem(event) {
        event.preventDefault();
        console.log('fired')
    }
    //Получаем кнопку и накидывает обработчик события
    document.querySelector('#request-form').addEventListener('submit', ctrlAddItem);
})(
    //Передаем модель и шаблон
    modelController, viewController
);