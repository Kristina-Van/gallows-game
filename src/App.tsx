import React, {useCallback, useEffect, useState} from 'react';
import words from './Vocab.json'
import './App.css';
import {Hangman} from "./components/Hangman";
import {Keyboard} from "./components/Keyboard";
import {Word} from "./components/Word";

function App() {
    const [wordGuess, setWordGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });
    const [guessLetters, setGuessLetters] = useState<string[]>([]);
    const wrongLetters = guessLetters.filter(letter => !wordGuess.includes(letter));

    const isLoser = wrongLetters.length >= 6;
    const isWinner = wordGuess.split('').every(letter => guessLetters.includes(letter));

    const addGuessLetter = useCallback((letter: string) => {
        if (guessLetters.includes(letter) || isWinner || isLoser) return
        setGuessLetters(currentLetters => [...currentLetters, letter])
    }, [guessLetters || isLoser || isWinner])


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]/))
                return
            e.preventDefault();
            addGuessLetter(key);
        }
        document.addEventListener("keypress", handler)
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessLetters])
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
                {isWinner && 'You are win!'}
                {isLoser && 'You are lost!'}
            </div>
            <Hangman numberOfGuesses={wrongLetters.length}/>
            <Word guessLetters={guessLetters}
                  wordGuess={wordGuess}
                  reveal={isLoser}/>
            <div style={{
                alignSelf: "stretch"
            }}>
                <Keyboard activeLetters={guessLetters.filter(letter => wordGuess.includes(letter))}
                          inactiveLetters={wrongLetters}
                          addGuessLetter={addGuessLetter}
                          disabled={isWinner || isLoser}/>
            </div>

        </div>
    );
}

export default App;
