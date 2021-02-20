import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeError } from '../actions'
import { Loader } from '../components/Loader'
import { Category } from '../containers/Category'
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
                movies.length !== 0 && movies.map(({id, name, movies}) => 
                    <Category 
                        list={movies} 
                        id={id} 
                        name={name}
                        key={id} 
                    />
                )
        }         
        </>
    )
}
