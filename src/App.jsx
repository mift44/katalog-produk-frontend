import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductSummary from './components/ProductSummary';
import ApiProductList from './components/ApiProductList'; // Import komponen Tugas 7

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mouse Wireless Gaming', price: 250000, category: 'Aksesoris' },
    { id: 2, name: 'Keyboard Mekanikal RGB', price: 650000, category: 'Aksesoris' }
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '0 15px', fontFamily: 'sans-serif' }}>
      <Header />
      <ProductSummary totalProducts={products.length} />
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
      
      {/* Fitur Tugas 7 */}
      <ApiProductList />
    </div>
  );
}

export default App;