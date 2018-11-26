import * as React from "react";
import ConversationPane from "./ConversationPane/ConversationPane";
import NavigationPane from "./NavigationPane/NavigationPane";
import "./WhatsApp.css";

class WhatsApp extends React.Component {
  public render() {
    return (
      <div className="whatsapp">
        <div className="conversation-pane">
          <ConversationPane />
        </div>
        <div className="navigation-pane">
          <NavigationPane />
        </div>
      </div>
    );
  }
}

export default WhatsApp;
