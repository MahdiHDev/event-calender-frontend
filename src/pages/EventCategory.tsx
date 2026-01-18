const EventCategory = () => {
    return (
        <div>
            <h2 className="font-semibold text-2xl text-primary mb-6">
                Create Event Category
            </h2>

            <form>
                <div className="mb-4">
                    <label
                        htmlFor="categoryName"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40"
                        placeholder="Enter category name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="color"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Choose Color
                    </label>
                    <input
                        type="color"
                        id="color"
                        name="color"
                        className="w-16 h-10 p-0 border-0"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-[#054C8C]"
                >
                    Create Category
                </button>
            </form>
        </div>
    );
};

export default EventCategory;
