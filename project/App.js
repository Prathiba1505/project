import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import CartProvider from './CartContext';
import CartPage from './CartPage';
import ProductsPage from './ProductsPage';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import PaymentPage from './PaymentPage';
import { ApiProvider } from './ApiContext';

function App3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnSignup, setIsOnSignup] = useState(false);
  const [isOnCartPage, setIsOnCartPage] = useState(false);
  const [isOnProductsPage, setIsOnProductsPage] = useState(false);
  const [isOnAboutUsPage, setIsOnAboutUsPage] = useState(false);
  const [isOnContactPage, setIsOnContactPage] = useState(false);
  const [isOnPaymentPage, setIsOnPaymentPage] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOnSignup(false);
    setIsOnCartPage(false);
    setIsOnProductsPage(false);
    setIsOnAboutUsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOnSignup(false);
    setIsOnCartPage(false);
    setIsOnProductsPage(false);
    setIsOnAboutUsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleSignup = () => setIsOnSignup(true);

  const handleCartClick = () => {
    setIsOnCartPage(true);
    setIsOnProductsPage(false);
    setIsOnAboutUsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleProductsClick = () => {
    setIsOnProductsPage(true);
    setIsOnCartPage(false);
    setIsOnAboutUsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleAboutUsClick = () => {
    setIsOnAboutUsPage(true);
    setIsOnCartPage(false);
    setIsOnProductsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleContactClick = () => {
    setIsOnContactPage(true);
    setIsOnCartPage(false);
    setIsOnProductsPage(false);
    setIsOnAboutUsPage(false);
    setIsOnPaymentPage(false);
  };

  const handleShopNowClick = () => handleProductsClick();

  const handleBackToHome = () => {
    setIsOnCartPage(false);
    setIsOnProductsPage(false);
    setIsOnAboutUsPage(false);
    setIsOnContactPage(false);
    setIsOnPaymentPage(false);
  };

  const handleProceedToCheckout = () => {
    setIsOnPaymentPage(true);
    setIsOnCartPage(false);
  };

  return (
    <ApiProvider>
      <CartProvider>
        <div>
          {isLoggedIn ? (
            isOnCartPage ? (
              <CartPage onBackToHome={handleBackToHome} onProceedToCheckout={handleProceedToCheckout} />
            ) : isOnProductsPage ? (
              <ProductsPage onBackToHome={handleBackToHome} />
            ) : isOnAboutUsPage ? (
              <AboutUsPage onBackToHome={handleBackToHome} />
            ) : isOnContactPage ? (
              <ContactPage onBackToHome={handleBackToHome} />
            ) : isOnPaymentPage ? (
              <PaymentPage onBackToHome={handleBackToHome} />
            ) : (
              <HomePage 
                onCartClick={handleCartClick} 
                onProductsClick={handleProductsClick} 
                onShopNowClick={handleShopNowClick} 
                onAboutUsClick={handleAboutUsClick}
                onContactClick={handleContactClick} 
                onLogout={handleLogout}
              />
            )
          ) : isOnSignup ? (
            <SignupPage onSignup={() => setIsOnSignup(false)} />
          ) : (
            <LoginPage onLogin={handleLogin} onSignup={handleSignup} />
          )}
        </div>
      </CartProvider>
    </ApiProvider>
  );
}

export default App3;
