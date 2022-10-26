import React, { useState } from 'react'
import "./GameBoard.scss"
import CategoryBox from './CategoryBox'
import { Link } from 'react-router-dom'

const GameBoard = () => {


    return (
        <div>
            <h1>Choose category</h1>

            <div className="categoryWrapper">

                <CategoryBox name="Human body" id="humanBody"
                    imgUrl="https://cashcow-cdn.azureedge.net/media-gallery/QPHUm5_r09c=/mega%20gluflex/Mega.webp" />

                <CategoryBox name="Dance floor" id="danceFloor"
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6e1dDHSk0FT1cxH0Epr0oeIZrNTZwT69gg&usqp=CAU" />

                <CategoryBox name="Food Is Life" id="foodIsLife"
                    imgUrl="https://medias.timeout.co.il/www/uploads/2022/03/shutterstock_1745914352-2000x1125.jpg" />

                <CategoryBox name="The Real Life" id="theRealLife"
                    imgUrl="https://img.mako.co.il/2018/04/08/joey_x5.jpg" />

            </div>
        </div>
    )

}

export default GameBoard