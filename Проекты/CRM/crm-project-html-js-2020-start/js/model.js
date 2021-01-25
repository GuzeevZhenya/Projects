let modelController = (function () {

  class Request {
    constructor(name, phone, mail, course, status) {
      this.name = name;
      this.phone = phone;
      this.mail = mail;
      this.course = course;
      this.ID = this.createID();
      this.date = this.createDate();
      this.status = status || "new";
    }
    createID() {
      return data.length + 1;
    }
    createDate() {
      const now = new Date();
      const year = now.getFullYear();
      let month = now.getMonth() + 1;
      const date = now.getDate();
      month = month > 9 ? month : `0${month}`;
      return `${date}.${month}.${year}`
    }
  }




  function setItemInLocalStorage(item) {
    let data = JSON.parse(localStorage.getItem('formInfo')) || [];
    data.push(item);
    console.log(data)
    localStorage.setItem('formInfo', JSON.stringify(data));
    console.log(localStorage.getItem('formInfo'));
  }
  return {
    setItemInLocalStorage: setItemInLocalStorage
  }





})();