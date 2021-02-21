import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { detailsSelector } from '../selectors'
import { fetchDetail } from '../thunks/details'
import { Loader } from '../components'

export const Detail = () => {
    const { movieId }  = useParams()
    const dispatch = useDispatch()
    const { loading, details, idMovieFetched } = useSelector(detailsSelector)

    useEffect(() => {
        const existsMovie = (movieId === idMovieFetched)
        if (!existsMovie) {
            dispatch(fetchDetail(movieId))
        }
    }, [dispatch, movieId, idMovieFetched]) 
    
    if (loading) return <Loader />
    
    return (
        <div>
            <img src={details?.image} alt=""/>
            <p>{details?.title}</p>
        </div>
    )
}