export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()  // 展開巢狀陣列 [1, 2, [3, 4]] ->  [1, 2, 3, 4]
  }

  return ['all', ...new Set(unique)]
}