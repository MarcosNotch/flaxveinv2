import './App.css'
import "./style.css";
import Header from './components/header/header.jsx'
import Seccion1 from './components/seccion1/seccion1.jsx'
import Seccion2 from './components/seccion2/seccion2.jsx'
import Seccion3 from './components/seccion3/seccion3.jsx'
import Benefits from './components/benefits/benefits.jsx'
import Seccion4 from './components/seccion4/Seccion4.jsx'


function App() {

 // <spline-viewer url="https://prod.spline.design/4R7GRKhEHiYaKJd8/scene.splinecode"></spline-viewer>
 // <spline-viewer url="https://prod.spline.design/v37qCcdjl2khLBvu/scene.splinecode"></spline-viewer>

  return (
    <>
    <Header />

    <div className=' max-w-screen-xl mx-auto pt-8 px-5 '>
    
      <main className='w-full space-y-36 mb-40'>
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />

        <Benefits />

        <Seccion4 />
      </main>
      
    </div>
    <footer className='w-full bg-negro1'>
      <div className=" mt-10 max-w-screen-xl mx-auto  h-auto flex flex-col md:flex-row justify-between sm:p-4 p-10">
          <div className="w-full    h-auto flex flex-col md:flex-row justify-between sm:p-4">
            <div>
              <div className="container2 space-x-1 mb-3">
                <span id="letra2" className="f ">
                  F
                </span>
                <span id="letra2" className="l ">
                  L
                </span>
                <span id="letra2" className="a ">
                  A
                </span>
                <span id="letra2" className="x ">
                  X
                </span>
                <span id="letra2" className="v ">
                  V
                </span>
                <span id="letra2" className="e ">
                  E
                </span>
                <span id="letra2" className="i ">
                  I
                </span>
                <span id="letra2" className="n ">
                  N
                </span>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-white text-lg md:text-xl">Contáctenos</h2>
              </div>
              <div className="mt-1">
                <p className="text-gray-300">contacto@flaxvein.com</p>
              </div>
              <div>
                <div className="mt-3">
                  <a href="https://wa.me/543517523817?text=Help me Flaxvein!" target="_blank">
                  <div>
                    <h2 className="text-white text-lg md:text-xl">WhatsApp</h2>
                  </div>
                  <div className="flex items-center justify-start my-2 ">
                    <img
                      src={new URL("./imgs/whatsapp.png", import.meta.url).href}
                      alt="imagen computadora"
                    />
                    <p className="text-gray-300">+5493517523817</p>
                  </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div>
                <h2 className="text-white text-lg md:text-xl">Síguenos</h2>
              </div>
              <div>
                <a href="https://www.instagram.com/flaxvein" target="_blank">
                  <div className="flex items-center justify-start my-2 space-x-1">
                    <img
                      src={new URL("./imgs/instagram.png", import.meta.url).href}
                      alt="imagen computadora"
                    />
                    <p className="text-gray-300">Instagram</p>
                  </div>
                </a>

                <div className="flex items-center justify-start my-2 space-x-1">
                  <img
                     src={new URL("./imgs/linkedin.png", import.meta.url).href}
                    alt="imagen computadora"
                  />
                  <p className="text-gray-300">Linkedin</p>
                </div>
                <div className="flex items-center justify-start my-2 space-x-2">
                  <img
                     src={new URL("./imgs/twitter.png", import.meta.url).href}
                    alt="imagen computadora"
                  />
                  <p className="text-gray-300">Twitter</p>
                </div>
                <div className="flex items-center justify-start my-2 space-x-1">
                  <img
                    src={new URL("./imgs/facebook.png", import.meta.url).href}
                    alt="imagen computadora"
                  />
                  <p className="text-gray-300">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    
  )
}

export default App
