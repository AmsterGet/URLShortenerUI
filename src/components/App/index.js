import React from "react";
import styled from "styled-components";
import thunk from "redux-thunk";
import logger from "redux-logger";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import appReducer from "../../reducers/appReducer";
import HeaderContainer from "../../containers/HeaderContainer/index";
import Content from "../Content";
import Footer from "../Footer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducer,
  {},
  composeEnhancers(applyMiddleware(thunk, logger))
);

const WrappedContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 auto;
    width: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <WrappedContainer>
              <Container>
                <HeaderContainer />
                <Content />
              </Container>
              <Footer />
            </WrappedContainer>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}
