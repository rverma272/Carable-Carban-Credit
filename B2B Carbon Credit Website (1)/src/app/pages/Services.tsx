import { BarChart3, FileText, CheckCircle2, Eye, RefreshCw, HandshakeIcon } from 'lucide-react';

export function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              End-to-end carbon management solutions from baseline assessment to credit monetization.
            </p>
          </div>
        </div>
      </section>

      {/* Carbon Credit Consulting */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12">Carbon Credit Consulting</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-teal-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Baseline Emission Assessment</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive measurement of your current emissions footprint using industry-standard protocols and methodologies.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Scope 1, 2, and 3 emissions mapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Data collection and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Baseline documentation for future comparisons</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Emission Reduction Opportunity Identification</h3>
              <p className="text-gray-700 mb-4">
                Analysis of potential emission reduction projects with feasibility and impact assessments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Technology and process improvement analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Economic viability assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Prioritization based on impact and cost</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-green-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Carbon Project Design & Feasibility</h3>
              <p className="text-gray-700 mb-4">
                Structuring carbon reduction projects for registry submission and credit generation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Methodology selection and application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Additionality assessment and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Project design document preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Documentation & Registry Registration</h3>
              <p className="text-gray-700 mb-4">
                Complete project registration with recognized carbon credit registries.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-purple-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Registry selection and enrollment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-purple-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Submission documentation preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-purple-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Liaison with registry authorities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-orange-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Audit & Verification Coordination</h3>
              <p className="text-gray-700 mb-4">
                Managing third-party validation and verification processes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Selection of accredited verification bodies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Audit preparation and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Response to verification queries</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="text-indigo-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Monitoring, Reporting & Compliance Support</h3>
              <p className="text-gray-700 mb-4">
                Ongoing support for emission tracking and periodic reporting requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-indigo-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Annual monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-indigo-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Data management systems setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-indigo-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Regulatory compliance tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h4 className="text-lg text-gray-900 mb-3">Revenue Indicators</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>Assessment fees</div>
              <div>Project structuring fees</div>
              <div>Annual retainers</div>
              <div>Milestone-based consulting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Credit Trading */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12">Carbon Credit Trading & Brokerage</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <HandshakeIcon className="text-teal-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Buyer–Seller Matchmaking</h3>
              <p className="text-gray-700">
                Connecting verified carbon credit sellers with qualified buyers in domestic and international markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Price Discovery & Negotiation</h3>
              <p className="text-gray-700">
                Market analysis, pricing guidance, and transaction negotiation support for optimal outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-green-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Registry Coordination & Credit Transfer</h3>
              <p className="text-gray-700">
                Managing the technical process of credit transfer through registry platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Transaction Execution Support</h3>
              <p className="text-gray-700">
                Facilitating documentation, payment processing, and transaction closure.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <p className="text-gray-800 mb-2">
              <strong>Note:</strong> Trading services are offered only for verified, issued carbon credits.
            </p>
            <p className="text-gray-700 text-sm">
              Pricing depends on market conditions, credit quality, vintage, and methodology. No guaranteed pricing claims are made.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
