import { z } from 'zod'

const isA = z

export const Counter = z.number().int().min(1).brand('Counter')
export type Counter = z.infer<typeof Counter>
export const Number = z.number().int().min(1).max(100).brand('Number')
export type Number = z.infer<typeof Number>

export const OngoingState = 'Ongoing' as const
export const FinishedState = 'Finished' as const

export const Won = 'Won' as const
export const Lost = 'Lost' as const
export const Undecided = 'Undecided' as const
type MatchResult = typeof Won | typeof Lost
type GuessResult = typeof Won | typeof Lost | typeof Undecided

type OngoingMatch = {
    state: typeof OngoingState
    target: Number
    guessesMade: Number[]
    guessesLeft: Counter
}

type FinishedMatch = {
    state: typeof FinishedState
    target: Number
    guessesMade: Number[]
    result: MatchResult
}

export type Match =
    | OngoingMatch
    | FinishedMatch

type MatchConfig = {
    target: Number
    maxGuessCount: Counter
}

export function startMatch(config: MatchConfig) {
    // Initial state of the Match.
    // Any validation to be made?
    return {
        state: OngoingState,
        target: config.target,
        guessesMade: [],
        guessesLeft: config.maxGuessCount,
    }
}

// add: guess to: match
export function makeAGuess(match: OngoingMatch, guess: Number): Match {
    const guessesMade = [guess, ...match.guessesMade]
    const target = match.target
    const result = resultFromGuess(match, guess)
    return result != Undecided ? {
        target,
        guessesMade,
        state: FinishedState,
        result,
    } : {
        target,
        guessesMade,
        guessesLeft: Counter.parse(match.guessesLeft - 1),
        state: OngoingState,
    }
}

function resultFromGuess(match: OngoingMatch, guess: Number): GuessResult {
    if (guess === match.target) return Won
    if (match.guessesLeft === 1) return Lost
    return Undecided
}
