
class PhoneCatalogueBlockController {

    constructor(options) {

        this._el = options.element;

        this._phones = {
            "iPhone7" : {
                display: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
                battery: "Non-removable Li-Ion 1960 mAh battery (7.45 Wh)",
                bluetooth: "Yes",
                images: [
                    {"path": "sources/iPhone7_main.jpg"},
                    {"path": "sources/iPhone7_front.jpg"},
                    {"path": "sources/iPhone7_back.jpg"},
                    {"path": "sources/iPhone7_turn.jpg"}
                ]
            },
            "Samsung S7" : {
                display: "LCD touchscreen, 16M colors",
                battery: "Non-removable Li-Ion battery",
                bluetooth: "Yes",
                images: [
                    {"path": "sources/SamsungS7_main.jpg"},
                    {"path": "sources/SamsungS7_front.jpg"},
                    {"path": "sources/SamsungS7_back.jpg"},
                    {"path": "sources/SamsungS7_turn.jpg"}
                ]
            }
        };

        this._catalogue = new ItemCatalogue({
            element: this._el.querySelector('[data-component="item-catalogue"]'),
            phones: options.phones
        });

        this._viewer = new ItemViewer({
            element: this._el.querySelector('[data-component="item-viewer"]'),
            back: 'Назад',
            add: 'Добавить в корзину'
        });

        this._filter = new Filter(this._el.querySelector('[data-component="filter"]'));
        this._filter.getElement().addEventListener('filter.changed', this.onFilterChanged.bind(this));

        this._catalogue.getElement().addEventListener('itemSelected', this.onItemSelected.bind(this));

        this._viewer.getElement().addEventListener('backClicked', this.onButtonBack.bind(this));

        this._catalogue.show();
    }

    onButtonBack(e) {
        this._catalogue.show();
        this._viewer.hide();
        this._filter.show();
    }

    onFilterChanged(e) {
        let items = this._catalogue.getItems();
        let filter = e.detail;
        this._catalogue._render({
            phones: this._catalogue.getFilteredItems(items, filter)
        });
    }

    onItemSelected(e) {
        this._catalogue.hide();
        this._viewer._render(this.getPhoneDetails(e.detail));
        this._viewer.show();
        this._filter.hide();
    }

    getPhoneDetails(phoneID) {
        return this._phones[phoneID];
    }
}
