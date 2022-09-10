import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="container">
        <nav className="navbar ">
          <div className="btn-group">
            {menuList.map((curElem) => {
              return (
                <button
                  className="btn-group_item"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
