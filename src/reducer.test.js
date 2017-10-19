import reducer from './reducer.js';
import {newGame, makeGuess, toggleInfoModal} from './actions.js';

describe('Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('newGame', () => {
    it('Should start a new game', () => {
      let state = {
        guesses: [23, 24, 125],
        feedback: 'You got it!',
        correctAnswer: 125,
        showInfoModal: true
      };
      state = reducer(state, newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.showInfoModal).toEqual(false);
    });
  });

  describe('makeGuess', () => {
    it('Should make a guess', () => {
      let state = { 
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 95 
      };
      
      state = reducer(state, makeGuess('$#@'));
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Please enter a valid number');

      state = reducer(state, makeGuess(25));
      expect(state.guesses).toEqual([25]);
      expect(state.feedback).toEqual('You\'re Ice Cold...');

      state = reducer(state, makeGuess(60));
      expect(state.guesses).toEqual([25, 60]);
      expect(state.feedback).toEqual('You\'re Cold...');

      state = reducer(state, makeGuess(80));
      expect(state.guesses).toEqual([25, 60, 80]);
      expect(state.feedback).toEqual('You\'re Warm');

      state = reducer(state, makeGuess(90));
      expect(state.guesses).toEqual([25, 60, 80, 90]);
      expect(state.feedback).toEqual('You\'re Hot!');

      state = reducer(state, makeGuess(95));
      expect(state.guesses).toEqual([25, 60, 80, 90, 95]);
      expect(state.feedback).toEqual('You got it!');
    });
  });

  describe('toggleInfoModal', () => {
    it('Should toggle info modal display', () => {
      let state = { showInfoModal: false };
      
      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(true);

      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(false);
    });
  });
});