import React, { Component } from "react";
import classnames from "classnames";

const Editable = ({ editing, value, onEdit, className, ...props }) => {
  if (editing) {
    return (
      <Editable.Edit
        className={className}
        value={value}
        onEdit={onEdit}
        {...props}
      />
    );
  }

  return (
    <Editable.Value className={classnames("value", className)} value={value} />
  );
};
Editable.Value = ({ value, ...props }) => <span {...props}>{value}</span>;

class Edit extends Component {
  constructor(props) {
    super(props);

    this.checkEnter = this.checkEnter.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  render() {
    const { value, className, onEdit, ...props } = this.props;
    return (
      <input
        type="text"
        autoFocus={true}
        className={classnames("edit", className)}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }

  checkEnter(event) {
    if (event.key == "Enter") {
      this.finishEdit(event);
    }
  }

  finishEdit(event) {
    const { value } = event.target;
    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  }
}
Editable.Edit = Edit;

export default Editable;
