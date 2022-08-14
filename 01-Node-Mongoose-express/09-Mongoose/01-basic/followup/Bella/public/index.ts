async function handleAddAnimal(ev: any) {
    try {
      ev.preventDefault();
      const name:string = ev.target.elements.name.value;
      const donation:number = ev.target.elements.donation.value;
      const color:String = ev.target.elements.color.value;
      // const img: HTMLImageElement = ev.target.img.value;
      // console.log(name);

      if (!name || !donation || !color ) throw new Error("Missing details!");
      
      //@ts-ignore
      const { data } = await axios.post("/seaAnimals/add-seaAnimal", { name, donation, color });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  