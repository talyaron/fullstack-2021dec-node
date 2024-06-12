export function getDayName(dateStr)
{
    var date = new Date(dateStr);
   
    
    return date.toLocaleDateString("en-US", { weekday: 'long' });        
}