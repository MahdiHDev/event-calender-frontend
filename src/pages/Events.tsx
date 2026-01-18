import { useEffect, useRef, useState } from "react";
import { Calendar } from "../components/ui/calendar";

const Events = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            // Reset height to recalc scrollHeight
            textareaRef.current.style.height = "0px";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    }, [value]);

    return (
        <div>
            <h2 className="font-semibold text-2xl text-primary mb-6">
                Create Event
            </h2>

            <form>
                <div className="w-full flex justify-between gap-4">
                    <div className="w-2/3">
                        <div className="mb-4">
                            <label
                                htmlFor="categoryName"
                                className="block text-lg font-medium text-gray-500 mb-4"
                            >
                                Event Name
                            </label>
                            <input
                                type="text"
                                id="categoryName"
                                name="categoryName"
                                className="w-full bg-white rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40"
                                placeholder="Enter category name"
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="categoryName"
                                className="block text-lg font-medium text-gray-500 mb-2"
                            >
                                Event Description
                            </label>
                            <textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                id="categoryName"
                                name="categoryName"
                                style={{
                                    scrollbarWidth: "none",
                                }}
                                className="resize-y w-full bg-white rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-[#054C8C]/40 min-h-25"
                                placeholder="Enter event description"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="categoryName"
                                className="block text-lg font-medium text-gray-500 mb-2"
                            >
                                Category
                            </label>
                            <select
                                name="categoryName"
                                id="categoryName"
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-[#054C8C] focus:ring-2 focus:ring-[#054C8C]/40"
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Select a category
                                </option>
                                <option
                                    value="music"
                                    className="text-gray-700 font-medium"
                                >
                                    Music
                                </option>
                                <option
                                    value="sports"
                                    className="text-gray-700 font-medium"
                                >
                                    Sports
                                </option>
                                <option
                                    value="art"
                                    className="text-gray-700 font-medium"
                                >
                                    Art
                                </option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white cursor-pointer duration-300 px-4 py-2 rounded-md hover:bg-[#054C8C]"
                        >
                            Create Event
                        </button>
                    </div>
                    <div className="w-1/3 px-4">
                        <label
                            htmlFor="categoryName"
                            className="block text-lg font-medium text-gray-500 mb-4 text-center"
                        >
                            Event date
                        </label>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow-sm w-full"
                            captionLayout="dropdown"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Events;
