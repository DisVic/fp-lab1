// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел
const getSquares = (arr) => arr.map(num => num ** 2);

// Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определенным свойством
const filterByProperty = (arr, prop) => arr.filter(obj => obj.hasOwnProperty(prop));

// Функция, которая принимает массив чисел и возвращает их сумму
const getSum = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Функция высшего порядка, которая принимает функцию и массив в качестве аргументов и применяет функцию к каждому элементу массива
const applyFunctionToArray = (func, arr) => arr.map(func);

// Пример массива чисел и объектов
const numbers = [1, 2, 3, 4, 5, 6];
const objects = [{value: 3}, {value: 7}, {value: 10}, {value: 15}];

// Демонстрация работы функций с выводом в консоль
console.log("Массив четных чисел:", getEvenNumbers(numbers));
console.log("Массив квадратов чисел:", getSquares(numbers));
console.log("Объекты с указанным свойством 'value':", filterByProperty(objects, 'value'));
console.log("Сумма чисел в массиве:", getSum(numbers));
console.log("Применение функции удвоения ко всем элементам массива:", applyFunctionToArray(num => num * 2, numbers));

// Пример использования функции для суммы квадратов всех чётных чисел
const sumOfEvenSquares = (arr) => {
  const evenNumbers = getEvenNumbers(arr);
  const squares = getSquares(evenNumbers);
  return getSum(squares);
};
console.log("Сумма квадратов чётных чисел:", sumOfEvenSquares(numbers));

// Пример использования функции для нахождения среднего арифметического всех чисел, больших заданного значения
const averageGreaterThanValue = (arr, prop, minValue) => {
  const filteredValues = arr
    .filter(obj => obj[prop] > minValue)
    .map(obj => obj[prop]);
  
  const sum = getSum(filteredValues);
  return filteredValues.length > 0 ? sum / filteredValues.length : 0;
};
console.log("Среднее арифметическое значений, больше 5:", averageGreaterThanValue(objects, 'value', 5));
