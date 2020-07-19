/* Stateless Functional Components and Props */
// Normal way to display a prop:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>{this.props.title}</h1>;
    }
  }
  
  // Stateless functional component way to display a prop:
  export const MyComponentClass = (props) => {
    return <h1>{props.title}</h1>;
  }
  
  // Normal way to display a prop using a variable:
  export class MyComponentClass extends React.component {
    render() {
        let title = this.props.title;
      return <h1>{title}</h1>;
    }
  }
  
  // Stateless functional component way to display a prop using a variable:
  export const MyComponentClass = (props) => {
      let title = props.title;
    return <h1>{title}</h1>;
  }

/*
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  
  // The same component class, written as a stateless functional component:
  export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
  }
  
  // Works the same either way:
  ReactDOM.render(
      <MyComponentClass />,
      document.getElementById('app')
  );
*/