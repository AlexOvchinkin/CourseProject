
class ItemCatalogue extends Component {

    constructor(options) {

        super(options.element);

        this._items = this._getPhones(options.phonesURL);

        this._source = document.getElementById('catalogue-template').innerHTML;
        this._templateFunction = Handlebars.compile(this._source);

        this._render({
            phones: this._items
        });

        this._el.addEventListener('click', this.onItemClick.bind(this));
    }

    _getPhones(URL) {
        let xnr = new XMLHttpRequest();
        xnr.open('GET', URL, false);
        xnr.send();

        if (xnr.status != 200) {
            alert('Error:' + xnr.responseText);
            return [];
        } else {
            return JSON.parse(xnr.responseText);
        }
    }

    onItemClick(e) {

        let elem = e.target.closest('.goods');

        if (elem) {

            let event = new CustomEvent('itemSelected', {
                detail: elem.dataset.itemid
            });

            this._el.dispatchEvent(event);
        }
    }

    getItems() {
        return this._items;
    }

    getFilteredItems(items, filter) {

        let result = [];

        items.forEach(function (item) {
            if (filter.indexOf(item.type) != -1) {
                result.push(item);
            }
        });

        return result;
    }

    _render(phones) {
        this._el.innerHTML = this._templateFunction(phones);
    }
}
