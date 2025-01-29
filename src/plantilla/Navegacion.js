import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Navegacion() {

    const urlBase = "http://localhost:8080/top-app/categories";

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
        try {
            const resultado = await axios.get(urlBase);
            console.log("Categorias:", resultado.data);
            setCategorias(resultado.data);
        } catch (error) {
            console.error("Error al cargar las categorías:", error);
        }
    }

    return (
        <div className="container">
            <nav 
                className="navbar navbar-expand-lg fixed-top" 
                style={{
                    backgroundColor: "rgba(244, 226, 133, 0.7)", // Fondo translúcido
                    backdropFilter: "blur(10px)", // Efecto cristal
                    borderRadius: "10px", // Bordes suaves
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
                    zIndex: 1000 // Asegurarse que el navbar esté por encima de otros elementos
                }}
            >
                <div className="container-fluid">
                    {/* Imagen del carpincho con espaciado */}
                    <img 
                        src="../img/carpincho.png" 
                        alt="Logo" 
                        style={{
                            width: "50px", 
                            height: "50px", 
                            objectFit: "contain", 
                            paddingLeft: "10px", 
                            marginRight: "10px"
                        }} 
                    />
                    <a className="navbar-brand" href="#" style={{ color: "#2a5d24", fontWeight: "bold" }}>
                        Mi Tierra Llanera Hogar y Mercado
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" style={{ color: "#2a5d24" }}>
                                    Iniciar sesión
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" style={{ color: "#2a5d24" }}>
                                    Nosotros
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle" 
                                    href="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false" 
                                    style={{ color: "#2a5d24" }}
                                >
                                    Categorías
                                </a>
                                <ul className="dropdown-menu">
                                    {/* Mapear las categorías aquí dentro de un solo <ul> */}
                                    {categorias.map((categoria, indice) => (
                                        <li key={indice}>
                                            <a className="dropdown-item" href="#">{categoria.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Buscar productos..." 
                                aria-label="Buscar productos..."
                                style={{width:"500px"}}
                            />
                            <button 
                                className="btn" 
                                type="submit" 
                                style={{
                                    backgroundColor: "#2a5d24",
                                    color: "#fff",
                                    border: "none"
                                }}
                            >
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
                <a href="#">        
                    <img 
                        src="../img/carrito-de-compras.png" 
                        alt="Logo" 
                        style={{
                            width: "50px", 
                            height: "50px", 
                            objectFit: "contain", 
                            paddingLeft: "10px", 
                            marginRight: "10px"
                        }} 
                    />
                </a>
            </nav>
        </div>
    );
}
