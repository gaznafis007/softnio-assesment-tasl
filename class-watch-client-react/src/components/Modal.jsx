

const Modal = () => {
    return (
        <>
            <div id="cartModal" className="fixed inset-0 bg-gray-900 bg-opacity-50 items-center justify-center hidden">
        <div className="w-2/3 mx-auto my-3 bg-white shadow-md rounded-md p-6 relative">
            {/* Close Button */}
            <button id="closeModal" className="absolute top-4 right-4 bg-gray-200 rounded-full px-2 py-1 hover:bg-gray-300">
                ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Item</th>
                  <th className="py-2">Color</th>
                  <th className="py-2">Size</th>
                  <th className="py-2">Qnt</th>
                  <th className="py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-4 flex items-center space-x-4">
                    <img src="assets/black-blue-watch.png" alt="Item 1" className="w-14 h-14 rounded"/>
                    <span>Classy Modern Smart watch</span>
                  </td>
                  <td className="py-4">Black</td>
                  <td className="py-4 px-1 font-bold">XL</td>
                  <td className="py-4 font-bold">1</td>
                  <td className="py-4">$99.00</td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b">
                  <td className="py-4 flex items-center space-x-4">
                    <img src="assets/purple-watch.png" alt="Item 2" className="w-14 h-14 rounded"/>
                    <span>Classy Modern Smart watch</span>
                  </td>
                  <td className="py-4">Purple</td>
                  <td className="py-4 px-1 font-bold">L</td>
                  <td className="py-4 font-bold">2</td>
                  <td className="py-4">$178.00</td>
                </tr>
                {/* Row 3 */}
                <tr className="border-b">
                  <td className="py-4 flex items-center space-x-4">
                    <img src="assets/cyan-watch.png" alt="Item 3" className="w-14 h-14 rounded"/>
                    <span>Classy Modern Smart watch</span>
                  </td>
                  <td className="py-4">Cyan</td>
                  <td className="py-4 px-1 font-bold">M</td>
                  <td className="py-4 font-bold">1</td>
                  <td className="py-4">$79.00</td>
                </tr>
                <tr className="mt-5">
                  <td className="py-4 flex items-center space-x-4">
                    <p className="text-lg font-bold">
                        Total
                      </p>
                  </td>
                  <td className="py-4"></td>
                  <td className="py-4"></td>
                  <td className="py-4 font-bold">4</td>
                  <td className="py-4 text-lg font-bold text-blue-600">$356.00</td>
                </tr>
              </tbody>
            </table>
          
            {/* Buttons */}
            <div className="flex justify-end gap-x-3 items-center mt-6">
              <button className="px-4 py-2 border border-slate-400 text-gray-600 rounded hover:bg-gray-300">
                Continue Shopping
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
        </div>
    </div>
        </>
    );
};

export default Modal;