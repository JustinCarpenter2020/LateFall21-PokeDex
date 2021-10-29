import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";

class ValuesService {

  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

