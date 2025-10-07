// Класс одной карты колоды.
// Цели: корректно хранить ранги/масти, типы данных (string/number), геттеры, статические методы.

export default class Card {
  // TODO: объявите приватные поля #rank и #suit
  // Подсказка: используйте синтаксис private fields (#field)
    #rank;
    #suit;
  /**
   * @param {string} rank - один из 'A', '2'..'10', 'J', 'Q', 'K'
   * @param {string} suit - один из '♠', '♥', '♦', '♣'
   */
  constructor(rank, suit) {
    // TODO: проверьте типы и допустимые значения; при неверных — бросайте TypeError
    // TODO: сохраните в приватные поля
    this.#rank = this.#checkRank(rank);
    this.#suit = this.#checkSuit(suit);
  }

  #checkRank (rank) {
    if (typeof rank === "string" && Card.ranks().includes(rank)) {
        return rank;
    } else {
        throw new TypeError ("Invalid rank");
    }
  }

  #checkSuit (suit) {
    if (typeof suit === "string" && Card.suits().includes(suit)) {
        return suit;
    } else {
        throw new TypeError ("Invalid suit");
    }
  }

  /** Геттер ранга (string) */
  get rank() {
    // TODO
    return this.#rank;
  }

  /** Геттер масти (string) */
  get suit() {
    // TODO
    return this.#suit;
  }

  /** Числовая ценность карты по правилам раунда: A=11, J/Q/K=10, цифры=номинал */
  get value() {
    // TODO: верните number. Используйте switch/Map/if — на ваш выбор.
    const values = {"A": 11, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10};
    return values[this.#rank];
  }

  /** Удобный вывод, например: "A♠" или "10♥" */
  toString() {
    // TODO
    return `${this.#rank}${this.#suit}`
  }

  /** Статический помощник: вернёт массив допустимых рангов */
  static ranks() {
    return ['A', ...Array.from({ length: 9 }, (_, i) => String(i + 2)), 'J', 'Q', 'K'];
  }

  /** Статический помощник: вернёт массив допустимых мастей */
  static suits() {
    return ['♠', '♥', '♦', '♣'];
  }

  /** Проверка равенства по рангу и масти */
  equals(other) {
    // TODO: верните true/false
    return this.rank === other.rank && this.suit === other.suit;
  }
}