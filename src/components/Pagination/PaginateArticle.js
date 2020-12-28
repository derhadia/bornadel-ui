import React from 'react';
import "../../hadi/style.css";
import _ from "lodash"
import useStyle from "../../hadi";

const PaginateArticle = props => {
    const classes = useStyle();
    const {pageSize, itemsCount, onPageChange, current, setCurrent} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    const pages = _.range(1, pagesCount + 1)

    return (
        <div className="article">
            <ul className="paginateArticle">
                {
                    pages.map((page, i) => (
                        <li
                            onClick={() => onPageChange(page)}
                            style={current === page ? {backgroundColor: "#2fc98e", color: "white"} : null}
                            key={i}
                        >
                            <a>{page}</a>
                        </li>
                    ))
                }
                <span style={{marginTop: "unset"}} className={classes.lineSpan}/>
                <li
                    onClick={() => setCurrent(current + 1)}
                    className={classes.arrowIconPaginate}
                />
            </ul>
        </div>
    );
};

export default PaginateArticle;