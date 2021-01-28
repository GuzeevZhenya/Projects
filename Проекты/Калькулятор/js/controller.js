let controller = (function(budgetCtrl, uiCtrl) {
    //Функция прослушка
    let setupEventListeners = function() {
        let DOM = uiCtrl.getDomStrings();
        //Получаем кнопку и накидывает обработчик события
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddRequest);
    }

    //Функция срабатывает при отправке формы
    function ctrlAddRequest(event) {
        event.preventDefault();
        console.log('fired');
        //Получаем данные из формы
        let input = uiCtrl.getInput();
        console.log(input);

        let newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.test();
    }

    return {
        init: function() {
            console.log('App started');
            setupEventListeners();
        }
    }

})(
    //Передаем модель и шаблон
    modelController, viewController
);

controller.init();