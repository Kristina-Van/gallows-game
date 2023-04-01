type WordProps = {
    guessLetters: string[]
    wordGuess: string
}
export function Word({guessLetters, wordGuess}: WordProps) {
    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {wordGuess.split("").map((letter, index) => (
                <span style={{borderBottom: ".1em solid black"}} key={index}>

                   <span style={{
                       visibility: guessLetters.includes(letter) ? "visible" : "hidden",
                       color: !guessLetters.includes(letter) ? "red" : "black"
                   }}
                   >{letter}</span>

                </span>
            ))}
        </div>
    )
}
