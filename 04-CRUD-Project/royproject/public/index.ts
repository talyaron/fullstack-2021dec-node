   function showStat(){
    selectedfOption()
   }
   
   function selectedfOption(){
   
   try {
    // @ts-ignore
    axios.get("/api/get-stat").then(({data}) => {
    const { selectedfOption, error } = data;
    if (error) throw new Error(error);
    console.dir(selectedfOption)
    fgetAllTeams(selectedfOption)
  })
}
     catch (err: any) {
    console.error(err);
  }
}
      
      

    function fgetAllTeams(selectedOption){
      try {
        // @ts-ignore
        axios.get("/api/get-teams").then(({data}) => {
        const { teams, error } = data;
        console.log(teams)
        const seletedindex= teams.findIndex(team=>team.teamName===selectedOption)
        console.log(seletedindex)
         let selectedTeam=teams[seletedindex]
         console.dir(selectedTeam)
         renderDetailsf(selectedTeam)
        if (error) throw new Error(error);
        })
      }
       catch (err: any) {
        console.error(err);
      }
    }
    function renderDetailsf(teams:team) {
      const name:HTMLParagraphElement = document.querySelector("#fteamName")
      name.innerText=`${teams.teamName}`
      const image: HTMLImageElement = document.querySelector("#fTeam");
      image.src = `${teams.teamimg}`;
    }
    