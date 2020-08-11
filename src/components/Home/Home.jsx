import React from 'react';
import Categories from "./Content/Categories/Categories";
import Sort from "./Content/Sort/Sort";
import PizzaBlock from "./Content/PizzaItem/PizzaBlock";
import {useDispatch, useSelector} from 'react-redux'
import {setCategory, setSortBy} from "../../redux/actions/filters";
import LoadingBlock from "./Content/PizzaItem/PizzaLoader";
import {fetchPizzas} from "../../redux/actions/pizzas";
import {addPizzaToCart} from "../../redux/actions/cart";

function Home() {
    const availableCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const {items, isLoaded} = useSelector(({pizzasReducer}) => {
        return {
            items: pizzasReducer.items,
            isLoaded: pizzasReducer.isLoaded,
        }
    });
    const {category, sortBy} = useSelector(({filtersReducer}) => {
        return {
            category: filtersReducer.category,
            sortBy: filtersReducer.sortBy,
        }
    });
    const {pizzasCart} = useSelector(({cartReducer}) => {
        return {
            pizzasCart: cartReducer.pizzasCart,
        }
    });

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    let handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories availableCategories={availableCategories}
                                setCategory={(catIndex) => dispatch(setCategory(catIndex))}
                                activeCategory={category}
                    />
                    <Sort
                        setSortBy={(name) => dispatch(setSortBy(name))}
                        activeSortBy={sortBy}
                    />
                </div>
                <h2 className="content__title">{category === null ? 'Все пиццы ' : availableCategories[category]}</h2>
                <div className="content__items">
                    {isLoaded
                        ? items && items.map(pizza => <PizzaBlock
                            onAddPizza={(obj) => handleAddPizzaToCart(obj)}
                            key={pizza.id}
                            pizzasCartCount={pizzasCart[pizza.id] && pizzasCart[pizza.id].length}
                            {...pizza}/>)
                        : Array(items.length).fill(<LoadingBlock/>)}
                </div>
            </div>
        </div>
    );
}

export default Home;