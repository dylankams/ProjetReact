import React from "react";



function Body() {
  return (
    <div className="body">
      <div className="sidebar">
        <ul>
          <li className="has-submenu">
            <a href="#">
            <img src="/img/icone-gestion.png" alt="icone" />Gestion  
            </a>
            <ul>
              <li>
                <a href="#">Gestion des produits</a>
              </li>
              <li>
                <a href="#">Gestion des utilisateurs</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Contenu de la page</h1>
        <p>Texte de la page.</p>
      </div>
    </div>
  );
}

export default Body;
