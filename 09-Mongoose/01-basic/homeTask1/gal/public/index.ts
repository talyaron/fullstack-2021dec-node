async function handleAddCat(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const age = ev.target.age.valueAsNumber;
        if(!name || !age) throw new Error ("No Data");
        // @ts-ignore
        const {data} = await axios.post("/cats/add-cat",{name,age});
        console.log(data)
        console.dir(data)
    }catch (error) {
        console.error(error);
      }
}