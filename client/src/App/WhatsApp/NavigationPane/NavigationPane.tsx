import * as React from "react";
import ContactsList from "./ContactsList/ContactsList";
import NavigationHeader from "./NavigationHeader/NavigationHeader";

export interface INavigationPaneProps {
  _?: any;
}

export interface INavigationPaneState {
  _?: any;
}

class NavigationPane extends React.Component<
  INavigationPaneProps,
  INavigationPaneState
> {
  constructor(props: INavigationPaneProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        Hello NavigationPane
        <NavigationHeader />
        <ContactsList />
      </div>
    );
  }
}

export default NavigationPane;
