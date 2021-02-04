// https://www.coingecko.com/api/documentations/v3
const baseroute = "https://api.coingecko.com/api/v3";

export default async function request(endpoint) {
    return new Promise((resolve, reject) => {
        fetch(`${baseroute}${endpoint}`, { method: "GET", headers: { "Content-Type": "application/json" } })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                resolve(json);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
