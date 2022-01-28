import helpHttp from './helpHttp';
export class MainController {
    constructor() {
        this.data = [];
    }
    async getData(datatype) {
        let api = await helpHttp();
        let url = `http://localhost:5000/${datatype}`;
        this.data = api.get(url).then((res) => {
            if (!res.err) {
                return res;
            } else {
                return null;
            }
        });
        let d= await this.data;
        return d;
    }
    async postData(datatype, newdata) {
        let api = await helpHttp();
        let url = `http://localhost:5000/${datatype}`;
        let options = {
            body: newdata,
            headers: { 'content-type': 'application/json' },
        };
        let newDataToAdd = api.post(url, options).then((res) => {
            if (!res.err) {
                return res;
            } else {
                return null;
            }
        });
        this.data = await newDataToAdd;
        let d= await this.data;
        return d;
    }

    async putData(datatype, editData) {
        let api = await helpHttp();
        let url = `http://localhost:5000/${datatype}`;
        let endpoint = `${url}/${editData.id}`;
        let options = {
            body: editData,
            headers: { 'content-type': 'application/json' },
        };
        let newDataToEdit = api.put(endpoint, options).then((res) => {
            if (!res.err) {
                return res;
            } else {
                return null;
            } 
        });
        this.data = await newDataToEdit;
        let d= await this.data;
        return d;
    }
    async delData(datatype, editData) {
        let api = await helpHttp();
        let url = `http://localhost:5000/${datatype}`;
        let endpoint = `${url}/${editData}`;
        this.data = api.del(endpoint).then((res) => {
            if (!res.err) {
                return res;
            } else {
                return null;
            }
        });
        let d= await this.data;
        return d;
    }
}
