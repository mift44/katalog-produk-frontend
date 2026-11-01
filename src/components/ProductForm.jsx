import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !category) return;
    
    onAddProduct({
      id: Date.now(),
      name,
      price: Number(price),
      category
    });

    setName('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>Tambah Produk Baru</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Nama Produk" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: '1' }}
        />
        <input 
          type="number" 
          placeholder="Harga (Rp)" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '130px' }}
        />
        <input 
          type="text" 
          placeholder="Kategori" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '130px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Tambah
        </button>
      </div>
    </form>
  );
}

export default ProductForm;