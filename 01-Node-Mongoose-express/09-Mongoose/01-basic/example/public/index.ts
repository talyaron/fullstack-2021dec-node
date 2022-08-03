async function handleAddCat(ev: any) {
  try {
    ev.preventDefault();
    const age = ev.target.age.valueAsNumber;
    const name = ev.target.name.value;

    if (!name || !age) throw new Error("No name or age");
    //@ts-ignore
    const { data } = await axios.post("/cats/add-cat", { name, age });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
