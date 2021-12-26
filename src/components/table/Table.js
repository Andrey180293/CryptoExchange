import { CryptoComponent } from "../../core/CryptoComponent";

export class Table extends CryptoComponent {
  static className = "crypto_table";
  constructor($root, options) {
    super($root, {
      name: "Table",
      listeners: ["click"],
      ...options,
    });
  }

  toHTML() {
    return `
    
                 <div class="crypto_table-component header">
                     <div class="cell icon">O</div>
                     <div class="cell name">Name</div>
                     <div class="cell fullName">fullName</div>
                     <div class="cell price">price</div>
                     <div class="cell volume">volume</div>
                 </div>
                 
                 <div class="crypto_table-component">

                    <div class="cell icon">XDS</div>
                    <div class="cell name">Btc</div>
                    <div class="cell fullName">Bitcoin</div>
                    <div class="cell price">30 000</div>
                    <div class="cell volume">98798465465432</div>

                 </div>
            
    `;
  }
  onClick(event) {
    console.log("click");
    console.log(this.$root);
    console.log(event.target);
  }
}
