import React from "react";
import {Button} from "components/common";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  p{
    font-size: 80px;
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
