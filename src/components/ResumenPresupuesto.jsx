import React from 'react';

const ResumenPresupuesto = ({ totalGastos, totalPresupuesto }) => {
  const formattedTotalGastos = totalGastos.toLocaleString();
  const formattedTotalPresupuesto = totalPresupuesto.toLocaleString();

  return (
    <div class='border border-dark border border-2 rounded-3 p-3 '>
      <h2 class='text-center' >Resumen de Presupuesto</h2>
      <p class='alert alert-primary mt-5 mb-5'>Total de Gastos: {'$ ' + formattedTotalGastos}</p>
      <p class='alert alert-danger mt-5 mb-5'>Total de Ingresos: {'$ ' + formattedTotalPresupuesto}</p>
    </div>
  );
};

export default ResumenPresupuesto;
