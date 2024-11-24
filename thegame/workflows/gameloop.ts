import * as domain from '../domain'

export function gameloop() {
    // Print some intro
    console.log('Welcome to "GUESS A NUMBER"!')

    // Ask for config? (Guess count)
    console.log('How many guesss would you like?')
    // TODO: Implement console input
    const maxGuessCount = domain.Counter.parse(10)
    const target = domain.Number.parse(42)
    let match: domain.Match = domain.startMatch({
        maxGuessCount,
        target
    })

    // Loop
    while (match.state === domain.OngoingState) {
        console.log('Make a guess!')
        const guess = domain.Number.parse(12)
        match = domain.makeAGuess(match, guess)
        if(match.state == domain.OngoingState) {
            console.log('Wrong!')
        }
    }

    if(match.result === domain.Won)
        console.log('You won!')
    else
        console.log('You lost!')

}