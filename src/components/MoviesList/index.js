import React, { useEffect, useRef } from 'react'
import './styles.css'

export const MoviesList = ({ onclick, movies }) => {

    const moviesCarousel = useRef()

    useEffect(() => {
        console.log(moviesCarousel.current.clientWidth)
    }, [moviesCarousel])

    return (
        <div className="category__movies">
            <div className="category__movies-left">
                <i className="fas fa-angle-left fa-3x" style={{color: 'white'}} onClick={()=> 
                    moviesCarousel.current.scrollLeft -= moviesCarousel.current.offsetWidth}>
                </i>
            </div>
            <div className="category__movies-carousel" ref={moviesCarousel}>
                {movies?.map(({movieId, image}) => {
                    return <div className="category__movies-item" onClick={()=> onclick(movieId)} key={movieId}>
                        <img src={image} alt=""/>
                        </div>
                })}      
            </div>
            <div className="category__movies-right" onClick={()=> 
                moviesCarousel.current.scrollLeft += moviesCarousel.current.offsetWidth}>
                <i className="fas fa-angle-right fa-3x" style={{color: 'white'}}></i>
            </div>
        </div>
    )
}
