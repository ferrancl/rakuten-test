import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeError } from '../actions'
import { Loader } from '../components'
import { CategoryContainer } from '../containers/CategoryContainer'
import { moviesSelector } from '../selectors'
import { fetchMoviesList } from '../thunks/movies'


export const Home = () => {
    const dispatch = useDispatch()
    const {movies, loading } = useSelector(moviesSelector)
    
    useEffect(() => {
        if (movies.length === 0){
            dispatch(fetchMoviesList())    
        
        }
        return () => {
            dispatch(removeError())
        }
    }, [dispatch, movies])

    return (
        <>
        {
            loading? 
                <Loader /> 
                :
                movies.length !== 0 && movies.map(({id, categoryName, movies}) => 
                    <CategoryContainer
                        movies={movies} 
                        categoryName={categoryName}
                        key={id} 
                    />
                )
        }         
        </>
    )
}
