import * as React from "react";
import "./App.css";
import WhatsApp from "./WhatsApp/WhatsApp";

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <WhatsApp />
      </div>
    );
  }
}

export default App;
