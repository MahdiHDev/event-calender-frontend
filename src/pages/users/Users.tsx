import { FaEdit, FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const Users = () => {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        {
            id: 2,
            name: "Jane Smith",
            email: "jansmith@gmail.com",
            role: "User",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alicjohnson@gmail.com",
            role: "User",
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h2 className="font-semibold text-2xl text-primary mb-6">
                    Users
                </h2>
                <Link
                    to="create"
                    className="bg-primary text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-[#054C8C]"
                >
                    Create User
                </Link>
            </div>
            <div>
                {users.map((user) => (
                    <div className="mb-4 p-4 border rounded-lg flex items-center justify-between bg-white">
                        <div key={user.id} className="">
                            <div className="flex items-center gap-4 mb-2">
                                <FaUserCircle className="text-3xl text-gray-600" />
                                <div>
                                    <p className="font-semibold text-lg">
                                        {user.name}
                                    </p>
                                    <p className="text-gray-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link to={"edit"}>
                                <FaEdit className="text-xl text-gray-600 hover:text-blue-500 duration-300 cursor-pointer" />
                            </Link>
                            <p>
                                <MdDelete className="text-xl text-gray-600 hover:text-red-500 duration-300 cursor-pointer" />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
