import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeError } from '../actions'
import { Loader } from '../components'
import { CategoryContainer } from '../containers/'
import { moviesSelector } from '../selectors'
import { fetchMoviesList } from '../thunks/movies'
import { CONTENT_LIST } from '../constants'


export const Home = () => {
    const dispatch = useDispatch()
    const {movies, loading } = useSelector(moviesSelector)
    
    useEffect(() => {
        if (movies.length === 0){
            dispatch(fetchMoviesList(CONTENT_LIST))    
        
        }
        return () => {
            dispatch(removeError())
        }
    }, [dispatch, movies])

    return (
        <div>
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
        </div>
    )
}
