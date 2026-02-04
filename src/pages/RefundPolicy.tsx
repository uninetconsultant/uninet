import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RefreshCw, CheckCircle, Clock, DollarSign } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <RefreshCw className="w-16 h-16 mx-auto mb-4 text-green-200 animate-spin" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-green-100">Customer Satisfaction is Our Priority</p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-600">
              <p className="text-lg text-gray-800 font-medium">
                At Uninet Consultant, customer satisfaction is our top priority. As a trusted distributor of third-party services, our refund policies follow the terms of the respective service providers we represent.
              </p>
            </div>
          </div>

          {/* General Refund Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">General Refund Policy</h2>
            <p className="text-gray-700 mb-6">Refunds may be issued under the following circumstances:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cancellation Before Installation</h3>
                    <p className="text-gray-700 text-sm">If a service is cancelled prior to installation, a full refund of any upfront payment may be issued.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Service Issues</h3>
                    <p className="text-gray-700 text-sm">Verified issues with installation or activation caused directly by Uninet Consultant may be eligible for correction or a refund.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow md:col-span-2">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Non-Refundable Items</h3>
                    <p className="text-gray-700 text-sm">Administrative fees such as installation, activation, or processing charges are non-refundable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Request Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Request Process</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                    <div className="w-1 h-20 bg-green-300 mt-4"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Submit a Request</h3>
                    <p className="text-gray-700">Contact our support team within 14 days of the service issue.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                    <div className="w-1 h-20 bg-green-300 mt-4"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Provide Documentation</h3>
                    <p className="text-gray-700">We may require details or proof of the issue for verification.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Processing Timeline</h3>
                    <p className="text-gray-700">Approved refunds are processed within 7–14 business days, depending on your bank or payment method.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
            <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
            <p className="text-gray-700">
              Our refund policies are designed to protect both our customers and ensure compliance with the terms set by our third-party service providers. For specific details about individual services, please contact our support team.
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600">Last updated: February 2026</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
