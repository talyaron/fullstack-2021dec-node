import { stringify } from "querystring";

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
            <button onclick="deleteLesson(${event._id})"></button>
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

async function deleteLesson(id){
    try {
        //@ts-ignore
        const {data} = await axios.post('/events/delete-for-coach', {id});
        console.log(data);
        
    } catch (error) {
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

        renderEventForCust(data)
        
    } catch (error) {
        console.log(error);
        
    }
}

function renderEventForCust(events){
try {
    let html = '';
    events.forEach(event => {
        html += 
        `<div class="event1">
        <h2>Lesson:${event.lesson}</h2>
        <h2>Date:${event.date}</h2>
        <h2>Price:${event.price}</h2>
        <h2>Coach:${event.coach}</h2>
        <button id="addToCartBtn" onclick="addToCart(${event})">Add Lesson to My Cart</button>
        </div>`      
    });
    
    const root = document.querySelector('#root');
    if(!root) throw new Error ('No root !')
    root.innerHTML = html;
  
} catch (error) {
    console.log(error);
}
}


async function addToCart(events){
try {
const lesson = events.lesson;
const date = events.date;
const price = events.price;


//@ts-ignore
const {data} = await axios.post('/add-to-cart',{lesson,date,price})

    console.log(data);
    
} catch (error) {
    console.log(error);
    
}
}


async function handleCart(){
    try {
    renderCart()
    } catch (error) {
        console.log(error);
        
    }
}

async function moveToCart() {
    try {
        window.location.href = './cart.html';
        
    } catch (error) {
        console.log(error);
    }
}

async function renderCart(){
    try {
        //@ts-ignore
        const {data}  = await axios.get('/events/find-cart-by-user')
        const root = document.querySelector('#root');
    let html='';
    data.forEach(event=>{
        html += `<div id="cart">
        <h3>Lesson:${event.lesson}</h3>
        <h3>Date:${event.date}</h3>
        <h3>Price:${event.price}</h3>
        <button onclick="deleteLessonFromCart(${event._id})"></button>
        </div>`
    });
    root.innerHTML = html;
    for(let i=0; i< data.length; i++){
        const total:Number = data.price[i] + data.price[i];
        const totalToPay = document.querySelector('#totalToPay');
        totalToPay.innerHTML = `total to pay <br> ${(total)}`;
    };
    
    } 
    catch (error) {
        console.log(error);
        
    }
};

async function deleteLessonFromCart(id){
    try {
        //@ts-ignore
        const {data} = await axios.post('/events/delete-from-cart', {id});
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};






