import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeError } from '../actions'

export const NotFound = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(removeError())
        }
    }, [dispatch])
    
    return (
        <>
            <h2 style={{color: "white", paddingTop: "5rem"}}>NOT FOUND</h2>   
        </>
    )
}
