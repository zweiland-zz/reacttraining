var React = require('react');
var ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
