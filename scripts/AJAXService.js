'use strict'


const AJAXService = {

    loadJSON(url) {

        let promise = new Promise(function (resolve, rejected) {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.onload = function () {

                if (event.target.status == 200) {
                    resolve(JSON.parse(event.target.responseText));
                } else {
                    rejected();
                }
            }

        });

        return promise;
    }

};
