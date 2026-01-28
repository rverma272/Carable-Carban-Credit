import { FileSignature, BarChart3, FileText, CheckCircle, Eye, Award, Coins } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Client Onboarding & NDA',
      description: 'Initial consultation, confidentiality agreement, and project scoping.',
      icon: FileSignature,
      details: [
        'Understanding business operations and emission sources',
        'Defining project scope and objectives',
        'Establishing data sharing protocols',
      ],
    },
    {
      number: 2,
      title: 'Baseline Emission Assessment',
      description: 'Comprehensive measurement of current emissions footprint.',
      icon: BarChart3,
      details: [
        'Data collection across all emission sources',
        'Application of standard emission factors',
        'Baseline report preparation',
      ],
    },
    {
      number: 3,
      title: 'Project Design & Feasibility',
      description: 'Structuring the carbon reduction project for registry approval.',
      icon: FileText,
      details: [
        'Methodology selection',
        'Additionality and permanence assessment',
        'Project design document creation',
      ],
    },
    {
      number: 4,
      title: 'Registration & Third-Party Validation',
      description: 'Submitting to carbon credit registry and undergoing validation.',
      icon: CheckCircle,
      details: [
        'Registry submission and enrollment',
        'Independent validator engagement',
        'Validation report and approval',
      ],
    },
    {
      number: 5,
      title: 'Monitoring & Verification',
      description: 'Ongoing tracking of emission reductions and periodic verification.',
      icon: Eye,
      details: [
        'Annual monitoring and data collection',
        'Verification by accredited auditors',
        'Verification report submission',
      ],
    },
    {
      number: 6,
      title: 'Credit Issuance',
      description: 'Registry issues verified carbon credits to your account.',
      icon: Award,
      details: [
        'Registry review and approval',
        'Credit issuance to project account',
        'Certificate of credits generated',
      ],
    },
    {
      number: 7,
      title: 'Credit Sale / Brokerage',
      description: 'Selling carbon credits in the market through our brokerage services.',
      icon: Coins,
      details: [
        'Buyer identification and matchmaking',
        'Price negotiation and transaction execution',
        'Registry transfer and payment settlement',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">How It Works</h1>
            <p className="text-xl text-gray-700">
              A clear, step-by-step process from assessment to carbon credit monetization, with timelines typically ranging from 6-12 months for credit issuance.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 flex justify-center md:justify-end">
                    <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl">
                      {step.number}
                    </div>
                  </div>

                  <div className="md:col-span-11">
                    <div className="bg-gray-50 p-8 rounded-lg">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="text-teal-700" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-16">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline & Verification */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-4">Typical Timeline</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Initial Assessment</span>
                  <span className="text-teal-700">1-2 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Project Design & Validation</span>
                  <span className="text-teal-700">3-6 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Implementation & Monitoring</span>
                  <span className="text-teal-700">12+ months</span>
                </li>
                <li className="flex justify-between">
                  <span>Verification & Issuance</span>
                  <span className="text-teal-700">2-3 months</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                  <span>Total (First Issuance)</span>
                  <span className="text-teal-700">6-12 months</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-4">Audit & Verification</h3>
              <p className="text-gray-700 mb-4">
                All carbon credit projects undergo rigorous third-party verification to ensure:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Accurate emission baseline and reduction calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Compliance with approved methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Additionality and permanence criteria met</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Registry requirements satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Schedule a consultation to understand your specific timeline and project roadmap.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
