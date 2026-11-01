import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '12px', marginBottom: '10px', borderRadius: '6px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>{product.name}</h4>
        <span style={{ fontSize: '0.8rem', padding: '2px 8px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '12px' }}>
          {product.category}
        </span>
      </div>
      <p style={{ margin: '6px 0 0 0', fontWeight: 'bold', color: '#16a34a' }}>
        Rp {product.price.toLocaleString('id-ID')}
      </p>
    </div>
  );
}

export default ProductCard;