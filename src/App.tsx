import React, {useState} from 'react';
import words from './Vocab.json'
import './App.css';
import {Hangman} from "./components/Hangman";
import {Keyboard} from "./components/Keyboard";
import {Word} from "./components/Word";

function App() {
    const [wordGuess, setWordGuess] = useState(() => {
        Math.floor(Math.random()*words.length)
    });
    const [guessLetters, setGuessLetters] = useState<string[]>([]);
    return (
        <div style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center"
        }}>
            <div style={{
                fontSize: "2rem",
                textAlign: "center"
            }}>
            </div>
            <Hangman/>
            <Word/>
            <Keyboard/>
            <div style={{
                alignSelf: "stretch"
            }}>

            </div>
        </div>
    );
}

export default App;
