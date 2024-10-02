import express from 'express'
import cors from 'cors'
const app = express();

app.use(cors());
app.use(express.json());

// Simulate products stored in an array
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
    { id: 4, name: 'Product 4', price: 250 },
    { id: 5, name: 'Product 5', price: 300 },
];

// Endpoint to get the list of products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
