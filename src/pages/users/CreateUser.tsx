import { useNavigate } from "react-router";

const CreateUser = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="font-semibold text-2xl text-primary mb-6">
                Create User
            </h2>

            <form>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40 bg-white"
                        placeholder="Enter full name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40 bg-white"
                        placeholder="Enter email address"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="role"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Role
                    </label>
                    <select
                        name="role"
                        id="role"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-2 focus:ring-[#054C8C]/40"
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40 bg-white"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-lg font-medium text-gray-500 mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40 bg-white"
                        placeholder="Confirm password"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-[#054C8C]"
                >
                    Create User
                </button>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="ml-2 bg-gray-500 text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-gray-600"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
