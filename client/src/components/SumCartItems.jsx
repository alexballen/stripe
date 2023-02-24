const SumCartItems = (arr1, arr2) => {
  const sumaTotal = [];
  for (let i = 0; i < arr1.length; i++) {
    sumaTotal[i] = arr1[i] * arr2[i];
  }
  return sumaTotal;
};

export default SumCartItems;
