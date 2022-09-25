import React, { useEffect, useState } from 'react'
import "./GameBoard.scss"
const GameBoard = () => {
    const [category, setCategory] = useState<string>("none")

    function handleChooseCategory(ev: any) {
        ev.preventDefault()
        const categoryName = ev.target.id
        setCategory(categoryName)

    }

    if (category === "none") {


        return (
            <div>
                <h1>Choose category</h1>

                <div className="categoryWrapper">

                    <div id='HumanBody' onClick={handleChooseCategory} className="categoryBox">
                        <h2>Human body</h2>
                        <img src="https://cashcow-cdn.azureedge.net/media-gallery/QPHUm5_r09c=/mega%20gluflex/Mega.webp" alt="" />
                    </div>
                    <div id='DanceFloor' onClick={handleChooseCategory} className="categoryBox">
                        <h2>Dance floor</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6e1dDHSk0FT1cxH0Epr0oeIZrNTZwT69gg&usqp=CAU" alt="" />
                    </div>
                    <div id='FoodIsLife' onClick={handleChooseCategory} className="categoryBox">
                        <h2>Food is life</h2>
                        <img src="https://medias.timeout.co.il/www/uploads/2022/03/shutterstock_1745914352-2000x1125.jpg" alt="" />
                    </div>
                    <div id='TheRealLife' onClick={handleChooseCategory} className="categoryBox">

                        <h2>The real life</h2>
                        <img src="https://img.mako.co.il/2018/04/08/joey_x5.jpg" alt="" />
                    </div>
                </div>

            </div>
        )
    }

    else{
        return(
            <div>
                
            </div>
        )
    }
}

export default GameBoard