export const CONSTANTS = {
  'NAMESPACE_PREFIX': '$albumSearch',
};

export class ConfigurationService {
  constructor(namespacePrefix = CONSTANTS.NAMESPACE_PREFIX, keysPropertyName = 'settings.keys') {
    this._namespacePrefix = namespacePrefix + '.';
    this._keysPropertyName = this._namespacePrefix + keysPropertyName;
    this._storedKeys = localStorage.getItem(this._keysPropertyName) || '';
    this._values = {};
    if (this._storedKeys) {
      this._storedKeys
        .split(',')
        .forEach( k => {
          this._values[k] = JSON.parse(localStorage.getItem(this._namespacePrefix + k)).value;
        });
    }
  }

  get keys() {
    return Object.keys(this._values);
  }

  set(key, value) {
    const targetKey = this._namespacePrefix + key;
    this._values[key] = value;
    localStorage.setItem(targetKey, JSON.stringify({value: value}));
    localStorage.setItem(this._keysPropertyName, Object.keys(this._values).reduce((a, b) => a + ',' + b));
  }

  get(key) {
    return this._values[key];
  }

  reset() {
    this.keys.forEach(k => localStorage.removeItem(k));
    this._values = {};
  }
}

export default new ConfigurationService();
