import * as React from "react";
import "./Footer.scss";

export interface IFooterProps {
  _?: any;
}

export interface IFooterState {
  _?: any;
}

class Footer extends React.Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="footer">Hello Footer</div>;
  }
}

export default Footer;
