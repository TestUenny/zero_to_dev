import Deck from '../src/Deck.js';
import Player from '../src/Player.js';
import Card from '../src/Card.js';

describe('Player', () => {
  test('initializes with name and empty hand', () => {
    const p = new Player('Max');
    expect(p.getName()).toBe('Max');
    expect(p.getHand()).toEqual([]);
    expect(p.handValue).toBe(0);
  });

  test('draw/discard flow', () => {
    const deck = new Deck();
    const p = new Player('Ana');

    p.drawFrom(deck, 2);
    expect(p.getHand()).toHaveLength(2);
    expect(deck.size).toBe(50);
    expect(p.handValue).toBeGreaterThanOrEqual(2); // минимально 2
    expect(p.handValue).toBeLessThanOrEqual(22);   // максимально 22

    p.discardTo(deck);
    expect(p.getHand()).toHaveLength(0);
    expect(deck.size).toBe(52);
  });

  test('applyRoundScore increases score', () => {
    const deck = new Deck();
    const p = new Player('Leo');
    p.drawFrom(deck, 2);
    const hv = p.handValue;
    p.applyRoundScore();
    // @ts-ignore — доступ к полю проверки ради теста
    expect(p.score).toBe(hv);
  });

  test('rejects non-string name', () => {
    // @ts-ignore
    expect(() => new Player(42)).toThrow(TypeError);
  });
});