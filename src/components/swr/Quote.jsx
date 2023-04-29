import axios from "axios";
import useSWR from 'swr';

function Quote() {
    const fetcher = async (...args) => {
        const res = await axios.get(...args)
        return res.data;
    }

    const { isLoading, data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
        suspense: true
    });

    if (error) {
        return (
            <div>
                <h1>Data is not avaliable</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                <h1>Data is loading.........</h1>
            </div>
        )
    }

    console.log(data);

    return (
        <div>
            <h1>Get Quote using fetch API</h1>

        </div>
    )
}

export default Quote;