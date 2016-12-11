
class ItemCatalogue extends Component {

    constructor(options) {

        super(options.element);

        this._items = [];

        this._source = document.getElementById('catalogue-template').innerHTML;
        this._templateFunction = Handlebars.compile(this._source);
        this._showPhones(options.phonesURL);

        this._el.addEventListener('click', this.onItemClick.bind(this));
    }

    _showPhones(URL) {

        AJAXService.loadJSON(URL, this.onLoadPhones.bind(this), function () {
            alert('ERROR !!!');
        })
    }

    onLoadPhones(items) {

        this._items = items;

        this._render({
            phones: this._items
        });
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

    showFilteredPhones(filter) {

        let result = [];

        this._items.forEach(function (item) {
            if (filter.indexOf(item.type) != -1) {
                result.push(item);
            }
        });

        this._render({
            phones: result
        });
    }

    _render(phones) {
        this._el.innerHTML = this._templateFunction(phones);
    }
}
