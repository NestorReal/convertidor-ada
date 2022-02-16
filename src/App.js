import React, { Component } from 'react';
import { routes } from './Routes/Routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LoaderState from './Context/Loader/LoaderState';
import { Loader } from './Components/Loader/Loader';
import { LogginState } from './Context/Loggin/LogginState';
import { ModalContext } from './Components/ModalContext';
import ModalState from './Context/Modal/ModalState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {routes.map((itemRoute) => (
              <Route
                key={itemRoute.path}
                path={itemRoute.path}
                exact={itemRoute.exact}
                render={(props) => (
                  <ThemeProvider theme={theme}>
                    <ModalState>
                      <LoaderState>
                        <LogginState>
                          <Loader />
                          <ModalContext />
                          <itemRoute.component {...props} />
                        </LogginState>
                      </LoaderState>
                    </ModalState>
                  </ThemeProvider>
                )}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
