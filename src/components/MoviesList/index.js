import React from 'react'
import './styles.css'

export const MoviesList = ({ onclick, movies }) => {

    return (
        <div className="category__movies">
            {movies?.map(({movieId, image}) => {
                return <div className="category__movies-item" onClick={()=> onclick(movieId)} key={movieId}>
                    <img src={image} alt=""/>
                </div>
            })}
        </div>
    )
}
