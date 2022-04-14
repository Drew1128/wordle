import "./App.css";
import Board from "./components/Board";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setAttempt] = useState({attempt: 0, letterPosition: 0});

  const onSelectLetter = (keyVal) => {
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal;
    setBoard(newBoard);
    setAttempt({...currAttempt, letterPosition: currAttempt.letterPosition + 1});
  }

  const onDelete = () => {
    if (currAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = '';
    setBoard(newBoard);
    setAttempt({...currAttempt, letterPosition: currAttempt.letterPosition - 1});
  }

  const onEnter = () => {
     if (currAttempt.letterPosition !== 5) return;
     setAttempt({attempt: currAttempt.attempt + 1, letterPosition: 0});
  }




  return (
   <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setAttempt, onDelete, onEnter, onSelectLetter}}>
        <div className="game">
        <Board />
        <Keyboard />
        </div>
      </AppContext.Provider>
   </div>
  );
}

export default App;
