import React, {useState} from 'react';
import words from './Vocab.json'
import './App.css';
import {Hangman} from "./components/Hangman";
import {Keyboard} from "./components/Keyboard";
import {Word} from "./components/Word";

function App() {
    const [wordGuess, setWordGuess] = useState(() => {
       return words[Math.floor(Math.random()*words.length)]
    });
    const [guessLetters, setGuessLetters] = useState<string[]>([]);
    const wrongLetters = guessLetters.filter(letter => !wordGuess.includes(letter))
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
            <div style={{
                alignSelf: "stretch"
            }}>
                <Keyboard/>
            </div>

        </div>
    );
}

export default App;
