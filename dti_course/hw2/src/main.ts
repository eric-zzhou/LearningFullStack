// Homework Assignment: Trends in Web Development
// Now that you have JavaScript down, let's work on TypeScript!
// This assignment will test your knowledge of types, functional programming, string interpolation, and more.
// Each exercise is worth 10 points. 30 points are provided for free.
// Once you have a solution, you can run `pnpm test` to run the sample test cases we have provided.
// This does not guarantee that you will get full credit on the autograder, but it is a good start!
// Let us know if you have any questions or concerns on Ed!

// You should be able to run `pnpm test` in your terminal to run the sample test cases we have provided!

// Exercise 1: Transform a List of Products (10 points)
/**
 * Input: an array of products with name, price, and category.
 * Output: an array of products where the name is capitalized, price is increased by 10%, and only electronics are allowed.
 */
type Product = { name: string; price: number; category: string };
const transformProducts = (products: Product[]): Product[] =>
    products.filter(x=> x.category == "electronics").map((product) => ({name: product.name.toUpperCase(), price: product.price * 1.1, category: product.category}))
    
// Exercise 2: Aggregate Orders (10 points)
/**
 * Input: an array of orders with id, customerId, and amount.
 * Output: an object that sums the amounts by customerId.
 */
type Order = { id: number; customerId: number; amount: number };
const aggregateOrders = (orders: Order[]): { [customerId: string]: number } => {
    let uniq: number[] = [];
    for (const order of orders) {
        if (!uniq.includes(order.customerId)) {
            uniq.push(order.customerId);
        }
    }

    let ret: { [customerId: string]: number } = {};
    for (const cId of uniq) {
        let curr: Order[] = orders.filter(order => order.customerId == cId);
        let agg: number = 0;
        for (const order of curr) {
            agg += order.amount;
        }
        ret[cId.toString()] = agg;
    }
    return ret;    
};


// Exercise 3: Analyze Movie Ratings (10 points)
/**
 * Input: an array of movies with title, genre, and rating.
 * Output: an array of strings containing only the title and genre of movies rated above 8, and formatted as "Title (Genre)".
 */
type Movie = { title: string; genre: string; rating: number };
const analyzeMovies = (movies: Movie[]): string[] =>
    movies.filter(movie => movie.rating > 8).map(movie => movie.title + " (" + movie.genre + ")");
    

// Exercise 4: Describe Person's Financial Situation (10 points)
/**
 * Input: an object representing a person's name, age, and bank balance.
 * Output: Return 'wealthy' if the balance is over 10000, 'moderate' if the balance is between 1000 and 10000, and 'poor' otherwise.
 */
type Person = { name: string; age: number; balance: number };
const describeFinance = (person: Person): string => {
    if (person.balance > 10000) {
        return "wealthy";
    } else if (person.balance > 1000) {
        return "moderate";
    } else {
        return "poor";
    }
}


// Exercise 5: Construct a Sentence (10 points)
/**
 * Input: an object containing name and age parameters.
 * Output: a complete sentence using string interpolation, formatted as "Hello, my name is [name] and I'm [age] years old."
 */
type Params = { name: string; age: number };
const constructSentence = (params: Params): string =>
    `Hello, my name is ${params.name} and I'm ${params.age} years old.`


// Exercise 6: Categorize Students by Grades (10 points)
/**
 * Input: an array of students with a name and grade.
 * Output: an object categorizing students by their grades (A, B, C, D, F).
 */
type Student = { name: string; grade: number };
const categorizeStudents = (
    students: Student[]
): { [grade: string]: Student[] } => {
    let ret: { [grade: string]: Student[] } = {};
    ret['A'] = students.filter(student => student.grade >= 90 && student.grade <= 100);
    ret['B'] = students.filter(student => student.grade >= 80 && student.grade < 90);
    ret['C'] = students.filter(student => student.grade >= 70 && student.grade < 80);
    ret['D'] = students.filter(student => student.grade >= 60 && student.grade < 70);
    ret['F'] = students.filter(student => student.grade >= 50 && student.grade < 60);
    return ret;
};

// Exercise 7: Handle Null Values in Nested Object (10 points)
/**
 * Input: a nested object that may contain null values at any level.
 * Output: a string containing a value deep inside the object, or a default "Not available" if any part of the path is null or undefined.
 * Use nullish coalescing to handle potential null values.
 */
type NestedObject = { level1?: { level2?: { level3?: { value?: string } } } };
const handleNestedObject = (obj: NestedObject): string =>
    obj.level1?.level2?.level3?.value ?? "Not available";

    // {
    //     if (obj.level1 && obj.level1.level2 && obj.level1.level2.level3 && obj.level1.level2.level3.value) {
    //         return obj.level1.level2.level3.value;
    //     } else {
    //         return "Not available";
    //     }
    // }

// End of assignment.

export {
    transformProducts,
    aggregateOrders,
    analyzeMovies,
    describeFinance,
    constructSentence,
    categorizeStudents,
    handleNestedObject,
};
