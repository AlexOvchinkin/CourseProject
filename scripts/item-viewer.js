
class ItemViewer extends Component {

    constructor(options) {
        super(options.element);

        this.LABELS = {
            add: options.add,
            back: options.back
        };

        this.rawHTML = document.getElementById('viewer-template').innerHTML;
        this._templateFunction = Handlebars.compile(this.rawHTML);

        this._el.addEventListener('click', this.onBackClicked.bind(this));
    }

    _render(itemDetails) {
        itemDetails.add = this.LABELS.add || 'Add to basket';
        itemDetails.back = this.LABELS.back || 'Back';

        this.getElement().innerHTML = this._templateFunction(itemDetails);
    }

    onBackClicked(e) {

        if (e.target.dataset.element == "btnBack") {
            let customEvent = new CustomEvent('backClicked');
            this._el.dispatchEvent(customEvent);
        }
    }
}