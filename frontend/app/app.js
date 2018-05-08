import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("created !");
    }
    render() {
        return  (
            <MuiThemeProvider>
                <div>
                    <AppBar title={'something'}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

