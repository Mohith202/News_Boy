import { useState } from "react"
import NewsItem from "./NewsItem"
import loading_gif from "./image_folder/1495.gif"
import { useEffect } from "react"
import React from 'react'


export default function NewsContent(props) {
    console.log(props)

    const [pageSize, setpageSize] = useState(20)
    const [page, setPage] = useState(1)
    const [totalResult, settotalResult] = useState()
    const [parsedData, setparsedData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function callBack() {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&pageSize=${pageSize}`;
            // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${props.API_KEY}`;
            let data = await fetch(url);
            let parsedData = await data.json();
         
            // let parsedData = data;
            console.log(parsedData)
            setparsedData(parsedData)
            settotalResult(parsedData.totalResults);
            setLoading(true);

        } callBack();
    }, []);

    const handleNextChange = async () => {
        setLoading(false);
        if ((totalResult / pageSize) * 10 !== "0") {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&pageSize=${pageSize}}&page=${page + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setparsedData(parsedData)
            settotalResult(parsedData.totalResults);
            setLoading(true);
            setPage(page + 1)

        }
    }
    const handlePreviousChange = async () => {
        setLoading(false);
        if (page !== 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&pageSize=${pageSize}}&page=${page - 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setparsedData(parsedData)
            settotalResult(parsedData.totalResults);
            setLoading(true);
            setPage(page - 1)


        }
    }


    return (
        <div className="container my-3">
            {/* <h1>{props.category}</h1> */}
            <h2>NewsBoy -Breaking News</h2>
            <div className="row">
                {!loading && <img className="container d-flex justify-content" src={loading_gif} style={{ width: "150px", height: "150px" }} alt="loading" />}
                {loading && parsedData.articles.map((element) => {
                    return <div className="col-md-4" key={element.title}>
                        <NewsItem title={element.title} des={element.description} img={element.urlToImage} url={element.url}></NewsItem>
                    </div>
                }
                )}
            </div>
            <div className="container d-flex justify-content-between">

                <button type="button" className="btn btn-primary" disabled={page === 1 ? true : false} onClick={handlePreviousChange}> &larr; Previous</button>

                <button type="button" className="btn btn-primary " disabled={(totalResult - (pageSize * page)) <= "0" ? true : false} onClick={handleNextChange}>  &rarr; Next</button>
            </div>
        </div>
    )

}


