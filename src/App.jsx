import React, { useState, useEffect } from 'react';
import Formulario from './components/FormDeGastos';
import GastoList from './components/GastoList';
import ResumenPresupuesto from './components/ResumenPresupuesto';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    // Cargar gastos almacenados en localStorage al iniciar la aplicación
    const storedGastos = JSON.parse(localStorage.getItem('gastos'));
    if (storedGastos) {
      setGastos(storedGastos);
    }
  }, []);

  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
    guardarGastosEnLocalStorage([...gastos, nuevoGasto]);
  };

  const guardarGastosEnLocalStorage = (gastos) => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  };

  const eliminarGasto = (index) => {
    const gastosActualizados = [...gastos];
    gastosActualizados.splice(index, 1);
    setGastos(gastosActualizados);
    guardarGastosEnLocalStorage(gastosActualizados);
  };

  const calcularTotalGastos = () => {
    const gastosGasto = gastos.filter((gasto) => gasto.categoria === 'Gasto');
    return gastosGasto.reduce((total, gasto) => total + gasto.monto, 0);
  };

  const calcularTotalPresupuesto = () => {
    const gastosIngreso = gastos.filter((gasto) => gasto.categoria === 'Ingreso');
    return gastosIngreso.reduce((total, ingreso) => total + ingreso.monto, 0);
  };

  return (
    <div>
      <div class="container">
        <p className='Header text-center mt-5 rounded-pill border border border-black'>
          <h2>Seguimiento de Gastos</h2>
        </p>
        <div class="row">
          <div class="col-md-6 mt-4">
            <Formulario agregarGasto={agregarGasto} />
          </div>
          <div class="col-md-6 mt-4">
            <ResumenPresupuesto
              totalGastos={calcularTotalGastos()}
              totalPresupuesto={calcularTotalPresupuesto()}
            />
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12 mt-4">
            <GastoList gastos={gastos} eliminarGasto={eliminarGasto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
