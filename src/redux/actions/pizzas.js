import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED_PIZZAS',
        payload: false,
    })
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}${sortBy === 'name' ? `&_order=asc` : `&_order=desc`}`)
        .then(response => {dispatch(setPizzas(response.data))})
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})

