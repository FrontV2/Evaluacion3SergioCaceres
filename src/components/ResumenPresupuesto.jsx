import React from 'react';

const ResumenPresupuesto = ({ totalGastos, totalPresupuesto }) => {
  const formattedTotalGastos = totalGastos.toLocaleString();
  const formattedTotalPresupuesto = totalPresupuesto.toLocaleString();

  return (
    <div class='border border-dark border border-2 rounded-3 p-3'>
      <h2>Resumen de Presupuesto</h2>
      <p class='alert alert-primary mt-4'>Total de Gastos: {'$ ' + formattedTotalGastos}</p>
      <p class='alert alert-danger'>Total de Ingresos: {'$ ' + formattedTotalPresupuesto}</p>
    </div>
  );
};

export default ResumenPresupuesto;
