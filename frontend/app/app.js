import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SubHeader from 'material-ui/Subheader';

import {NavigationMenu,ActionHome, ActionClass,ImageNaturePeople,FileFileUpload,ActionAccountBalanceWallet,ActionSpellcheck ,ActionHistory, ActionPrint,ActionInfo, ActionAccountCircle} from 'material-ui/svg-icons';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const CONTROLLERS = {
    MAIN    : 'main',
    INFO    : 'info',
    BALANCE : 'balance',
    HISTORY : 'history',
    LOGIN   : 'login',
    EDITOR  : 'editor',
    ABOUT   : 'about',
    UPLOAD  : 'upload',

};

const CONTROLLERS_TITLE = {
    MAIN    : 'Main',
    INFO    : 'Info',
    BALANCE : 'Balance',
    HISTORY : 'History',
    LOGIN   : 'Log In',
    EDITOR  : 'Editor',
    ABOUT   : 'About',
    UPLOAD  : 'Upload',
};

const styles = {
    appbar: {
        backgroundColor: '#0065B3',
    },
    floatingButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
};

class App extends Component {

    constructor(props,context) {
        super(props,context);

        this.state = {
            controller: CONTROLLERS.MAIN,
            title: CONTROLLERS_TITLE.MAIN,
            drawer: false,
            loginModal: false,
            sexState: 0,
            controlledDate: null,

        }
    }

    
  handleDrawerOpen() {

   this.setState({drawer: true}); 
}

  getAppBar() {
      let OnMenuItemClick = (controller, title) => {
          this.setState({
              open: false,
              controller: controller,
              title     : title
          })
      }

      return (
          <AppBar
              title={this.state.title}
              style={styles.appbar}
              iconElementLeft={<IconButton onClick={()=> this.handleDrawerOpen()}><NavigationMenu/></IconButton>}
              iconElementRight={<IconButton><ActionAccountCircle onClick={()=>OnMenuItemClick(CONTROLLERS.LOGIN, CONTROLLERS_TITLE.LOGIN)}/></IconButton>}
          >

          </AppBar>
      )
  }

  getFloatButton() {
      return (
          <FloatingActionButton style={styles.floatingButton} secondary={true}>
              <ActionPrint/>
          </FloatingActionButton>
      )
  }

  getDrawer() {

      const OnMenuItemClick = (controller, title) => {
          this.setState({
              open: false,
              controller: controller,
              title     : title
          })
      }

      return (
          <Drawer
              open={this.state.drawer}
              docked={false}
              onRequestChange={(drawer)=>this.setState({drawer})}
          >
              <List>
                  <div>
                      <TextField
                          fullWidth={false}
                          floatingLabelText="Search"
                      />
                  </div>

                  <SubHeader>GENERAL</SubHeader>
                  <ListItem
                      primaryText="Main"
                      leftIcon={<ActionHome/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.MAIN, CONTROLLERS_TITLE.MAIN)}
                  />
                  <ListItem
                      primaryText="Balance"
                      leftIcon={<ActionAccountBalanceWallet/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.BALANCE, CONTROLLERS_TITLE.BALANCE)}
                  />
                  <ListItem
                      primaryText="History"
                      leftIcon={<ActionHistory/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.HISTORY, CONTROLLERS_TITLE.HISTORY)}
                  />

                  <Divider/>
                  <SubHeader>PRINT</SubHeader>

                  <ListItem
                      primaryText="Text Editor"
                      leftIcon={<ActionSpellcheck/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.EDITOR, CONTROLLERS_TITLE.EDITOR)}
                  />
                  <ListItem
                      primaryText="File Upload"
                      leftIcon={<FileFileUpload/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.UPLOAD, CONTROLLERS_TITLE.UPLOAD)}
                  />
                  <ListItem
                      primaryText="From Template"
                      leftIcon={<ActionClass/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.INFO, CONTROLLERS_TITLE.INFO)}
                  />
                  <Divider/>
                  <SubHeader>INFOGRAPHIC</SubHeader>
                  <ListItem
                      primaryText="Info"
                      leftIcon={<ActionInfo/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.INFO, CONTROLLERS_TITLE.INFO)}
                  />
                  <ListItem
                      primaryText="About"
                      leftIcon={<ImageNaturePeople/>}
                      onClick={()=>OnMenuItemClick(CONTROLLERS.ABOUT, CONTROLLERS_TITLE.ABOUT)}
                  />
              </List>
          </Drawer>
      )
  }


  render() {
    return (
        <MuiThemeProvider>
            <div>
                {this.getDrawer()}
                <div>
                    {this.getAppBar()}
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
