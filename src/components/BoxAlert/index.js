import React from 'react';
import { FaInfoCircle } from "react-icons/fa";

import styles from './index.module.css'

export function BoxAlert({ type }) {
  return (
    <div className={`${styles.boxAlert} ${styles[type]}`}>
      {type === 'empty' && (
        <>
          <FaInfoCircle size={36} />
          <p>The list is empty</p>
        </>
      )}

      {type === 'warning' && (
        <>
          <FaInfoCircle size={36} />
          <p>
            Could not find any tasks,
            try again with another term.
          </p>
        </>
      )}
    </div>
  )
}
