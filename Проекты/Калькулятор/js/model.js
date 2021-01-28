let modelController = (function() {

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    function addItem(type, description, value) {
        let newItem, ID;

        //ID
        if (data.allItems[type].length > 0) {
            let lastIndex = data.allItems[type].length - 1;
            ID = data.allItems[type][lastIndex].id + 1;
        } else {
            ID = 0;
        }

        if (type === "inc") {
            newItem = new Income(ID, description, value);
        } else if (type === 'exp') {
            newItem = new Expense(ID, description, value);
        }

        data.allItems[type].push(newItem);
        return newItem;
    }

    let data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }

    return {
        addItem: addItem,
        test: function() {
            console.log(data);
        }
    }

})();