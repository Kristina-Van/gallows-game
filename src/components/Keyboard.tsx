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
}

export function Keyboard({activeLetters, inactiveLetters, addGuessLetter}: KeyboardProps) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
        }}>
            {keys.map((key) => {
                return (
                    <button onClick={() => addGuessLetter(key)}
                        style={{
                        fontSize: "2 rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        cursor: "pointer",
                    }}
                            key={key}>{key}</button>
                )
            })}
        </div>
    )
}
