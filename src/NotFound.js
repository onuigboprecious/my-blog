import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>This Page Can Not Be Found</p>
            <Link to={'/'}>Go to HomePage...</Link>
        </div>
     );
}
 
export default NotFound;