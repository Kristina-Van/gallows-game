import React from 'react';
import words from './Vocab.json'
import './App.css';
import {Hangman} from "./components/Hangman";
import {Keyboard} from "./components/Keyboard";
import {Word} from "./components/Word";

function App() {
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
            <Keyboard/>
            <Word/>
            <div style={{
                alignSelf: "stretch"
            }}>

            </div>
        </div>
    );
}

export default App;
