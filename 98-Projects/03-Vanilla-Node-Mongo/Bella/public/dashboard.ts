


function handleLoad() {
    try {
        // //@ts-ignore
        // const { data } = await axios.get("/data/get-all-data");
        // console.log(data);
        
        stocksAPI()
        
    } catch (error) {
        console.error(error)
    }
}

async function stocksAPI() {
    try {
        //@ts-ignore
        const {data} = await axios.get("https://cloud.iexapis.com/stable/tops?token=pk_421d8331d521478798685db9b5be24fa&symbols=aapl");
        console.log(data);

    } catch (error) {
        console.error(error);
    }
};