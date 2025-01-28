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
        <div className="container mt-4">
            <div className="text-center mb-4">
                <h3>Tienda Online</h3>
            </div>

            {/* Sistema de cuadrícula de Bootstrap */}
            <div className="row">
                {productos.map((producto, indice) => (
                    <div key={indice} className="col-md-3 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={"../img/img_productos/" + producto.product_id + ".webp"} // Cambia esto si los productos tienen imágenes dinámicas.
                                className="card-img-top"
                                alt={producto.name}
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">{producto.description}</p>
                                <h5 className="card-title">
                                    <NumericFormat value={producto.price} displayType='text' thousandSeparator="," prefix={"$"} decimalScale={2} fixedDecimalScale/>                                 

                                </h5>
                                <a href="#" className="btn btn-primary">Agregar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


