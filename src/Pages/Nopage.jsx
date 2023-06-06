import { useNavigate } from "react-router-dom"

function Nopage () {

    const navigate = useNavigate();
    return (

        <>
        <div className="text-center m-5">
        <h1 className="text404">404</h1>
        <h2 className="text4042">Page Not Found</h2>
        <div className="d-flex justify-content-center m-3">
        <button className="btn404 fw-bold" onClick={()=>navigate('/')}>Go back to Home Page</button>
        </div>
        
        </div>
        
        </>
        
    )
}

export default Nopage