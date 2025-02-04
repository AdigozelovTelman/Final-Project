import React from 'react'
import styles from './Notfound.module.scss'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.container}>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Notfound