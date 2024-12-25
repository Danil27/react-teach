import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import './CatalogPage.css';

function CatalogPage() {
    const mockData = [
        {
            id: 1,
            image: 'https://via.placeholder.com/50',
            name: 'Товар 1',
            category: 'Категория A',
            description: 'Описание товара 1',
            price: '500 ₽',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/50',
            name: 'Товар 2',
            category: 'Категория B',
            description: 'Описание товара 2',
            price: '1000 ₽',
        },
        // Добавь больше данных
    ];

    return (
        <div className="catalog-page">
            <Sidebar />
            <div className="catalog-content">
                <h1>Каталог</h1>
                <Table data={mockData} />
            </div>
        </div>
    );
}

export default CatalogPage;
