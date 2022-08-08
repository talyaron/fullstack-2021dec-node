
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
            <p class="evDetails">Lesson:${event.lesson}</p>
            <p class="evDetails">Start At:${event.dateS2}</p>
            <p class="evDetails">End At:${event.dateE2}</p>
            <p class="evDetails">Time:${event.hour}</p>

            <p class="evDetails">Day:${event.day}</p>
            <p class="evDetails">Price:${event.price}</p>
            <p class="evDetails">Coach:${event.coach}</p>
            <button onclick="deleteLesson('${event._id}')" class="evDetails">delete lesson</button>
            </div>`      
        });
        
        const root1 = document.querySelector('#root1');
        if(!root1) throw new Error ('No root !')
        root1.innerHTML = html;
      
    }
     catch (error) {
        console.log(error);
        
    }
}

async function deleteLesson(_id){
    try {
        //@ts-ignore
        const {data} = await axios.post('/events/delete-for-coach', {_id});
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

async function handleAddEvent(ev:any) {
    try {
        ev.preventDefault();
        const lesson = ev.target.lesson.value;
        const day = ev.target.day.value;
        const dateStart = ev.target.dateStart.value;
        const dateEnd = ev.target.dateEnd.value;
        const hour = ev.target.hour.value;

        const dateS = new Date(dateStart)
            const dateS1 = dateS.toUTCString()
            const dateS2 = dateS1.replace("00:00:00 GMT", "")
            const dateE = new Date(dateStart)
            const dateE1 = dateE.toUTCString()
            const dateE2 = dateE1.replace("00:00:00 GMT", "")

        const price = ev.target.price.value;
        const coach = ev.target.coach.value;

        //@ts-ignore
        const {data}  = await axios.post('/events/add-events', {lesson,day,dateS2,dateE2,hour,price,coach})
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

        renderForCustomer(data)
        
    } catch (error) {
        console.log(error);
        
    }
}



function renderForCustomer(events){
    try {
        let html = '';
        events.forEach(event => {  
        html += 
        `<div class="event1">
        <h2>Lesson:${event.lesson}</h2>
        <h2>start at:${event.dateS2}</h2>
        <h2>end at:${event.dateE2}</h2>
        <h2>Time:${event.hour}</h2>

        <h2>day:${event.day}</h2>
        <h2>Price:${event.price}</h2>
        <h2>Coach:${event.coach}</h2>
        <button id="addToCartBtn" onclick="addToCart('${event._id}')">Add Lesson to My Cart</button>
        </div>`      
    });
    const root2 = document.querySelector('#root2');
    if(!root2) throw new Error ('No root !')
    root2.innerHTML = html;
  
} catch (error) {
    console.log(error);
}
}

async function addToCart(_id){
   
    try {
        console.log(_id);
        
        //@ts-ignore
        const {data} = await axios.post('/events/add-to-cart',{_id})
    
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
        console.log(data);
        
        const root = document.querySelector('#root');
    let cart='';
    data.forEach(event => {
        cart += `<div id="cart">
        <h3>Lesson:${event.lesson}</h3>
        <h2>start at:${event.dateS2}</h2>
        <h2>end at:${event.dateE2}</h2>
        <h2>Time:${event.hour}</h2>

        <h2>day:${event.day}</h2>
        <h3>Price:${event.price}</h3>
        <button onclick="deleteLessonFromCart('${event._id}')">delete lesson</button>
        </div>`
    });
    root.innerHTML = cart;
    // let total = 0;
    for(let i=0; i< data.length; i++){
        console.log(data[i].price);
        // if(data[i]._id !== data[i]._id){
        //  total:Number += data[i].price
        const total:Number = data.reduce((acc, lesson) => acc + lesson.price, 0)
        const totalToPay = document.querySelector('#totalToPay');
        totalToPay.innerHTML = `total to pay <br> ${(total)}`;
    };
    
    } 
    catch (error) {
        console.log(error);
        
    }
};

async function deleteLessonFromCart(_id){
    try {
        //@ts-ignore
        const {data} = await axios.post('/events/delete-from-cart', {_id});
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};






