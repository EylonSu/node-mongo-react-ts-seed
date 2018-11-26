import * as React from "react";
import "./NavigationHeader.scss";

export interface INavigationHeaderProps {
  _?: any;
}

export interface INavigationHeaderState {
  _?: any;
}

class NavigationHeader extends React.Component<
  INavigationHeaderProps,
  INavigationHeaderState
> {
  constructor(props: INavigationHeaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="navigation-header">Hello NavigationHeader</div>;
  }
}

export default NavigationHeader;
