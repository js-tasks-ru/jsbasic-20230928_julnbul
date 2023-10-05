let calculator = {
  read(x, y) {
    this.newValue = x;
    this.newValue2 = y;
  },
  sum() {
    return this.newValue + this.newValue2;
  },
  mul() {
    return this.newValue * this.newValue2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
