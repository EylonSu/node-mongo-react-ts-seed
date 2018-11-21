import * as React from "react";

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
    return <div>Hello NavigationHeader</div>;
  }
}

export default NavigationHeader;
