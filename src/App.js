import React from "react";
import Game from "./components/Game";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Container>
          <h1>
            <i className="fas fa-th"></i> Tic Tac Toe{" "}
            <i className="fas fa-th"></i>
          </h1>
          <Game />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
