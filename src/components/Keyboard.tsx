import {keyboard} from "@testing-library/user-event/dist/keyboard";
import styles from "./Keyboard.module.css";

const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessLetter: (letter: string) => void
    disabled: boolean
}

export function Keyboard({activeLetters, inactiveLetters, addGuessLetter, disabled = false}: KeyboardProps) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
        }}>
            {keys.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInActive = inactiveLetters.includes(key);
                return (
                    <button onClick={() => addGuessLetter(key)}
                            className={`${styles.btn} ${isActive ? styles.active : ''}
                            ${isInActive ? styles.inactive : ''}`}
                            disabled={isActive || isInActive || disabled}
                            key={key}>{key}</button>
                )
            })}
        </div>
    )
}
