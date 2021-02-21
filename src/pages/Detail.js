import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { detailsSelector } from '../selectors'
import { fetchDetail } from '../thunks/details'
import { Loader } from '../components'

export const Detail = () => {
    const { movieId }  = useParams()
    const dispatch = useDispatch()
    const { loading, details } = useSelector(detailsSelector)

    useEffect(() => {
        const existsMovie = (movieId === details?.id)
        if (!existsMovie) dispatch(fetchDetail(movieId))

    }, [dispatch, movieId, details]) 
    
    if (loading) return <Loader />
    
    return (
        <div>
            <img src={details?.image} alt=""/>
            <p>{details?.title}</p>
        </div>
    )
}