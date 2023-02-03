import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import CountryContext from '../context/CountryContext';



const Navbar = () => {

  const countryctx = useContext(CountryContext);
  const { countrySetter}= countryctx;

const CountryNewsHandler = (event:any)=>{
  countrySetter(event.target.getAttribute('value'))
}

  return (
    <div className={styles.contain}>

  <div className={styles.logo}>NewsApp</div>
  <div className={styles.filler}></div>
  <nav>
    <ul className={styles.nav__links}>
      <li className={styles.listitem}><a className={styles.a} href="#" >Home</a></li>
      {/* <li className={styles.listitem}><a className={styles.a} href="#">Categories</a></li> */}
      <div className={styles.dropdown }>
            <button className={styles.dropdown__hover}>Categories</button>
            <div className={styles.dropdown__menu}>
              <Link to="/business">Business</Link>
              <Link to="/entertainment">Entertainment</Link>
              <Link to="/general">General</Link>
              <Link to="/health">Health</Link>
              <Link to="/science">Science</Link>
              <Link to="/sports">Sports</Link>
              <Link to="/technology">Technology</Link>
             
            </div>
          </div>
      <div className={styles.dropdown }>
            <button className={styles.dropdown__hover}>Countries</button>
            <div className={styles.dropdown__menu}>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler}  value='at'>Australia</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler} value='ca'>Canada</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler}  value='ch'>China</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler} value='in'>India</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler}  value='ru'>Russia</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler} value='gb'>United Kingdom</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler} value='us'>United States</a>
              {/* @ts-ignore*/}
              <a onClick={CountryNewsHandler} value='ua'>Ukraine</a> 
            </div>
          </div>
      {/* <li className={styles.listitem}><a className={styles.a} href="#">Countries</a></li> */}
    </ul>
  </nav>
  {/* <a href="#" className={styles.cta}><button className={styles.button}>Login</button></a>
  <a href="#" className={styles.cta}><button className={styles.button}>Signup</button></a> */}
  
    </div>
  )
}

export default Navbar