import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const handleChatClick = () => {
    setIsExpanded(!isExpanded);
    if (hasNotification) {
      setHasNotification(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

    
      {/* Chat Button */}
      <div className="relative flex gap-2">
        {/* Collapsed State - Floating Button */}
        <button
          
          className={`${
            isExpanded ? 'md:hidden' : 'md:flex'
          } items-center hidden   bg-white h-15 text-gray-800 rounded-2xl px-4 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 `}
        >
          <span className="text-lg ">Chat with us</span>
          <span className="text-lg">👋</span>
           
          
          {/* Notification Badge */}
          {hasNotification && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          )}
        </button>
         <button
            onClick={handleChatClick}
            className={`relative ${
              isExpanded ? 'hidden' : 'flex'
            } items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105`}
          >
            {/* Video/Call Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-dot-icon lucide-message-square-dot"><path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/></svg>
            {/* Notification Badge */}
            {hasNotification && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            )}
          </button>

        {/* Expanded State - Chat Interface */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Chat Support</h3>
                  <p className="text-xs opacity-90">We're online</p>
                </div>
              </div>
              <button
                onClick={handleChatClick}
                className="p-1 hover:bg-blue-700 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              <div className="space-y-4">
                {/* Welcome Message */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800">
                      Hello! 👋 How can we help you today?
                    </p>
                    <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white">
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-1 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        
      
      </div>
    </div>
  );
};

export default ChatWidget;