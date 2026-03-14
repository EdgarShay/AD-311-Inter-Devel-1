import "./App.css";

function ProductList() {
    //Normal Case 1: Smarthop, Laptop, Headphones, Smartwatch, Tablet, E-book
    // Normal Case 2: Product List with 4 products, each having id, name, description, price.
    //Edge Case 1: Const products = [];
    const products = [
        {
            id: 1,
            name: "Laptop",
            description: "High performance laptop for professionals",
            price: 1200
        },
        {
            id: 2,
            name: "Smartphone",
            description: "Latest smartphone with powerful camera",
            price: 900
        },
        {
            id: 3,
            name: "Headphones",
            description: "Wireless noise cancelling headphones",
            price: 250
        },
        {
            id: 4,
            name: "Smartwatch",
            description: "Track your health and daily activity",
            price: 300
        },
        // Edge Case 2: Product List with 5 products, each having id, name, description, price.
        {
            id: 5,
            name: "Tablet",
            description: "Portable tablet for entertainment and productivity",
            price: 500
        },
        // Edge Case 3: Price equals zero, free product
        {
            id: 6,
            name: "E-book",
            description: "Free e-book on programming",
            price: 0
        }

    ];

    return (

        <div className="container">

            <h1 className="title">Tech Product Store</h1>

            <div className="product-grid">

                {products.map((product) => (
                    // Normal Case 3: Each product use id as key key={product.id}

                    <div className="card" key={product.id}>

                        <h2>{product.name}</h2>

                        <p>{product.description}</p>

                        <p className="price">${product.price}</p>

                        <button className="btn">View Product</button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ProductList;