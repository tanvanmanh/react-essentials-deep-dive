import { useState, Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        {/* <div id="app">
          <Input type="text" placeholder="Your name" />
          <br />
          <Input richtext="true" placeholder="Your message" />
        </div> */}
        <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      </main>
    </Fragment>
  );
}

export default App;
