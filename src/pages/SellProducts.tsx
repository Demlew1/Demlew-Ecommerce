import { FaUpload } from "react-icons/fa";
export default function SellProducts() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white border-1 border-cyan-950 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-cyan-900 font-['Rubik'] text-center mb-8">
          Sell Your Product
        </h2>
        <form className="space-y-6 font-['Kanit']">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="e.g. Wireless Bluetooth Headphones"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="0.00"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              // rows="4"
              className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Describe your product in detail..."
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Garden</option>
              <option value="sports">Sports & Outdoors</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600 justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-700 hover:text-cyan-900 focus-within:outline-none"
                  >
                    <FaUpload className="mx-auto h-8 w-8 text-cyan-700" />
                    <span className="block mt-2">Upload Images</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-950 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Post my Product
          </button>
        </form>
      </div>
    </div>
  );
}
