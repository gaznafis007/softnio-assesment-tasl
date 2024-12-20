import { useState } from "react";
import watch from "./assets/purple-watch.png";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

import Modal from "./components/Modal";
import Swal from "sweetalert2";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [active, setActive] = useState({size:'m', price: 79});
  const [addFav, setAddFav] = useState(false)
  const [activeBandColor, setActiveBandColor] = useState("");
  const [addedToCart, setAddedToCart] = useState({})
  const handleActiveBandColor = (param) => {
    setActiveBandColor(param);
  };
  const handleCheckOut = () => {
    setIsOpen(true);
    console.log(addedToCart)
  };
  const handleProductCount = (action) => {
    let newProductCount;
    if (action === "increment") {
      newProductCount = productCount + 1;
      setProductCount(newProductCount);
    } else if (action === "decrement") {
      if (productCount > 0) {
        newProductCount = productCount - 1;
        setProductCount(newProductCount);
      }
      return;
    }
  };
  const handleActiveSize = size =>{
    setActive(size);
  }
  const handleAddToCart = () => {
    const cart = {
      name: 'Classy Modern Smart watch',
      color: activeBandColor,
      size: active?.size,
      price: active?.price,
      productCount: productCount,
    }
    setAddedToCart(cart)
    Swal.fire("Product added to cart");
  };
  return (
    <>
      <main className="mx-4 md:p-10">
        <section className="flex flex-col md:flex-row space-x-6 w-full md:w-3/4 mx-auto justify-center items-center">
          {/* image section  */}
          <div className="w-full md:w-1/2 rounded-md">
            <img className="rounded-md w-full" src={watch} alt="smart-watch" />
          </div>
          {/* text section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold text-slate-800 capitalize">
              classy modern smart watch
            </h1>
            <div className="mt-2 flex flex-row items-center">
              <div className="flex flex-row">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalfAlt className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <p className="text-slate-500 ml-2"> (2 reviews)</p>
            </div>
            <div className="mt-5">
              <h2 className="text-xl text-blue-500">
                {" "}
                <span className="text-lg line-through text-slate-400">
                  $99.00
                </span>{" "}
                <span className="font-semibold">$79.00</span>
              </h2>
            </div>
            {/* description */}
            <p className="mt-5 font-thin text-slate-400 text-sm">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching
            </p>
            {/* type and model number */}
            <div className="mt-5 flex flex-row gap-x-12">
              <div>
                <h3 className="text-slate-400 font-thin">Type</h3>
                <p className="font-bold text-slate-800">Watch</p>
              </div>
              <div>
                <h3 className="text-slate-400 font-thin">Model Number</h3>
                <p className="font-bold text-slate-800">Forerunner 290XT</p>
              </div>
            </div>
            {/* color */}
            <div className="mt-5">
              <h2 className="text-slate-800 font-bold capitalize">
                band color
              </h2>
              <div className="flex flx-row gap-x-3 items-center">
                <div className={activeBandColor === '#816BFF' ? "w-6 h-6 border-2 border-[#816BFF] rounded-full flex items-center" : "w-6 h-6 rounded-full flex items-center"}>
                  <div onClick={() =>handleActiveBandColor('#816BFF')} className="w-4 h-4 m-auto text-center rounded-full  bg-[#816BFF]"></div>
                </div>
                <div className={activeBandColor === '#1FCEC9' ? "w-6 h-6 border-2 border-[#1FCEC9] rounded-full flex items-center" : "w-6 h-6 rounded-full flex items-center"}>
                  <div onClick={() => handleActiveBandColor('#1FCEC9')} className="w-4 h-4 m-auto text-center rounded-full bg-[#1FCEC9]"></div>
                </div>
                <div className={activeBandColor === '#4B97D3' ? "w-6 h-6 border-2 border-[#4B97D3] rounded-full flex items-center" : "w-6 h-6 rounded-full flex items-center"}>
                  <div onClick={() =>handleActiveBandColor('#4B97D3')} className="w-4 h-4 m-auto text-center rounded-full bg-[#4B97D3]"></div>
                </div>
                <div className={activeBandColor === '#3B4747' ? "w-6 h-6 border-2 border-[#3B4747] rounded-full flex items-center" : "w-6 h-6 rounded-full flex items-center"}>
                  <div onClick={() => handleActiveBandColor('#3B4747')} className="w-4 h-4 m-auto text-center rounded-full bg-[#3B4747]"></div>
                </div>
              </div>
            </div>
            {/* wrist size */}
            <div className="mt-5">
              <h2 className="text-slate-800 font-bold capitalize">
                wrist size
              </h2>
              <div
                className="flex flex-col md:flex-row gap-x-3 mt-2"
              >
                {/* Active size card */}
                <div
                  className={active?.size === 's' ? "size-card rounded-md border border-blue-600 px-3 py-1 cursor-pointer" : "size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer"}
                  data-size="S"
                  onClick={() => handleActiveSize({size:'s', price: 69})}
                >
                  <p className="font-thin text-slate-400">
                    <span className={active?.size === 's' ? "text-blue-600 text-lg mr-2 font-bold" : "text-black text-lg mr-2 font-bold"}>
                      S
                    </span>{" "}
                    $69
                  </p>
                </div>
                <div
                  className={active?.size === 'm' ? "size-card rounded-md border border-blue-600 px-3 py-1 cursor-pointer" : "size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer"}
                  data-size="M"
                  onClick={() => handleActiveSize({size:'m', price: 79})}
                >
                  <p className="font-thin text-slate-400">
                    <span className={active?.size === 'm' ? "text-blue-600 text-lg mr-2 font-bold" : "text-black text-lg mr-2 font-bold"}>M</span>{" "}
                    $79
                  </p>
                </div>

                <div
                  className={active?.size === 'l' ? "size-card rounded-md border border-blue-600 px-3 py-1 cursor-pointer" : "size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer"}
                  data-size="L"
                  onClick={() => handleActiveSize({size: 'l', price: 89})}
                >
                  <p className="font-thin text-slate-400">
                    <span className={active?.size === 'l' ? "text-blue-600 text-lg mr-2 font-bold" : "text-black text-lg mr-2 font-bold"}>L</span>{" "}
                    $89
                  </p>
                </div>
                {/* Regular size card */}
                <div
                  className={active?.size === 'xl' ? "size-card rounded-md border border-blue-600 px-3 py-1 cursor-pointer" : "size-card rounded-md border border-slate-400 px-3 py-1 cursor-pointer"}
                  data-size="XL"
                  onClick={() => handleActiveSize({size: 'xl', price: 99})}
                >
                  <p className="font-thin text-slate-400">
                    <span className={active?.size === 'xl' ? "text-blue-600 text-lg mr-2 font-bold" : "text-black text-lg mr-2 font-bold"}>
                      XL
                    </span>{" "}
                    $99
                  </p>
                </div>
              </div>
            </div>
            {/* add to cart section */}
            <div className="mt-5 flex flex-col md:flex-row gap-x-3 items-center">
              <div className="flex flex-row items-center">
                <button
                  onClick={() => handleProductCount("decrement")}
                  className="py-2 px-4 border border-slate-400 rounded-l-md"
                >
                  -
                </button>
                <p className="p-2 px-4 border-y border-y-slate-400">
                  {productCount}
                </p>
                <button
                  onClick={() => handleProductCount("increment")}
                  className="py-2 px-4 border border-slate-400 rounded-r-md"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white font-bold px-3 py-2 rounded-md"
              >
                Add to cart
              </button>
              {
                addFav ? <FaHeart onClick={() => setAddFav(false)} className="text-blue-600 text-2xl cursor-pointer" /> : <CiHeart onClick={() => setAddFav(true)} className="text-blue-600 text-2xl cursor-pointer" />
              }
            </div>
          </div>
        </section>
      </main>
      {/* Checkout button */}
      <button
        onClick={handleCheckOut}
        className="bg-[#FFBB5a] rounded-full font-bold text-slate-600 block mb-6 px-4 py-2 mx-auto text-center shadow-md"
      >
        Checkout <span className="bg-white ml-1 rounded-md text-sm p-1">2</span>
      </button>
      {/* Modal */}
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} cart={addedToCart} />}
    </>
  );
}

export default App;
