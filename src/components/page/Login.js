import React from 'react'
import { FaUserCircle } from "react-icons/fa"; 
import { AiFillLock } from 'react-icons/ai';
import styles from './login.module.css';
import { NavLink } from 'react-router-dom';




const Login = () => {
  
    return (
        <>
            <div className={styles.main}>
            
                <div className={styles.container}>
                
                <div className={styles.img}>
                <img src="https://library.ascd.org/m/f3244fdde05d428/webimage-PLS_Banner_1000x1000.png" alt='user pic' width={90}/>
            </div>  
             <div className={styles.content}>
                <div className={styles.user} >
                   <span className={styles.icon}> <FaUserCircle/> </span>
                <label htmlFor="username"></label>
                <input type="text" placeholder='Username'/>
                </div>
                <div className={`${styles.pswrd} ${styles.user}`}>
                <span className={styles.icon}> <AiFillLock /> </span>
                <label htmlFor="password"></label>
                <input type="password" placeholder='Password'/>
                </div>
                
                    <div className={styles.login_btn}>
                    <button >Login</button>
                    </div>
                    <div className="register">
                    <p>
                        <NavLink to="/Register" > Register</NavLink>
                    </p>
            
                    </div>
                    
             </div>
                </div>
            </div>
           

        </>
    )
}

export default Login