function uid():string|false{
    try {
        return "id" + Math.random().toString(16).slice(2);
    } catch (error) {
      console.error(error)
      return false    
    }
}

 export function randomNumber(maxNumber:number):number|false {
    try {
        return Math.random()*maxNumber;
    } catch (error) {
        console.error(error)
        return false
    }
    
}

export default uid;