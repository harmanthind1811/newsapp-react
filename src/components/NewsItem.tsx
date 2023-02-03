import React, { useContext } from 'react';
import ContentModalContext from '../context/ContentModalContext';
import OpenModalContext from '../context/OpenModalContext';
import styles from './NewsItem.module.css'

interface propdata{newsdata: { source: { id: string, name: string }, author: string, title: string, description: string, url: any, urlToImage: any, publishedAt: string, content: string }}

const NewsItem: React.FC<propdata>= (props) => {

 
  const modalctx = useContext(OpenModalContext);
  const {modal, modalSetter} = modalctx

  const modalDatactx = useContext(ContentModalContext);
  const {ModalDataSetter} = modalDatactx

  const OnclickNewsHandler=()=>{
    
    //console.log(props.newsdata)
   // console.log(modal)
    modal.showModal();

    ModalDataSetter(props.newsdata)
    
  }
  


  return (
    <>
    <div className={styles.outercontainer} onClick={OnclickNewsHandler}>
    <div className={styles.card}>
        <img className={styles.img} src={props.newsdata.urlToImage?props.newsdata.urlToImage:'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png'} alt="News" />
        <div className={styles.source}>{props.newsdata.source.name}</div>
        <div className={styles.container}>
            <h4><b>{props.newsdata.title}</b></h4>
            <p>{props.newsdata.description}</p>
        </div>
    </div>
  </div>
    </>
  )
}

export default NewsItem