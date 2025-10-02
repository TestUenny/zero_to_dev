import Card from '../src/Card.js';

describe('Card', () => {
  test('creates valid card and exposes rank/suit', () => {
    const c = new Card('A', '♠');
    expect(c.rank).toBe('A');
    expect(c.suit).toBe('♠');
    expect(c.toString()).toBe('A♠');
  });

  test('value mapping works', () => {
    expect(new Card('A', '♦').value).toBe(11);
    expect(new Card('K', '♥').value).toBe(10);
    expect(new Card('10', '♣').value).toBe(10);
    expect(new Card('2', '♣').value).toBe(2);
  });

  test('invalid inputs throw', () => {
    expect(() => new Card('1', '♠')).toThrow(TypeError);
    expect(() => new Card('A', 'X')).toThrow(TypeError);
  });

  test('equals compares rank and suit', () => {
    const a = new Card('Q', '♣');
    const b = new Card('Q', '♣');
    const c = new Card('Q', '♦');
    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });
});