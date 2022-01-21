import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePost }) => {
    let pagesArray = getPagesArray(totalPages)

    return (

        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => changePost(p)}
                    className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            )}
        </div>

    );
};

export default Pagination;