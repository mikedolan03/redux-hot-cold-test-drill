import reducer from './reducer';
import {makeGuess, restartGame} from './actions';

describe('reducer', () => {

	

	it('Should set intial state when nothing is passed', () => {
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.guesses).toEqual( [] );
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.auralStatus).toEqual('');
		//expect(state.correctAnswer).exists(true);
		});

 it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

 describe('makeGuess', () => {
        it('Should make a guess and add it to state', () => {
            let state = {guesses: [], feedback: '', correctAnswer: 5}; 
            state = reducer(state, makeGuess(45));
            expect(state.guesses).toEqual([45]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([45, 100]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(4));
            expect(state.guesses).toEqual([45, 100, 4]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(5));
            expect(state.guesses).toEqual([45, 100, 4, 5]);
            expect(state.feedback).toEqual("You got it!");
        });
    });

describe('restartGame', () => {
        it('Should restart the game to initial state', () => {
            let state = {guesses: [5, 6, 7], feedback: "You're Cold...", correctAnswer: 5}; 
            state = reducer(state, restartGame(5));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual("Make your guess!");
            
        });
    });

});
