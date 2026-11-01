import React, { useState, useEffect } from 'react';

function ApiProductList() {
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApiData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            if (!response.ok) {
                throw new Error('Gagal terhubung ke server API');
            }
            const data = await response.json();
            setApiProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApiData();
    }, []);

    return (
        <div style={{ marginTop: '30px', borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Data Produk External (JSONPlaceholder API)</h3>

            {loading && (
                <div style={{ padding: '15px', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '6px', textAlign: 'center' }}>
                    Sedang mengambil data dari server...
                </div>
            )}

            {error && (
                <div style={{ padding: '15px', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '6px', border: '1px solid #fecaca' }}>
                    <p style={{ margin: '0 0 8px 0' }}>Terjadi Kesalahan: {error}</p>
                    <button
                        onClick={fetchApiData}
                        style={{ padding: '6px 12px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Coba Lagi
                    </button>
                </div>
            )}

            {!loading && !error && (
                <div>
                    {apiProducts.map((item) => (
                        <div
                            key={item.id}
                            style={{ padding: '10px', borderBottom: '1px solid #f1f5f9' }}
                        >
                            <strong style={{ fontSize: '0.95rem', color: '#1e293b', textTransform: 'capitalize' }}>
                                {item.id}. {item.title}
                            </strong>
                            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ApiProductList;
