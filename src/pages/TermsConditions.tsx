import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, User, CreditCard, Ban } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-purple-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-purple-100">Please read carefully before using our services</p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* Welcome Banner */}
          <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
            <p className="text-lg text-gray-800">
              Welcome to Uninet Consultant. These Terms and Conditions ("Terms") govern your use of our website, services, and all related interactions between you and Uninet Consultant. By accessing our website or utilizing our services, you agree to comply with and be bound by these Terms.
            </p>
            <p className="text-lg text-gray-800 mt-4 font-semibold">
              If you do not agree with any of the Terms outlined below, please do not use our services or this website.
            </p>
          </div>

          {/* Section 1: Definitions */}
          <section className="mb-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">1. Definitions</h2>
            <div className="space-y-4">
              <div className="pl-6 border-l-4 border-purple-400">
                <h3 className="font-semibold text-gray-900 text-lg">Uninet Consultant</h3>
                <p className="text-gray-700 mt-1">Refers to our company, an authorized dealer providing intermediary services between consumers and third-party service providers, including but not limited to internet, cellular, streaming, and bundled services.</p>
              </div>
              <div className="pl-6 border-l-4 border-purple-400">
                <h3 className="font-semibold text-gray-900 text-lg">User, "you", or "your"</h3>
                <p className="text-gray-700 mt-1">Refers to any person or entity accessing our website or using our services.</p>
              </div>
              <div className="pl-6 border-l-4 border-purple-400">
                <h3 className="font-semibold text-gray-900 text-lg">Services</h3>
                <p className="text-gray-700 mt-1">Refers to any support or execution services provided by Uninet Consultant, including setting up new connections, plan upgrades, account cancellations, bill payments, and related support.</p>
              </div>
              <div className="pl-6 border-l-4 border-purple-400">
                <h3 className="font-semibold text-gray-900 text-lg">Third-Party Service Providers</h3>
                <p className="text-gray-700 mt-1">Refers to external companies and service providers with whom Uninet Consultant has partnerships.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Scope of Services */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Scope of Services</h2>
            <p className="text-gray-700 mb-3">
              Uninet Consultant offers execution services on behalf of third-party service providers. While we facilitate service processes like connection setup and billing, the actual delivery of internet or cellular services is handled by the respective provider. 
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Uninet Consultant is not responsible</span> for service quality, uptime, or provider reliability.
            </p>
          </section>

          {/* Section 3: Account Responsibilities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">3. Account Responsibilities</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <User className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">You agree to provide accurate and complete information</h3>
                  <p className="text-gray-700 mt-1">And maintain confidentiality of your account details.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Limited Liability</h3>
                  <p className="text-gray-700 mt-1">Uninet Consultant will not be liable for any losses resulting from unauthorized use of your account.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Payments and Fees */}
          <section className="mb-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">4. Payments and Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Separate Execution Fees</h3>
                <p className="text-gray-700 text-sm">Uninet Consultant charges separate execution fees for tasks like new connections or upgrades. These are distinct from third-party service provider charges.</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Pre-Confirmation Disclosure</h3>
                <p className="text-gray-700 text-sm">All execution fees will be disclosed before your service request is confirmed.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Service Requests */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Requests</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">•</span>
                <span className="text-gray-700">We aim to complete service requests in a timely manner.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">•</span>
                <span className="text-gray-700">Execution timelines may vary based on the third-party provider's processes.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">•</span>
                <span className="text-gray-700">Cancellations are allowed only before execution has commenced.</span>
              </li>
            </ul>
          </section>

          {/* Section 6: Limitations of Liability */}
          <section className="mb-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">6. Limitations of Liability</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <h3 className="font-semibold text-gray-900">Third-Party Provider Issues</h3>
                <p className="text-gray-700 mt-1">Uninet Consultant is not liable for disruptions or issues caused by third-party providers.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <h3 className="font-semibold text-gray-900">Website Content</h3>
                <p className="text-gray-700 mt-1">We do not guarantee error-free website content and reserve the right to update inaccuracies.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Use of the Website */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">7. Use of the Website</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Users must not engage in harmful or unlawful activities while using our site.</span>
              </li>
              <li className="flex gap-3">
                <FileText className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All content on the website is the intellectual property of Uninet Consultant or its licensors.</span>
              </li>
            </ul>
          </section>

          {/* Section 8: Privacy Policy */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy Policy</h2>
            <p className="text-gray-700">
              Your use of the Uninet Consultant website and services is subject to our Privacy Policy, which explains how we handle your personal information.
            </p>
          </section>

          {/* Section 9: Modifications to Terms */}
          <section className="mb-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-purple-600">9. Modifications to Terms</h2>
            <p className="text-gray-700">
              Uninet Consultant reserves the right to modify these Terms without prior notice. Changes take effect upon posting, and we encourage periodic review.
            </p>
          </section>

          {/* Section 10: Termination */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700">
              We may suspend or terminate your access to services at any time for violations of these Terms or other applicable reasons.
            </p>
          </section>

          {/* Section 11: Contact Us */}
          <section className="mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions or our services, please contact us:
            </p>
            <a 
              href="tel:(833)611-6434" 
              className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (833) 611-6434
            </a>
          </section>

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

export default TermsConditions;
