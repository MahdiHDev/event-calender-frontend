import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const Events = () => {
    const eventList = [
        {
            id: 1,
            name: "New Year Celebration",
            description:
                "Celebration of the new year. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad porro quasi autem, voluptate esse ullam dicta aliquam eius doloribus dolor similique facere error repellendus dolore. Debitis, corporis possimus! Quibusdam cum blanditiis doloribus beatae ipsam quos eaque possimus, excepturi modi est voluptates earum ut saepe. Quos earum illo amet, accusamus rem nostrum dolorem nihil, tenetur perspiciatis tempora at minus autem! Enim adipisci dicta recusandae error amet. Eligendi excepturi, rerum sint ex at voluptatibus praesentium fugit, repellendus consectetur possimus, veritatis mollitia minima delectus facilis voluptates laboriosam nihil ratione odio tempora! Non reiciendis modi facere voluptate omnis aut blanditiis nisi possimus delectus.",
            date: "2024-01-01",
            eventCategory: "Holiday",
        },
        {
            id: 2,
            name: "Independence Day",
            description: "Independence day celebration",
            date: "2024-03-26",
            eventCategory: "Holiday",
        },
        {
            id: 3,
            name: "Eid-ul-Fitr",
            description: "Eid celebration",
            date: "2024-04-10",
            eventCategory: "Holiday",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center  mb-10">
                <h2 className="font-semibold text-2xl text-primary">Events</h2>
                <Link
                    to={"create"}
                    className="bg-primary text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-[#054C8C]"
                >
                    Create New Event
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
                {eventList.map((event) => (
                    <div
                        key={event.id}
                        className="border rounded-lg p-8 shadow-sm bg-white space-y-2 relative"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">{event.name}</h3>
                            <div className=" flex gap-2 text-gray-600 cursor-pointer">
                                <Link to="edit">
                                    <FaEdit className="text-lg hover:text-blue-500 duration-300" />
                                </Link>
                                <span>
                                    <MdDelete className="text-lg hover:text-red-500 duration-300" />
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">
                            <span className="font-semibold text-gray-700">
                                Description:
                            </span>{" "}
                            {event.description}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-semibold text-gray-700">
                                Date:
                            </span>{" "}
                            {event.date}
                        </p>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold text-gray-700">
                                Category:
                            </span>{" "}
                            {event.eventCategory}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
