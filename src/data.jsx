// Función para obtener los gastos almacenados en localStorage
export const getGastos = () => {
    const gastos = localStorage.getItem('gastos');
    return gastos ? JSON.parse(gastos) : [];
  };
  
  // Función para guardar los gastos en localStorage
  export const saveGastos = (gastos) => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  };
