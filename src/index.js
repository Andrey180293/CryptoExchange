import { Crypto } from "./components/Crypto/Crypto";
import { Table } from "./components/table/Table";
import { Toolbar } from "./components/toolbar/Toolbar";
import "./scss/index.scss";

const page = new Crypto("#app", {
  components: [Table, Toolbar],
});
page.render();
