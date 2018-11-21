import * as React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export interface IConversationProps {
  _?: any;
}

export interface IConversationState {
  _?: any;
}

class Conversation extends React.Component<
  IConversationProps,
  IConversationState
> {
  constructor(props: IConversationProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Header />
        Hello Conversation
        <Footer />
      </div>
    );
  }
}

export default Conversation;
