import { BrouserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrouserRouter>
      <div className="App">
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrouserRouter>
  );
}
