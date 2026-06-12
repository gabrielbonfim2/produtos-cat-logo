"use client";

import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function alternarFavorito(id) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  function ehFavorito(id) {
    return favoritos.includes(id);
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito, ehFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider");
  }
  return context;
}
