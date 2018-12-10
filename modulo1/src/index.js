const sum = (...params) =>
  params.reduce(function (item, next) {
    return item + next
  })

alert(sum(5, 5, 5, 5))
