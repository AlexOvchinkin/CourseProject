
class ItemCatalogue extends Component {

    constructor(options) {

        super(options.element);

        this._items = options.phones;

        this._source = document.getElementById('catalogue-template').innerHTML;
        this._templateFunction = Handlebars.compile(this._source);

        this._render({
            phones: this._items
        });

        this._el.addEventListener('click', this.onItemClick.bind(this));
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
