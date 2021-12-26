import { CryptoComponent } from "../../core/CryptoComponent";

export class Toolbar extends CryptoComponent {
  static className = "crypto_toolbar";
  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["input"],
      ...options,
    });
  }

  toHTML() {
    return `
    
    <div class="box">
        <div class="input" spellcheck="false" contenteditable></div>
        <select class="select">
            <option value="value1">BTC</option>
            <option value="value2" selected>ETH</option>
            <option value="value3">XRP</option>
        </select>
    </div>

    <div class="box">
        <div class="input" spellcheck="false" contenteditable></div>
        <select class="select">
            <option value="value1">BTC</option>
            <option value="value2" >ETH</option>
            <option value="value3" selected>XRP</option>
        </select>

    </div>
    <div class="output">70 gryven</div>
    
    `;
  }
  onInput(event) {
    console.log(event.target.textContent);
  }
}
