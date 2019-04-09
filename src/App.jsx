import ReduxToastr from 'react-redux-toastr';
import React from 'react';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PricesComponent from './components/PricesComponent';

class App extends React.PureComponent {
    render() {
        return (
            <div className="container-fluid pr-0 pl-0">
                <PricesComponent text="My Text" />
                <ReduxToastr
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    position="bottom-right"
                    preventDuplicates
                    timeOut={99999}
                />
            </div>
        );
    }
}

export default App;
