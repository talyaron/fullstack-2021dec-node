async function handleLoadCoach() {
    try {
        //@ts-ignore
        const {data}  = await axios.get('/events/get-events')
        console.log(data);

        renderEvent(data)
        
    } catch (error) {
        console.log(error);
        
    }
}



function renderEvent(events){
    try {
        let html = '';
        events.forEach(event => {
            html += 
            `<div class="event1">
            <h2>Lesson:${event.lesson}</h2>
            <h2>Date:${event.date}</h2>
            <h2>Price:${event.price}</h2>
            <h2>Coach:${event.coach}</h2>
            </div>`      
        });
        
        const root = document.querySelector('#root');
        if(!root) throw new Error ('No root !')
        root.innerHTML = html;
      
    }
     catch (error) {
        console.log(error);
        
    }
}

async function handleAddEvent(ev:any) {
    try {
        ev.preventDefault();
        const lesson = ev.target.lesson.value;
        const date = ev.target.date.value;
        const price = ev.target.price.value;
        const coach = ev.target.coach.value;

        //@ts-ignore
        const {data}  = await axios.post('/events/add-events', {lesson,date,price,coach})
        console.log(data);

        // renderEvent(data)
        
    } catch (error) {
        console.log(error);
        
    }
}

async function handleEvent() {
    try {
        //@ts-ignore
        const {data}  = await axios.get('/events/get-events')
        console.log(data);

        renderEventForCusts(data)
        
    } catch (error) {
        console.log(error);
        
    }
}

function renderEventForCusts(events){
try {
    let html = '';
    events.forEach(event => {
        html += 
        `<div class="event1">
        <h2>Lesson:${event.lesson}</h2>
        <h2>Date:${event.date}</h2>
        <h2>Price:${event.price}</h2>
        <h2>Coach:${event.coach}</h2>
        <button id="addToCartBtn" onclick="addToCart(${events})">Add Lesson to My Cart</button>
        </div>`      
    });
    
    const root = document.querySelector('#root');
    if(!root) throw new Error ('No root !')
    root.innerHTML = html;
  
} catch (error) {
    console.log(error);
}
}

