function listCategory () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const category = [
        'business',
        'english',
        'chinese'
      ]
      resolve(category)
    }, 200)
  })
}

export {
  listCategory
}
