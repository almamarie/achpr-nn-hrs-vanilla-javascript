export default class View {
  _generateOption(country) {
    return `<option value="${country}">${country}</option>`;
  }

  _generateCountriesDropdownMarkup(countries) {
    return countries.map((country) => this._generateOption(country)).join("\n");
  }
}
