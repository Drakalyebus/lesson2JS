class Fetcher {
    static async get(url, params = [], query = {}) {
        const response = await fetch(encodeURI(`${url}/${params.join("/")}?${Object.keys(query).map((key) => `${key}=${query[key]}`).join("&")}`), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
    static async post(url, data, params = [], query = {}) {
        const response = await fetch(encodeURI(`${url}/${params.join("/")}?${Object.keys(query).map((key) => `${key}=${query[key]}`).join("&")}`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }
    static async patch(url, id, data, params = [], query = {}) {
        const response = await fetch(encodeURI(`${url}/${id}/${params.join("/")}?${Object.keys(query).map((key) => `${key}=${query[key]}`).join("&")}`), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }
    static async delete(url, id, params = [], query = {}) {
        const response = await fetch(encodeURI(`${url}/${id}/${params.join("/")}?${Object.keys(query).map((key) => `${key}=${query[key]}`).join("&")}`), {
            method: "DELETE"
        });
        return await response.json();
    }
    static async put(url, id, data, params = [], query = {}) {
        const response = await fetch(encodeURI(`${url}/${id}/${params.join("/")}?${Object.keys(query).map((key) => `${key}=${query[key]}`).join("&")}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }
}

export default Fetcher;