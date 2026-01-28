import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, FileCheck, Coins } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Turn Carbon Compliance into a Business Advantage
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Carable Group helps factories and commercial enterprises measure emissions, reduce carbon footprint, and monetize verified emission reductions through carbon credits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/faqs"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-700 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Understand Carbon Credits
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1767122757405-99cb6652b5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN1c3RhaW5hYmlsaXR5JTIwZW1pc3Npb25zfGVufDF8fHx8MTc2OTYyNzg1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial sustainability"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">
            Challenges Facing Industrial Operations
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Increasing regulatory pressure on industries',
              'Lack of in-house carbon accounting expertise',
              'Complex certification and verification processes',
              'Missed revenue opportunities from carbon credits',
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-teal-700" size={24} />
                </div>
                <p className="text-gray-800">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-teal-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                Carbon Baseline & Emission Assessment
              </h3>
              <p className="text-gray-700">
                Comprehensive measurement of your current emissions footprint with industry-standard methodologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="text-blue-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                Carbon Project Design & Certification
              </h3>
              <p className="text-gray-700">
                End-to-end project structuring, registry registration, and third-party verification coordination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Coins className="text-green-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                Carbon Credit Trading & Brokerage
              </h3>
              <p className="text-gray-700">
                Buyer-seller matchmaking, price discovery, and transaction execution for verified carbon credits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Carable Group */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">Why Carable Group</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <CheckCircle className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-2">End-to-End Execution</h3>
                <p className="text-gray-700">
                  From assessment to credit issuance to sale — complete lifecycle management.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <CheckCircle className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-2">India-Focused Regulatory Understanding</h3>
                <p className="text-gray-700">
                  Deep knowledge of domestic compliance frameworks and emerging carbon policies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <CheckCircle className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Transparent, Audit-Ready Processes</h3>
                <p className="text-gray-700">
                  Documentation and methodologies designed for third-party verification standards.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <CheckCircle className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Long-Term Compliance Support</h3>
                <p className="text-gray-700">
                  Ongoing monitoring, reporting, and adaptation to changing regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {[
              'Client Onboarding',
              'Emission Assessment',
              'Project Design',
              'Registration',
              'Verification',
              'Credit Issuance',
              'Credit Sale',
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-800">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-teal-700 hover:text-teal-800"
            >
              View detailed workflow
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Ready to Start Your Carbon Journey?</h2>
          <p className="text-xl mb-8 text-teal-50">
            Schedule a consultation to understand your carbon reduction and monetization potential.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Baseline Assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
