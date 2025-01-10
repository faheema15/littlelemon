import React from "react";
import "./styles/menulist.css";
import recipes from '../recipes';

const Menulist = () => {
  return (
    <div className="menulist">
      <h1 className="title_ml">Our Menu</h1>
      <p className="title2">Explore our delicious menu items here!</p>

      {/* Menu Container */}
      <div className="menu-container">
        <div className="cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt={recipe.title} />
              <div className="menu-content_ml">
                <div className="heading">
                  <h5 className="recipetitle">{recipe.title}</h5>
                </div>
                <p className="recipedesc">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menulist;
