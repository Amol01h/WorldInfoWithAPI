import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
    const error=useRouteError();
    
    return(
    <div>
        <h1>Oops !!! Its a Wrong Page</h1>
        <h4>Go Back Last Page</h4>
        {error &&<p>{error.data}</p>}
        <NavLink to="/"><button>Back to home</button></NavLink>
    </div>
    )
}