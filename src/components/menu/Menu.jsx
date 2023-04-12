import React from "react";
import "./menu.css";
import Order from "../../assets/menu.png";

const soups = [
  { name: "Clam Chowder", id: 1 },
  { name: "Chicken Noodle", id: 2 },
  { name: "Spicy Noodle", id: 3 },
  { name: "Chicken Pot Pie", id: 4 },
  { name: "Chili", id: 5 },
];

const Menu = () => {
  const listItems = soups.map((soup) => <li key={soup.id}>{soup.name}</li>);
  return (
    <menu>
      <section id="menu">
        <div className="container menu__container">
          <img src={Order} alt="menu picture" />
          {/* <div className="list_menu">
          <h2>Hot Food</h2>
          <div className="menu__content">
            <h3>Fries/Tots</h3>
            <h5>Basket of Tots $5</h5>
            <h5>Basket of Fries $5</h5>
            <h5>Add Bacon & Cheese $2</h5>
            <h5>Fish Basket of Fries/Tots $9</h5>
          </div>
          <div className="menu__content">
            <h3>Hot Wing (Buffalo/BBQ)</h3>
            <h5>Wings $8</h5>
            <h5>Wing Basket (7 Piece) With Fries/Tots $10</h5>
          </div>
          <div className="menu__content">
            <h3>Pizza</h3>
            <h5>Slice of Pizza $4</h5>
            <h5>Whole Pizza $15</h5>
          </div>
          <div className="menu__content">
            <h3>Special</h3>
            <h5>Slice Pizza w/ Tap Coors Light Beer $6</h5>
          </div>
          <div className="menu__content">
            <h3>Burger</h3>
            <h5>Hamburger Basket Fries/Tots $9</h5>
            <h5>Hamburger $6</h5>
            <h6 style={{ color: "yellow" }}>Additional</h6>
            <h5>Bacon $1</h5>
            <h5>Chesse $1</h5>
          </div>
          <div className="menu__content">
            <h3>Bowl of Soup $5</h3>
            <ol>
              <li>{listItems}</li>
            </ol>
          </div>
        </div> */}
          <div className="menu_image">
            
          </div>
        </div>
      </section>
    </menu>
  );
};

export default Menu;
