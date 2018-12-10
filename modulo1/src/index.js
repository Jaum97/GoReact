const sum = (...params) =>
  params.reduce(function (item, next) {
    return item + next
  })

window.alert(sum(5, 5, 5, 50))
