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
        }, 8000)
    }, [])

    return (
        <>
            {loading ? (
                <div className='text-center'><iframe className="iframe1" src="https://embed.lottiefiles.com/animation/45730"></iframe></div>
            ) : <Index />}
        </>

    )
}

export default App