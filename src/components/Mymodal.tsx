import React, { useRef, useContext, useEffect } from 'react'
import ContentModalContext from '../context/ContentModalContext';
import OpenModalContext from '../context/OpenModalContext';
import styles from './Mymodal.module.css'


const Mymodal = () => {
    const modalref=useRef();

    const modalctx = useContext(OpenModalContext);
    const {modal, modalSetter} = modalctx
    const modalDatactx = useContext(ContentModalContext);
    const {modalData} = modalDatactx


   

    const CloseHandler =(event:React.FormEvent)=>{
        const modalelement = modalref.current;
     //@ts-ignore
        modalelement.close();
       //console.log(modalref.current)
     //@ts-ignore
        modalSetter(modalref.current)
       // console.log(modalData)
    }
    
    useEffect(()=>{
     //@ts-ignore
        CloseHandler()
    },[])

    //@ts-ignore
    let date = new Date(modalData?.publishedAt).toDateString();


  return (
    <>
    {/*@ts-ignore*/}
    <dialog open className={styles.modal} id='modal' ref={modalref}>
        <h1 className={styles.Robboto}>{modalData?.title}</h1>
        <div className={styles.Robboto}>Source: {modalData?.source.name}</div>
        {/*@ts-ignore */}
        <div className={styles.Robboto}>Author: {modalData?.author ? modalData?.author : "Unknown" }</div>
        <div className={styles.Robboto}>Published on: {date}</div>
        
    <img className={styles.img} src={modalData?.urlToImage} alt={modalData?.source.name}/>
        <p className={styles.content}>{modalData?.content}</p>
        <a className={styles.ReadStory} href={modalData?.url} target="_blank">Read full Story</a>
        <button className={styles.button} onClick={CloseHandler} >close</button>
    </dialog>
    </>
  )
}

export default Mymodal