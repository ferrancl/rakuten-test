import React from 'react'
import { useHistory } from 'react-router-dom'
import { CategoryTitle } from '../../components/CategoryTitle';

export const Category = ({ list, name, id }) => {
    const history = useHistory();

    const handleGoToDetails = (id) => {
        history.push(`movies/${id}`)
    }
    
    return (
        <>
            <CategoryTitle name={name} />
        </>
    )
}
