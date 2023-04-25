import axios from "axios";
import { useEffect, useState } from "react";

function Quote() {
    const [quote, setQuote] = useState(null);

    // using async await for fetch data 

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setQuote(res.data);
        }


        fetchQuote()
    }, [])


    return (
        <div>
            <h1>Get Quote using fetch API</h1>
            {
                quote?.map(items => <p>{items.title}</p>)
            }
            {/* {
                quote.map(items => <p>{console.log(items)}</p>)
            } */}
        </div>
    )
}

export default Quote;