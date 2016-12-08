
class Filter extends Component{

    constructor(element) {

        super(element);

        this._el = element;
        this._checkBoxes = this._el.querySelectorAll('[type="checkbox"]');

        this._el.addEventListener('click', this.onFilterClick.bind(this));

    }

    onFilterClick(e) {

        if (e.target.getAttribute('type') == 'checkbox') {

            let selected = [];

            this._checkBoxes.forEach(function (checkBox) {
                if (checkBox.checked) {
                    selected.push(checkBox.id);
                }
            });

            let customEvent = new CustomEvent('filter.changed', {
                detail: selected
            });

            this._el.dispatchEvent(customEvent);
        }
    }
}
