import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">Your trust is our priority</p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <p className="text-lg text-gray-800">
              At Uninet Consultant, we are committed to safeguarding your personal data with the utmost transparency and integrity. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with international data protection laws and Google's business practice policies.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                <p className="text-gray-700">Name, address, and email for service registration, purchases, or inquiries.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Financial Information</h3>
                <p className="text-gray-700">Credit card or banking info for payment processing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                <p className="text-gray-700">IP address, browser type, device info, and time spent on our site.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Service Data</h3>
                <p className="text-gray-700">Service type, account numbers, support logs, and plan details.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why We Collect Information</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">To deliver services and execute requests like upgrades or cancellations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">To provide technical and billing support.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">To securely process payments, including execution charges ($49.99–$199.99).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">To improve user experience and run relevant marketing campaigns (with consent).</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Service Providers</h2>
            <p className="text-gray-700 mb-4">
              We work with trusted third parties like JNA-certified partners (AT&T, Xfinity, Verizon, etc.) and payment processors. Please review their respective policies as well.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Transparency in Pricing and Billing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Execution Fees</h3>
                <p className="text-sm text-gray-700">$49.99 to $199.99, displayed before confirmation.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Separate Billing</h3>
                <p className="text-sm text-gray-700">Uninet Consultant's charges are separate from your provider's.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">No Hidden Charges</h3>
                <p className="text-sm text-gray-700">All recurring or one-time fees are disclosed up front.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Encryption of sensitive data during storage and transmission.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Access control with strict permissions and employee agreements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Secure third-party payment gateways.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Control</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">Access, modify, or delete your data anytime.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">Unsubscribe from promotional emails.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">Request a downloadable copy of your data.</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Compliance with Google Ad Policies</h2>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">No deceptive data collection or misleading pricing.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Clear terms and visible disclosures.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Full adherence to ethical advertising standards.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              Any modifications will be published here and communicated as needed.
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

export default Privacy;
