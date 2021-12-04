
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-color: rgb(201, 201, 192);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  &::placeholder {
  color: rgb(107, 114, 114);
  opacity: 1; 
}
`
ReactDOM.render(

    <Provider store={Store}>
      <GlobalStyle  />
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
