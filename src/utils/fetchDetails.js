import { URL, PARAMS } from "../constants/"


export const fetchDetails = async (id) => {
    const response = await fetch(`${URL}movies/${id + PARAMS}`, {
        method: 'GET'
    })

    const { status } = response

    if (status === 200){
        const { 
            data: { 
                title, 
                images: {snapshot: image}, 
                order_options: {
                    price, 
                    points: {cost: points},
                    scores: {score} }
            } 
        } = await response.json()

        return { id, title, image, price, points, score }
    }

    if (status >= 400 && status < 500) {
        const { error } = await response.json()
        throw new Error(error)
    }

    throw new Error('Server error')
}