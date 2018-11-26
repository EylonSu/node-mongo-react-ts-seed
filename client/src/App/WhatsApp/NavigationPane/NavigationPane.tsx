import * as React from "react";
import ContactsList from "./ContactsList/ContactsList";
import NavigationHeader from "./NavigationHeader/NavigationHeader";
import "./NavigationPane.scss";
import SearchBar from "./SearchBar/SearchBar";

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
      <div className="navigation-pane">
        <NavigationHeader />
        <SearchBar />
        <ContactsList />
      </div>
    );
  }
}

export default NavigationPane;
