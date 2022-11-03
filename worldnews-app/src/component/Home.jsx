import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export default function Home() {
    const [topnews, settopnews] = useState([])
    const [everynews, seteverynews] = useState([])
    const [Heading, setHeading] = useState('')

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Breaking")
            })
    }, [])



    const Generaldata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("General");
            })

        axios.get("https://newsapi.org/v2/everything?q=general&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })


    const Sportsdata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Sports");
            })

        axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })


    const Sciencedata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Science");
            })
        axios.get("https://newsapi.org/v2/everything?q=science&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })

    const Entertaimentdata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Entertainment");
            })

        axios.get("https://newsapi.org/v2/everything?q=entertainment&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })

    const Technologydata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Technology");
            })

        axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })


    const Businessdata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Business");
            })


        axios.get("https://newsapi.org/v2/everything?q=business&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })

    const Healthdata = (() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                settopnews(res.data.articles);
                setHeading("Health");
            })
        axios.get("https://newsapi.org/v2/everything?q=health&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    })

    const TopHeadings = topnews.map((value) => {
        return (
            <>
                <body>

                    <div className='card'>

                        <div className="imgbox">
                            <img src={value.urlToImage} alt="Image-Not-Available" />
                            <div className="title">{value.title}</div>
                        </div>


                        <div className="card-content">
                            <big><b>Description -</b></big>
                            <div>{value.description}</div>
                            <div className="readmorebtn">
                                <a href={value.url} _blank >Readmore</a>
                            </div>
                        </div>

                    </div>

                </body>
            </>
        )

    })


    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=06f3da4b1f0343b3b72be4a4c8e68b83")
            .then((res) => {
                seteverynews(res.data.articles);
            })
    }, [])

    // const Businessdata=()=>{
    //     axios.get("https://newsapi.org/v2/everything?q=business&apiKey=84f2a39913a84bb084f08c330b1ea90f")
    //     .then((res)=>{
    //     seteverynews(res.data.articles);
    //     })
    // }

    const AllNews = everynews.map((value) => {
        return (
            <>
                <body>

                    <div className="everycard">

                        <div className="everyimg">
                            <img src={value.urlToImage} alt="NewsPoster" />
                        </div>

                        <div className="everycard-content">
                            <div className="everytitle">{value.title} </div>
                            <div className="everyauthor"><b>Author:</b>{value.author}</div>
                            <div className="every-publishdate"><b>Date:</b>{value.publishedAt}</div>
                            {/* <div className="description-heading"><big><b>Discription-</b></big></div> */}
                            <div className="everydescription">{value.description}
                                <div className="readmorebtn">
                                    <a href={value.url} _blank >Readmore</a>
                                </div>
                            </div>

                        </div>


                    </div>

                </body>

            </>
        )
    })

    return (
        <>

            <div className='side-bar'>

                <span className='heading'>Categorys</span>
                <span className='countryheading' >Country</span>

                <div className='button-box'>
                    <button className='catebuttons' onClick={Generaldata} >General</button>
                    <button className='catebuttons' onClick={Sportsdata} >Sports</button>
                    <button className='catebuttons' onClick={Sciencedata} >Science</button>
                    <button className='catebuttons' onClick={Entertaimentdata} >Entertainment</button>
                    <button className='catebuttons' onClick={Technologydata} >Technology</button>
                    <button className='catebuttons' onClick={Businessdata} >Business</button>
                    <button className='catebuttons' onClick={Healthdata} >Health</button>
                </div>


                <div className='button-box2'>
                    <button className='countrybuttons'>UK</button>
                    <button className='countrybuttons'>Afganistan</button>
                    <button className='countrybuttons'>Shreelanka</button>
                    <button className='countrybuttons'>Canada</button>

                </div>
            </div>


            <div className="Topheading-heading">
                <big><b>Top Headings</b></big>
            </div>


            <div className="heading-news">
                {Heading}
            </div>


            <div className="scroler">
                {TopHeadings}
            </div>

            <div className="Everyheading-heading">
                <big><b>All News</b></big>
            </div>

            <div className="All-news-cards">
                {AllNews}
            </div>

        </>

    )
}
