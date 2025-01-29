import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function ListadoProducts() {
    const urlBase = "http://localhost:8080/top-app/products";

    const [productos, setProductos] = useState([]);

    // Cargando productos
    useEffect(() => {
        cargarProductos();
    }, []);

    // Peticiones asincronas a backend con axios
    const cargarProductos = async () => {
        try {
            const resultado = await axios.get(urlBase);
            console.log("Resultado de los productos:", resultado.data);
            setProductos(resultado.data);
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    };

    return (
        <div className="container mt-4" style={{ paddingTop: "80px" }}> {/* Ajusta el valor de paddingTop según el tamaño de tu navbar */}
            {/* Sistema de cuadrícula de Bootstrap */}
            <div className="row">
                {productos.map((producto, indice) => (
                    <div key={indice} className="col-md-3 mb-4">
                        <div 
                            className="card" 
                            style={{
                                width: "18rem", 
                                height: "370px", 
                                backgroundColor: "rgba(244, 226, 133, 0.7)", // Fondo translúcido solo para la carta
                                borderRadius: "10px", // Bordes redondeados
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
                                overflow: "hidden"
                            }}
                        >
                            {/* Imagen sin efecto cristal */}
                            <img
                                src={"../img/img_productos/" + producto.product_id + ".png"} // Cambia esto si los productos tienen imágenes dinámicas.
                                className="card-img-top"
                                alt={producto.name}
                                style={{ height: "170px", objectFit: "contain" }} // Imagen con ajuste adecuado
                            />
                            <div 
                                className="card-body" 
                                style={{
                                    backgroundColor: "rgba(244, 226, 133, 0.7)", 
                                    backdropFilter: "blur(10px)", 
                                    height: "calc(100% - 150px)"
                                }}
                            >
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text" style={{ maxHeight: "45px", overflowY: "auto", height:"45px" }}>
                                    {producto.description}
                                </p>
                                <h6 className="card-title">
                                    <NumericFormat value={producto.price} displayType='text' thousandSeparator="," prefix={"$"} decimalScale={2} fixedDecimalScale/>
                                </h6>
                                <a href="#" className="btn" style={{ backgroundColor: "#2a5d24", color:"white"}}>Agregar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
