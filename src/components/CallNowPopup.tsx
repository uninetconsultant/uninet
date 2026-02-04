import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallNowPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "(833) 611-6434";

  useEffect(() => {
    // Show popup on component mount (page load)
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[999] animate-in fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] animate-in zoom-in-95 w-full max-w-sm mx-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
            {/* Headline */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Internet or Cable Not Working?
            </h2>

            {/* Subtext */}
            <p className="text-sm text-gray-700 mb-6">
              Get instant help for slow internet, outages, setup issues, or cable problems.
            </p>

            {/* Phone Number Display */}
            <div className="bg-white rounded-lg p-4 mb-5 border-2 border-green-500">
              <p className="text-xs text-gray-600 mb-1">Call our support team:</p>
              <p className="text-2xl font-bold text-green-600">{phoneNumber}</p>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full mb-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                CALL SUPPORT NOW
              </a>
            </Button>

            {/* Trust Line */}
            <p className="text-xs text-gray-600 font-medium">
              💚 Quick assistance • No forms • Talk to a real agent
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallNowPopup;
