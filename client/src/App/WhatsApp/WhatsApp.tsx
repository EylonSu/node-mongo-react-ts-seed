import * as React from "react";
import ConversationPane from "./Conversation/ConversationPane";
import NavigationPane from "./NavigationPane/NavigationPane";
import "./WhatsApp.css";

class WhatsApp extends React.Component {
  public render() {
    return (
      <div>
        <ConversationPane />
        <NavigationPane />
      </div>
    );
  }
}

export default WhatsApp;
