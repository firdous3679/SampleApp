import React from 'react';
import ProductCard from '../components/productCard';
import '../Styles/Home.css'; // Assuming you are using a CSS file for styling

const Home = () => {
    // Example data for categories and featured products
    const categories = ['Women’s Clothing', 'Men’s Clothing', 'Children’s Clothing'];
    const featuredProducts = [
        { id: 1, name: 'Summer Dress', category: 'Women', price: 29.99 },
        { id: 2, name: 'Casual T-Shirt', category: 'Men', price: 19.99 },
        { id: 3, name: 'Kids Hoodie', category: 'Children', price: 24.99 },
    ];

    return (
        <div>
            
            <main>
                {/* Featured Products Section */}
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <div className="product-grid">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Clothing Categories Section */}
                {categories.map((category, index) => (
                    <section key={index} className="category-section">
                        <h2>{category}</h2>
                        <div className="product-grid">
                            {/* Example ProductCards for each category */}
                            <ProductCard product={{ id: 1, name: `${category} Item 1`, price: 29.99 }} />
                            <ProductCard product={{ id: 2, name: `${category} Item 2`, price: 19.99 }} />
                            <ProductCard product={{ id: 3, name: `${category} Item 3`, price: 24.99 }} />
                        </div>
                    </section>
                ))}
            </main>

        </div>
    );
};

export default Home;
