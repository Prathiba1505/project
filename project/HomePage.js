import React, { useState } from 'react';
import './HomePage.css'; 
import { useCart } from './CartContext'; 

function Navbar({ onCartClick, onProductsClick, onAboutUsClick, onContactClick, onLogout, searchValue, onSearchChange }) {
  const { cartItems } = useCart(); 

  return (
    <nav className="navbar">
      <div className="navbar-logo">Supermarket</div>
      <ul className="navbar-links">
        <li onClick={onProductsClick}>Products</li>
        <li onClick={onAboutUsClick}>About Us</li>
        <li onClick={onContactClick}>Contact</li>
        <li className="navbar-link" onClick={onCartClick}>
          Cart ({cartItems.length})
        </li>
        <li className="navbar-link" onClick={onLogout}>
          Logout
        </li>
      </ul>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchValue} 
          onChange={onSearchChange} 
        />
        <button>Search</button>
      </div>
    </nav>
  );
}

function HeroSection({ onShopNowClick }) {
  return (
    <div className="hero-section">
      <h1>Fresh Groceries Delivered to Your Doorstep</h1>
      <p>Discover the best deals on fresh fruits, vegetables, and more.</p>
      <button className="shop-now-btn" onClick={onShopNowClick}>Shop Now</button>
    </div>
  );
}

function ProductCard({ image, name, price, description }) {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart({ id: Date.now(), image, name, price, description });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

function Products({ searchTerm }) {
  const allProducts = [
    { id: 1, image: 'https://www.fruitsmith.com/pub/media/catalog/product/cache/3d1197b96d84cacc4f40a78b1d94d82b/a/p/apple-usa.png', name: 'Apple', price: 0.99, description: 'Fresh red apples' },
    { id: 2, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400', name: 'Banana', price: 0.59, description: 'Ripe bananas' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROf9ZCPSLoUSf6gjVMC4SZsDeG5mizdtqWgg&s', name: 'Carrot', price: 0.89, description: 'Organic carrots' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8G3tLIWUDKqA_KPah80Zz0N_lIZQ5Mb3ww&s', name: 'Orange', price: 1.19, description: 'Juicy oranges' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkT_H1bqbM7gJsyq8rrDmN2y8jduzaqk3cw&s', name: 'Broccoli', price: 1.49, description: 'Fresh broccoli' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebldobg-Dl-uSZOzwk8CrLZr-vbSE02UYyg&s', name: 'Tomato', price: 1.29, description: 'Cherry tomatoes' },
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-section">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="no-products-found">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-background">
      <footer className="footer">
        <div className="footer-content">
          <div>&copy; 2024 Supermarket. All rights reserved.</div>
          <ul className="footer-links">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ onCartClick, onProductsClick, onShopNowClick, onAboutUsClick, onContactClick, onLogout }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Navbar 
        onCartClick={onCartClick} 
        onProductsClick={onProductsClick} 
        onAboutUsClick={onAboutUsClick} 
        onContactClick={onContactClick}
        onLogout={onLogout}
        searchValue={searchValue}
        onSearchChange={handleSearchChange} 
      />
      <HeroSection onShopNowClick={onShopNowClick} />
      <Products searchTerm={searchValue} />
      <Footer />
    </>
  );
}

export default HomePage;
