import { useRouteError } from "react-router-dom"
import Navbar from "../components/navbar";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <Navbar />
            <h1>Oopsiee!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error