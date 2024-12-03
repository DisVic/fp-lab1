// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел
const getSquares = (arr) => arr.map(num => num ** 2);

// Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определенным свойством
const filterByProperty = (arr, prop) => arr.filter(obj => obj && typeof obj === "object" && obj.hasOwnProperty(prop));

// Функция, которая принимает массив чисел и возвращает их сумму
const getSum = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Функция высшего порядка, которая принимает функцию и массив в качестве аргументов и применяет функцию к каждому элементу массива
const applyFunctionToArray = (func, arr) => arr.map(func);

// Пример использования функции для суммы квадратов всех чётных чисел
const sumOfEvenSquares = (arr) => {
  const evenNumbers = getEvenNumbers(arr);
  const squares = getSquares(evenNumbers);
  return getSum(squares);
};

// Пример использования функции для нахождения среднего арифметического всех чисел, больших заданного значения
const averageGreaterThanValue = (arr, prop, minValue) => {
  const filteredValues = arr
    .filter(obj => obj && typeof obj === "object" && obj[prop] > minValue)
    .map(obj => obj[prop]);
  
  const sum = filteredValues.reduce((acc, value) => acc + value, 0); // Используем reduce для подсчёта суммы
  return filteredValues.length > 0 ? sum / filteredValues.length : 0;
};

// Пример массива чисел и объектов
const numbers = [1, 2, 3, 4, 5, 6];
const objects = [
  { id: 1, value: 42 },
  { id: 2 },
  { id: 3, value: 100 },
  null,
  "строка",
  { id: 4, value: null }
];

// Демонстрация работы функций с выводом в консоль
console.log("Массив четных чисел:", getEvenNumbers(numbers));
console.log("Массив квадратов чисел:", getSquares(numbers));
console.log("Объекты с указанным свойством 'value':", filterByProperty(objects, 'value'));
console.log("Сумма чисел в массиве:", getSum(numbers));
console.log("Применение сложения половины значения числа ко всем элементам массива:", applyFunctionToArray(num => num + num/2, numbers));
console.log("Сумма квадратов чётных чисел:", sumOfEvenSquares(numbers));
console.log("Среднее арифметическое значений, больше 5:", averageGreaterThanValue(objects, 'value', 5));
