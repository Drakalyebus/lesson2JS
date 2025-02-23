class Request {
    static async get(url) {
        return (await (await fetch(url)).json());
    }
    static async post(url, data) {
        return (await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }));
    }
    static async put(url, id, data) {
        return (await fetch(url + '/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }));
    }
    static async delete(url, id) {
        return (await fetch(url + '/' + id, {
            method: "DELETE"
        }));
    }
    static async patch (url, id, data) {
        return (await fetch(url + '/' + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }));
    }
}

export default Request;