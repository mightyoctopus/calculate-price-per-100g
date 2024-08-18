interface Product {
    name: string;
    weightInKg: number;
    price: number;
  }
  
  interface PricePer100g extends Product {                                                  
    per100gPrice: number;
  }
  
  const calcPricePer100g = (products: Product[]):PricePer100g[] => {
    return products.map(product => {
      // Calculate the price per 1g and multiplies it by 100 (Any weight as you prefer)
      const pricePer100g = (product.price / (product.weightInKg * 1000)) * 100;
      return {
        ...product,
        per100gPrice: parseFloat(pricePer100g.toFixed(2)),
      }
    });
  }
  
  // Function Usage:
  const products: Product[] = [
    { name: 'Product A', weightInKg: 2, price: 10 },
    { name: 'Product B', weightInKg: 1.3, price: 15 },
    { name: 'Product C', weightInKg: 7, price: 30 },
    { name: 'Product D', weightInKg: 3.5, price: 47},
  ];
  
  const priceResult = calcPricePer100g(products);
  console.log(priceResult);
