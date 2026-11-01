import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return <p style={{ color: '#64748b', fontStyle: 'italic', textAlign: 'center' }}>Belum ada data Produk.</p>;
  }

  return (
    <div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Daftar Produk Lokal</h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
