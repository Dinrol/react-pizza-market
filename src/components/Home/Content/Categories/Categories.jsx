import React from 'react';

function Categories({activeCategory, availableCategories, setCategory}) {


    let onChangeActiveCategories = (index) => {
        setCategory(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ''}
                    onClick={() => onChangeActiveCategories(null)}>Все
                </li>
                {
                    availableCategories.map((categories, index) => (
                            <li className={activeCategory === index ? 'active' : ''}
                                onClick={() => onChangeActiveCategories(index)}
                                key={`${categories}_${index}`}> {categories} </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default Categories;