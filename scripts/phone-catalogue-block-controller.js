
class PhoneCatalogueBlockController {

    constructor(options) {

        this._el = options.element;

        this._catalogue = new ItemCatalogue({
            element: this._el.querySelector('[data-component="item-catalogue"]'),
            phonesURL: 'phones.json'
        });

        this._viewer = new ItemViewer({
            element: this._el.querySelector('[data-component="item-viewer"]'),
            back: 'Назад',
            add: 'В корзину'
        });

        this._filter = new Filter(this._el.querySelector('[data-component="filter"]'));
        this._filter.getElement().addEventListener('filter.changed', this.onFilterChanged.bind(this));

        this._catalogue.getElement().addEventListener('itemSelected', this.onItemSelected.bind(this));

        this._viewer.getElement().addEventListener('backClicked', this.onButtonBack.bind(this));

        this._catalogue.show();
    }

    onButtonBack() {
        this._catalogue.show();
        this._viewer.hide();
        this._filter.show();
    }

    onFilterChanged(e) {
        let filter = e.detail;
        this._catalogue.showFilteredPhones(filter);
    }

    onItemSelected(e) {
        this._catalogue.hide();

        AJAXService.loadJSON(e.detail + '.json', this._viewer._render.bind(this._viewer), function () {
            alert("ERROR !!!");
        });

        this._viewer.show();
        this._filter.hide();
    }
}























