import * as React from "react";
import "./Header.scss";
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
    return <div className="header">Hello Header</div>;
  }
}

export default Header;
