// Старался использовать различные методы и способы
// Не делал проверку там, где в условиях задачи были даны конкретные данные.

let func = (arr) => arr.join(", ") + "."

// console.log(func(["питер", "москва", "минск", "париж"]))

// ============================================

let func2 = (int) => Math.round(int / 5) * 5

// console.log(func2(-27.51))

// ============================================


function func3(int) {
  if (int < 0 || !Number.isInteger(int)) {
    return "Отрицательное или не целое число не может быть использовано"
  } else {
    return int % 10 === 0 || int % 10 > 4 || int > 9 && int < 21 ? `${int} компьютеров` : int % 10 === 1 ? `${int} компьютер` : `${int} компьютера`
  }
}

// console.log(func3(980))

// ============================================

function func4(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

// console.log(func4(77))

// ============================================

function func5(arr1, arr2) {

  let duplicates1 = new Set()
  arr1.map((element, index, array) => {
    if (array.indexOf(element) !== index) {
      duplicates1.add(element)
    };
  });

  let duplicates2 = new Set()
  arr2.map((element, index, array) => {
    if (array.indexOf(element) !== index) {
      duplicates2.add(element)
    };
  });

  let result = [...duplicates1, ...duplicates2].filter((element, index, array) => {
    return array.indexOf(element) !== index
  });

  return result
}

// console.log(func5([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))

// ============================================

let table = "\u00A0"
function func6(n) {
  for (let i = 1; i <= n; i++) {
    table += "\u00A0" + i
    if ((i + 1) * n > 9) {
      table += "\u00A0"
    }
  }
  table += "\n"

  for (let i = 1; i <= n; i++) {
    table += i
    for (let k = 1; k <= n; k++) {
      table += "\u00A0" + i * k
      if ((i + 1) * n > 9 && i * (k + 1) < 10) {
        table += "\u00A0"
      }

    }
    table += "\n"
  }
}

func6(7)

// console.log(table)

