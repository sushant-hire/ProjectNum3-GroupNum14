import React from 'react';
import styles from './Buttons.module.css'

const Buttons = ({ buttonText, startIcon, onClick }) => {

    return (
        <button className={styles.formButtons} onClick={onClick}  >
            {startIcon}&nbsp;&nbsp;{buttonText}
        </button>
    )
}

export default Buttons