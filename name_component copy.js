'use strict';

const e = React.createElement;

class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'h2',
      {id: 'name'},
      e (
        'a',
        {href: "https://www.csteed.com"},
        "chad a. steed"
      )
    );
  }
}

const domContainer = document.querySelector('#name_component');
ReactDOM.render(e(NameComponent), domContainer);