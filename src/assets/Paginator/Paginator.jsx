import React from "react";
import s from "./Paginator.module.css";

let Paginator = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.pages_block}>
            {pages.map(p => {
                return <div className={props.currentPage === p && s.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</div>
            })}
        </div>
    </div>
}

export default Paginator