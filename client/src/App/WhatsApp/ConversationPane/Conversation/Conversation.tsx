import * as React from "react";
import "./Conversation.scss";

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
    return <div className="conversation">Hello Conversation</div>;
  }
}

export default Conversation;
