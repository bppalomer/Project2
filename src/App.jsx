import { useEffect } from 'react'
import Index from './Pages/Index'
import './Pages/Css/Style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



function App () {

    useEffect(()=>{
        AOS.init();
      }, []);

    return (
        <>
        <Index />
        </>
          
    )
    
}

export default App