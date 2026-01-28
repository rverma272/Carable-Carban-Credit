import { Target, Shield, Users, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">About Carable Group</h1>
            <p className="text-xl text-gray-700">
              A sustainability and carbon markets consulting firm focused on helping Indian industries prepare for carbon regulations and participate in carbon markets.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Carable Group is a sustainability and carbon markets consulting firm focused on helping Indian industries prepare for upcoming carbon regulations and participate in carbon markets.
              </p>
              <p className="text-gray-700 mb-4">
                We bridge the gap between regulatory compliance and business opportunity, enabling factories and commercial enterprises to turn their emission reduction efforts into verifiable, tradable carbon credits.
              </p>
              <p className="text-gray-700">
                Our team combines expertise in environmental engineering, regulatory compliance, carbon accounting, and market analytics to deliver end-to-end carbon management solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NjI3ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business consulting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">Why We Exist</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-teal-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Recurring Compliance Requirement</h3>
              <p className="text-gray-700">
                Carbon management is becoming a recurring compliance requirement for industries. Regulatory frameworks are evolving rapidly, requiring ongoing expertise and adaptation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Expert Partnership Model</h3>
              <p className="text-gray-700">
                Most industries need expert partners instead of building internal ESG teams. We provide specialized knowledge and execution capabilities at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="text-teal-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Compliance-First</h3>
              <p className="text-gray-700">
                Every project is designed with regulatory requirements at the core, ensuring auditability and long-term viability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Conservative Claims</h3>
              <p className="text-gray-700">
                We avoid over-promising. Our estimates are conservative and backed by established methodologies and third-party validation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-700" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Long-Term Partnerships</h3>
              <p className="text-gray-700">
                We focus on building lasting relationships through recurring support, not one-time transactions or quick trades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Verified */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Third-Party Verified Outcomes</h2>
          <p className="text-xl text-teal-50">
            All carbon credit projects are subject to independent third-party verification and validation, ensuring credibility, transparency, and market acceptance.
          </p>
        </div>
      </section>
    </div>
  );
}
