'use strict'


const AJAXService = {

    loadJSON(url, onsuccess, onerror) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function () {

            if(event.target.status == 200) {
                onsuccess(JSON.parse(event.target.responseText));
            } else {
                onerror();
            }
        }
    }

};
