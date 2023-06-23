import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ agregarGasto }) => {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState(null);
  const [fechaError, setFechaError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de los campos que no estén vacíos
    if (descripcion.trim() === '' || monto.trim() === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // Validar que la fecha esté seleccionada
    if (!fecha) {
      setFechaError(true);
      return;
    }

    // Crear objeto de gasto
    const nuevoGasto = {
      descripcion,
      categoria,
      monto: parseFloat(monto),
      fecha: fecha ? fecha.toLocaleDateString() : '',
    };


    agregarGasto(nuevoGasto);

    // Reiniciar los campos del formulario
    setDescripcion('');
    setCategoria('');
    setMonto('');
    setFecha(null);
    setFechaError(false);

    // Guardar el gasto en localStorage
    guardarGastoEnLocalStorage(nuevoGasto);
  };

  const guardarGastoEnLocalStorage = (gasto) => {
    let gastos = [];

    // Verificar si ya hay gastos en localStorage
    if (localStorage.getItem('gastos')) {
      gastos = JSON.parse(localStorage.getItem('gastos'));
    }

    // Agregar el nuevo gasto a la lista
    gastos.push(gasto);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('gastos', JSON.stringify(gastos));
  };

  return (
    <div className='border border-dark border border-2 rounded-3 p-3'>
      <h2>Agregar Movimiento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label>Descripción:</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            placeholder='Ej. Me compré un completo'
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="form-group mt-2" >
          <label>Categoría:</label>
          <select
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Gasto">Gasto</option>
            <option value="Ingreso">Ingreso</option>
          </select>
        </div>
        <div className="form-group mt-2">
          <label>Monto</label>
          <input
            type="number"
            className="form-control"
            placeholder='Ej. 100'
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Fecha:</label>
          <DatePicker
            className={`form-control ms-2 ${fechaError ? 'is-invalid' : ''}`}
            selected={fecha}
            onChange={(date) => {
              setFecha(date);
              setFechaError(false);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Seleccione una fecha"
          />
          {fechaError && <div className="invalid-feedback">Por favor, seleccione una fecha.</div>}
        </div>
        <button type="submit" className="btn btn-info d-block mt-2 mx-auto">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;