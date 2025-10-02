// Игрок с именем, рукой и счётом.
// Цели: инкапсуляция состояния, работа с массивами, вычисляемые значения.

import Card from './Card.js';

export default class Player {
  constructor(name) {
    // TODO: сохраните имя (string), проверьте тип; создайте пустой массив рук this.hand = []
    // Дополнительно: this.score = 0 (number)
  }

  getName() {
    // TODO
  }

  getHand() {
    // TODO: верните копию массива, чтобы снаружи не могли мутировать напрямую
  }

  /** Забрать карты из колоды */
  drawFrom(deck, count = 1) {
    // TODO: возьмите карты у deck.draw(count) и поместите в руку
    // Важно: поддержите оба случая — когда draw вернёт Card и когда массив
  }

  /** Сбросить руку (возврат в колоду) */
  discardTo(deck) {
    // TODO: передайте все карты в putToBottom, очистите руку
  }

  /** Посчитать сумму ценностей карт в руке */
  get handValue() {
    // TODO: цикл по this.hand и суммирование card.value
  }

  /** Применить очки за раунд (например, += handValue) */
  applyRoundScore() {
    // TODO
  }
}