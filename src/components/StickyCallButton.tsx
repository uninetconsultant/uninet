import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 px-6 py-6 group"
      >
        <a href="tel:(833)611-6434" className="flex items-center gap-3">
          <Phone className="w-6 h-6 group-hover:animate-bounce" />
          <span className="font-semibold text-lg">Call Now (833) 611-6434</span>
        </a>
      </Button>
    </div>
  );
};

export default StickyCallButton;