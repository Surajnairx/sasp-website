import React from "react";

function EventCard({ event }) {
  return (
    <div className="event-card bg-[#f8f3ed] rounded-lg overflow-hidden shadow-md group cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#4b2e1e] mb-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{event.date}</p>

        <p className="text-gray-700 text-sm">{event.desc}</p>
      </div>
    </div>
  );
}

export default EventCard;
