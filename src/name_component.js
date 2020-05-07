'use strict';

class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <h2 id='name'><a href="#">chad a. steed</a></h2>
    );
  }
}

const domContainer = document.querySelector('#name_component');
ReactDOM.render(<NameComponent />, domContainer);