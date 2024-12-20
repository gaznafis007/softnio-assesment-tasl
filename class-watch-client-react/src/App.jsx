import { useState } from 'react'
import watch from './assets/purple-watch.png'

import Modal from './components/Modal';
import Swal from 'sweetalert2';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const handleCheckOut = () =>{
    setIsOpen(true)
    console.log(isOpen)
  }
  const handleProductCount = (action) =>{
    let newProductCount
    if(action ==='increment'){
       newProductCount = productCount + 1
      setProductCount(newProductCount)
    }
    else if (action === 'decrement'){
      if(productCount > 0){
        newProductCount = productCount - 1;
        setProductCount(newProductCount)
      }
      return
    }
  }
  const handleAddToCart = () =>{
    Swal.fire("Product added to cart");
  }
  return (
    <>
      <main className="mx-4 md:p-10">
        <section className="flex flex-col md:flex-row space-x-6 w-full md:w-3/4 mx-auto justify-center items-center">
            {/* image section  */}
            <div className="w-full md:w-1/2 rounded-md">
                <img className="rounded-md w-full" src={watch} alt="smart-watch"/>
            </div>
             {/* text section */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-semibold text-slate-800 capitalize">classy modern smart watch</h1>
                <div className="mt-2 flex flex-row items-center">
                    <div>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-regular fa-star-half-stroke text-yellow-400"></i>
                    <i className="fa-regular fa-star text-yellow-400"></i>
                    </div>
                    <p className="text-slate-500 ml-2"> (2 reviews)</p>
                </div>
                <div className="mt-5">
                    <h2 className="text-xl text-blue-500"> <span className="text-lg line-through text-slate-400">$99.00</span> <span className="font-semibold">$79.00</span></h2>
                </div>
                description
                <p className="mt-5 font-thin text-slate-400 text-sm">
                    I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching
                </p>
                type and model number
                <div className="mt-5 flex flex-row gap-x-12">
                    <div>
                        <h3 className="text-slate-400 font-thin">
                            Type
                        </h3>
                        <p className="font-bold text-slate-800">
                            Watch
                        </p>
                    </div>
                    <div>
                        <h3 className="text-slate-400 font-thin">
                            Model Number
                        </h3>
                        <p className="font-bold text-slate-800">
                            Forerunner 290XT
                        </p>
                    </div>
                </div>
                 {/* color */}
                <div className="mt-5">
                    <h2 className="text-slate-800 font-bold capitalize">band color</h2>
                    <div className="flex flx-row gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-[#816BFF] rounded-full flex items-center">
                            <div className="w-4 h-4 m-auto text-center rounded-full  bg-[#816BFF]"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#1FCEC9]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#4B97D3]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#3B4747]"></div>
                    </div>
                </div>
                {/* wrist size */}
                <div className="mt-5">
                    <h2 className="text-slate-800 font-bold capitalize">wrist size</h2>
                    <div id="sizeCards" className="flex flex-col md:flex-row gap-x-3 mt-2">
                        {/* Active size card */}
                        <div className="size-card rounded-md border border-blue-600 px-3 py-1 cursor-pointer" data-size="S">
                            <p className="font-thin text-slate-400"><span className="text-blue-600 text-lg mr-2 font-bold">S</span> $69</p>
                        </div>
                        <div className="size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer" data-size="M">
                            <p className="font-thin text-slate-400"><span className="text-black text-lg mr-2 font-bold">M</span> $79</p>
                        </div>
                        
                        <div className="size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer" data-size="L">
                            <p className="font-thin text-slate-400"><span className="text-black text-lg mr-2 font-bold">L</span> $89</p>
                        </div>
                        {/* Regular size card */}
                        <div className="size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer" data-size="XL">
                            <p className="font-thin text-slate-400"><span className="text-black text-lg mr-2 font-bold">XL</span> $99</p>
                        </div>
                    </div>
                </div>                
                 {/* add to cart section */}
                  <div className="mt-5 flex flex-col md:flex-row gap-x-3 items-center">
                    <div className="flex flex-row items-center">
                        <button onClick={() => handleProductCount('decrement')} className="py-2 px-4 border border-slate-400 rounded-l-md">-</button>
                        <p className="p-2 px-4 border-y border-y-slate-400">
                            {productCount}
                        </p>
                        <button onClick={() => handleProductCount('increment')} className="py-2 px-4 border border-slate-400 rounded-r-md">+</button>
                    </div>
                    <button onClick={handleAddToCart} className="bg-blue-600 text-white font-bold px-3 py-2 rounded-md">Add to cart</button>
                    <i className="fa-regular fa-heart text-blue-600"></i>
                  </div>
            </div>
        </section>
    </main>
    {/* Checkout button */}
    <button onClick={handleCheckOut} className="bg-[#FFBB5a] rounded-full font-bold text-slate-600 block mb-6 px-4 py-2 mx-auto text-center shadow-md">
        Checkout <span className="bg-white ml-1 rounded-md text-sm p-1">2</span>
    </button>
    {/* Modal */}
    {
      isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    }
    </>
  )
}

export default App
