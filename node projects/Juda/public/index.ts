async function handleSearch(ev) {
    ev.preventDefault();

    const choosenDate: string = ev.target.elements[0].valueAsDate
    const salsaCheckBox: boolean = ev.target.elements[1].checked
    const bachataCheckBox: boolean = ev.target.elements[2].checked

try {
       // @ts-ignore
       const { data } = await axios.post('/danceClubs/findClub', { choosenDate, salsaCheckBox, bachataCheckBox });
       console.log(data);
       const parties = data
       renderResults(parties)
    
} catch (error) {
    console.error(error);
}

}


function renderResults(parties) {

    const wrapper: HTMLDivElement = document.querySelector('.resultsWrapper');
    wrapper.innerHTML = "5"
    let html = ""
    parties.forEach(party => {
       html += `<div class="partyBox"> <h2> ${party.name}</h2> <br> Day: ${party.day} <br> Location: ${party.location} <br>
       Dance style: ${party.types} </div>`
    });
     wrapper.innerHTML = html   
 

}