import React from 'react';

function Sort({setSortBy, activeSortBy}) {

    const [visibleSortPopup, setVisibleSortPopup] = React.useState(false)

    const availableSortPopup = [
        {name: 'популярности', type: 'rating'},
        {name: 'цене', type: 'price'},
        {name: 'алфавиту', type: 'name'}
    ]

    let onChangeActiveSortPopup = (sortType) => {
        setVisibleSortPopup(false)
        setSortBy(sortType)
    }

    let sortPopupRef = React.useRef()
    let handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortPopupRef.current)) {
            setVisibleSortPopup(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick)
    }, []);

    return (
        <div ref={sortPopupRef} className="sort">
            <div className="sort__label">
                <svg className={visibleSortPopup ? 'rotated' : ''}
                     width="10"
                     height="6"
                     viewBox="0 0 10 6"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span
                    onClick={() => setVisibleSortPopup(!visibleSortPopup)}>{availableSortPopup.find(s => s.type === activeSortBy).name}</span>
            </div>
            {visibleSortPopup && <div className="sort__popup">
                <ul>
                    {
                        availableSortPopup.map((sortBy, index) => (
                                <li className={activeSortBy === sortBy.type ? 'active' : ''}
                                    onClick={() => onChangeActiveSortPopup(sortBy.type)}
                                    key={`${sortBy.type}_${index}`}> {sortBy.name} </li>
                            )
                        )
                    }
                </ul>
            </div>}
        </div>
    );
}

export default Sort;