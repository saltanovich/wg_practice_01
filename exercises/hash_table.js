/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    let hash = 0;
    let i;
    let chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
      chr   = key.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    const hash = this.hashKey(key);
    return this.memory[hash];
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    const hash = this.hashKey(key);
    this.memory[hash] = value;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    const hash = this.hashKey(key);
    delete this.memory[hash];
  }
}
