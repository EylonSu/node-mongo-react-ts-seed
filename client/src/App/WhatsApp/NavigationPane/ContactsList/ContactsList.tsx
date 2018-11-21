import * as React from "react";

export interface IContactsListProps {
  _?: any;
}

export interface IContactsListState {
  _?: any;
}

class ContactsList extends React.Component<
  IContactsListProps,
  IContactsListState
> {
  constructor(props: IContactsListProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div>Hello ContactsList</div>;
  }
}

export default ContactsList;
