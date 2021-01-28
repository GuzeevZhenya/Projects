let controller = (function(appCtrl, uiCtrl) {
    const setupEventListeners = function() {
        let DOM = uiCtrl.getDomStrings();
        //Получаем кнопку и накидывает обработчик события
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
    }

    function ctrlAddItem(event) {
        event.preventDefault();

        let inputs = uiCtrl.getInput();
        console.log(inputs);
        appCtrl.addItem(inputs);
    }

    return {
        init: function() {
            setupEventListeners();
        }
    }

})(
    //Передаем модель и шаблон
    modelController, viewController
);

controller.init();