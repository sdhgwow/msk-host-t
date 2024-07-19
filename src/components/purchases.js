import React, { useState } from 'react';
import './purchases.css';

const Purchase = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const [orderDetails, setOrderDetails] = useState({
        name: '',
        email: '',
        address: '',
    });

    const plans = [
        { id: 1, name: 'Тариф 1', description: 'Оптимальный тариф, сочетающий в себе относительно низкую плату и большое количество преимуществ.' },
        { id: 2, name: 'Тариф 2', description: 'Оптимальный тариф, сочетающий в себе относительно низкую плату и большое количество преимуществ.' },
        { id: 3, name: 'Тариф 3', description: 'Оптимальный тариф, сочетающий в себе относительно низкую плату и большое количество преимуществ.' },
    ];

    const handleBuy = (plan) => {
        setSelectedPlan(plan);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Заказ оформлен на имя "${orderDetails.name}"`);
    };

    const handleClose = () => {
        const form = document.querySelector('.order-form');
        const overlay = document.querySelector('.order-form-overlay');
        form.classList.add('slide-out');
        overlay.classList.add('fade-out');
        setTimeout(() => {
            setSelectedPlan(null);
        }, 300);
    };

    return (
        <div className="purchase">
            <h2>Покупкa</h2>
            <div className="plans">
                {plans.map((plan) => (
                    <div className="plan-card" key={plan.id}>
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                        <button onClick={() => handleBuy(plan)}>Купить</button>
                    </div>
                ))}
            </div>
            {selectedPlan && (
                <div className="order-form-overlay">
                    <div className="order-form">
                        <button className="close-button" onClick={handleClose}>
                            <span className="close-line"></span>
                            <span className="close-line"></span>
                        </button>
                        <h1 className="title-form">Оформление заказа</h1>
                        <p>Вы выбрали: {selectedPlan.name}</p>
                        <form className="m-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={orderDetails.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">Имя</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={orderDetails.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={orderDetails.address}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="address">Адрес</label>
                            </div>
                            <button type="submit" className="sbm-form">Оформить заказ</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Purchase;