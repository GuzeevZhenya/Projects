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
})(
    //Передаем модель и шаблон
    modelController, viewController
);