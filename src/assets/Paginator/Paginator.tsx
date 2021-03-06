import React, {FC, useState} from "react";
import s from "./Paginator.module.css";
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (pageNumber : number) => void,
    currentPage: number,
    portionSize?: number
}

let Paginator : FC<PropsType> = ({totalItemsCount,pageSize,onPageChanged,
                                 currentPage,portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount /portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        <div className={s.pages_block}>
            { portionNumber > 1 &&
            <button className={s.button} onClick={() => { setPortionNumber(portionNumber - 1) }}>Назад</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                return <div className={cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) } key={p} onClick={() => {
                    onPageChanged(p)
                }}>{p}</div>
            })}
            { portionCount > portionNumber &&
            <button className={s.button} onClick={() => { setPortionNumber(portionNumber + 1) }}>Вперед</button> }
        </div>

    </div>
}

export default Paginator