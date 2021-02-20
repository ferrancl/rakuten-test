import React from 'react'
import { useHistory } from 'react-router-dom'
import { CategoryTitle, MoviesList } from '../../components/';

export const CategoryContainer = ({ movies, categoryName }) => {

    const history = useHistory();

    const handleGoToDetails = (id) => {
        history.push(`movies/${id}`)
    }
    
    return (
        <>
            <CategoryTitle categoryName={categoryName} />

            <MoviesList onclick={handleGoToDetails} movies={movies} />
        </>
    )
}
