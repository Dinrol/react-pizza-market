const initialState = {
    pizzasCart: [],
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            let newPizzasCart = {
                ...state.pizzasCart,
                [action.payload]: !state.pizzasCart[action.payload.id]
                    ? [action.payload]
                    : [...state.pizzasCart[action.payload.id], action.payload]

            }
            // const pizzasList = [].concat.apply([], Object.values(newPizzasCart))
            // const totalPrice = pizzasList.reduce((sum, obj)=>(obj.price+sum), 0)
            return {
                ...state,
                pizzasCart: newPizzasCart,
                totalCount: ++state.totalCount,
                totalPrice: state.totalPrice + action.payload.price
            }
        default:
            return state
    }
}

export default cart;