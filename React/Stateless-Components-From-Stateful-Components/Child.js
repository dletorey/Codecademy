/* Child Components Update their Parents' State */
import React from 'react';

export class Child extends React.Component {
    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }
    render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.props.onChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}

/* 
import React from 'react';

export class Child extends React.Component {
    render() {
        return <h1>Hey, my name is {this.props.name}!</h1>;
    }
};
*/