import React from "react";

function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[#4b2e1e] mb-2">Address</h3>
        <p className="text-gray-600">
          Shree Ayyappa Temple, Old Sangvi, Pune, Maharashtra, India
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#4b2e1e] mb-2">Phone</h3>
        <p className="text-gray-600">+91 98220 29606</p>
        <p className="text-gray-600">+91 98220 29605</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#4b2e1e] mb-2">Email</h3>
        <p className="text-gray-600">temple@email.com</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#4b2e1e] mb-2">Timings</h3>
        <p className="text-gray-600">
          5:30 AM – 11:00 PM <br />
          5:00 PM – 9:00 PM
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
