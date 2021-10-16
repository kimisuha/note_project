import http from "../common/http"

class contactService {
    getAll() {
        return http.get("/contacs");
    }

    getId(id) {
        return http.get("/contacts/${id}");
    }

    create(data) {
        return http.post("/contacts/data");
    }

    update(id, data) {
        return http.put("contacts/${id}", data);
    }

    delete(id) {
        return http.delete("/contacts/${id}");
    }

    deleteAll() {
        return http.delete("/contacts");
    }

    findByName(name) {
        return http.get("/contacs?name=${name}");
    }
}

export default contactService();