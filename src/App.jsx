/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Index from './Pages/Index'
import './Pages/Css/Style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000)
    }, [])

    return (
        <>
            {loading ? (
            <div className='text-center'><img className="loader" src="/loader.gif" alt="loading" /></div>
            ) : <Index />}
        </>

    )
}

export default App