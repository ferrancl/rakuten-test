import React from 'react'

export const MoviesList = ({ onclick, movies }) => {

    return (
        <div>
            {movies?.map(({movieId, image}) => {
                return <div onClick={()=> onclick(movieId)}>
                    <img src={image} alt=""/>
                </div>
            })}
        </div>
    )
}
