import React, { useRef } from 'react'
import './styles.css'

export const MoviesList = ({ onclick, movies }) => {

    // const moviesCarousel = useRef()

    return (
        <div className="category__movies">
            {/* <div className="category__movies-left">
                <i className="fas fa-angle-left" style={{color: 'white'}} onClick={()=> 
                    moviesCarousel.current.scrollLeft -= moviesCarousel.current.offsetWidth}>
                </i>
            </div> */}

                {movies?.map(({movieId, image}) => {
                    return <div className="category__movies-item" onClick={()=> onclick(movieId)} key={movieId}>
                        <img src={image} alt=""/>
                        </div>
                })}
            {/* <div className="category__movies-right" onClick={()=> 
                moviesCarousel.current.scrollLeft += moviesCarousel.current.offsetWidth}>
                <i className="fas fa-angle-right" style={{color: 'white'}}></i>
            </div> */}
        </div>
    )
}
