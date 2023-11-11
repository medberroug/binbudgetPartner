export default ({ app }, inject) => {
    const localController = (action, data) => {

        if (action == "get") {
            const myData = JSON.parse(localStorage.getItem(data.key));
            return myData ? myData : false

        } else if (action == "set") {
            localStorage.setItem(data.key, JSON.stringify({ data: data.value }));
        }
        else if (action == "delete") {
            localStorage.removeItem(data.key);
        }
    };
    inject('localController', localController);
};