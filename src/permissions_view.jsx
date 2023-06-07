import React, { Component } from "react";
import Permissions, { permissionsType } from "./permissions";
import "./permissions.css";

class PermissionsView extends Component {
  constructor(props) {
    super(props);
    this.state = Permissions;
  }

  permissionsHtml = (value) =>
    permissionsType.map((item) => {
      return (
        <option value={item} selected={item === value} key={item}>
          {item}
        </option>
      );
    });

  permissionsLabel = () =>
    this.state.permissions.map((item) => {
      return (
        <div className="Permissions-View-Item" key={item.name}>
          <span>{item.name}</span>
          <select
            name="permissions"
            id="permissions"
            className="Permissions-View-Dropdown"
          >
            {this.permissionsHtml(item.value)}
          </select>
        </div>
      );
    });

  addRole = () => {
    const arrayLength = this.state.permissions.length;
    const updatedKeyValue = arrayLength + 1;
    console.log(this.state.permissions);
    this.setState({
      permissions: [
        ...this.state.permissions,
        {
          key: { updatedKeyValue },
          name: `Dummy ${updatedKeyValue}`,
          value:
            permissionsType[Math.floor(Math.random() * permissionsType.length)],
        },
      ],
    });
  };

  render() {
    return (
      <div className="Permissions-View-Container">
        <div className="Permissions-View-Item">
          <h4>ROLE</h4>
          <h4>PERMISSION</h4>
        </div>
        {this.permissionsLabel()}
        <button className="Permissions-View-Add-Button" onClick={this.addRole}>
          Add
        </button>
      </div>
    );
  }
}

export default PermissionsView;