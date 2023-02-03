import React, { useContext, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import styles from './News.module.css'
import CountryContext from '../context/CountryContext'

const News: React.FC<{category:string}> = (props) => {
   type datanews = { source: { id: string, name: string }, author: string, title: string, description: string, url: any, urlToImage: any, publishedAt: string, content: string }[]
    const [data, Setdata] = useState<datanews>([])
    const countryctx = useContext(CountryContext);
    const {country}= countryctx;

    useEffect(() => {
        const fetchnewsHandler = async () => {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=679e483ed0304601bdcdef5fe0f0a1f7&category=${props.category}&page=1&pageSize=20`
            );
            const data = await response.json();
            // console.log(data)
            Setdata(data.articles)
        };
          fetchnewsHandler()
    }, [props.category, country]);
        
console.log(data)

  return (
   <div className={styles.container}>
   {data.map((element)=>{
    return<NewsItem key={element.url} newsdata={element}  />
   })}
   </div>
  )
}

export default News;