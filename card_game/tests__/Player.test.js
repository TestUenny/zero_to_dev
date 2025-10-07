import Deck from '../src/Deck.js';
import Player from '../src/Player.js';
import GameRound from '../src/GameRound.js';

describe('GameRound', () => {
  test('deal gives cards to each player', () => {
    const deck = new Deck();
    const p1 = new Player('P1');
    const p2 = new Player('P2');
    const gr = new GameRound([p1, p2], deck);

    gr.deal(2);
    expect(p1.getHand()).toHaveLength(2);
    expect(p2.getHand()).toHaveLength(2);
    expect(deck.size).toBe(52 - 4);
  });

  test('compute winner or draw', () => {
    const deck = new Deck();
    const p1 = new Player('A');
    const p2 = new Player('B');
    const gr = new GameRound([p1, p2], deck);

    gr.deal(2);
    const winner = gr.computeWinner();
    expect(['A', 'B', 'draw']).toContain(winner);
  });

  test('play performs full round and returns result object', () => {
    const deck = new Deck();
    const p1 = new Player('A');
    const p2 = new Player('B');
    const gr = new GameRound([p1, p2], deck);

    const res = gr.play(2);
    expect(['A', 'B', 'draw']).toContain(res.winnerName);
    expect(p1.getHand()).toHaveLength(0);
    expect(p2.getHand()).toHaveLength(0);
    expect(deck.size).toBe(52);
  });

  test('requires at least two players', () => {
    const deck = new Deck();
    const p1 = new Player('Solo');
    expect(() => new GameRound([p1], deck)).toThrow(TypeError);
  });
});