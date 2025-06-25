import React from 'react'

const Info = () => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-3 flex items-center">
          <span className="mr-2">🕒</span> Working Hours
        </h3>
        <div className="space-y-2">
          {/* Regular Days */}
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Sunday</span>
            <span className="text-green-300 text-sm">11:00 AM - 9:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Monday</span>
            <span className="text-green-300 text-sm">11:00 AM - 9:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Tuesday</span>
            <span className="text-green-300 text-sm">11:00 AM - 9:00 PM</span>
          </div>
          
          {/* Closed Day */}
          <div className="flex justify-between items-center py-1 px-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Wednesday</span>
            <span className="text-red-400 text-sm font-semibold">Closed</span>
          </div>
          
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Thursday</span>
            <span className="text-green-300 text-sm">11:00 AM - 10:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Friday</span>
            <span className="text-green-300 text-sm">11:00 AM - 10:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 rounded-lg">
            <span className="text-gray-300 text-sm font-medium">Saturday</span>
            <span className="text-green-300 text-sm">11:00 AM - 10:00 PM</span>
          </div>
          
          {/* Emergency Notice */}
          <div className="mt-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-200 text-sm font-medium text-center">
              ⚡ Emergency repairs available
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">🛡️</span> Warranty
        </h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Original & high-quality parts</li>
          <li>• Free diagnosis</li>
        </ul>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">💳</span> Payment Methods
        </h3>
        <p className="text-gray-300 text-sm">
          Cash, Card, Bkash , Nagad
        </p>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">⭐</span> Experience
        </h3>
        <p className="text-gray-300 text-sm">
          3+ years in mobile repair industry with 100+ satisfied customers
        </p>
      </div>
    </div>
  )
}

export default Info