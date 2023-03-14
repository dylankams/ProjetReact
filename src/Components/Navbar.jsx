import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Recherche" />
      </div>
      <div className="icons">
        <div className="icon">
        <img src="/img/shopping-cart.png" alt="panier" title="panier"/>
        </div>
        <div className="icon">
        <img src="/img/profil.png" alt="profil" title="profil"/>
        </div>
        <div className="icon">
        {/* <img src="/img/sign-in.png" alt="profil" title="profil"/> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
