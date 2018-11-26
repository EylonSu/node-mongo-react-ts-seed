import * as React from "react";
import "./SearchBar.scss";

export interface ISearchBarProps {
  _?: any;
}

export interface ISearchBarState {
  _?: any;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="search-bar">Hello SearchBar</div>;
  }
}

export default SearchBar;
