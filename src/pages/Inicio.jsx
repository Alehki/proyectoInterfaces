import React from 'react';
import CardInicio from '../components/CardInicio/CardInicio';
import styles from './inicio.module.css';
import Descripcion from '../components/Descripcion/Descripcion';

function Inicio() {
  return (
    <div className={styles.inicio}>
      <CardInicio />
      <Descripcion />
    </div>
  );
}

export default Inicio;