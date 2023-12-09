function isEnoughCapacity(products, containerSize) {
    let totalQuantity = 0;
  
    for (let key in products) {
      totalQuantity += products[key];
    }
    
    return totalQuantity <= containerSize;
}

