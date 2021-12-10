import React from "react";
import {Button} from "components/common";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script'
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>
        App
      </h1>
      <p>text</p>
      <Button>
        Test
      </Button>
    </>
  );
}

export default App;
