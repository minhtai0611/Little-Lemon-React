import React, { useState } from "react";
import receipes from "../data/receipes";
import { message, Modal } from "antd";

const Menu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleOrder = (id) => {
    setSelectedRecipeId(id);
    setIsModalVisible(true);
  };

  const handleConfirmOrder = () => {
    setIsModalVisible(false);
    message.success("Your order has been confirmed.");
    console.log(`Order confirmed for recipe ID: ${selectedRecipeId}`);
  };

  const handleCancelOrder = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials</h2>
        <button>Order Menu</button>
      </div>

      {/* menu cards */}
      <div className="cards">
        {receipes.map((receipe) => (
          <div key={receipe.id} className="menu-items">
            <img src={receipe.image} alt={receipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h3>{receipe.title}</h3>
                <p>{receipe.price}</p>
              </div>
              <p>{receipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(receipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ant Design Modal */}
      <Modal
        title="Confirm Order"
        open={isModalVisible} // Gunakan 'open' sebagai ganti 'visible'
        onOk={handleConfirmOrder}
        onCancel={handleCancelOrder}
        okText="Yes, order it!"
        cancelText="Cancel"
      >
        <p>Do you want to confirm the order? You won't be able to revert this!</p>
      </Modal>
    </div>
  );
};

export default Menu;
