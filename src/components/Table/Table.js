import React from 'react';
import './Table.css';

function Table({ data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Картинка</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td><img src={item.image} alt={item.name} className="table-img" /></td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <button>Редактировать</button>
                            <button>Удалить</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
