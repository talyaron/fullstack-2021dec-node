import React from 'react'
import Option from './Option'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface CounterProps{
    counterFunction: Function
}

const TheRealLife = ({counterFunction}:CounterProps) => {
    const [counter, setCounter] = useState<number>(0);

function wrongAnswers(){
    setCounter(counter+1)
    counterFunction()
}

    return (

        <div>
            <h1>which one i met in life</h1>

            <div className='allOptions'>

                <Option setCounter={wrongAnswers} optionName='Lior' isTruth={true} optionImg="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" />

                <Option setCounter={wrongAnswers} optionName='Adam' isTruth={false} optionImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/400px-Pierre-Person.jpg?20170622160125" />

                <Option setCounter={wrongAnswers} optionName='Gili' isTruth={false} optionImg="https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg" />

                <Option setCounter={wrongAnswers} optionName='Roi' isTruth={false} optionImg="https://www.masslive.com/resizer/xVHY0q6Qkr7dEpIxneVYqfNoUwQ=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg" />
            </div>

        </div>
    )
}

export default TheRealLife