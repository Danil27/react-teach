import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '0' }}>
                <h1>Контент</h1>
                <p>Здесь будет основной контент приложения.</p>
            </div>
        </div>
    );
}

export default App;
