const reverse = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++)
    newArr.unshift(arr[i])

  console.log(newArr)
}

reverse([1,2,3,4,5])
