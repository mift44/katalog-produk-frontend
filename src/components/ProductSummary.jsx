import React from 'react';

function ProductSummary({ totalProducts }) {
  return (
    <div style={{ margin: '15px 0', padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Ringkasan Katalog</h3>
      <p style={{ margin: 0, color: '#475569' }}>Total Produk Tersedia: <strong>{totalProducts}</strong> item</p>
    </div>
  );
}

export default ProductSummary;