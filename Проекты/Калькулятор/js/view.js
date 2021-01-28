let viewController = (function() {

    let DOMstrings = {
        inputType: "#input__type",
        inputDescription: "#input__description",
        inputValue: "#input__value",
        form: "#budget-form",
        incomeContainer: "#income__list",
        expenseContainer: "#expenses__list"
    }

    function getInput() {
        return {
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        }
    }

    function renderListItem(obj, type) {
        let containerElement, html;
        if (type === 'inc') {

            containerElement = DOMstrings.incomeContainer;
            html = ` <li id="income-id" class="budget-list__item item item--income">
            <div class="item__title">Зарплата</div>
            <div class="item__right">
                <div class="item__amount">+ 2,100.00</div>
                <button class="item__remove">
                    <img
                        src="./img/circle-green.svg"
                        alt="delete"
                    />
                </button>
            </div>
        </li>
        <li id="income-id" class="budget-list__item item item--income">
            <div class="item__title">Зарплата</div>
            <div class="item__right">
                <div class="item__amount">+ 2,100.00</div>
                <button class="item__remove">
                    <img
                        src="./img/circle-green.svg"
                        alt="delete"
                    />
                </button>
            </div>
        </li>
        <li id="income-id" class="budget-list__item item item--income">
            <div class="item__title">Зарплата</div>
            <div class="item__right">
                <div class="item__amount">+ 2,100.00</div>
                <button class="item__remove">
                    <img
                        src="./img/circle-green.svg"
                        alt="delete"
                    />
                </button>
            </div>
        </li> `
        } else {
            containerElement = DOMstrings.expenseContainer;
            html = `
             <li id="expense-id" class="budget-list__item item item--expense">
                        <div class="item__title">Зарплата</div>
                        <div class="item__right">
                            <div class="item__amount">
                                + 2,100.00
                                <div class="item__badge">
                                    <div class="badge badge--dark">
                                        15%
                                    </div>
                                </div>
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>
                    <li id="expense-id" class="budget-list__item item item--expense">
                        <div class="item__title">Зарплата</div>
                        <div class="item__right">
                            <div class="item__amount">
                                + 2,100.00
                                <div class="item__badge">
                                    <div class="badge badge--dark">
                                        15%
                                    </div>
                                </div>
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>
                    <li id="expense-id" class="budget-list__item item item--expense">
                        <div class="item__title">Зарплата</div>
                        <div class="item__right">
                            <div class="item__amount">
                                + 2,100.00
                                <div class="item__badge">
                                    <div class="badge badge--dark">
                                        15%
                                    </div>
                                </div>
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li> `
        }


    }

    return {
        getInput: getInput,
        getDomStrings: function() {
            return DOMstrings
        }
    }

})();