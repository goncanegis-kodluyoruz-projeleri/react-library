import React from 'react'
import styles from './styles.module.css'

export const Header = ({ text }) => {
  return <div className={styles.test}>{text}</div>
}

export const Button = ({ type, text }) => {
  return (
    <button type={type} className={`btn btn-${type}`}>
      {text}
    </button>
  )
}
