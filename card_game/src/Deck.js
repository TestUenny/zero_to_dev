// Класс колоды.
// Цели: создать 52 уникальные карты, циклы for, массивы/Set, методы работы со стеком.

import Card from './Card.js';

export default class Deck {
  constructor() {
    // TODO: создайте this.cards как массив из 52 уникальных Card
    // Подсказка: два вложенных цикла по Card.ranks() и Card.suits()
    this.cards = [];
    for (const suit of Card.suits()) {
        for (const rank of Card.ranks()) {
            this.cards.push(new Card(rank, suit));
        }
    }
  }

  /** Текущее количество карт в колоде */
  get size() {
    // TODO
    return this.cards.length;
  }

  /** Перемешать колоду (Fisher–Yates). Модифицирует this.cards, возвращает this. */
  shuffle() {
    // TODO: реализуйте алгоритм перебора с конца и обмена элементов
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this;
  }

  /**
   * Взять верхнюю карту/карты.
   * @param {number} count по умолчанию 1
   * @returns {Card|Card[]} — одну карту, либо массив карт при count>1
   */
  draw(count = 1) {
    // TODO: извлеките с конца массива. Проверьте, что карт хватает (RangeError).
    if (this.size < count) {
        throw new RangeError ("There are not enough cards!");
    }
    if (count === 1) {
        return this.cards.pop();
    } else {
        return this.cards.splice(-count);
    }
  }

  /** Сбросить список карт в низ колоды (например, после раунда) */
  putToBottom(hand) {
    // TODO: добавьте массив cards в начало или конец — на ваш выбор, но стабильно.
    this.cards.unshift(...hand);
    return this;
  }

  /** Вернуть плоский массив строк представлений (для отладки) */
  debugList() {
    // TODO: верните this.cards.map(c => c.toString())
    return this.cards.map(c => c.toString());
  }
}