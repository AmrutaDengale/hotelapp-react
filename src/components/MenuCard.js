import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="main-card container">
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3 m-3">
          {menuData.map((curElem) => {
            const { id, name, category, image, description } = curElem;
            return (
              <>
                <div className="col">
                  <div
                    className="card col-md-4 "
                    key={id}
                    style={{ width: "22rem" }}
                  >
                    <div className="card-body">
                      <span className="card-number card-circle">{id}</span>
                      <span className="card-author subtitle">{category}</span>
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                    <img src={image} alt="images" className="card-img" />

                    <span className="card-tag  subtle">Order Now</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
