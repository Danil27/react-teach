import React, { useState } from "react";
import "./Sidebar.css";
import axios from "axios";

import StoreIcon from "../../assets/icons/store.svg";
import OrdersIcon from "../../assets/icons/orders.svg";
import CatalogIcon from "../../assets/icons/catalog.svg";
import ClientsIcon from "../../assets/icons/clients.svg";
import PaymentsIcon from "../../assets/icons/payments.svg";
import MarketingIcon from "../../assets/icons/marketing.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import TariffsIcon from "../../assets/icons/tariffs.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import LogoIcon from "../../assets/icons/logo.svg";
import LogoTextIcon from "../../assets/icons/logo-text.svg";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = async (action) => {
    console.log(`Menu action triggered: ${action}`);
    try {
      const response = await axios.get(`http://localhost:3088/shops/1`, {
        withCredentials: true,
      });
      console.log(`${action} response:`, response.data);
    } catch (error) {
      console.error(`Error during ${action} request:`, error);
    }
  };

  const menuItems = [
    {
      label: "Ваш магазин",
      icon: StoreIcon,
      action: () => handleMenuClick("store"),
    },
    {
      label: "Заказы",
      icon: OrdersIcon,
      action: () => handleMenuClick("orders"),
    },
    {
      label: "Каталог",
      icon: CatalogIcon,
      action: () => handleMenuClick("catalog"),
    },
    {
      label: "Клиенты",
      icon: ClientsIcon,
      action: () => handleMenuClick("clients"),
    },
    {
      label: "Платежи",
      icon: PaymentsIcon,
      action: () => handleMenuClick("payments"),
    },
    {
      label: "Маркетинг",
      icon: MarketingIcon,
      action: () => handleMenuClick("marketing"),
    },
    {
      label: "Настройки",
      icon: SettingsIcon,
      action: () => handleMenuClick("settings"),
    },
    {
      label: "Тарифы и оплата",
      icon: TariffsIcon,
      action: () => handleMenuClick("tariffs"),
    },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <ul className="sidebar-menu">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img src={LogoIcon} alt="Botobot Logo" className="logo-image" />
              {!collapsed && (
                <img
                  src={LogoTextIcon}
                  alt="Botobot Logo"
                  className="logo-text"
                />
              )}
            </div>
          </div>
          <button className="toggle-button" onClick={toggleSidebar}>
            {collapsed ? "➔" : "←"}
          </button>
        </div>
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-menu-item" onClick={item.action}>
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="sidebar-icon"
            />
            {!collapsed && <span className="sidebar-label">{item.label}</span>}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <div className="user-info">
          {!collapsed && <div className="user-id">ID 84548</div>}
          {!collapsed && (
            <div className="user-contact">@test_crm_design_bot</div>
          )}
        </div>
        <div className="user-profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User avatar"
            className="user-avatar"
          />
          {!collapsed && <span className="user-name">Test Design</span>}
        </div>
        <button className="logout-button">
          {!collapsed && (
            <img src={LogoutIcon} alt="Logout Icon" className="logout-icon" />
          )}
          {!collapsed && <span>Выход</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
