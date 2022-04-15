import "./App.css";
import Board from "./components/Board";
import { createContext, useState, useEffect } from "react";
import { boardDefault, generateWordSet } from "./Words";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setAttempt] = useState({attempt: 0, letterPosition: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetter, setDisabledLetter] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    gussedWord: false,
  });
  
  

  useEffect(() => {
   generateWordSet().then((words) => {
     setWordSet(words.wordSet);
     setCorrectWord(words.todaysWord);
   });

  }, []);

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

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currentWord.toLowerCase())) {
      setAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    } else {
      alert("Word not found");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 4) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };




  return (
   <div className="App">
      <nav>
          <h1>Wordle </h1> 
      </nav>
      <AppContext.Provider value={{
        board, 
        setBoard, 
        currAttempt, 
        setAttempt, 
        onDelete, 
        onEnter, 
        onSelectLetter, 
        correctWord, 
        setDisabledLetter,
        disabledLetter,
        gameOver, 
        setGameOver
        }}>
        <div className="game">
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />} 
        </div>
      </AppContext.Provider>
   </div>
  );
}

export default App;
