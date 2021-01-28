let modelController = (function() {
    let requests = [];
    if (localStorage.getItem("requests")) requests = JSON.parse(localStorage.getItem("requests"));

    const Request = function(name, phone, mail, cours, status) {
        this.id = (requests.length > 0) ? (requests[requests.length - 1].id + 1) : 0;
        this.date = createDate();
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.cours = cours;
        this.status = status || "new";

    }

    function createDate() {
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth() + 1;
        const date = now.getDate();
        month = month > 9 ? month : `0${month}`;
        return `${date}.${month}.${year}`
    }

    function addItem(item) {
        console.log(requests);
        let fullItem = new Request(item.name, item.phone, item.mail, item.cours, item.status);
        requests.push(fullItem);
        localStorage.setItem("requests", JSON.stringify(requests));
    }

    return {
        addItem: addItem,
    }
})();