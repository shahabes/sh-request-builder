import axios from 'axios';

export class RequestBuilder {

    #url = "";
    #header = {};
    #body = {};
    #params = {};


    constructor(url) {
        this.setUrl(url);
    }

    setUrl(url) {
        if (url && url.includes("http")) {
            this.#url = url;
        } else {
            this.#url = "";
        }
    }

    getUrl() {
        return this.#url;
    }

    setHeader(header) {
        this.#header = header;
    }

    getHeader() {
        return this.#header;
    }

    setBody(body) {
        this.#body = body;
    }

    getBody() {
        return this.#body;
    }

    setParams(params) {
        this.#params = params;
    }

    getParams() {
        return this.#params;
    }

    sendGet(success, failure) {
        axios.get(this.#url, {
                params: this.#params
            })
            .then(function (response) {
                success(response);
            }).catch(function (response) {
                failure(response);
            });
    }


    sendPost(success, failure) {

        axios.post(this.#url, {
                params: this.#params,
                header: this.#header
            })
            .then(function (response) {
                success(response);
            }).catch(function (response) {
                failure(response);
            });

    }

}