import Deck from '../src/Deck.js';
import Card from '../src/Card.js';

describe('Deck', () => {
  test('has 52 unique cards after construction', () => {
    const d = new Deck();
    expect(d.size).toBe(52);

    // Проверим уникальность
    const set = new Set(d.debugList());
    expect(set.size).toBe(52);
  });

  test('draw reduces size and returns Card or array', () => {
    const d = new Deck().shuffle();
    const one = d.draw();
    expect(one instanceof Card).toBe(true);
    expect(d.size).toBe(51);

    const three = d.draw(3);
    expect(Array.isArray(three)).toBe(true);
    expect(three).toHaveLength(3);
    expect(d.size).toBe(48);
  });

  test('putToBottom returns cards back', () => {
    const d = new Deck();
    const taken = d.draw(5);
    expect(d.size).toBe(47);
    d.putToBottom(taken);
    expect(d.size).toBe(52);
  });

  test('draw too many throws', () => {
    const d = new Deck();
    expect(() => d.draw(53)).toThrow(RangeError);
  });
});