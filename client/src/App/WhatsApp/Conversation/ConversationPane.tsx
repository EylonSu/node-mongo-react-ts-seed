import * as React from "react";
import Conversation from "./Conversation/Conversation";

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
      <div>
        Hello ConversationPane
        <Conversation />
      </div>
    );
  }
}

export default ConversationPane;
