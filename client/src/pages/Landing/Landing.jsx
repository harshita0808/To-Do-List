import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import landing from '../../assets/landing.jpg'
import styles from './Landing.module.css';

function Landing() {
  return (
    <div>
        <Navbar />
        <div className={styles.landing__wrapprr}>
            <div className={styles.landing__text}>
                <h1>Schedule Your Daily Tasks with <span class="primaryText">DoDo!</span></h1>
                <div className='btnWrapper'>
                    <Link to="/register" className="primaryBtn">Register</Link>
                    <Link to="/login" className="secondaryBtn">Login</Link>
                </div>
            </div>
            <div className={styles.landing__img}>
                <img src={landing} alt="landing" />
            </div>
        </div>
    </div>
  )
}

export default Landing