import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import PricesComponent from './components/PricesComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid pr-0 pl-0">
        <PricesComponent text="My Text" />
        <ReduxToastr
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          preventDuplicates
          timeOut={99999}
        />
      </div>
    );
  }
}

export default App;
