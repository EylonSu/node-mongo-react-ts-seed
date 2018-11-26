import * as React from "react";
import Conversation from "./Conversation/Conversation";
import "./ConversationPane.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export interface IConversationPaneProps {
  _?: any;
}

export interface IConversationPaneState {
  _?: any;
}

class ConversationPane extends React.Component<
  IConversationPaneProps,
  IConversationPaneState
> {
  constructor(props: IConversationPaneProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="conversationPane">
        <div className="background" />
        <Header />
        <Conversation />
        <Footer />
      </div>
    );
  }
}

export default ConversationPane;
