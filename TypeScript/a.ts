type product = {
    name: string, price: number, stock: number, isGood?: boolean
}

const products1: product[] = [
    { name: "Laptop", price: 60000, stock: 10, isGood: true },
    { name: "Mouse", price: 800, stock: 3, isGood: true },
    { name: "Keyboard", price: 1200, stock: 0 },
    { name: "Monitor", price: 15000, stock: 7 },
    { name: "Headphones", price: 2500, stock: 2 }
];

const products2: product[] = [
    { name: "Apples", price: 100, stock: 200 },
    { name: "Bananas", price: 40, stock: 3 },
    { name: "Mangos", price: 60, stock: 0 },
    { name: "Kivi", price: 200, stock: 1 },
    { name: "Orange", price: 55, stock: 500 }
];

function stockStatus(stock: number): string {
    if (stock === 0) return "Out of Stock"
    if (stock <= 5) return "Low Stock"
    else return "In Stock"
}

function outputStyle(prodArray: product[]):void {
    for (const element of prodArray) {
        console.log(`${element.name} - $${element.price} | Quantity: ${element.stock} | Status: ${stockStatus(element.stock)} | and is GOod: ${element.isGood}`);
    }
    console.log('-----------------');
calculations(prodArray)
}

function calculations(prodArray: product[]) {
    let sumOfInventory = 0
    let total = 0
    let maxInventory = 0
    let mostStocked = ''
    let mostExpensive = ""
    let maxPrice = 0

    for (const element of prodArray) {
        sumOfInventory = sumOfInventory + element.price * element.stock
        if (maxPrice < element.price) {
            maxPrice = element.price
            mostExpensive = element.name
        }
        if (maxInventory < element.stock) {
            maxInventory = element.stock
            mostStocked = element.name
        }
        total = total + element.price
    }

    // Total Inventory Value: ₹663100
    console.log(`Total Inventory Value is $${sumOfInventory}`);

    console.log(`Most Expensive Product: ${mostExpensive} priced at ${maxPrice}`);
    console.log(` Average cost of products: ${total / prodArray.length}`);
    console.log(`Most Stocked Product: ${mostStocked}`)
}

// try to get this using functions
// Output:
// Laptop - ₹60000 | Quantity: 10 | Status: In Stock
// Mouse - ₹800 | Quantity: 3 | Status: Low Stock
// Keyboard - ₹1200 | Quantity: 0 | Status: Out of Stock
// Monitor - ₹15000 | Quantity: 7 | Status: In Stock
// Headphones - ₹2500 | Quantity: 2 | Status: Low Stock
// -----------------------
// Total Inventory Value: ₹663100
// Most Expensive Product: Laptop priced at ₹60000
// Average cost of products: ₹5100
// Most Stocked Product: Laptop4

outputStyle(products1)
outputStyle(products2)