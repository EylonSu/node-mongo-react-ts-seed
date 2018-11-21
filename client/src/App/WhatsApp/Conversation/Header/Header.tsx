import * as React from "react";

export interface IHeaderProps {
  _?: any;
}

export interface IHeaderState {
  _?: any;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div>Hello Header</div>;
  }
}

export default Header;
