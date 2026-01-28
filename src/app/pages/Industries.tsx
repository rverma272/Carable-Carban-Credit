import { Factory, Package, Building2, FlaskConical, Warehouse } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      name: 'Textile & Garment Manufacturing',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1721578006568-17901600cff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBmbG9vcnxlbnwxfHx8fDE3Njk2Mjc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      energyConsumption: 'High energy consumption from dyeing, finishing, and textile processing',
      compliance: 'Exposure to upcoming textile sustainability regulations',
      potential: 'Significant emission reduction potential through process optimization and renewable energy',
    },
    {
      name: 'Food Processing & Cold Storage',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1764875471713-1fa99cc3d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGluZHVzdHJpYWwlMjBmYWNpbGl0eXxlbnwxfHx8fDE3Njk2Mjc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      energyConsumption: 'Heavy refrigeration and processing energy requirements',
      compliance: 'Food safety and sustainability certifications increasingly carbon-focused',
      potential: 'Opportunities in refrigerant management, energy efficiency, and waste reduction',
    },
    {
      name: 'Cement & Building Materials',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1760131185787-597c462d6196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBtYW51ZmFjdHVyaW5nJTIwY29uc3RydWN0aW9uJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2OTYyNzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      energyConsumption: 'Energy-intensive production with process and combustion emissions',
      compliance: 'Subject to stringent emission monitoring and compliance requirements',
      potential: 'Alternative fuel use, energy efficiency, and clinker substitution opportunities',
    },
    {
      name: 'Chemicals & Packaging',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1768128834406-f5b1b962af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwaW5kdXN0cmlhbCUyMGNvbXBsZXh8ZW58MXx8fHwxNzY5NjI3ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      energyConsumption: 'Process heat, steam, and chemical reaction energy needs',
      compliance: 'Increasing regulatory scrutiny on emissions and sustainability reporting',
      potential: 'Process optimization, heat recovery, and raw material substitution',
    },
    {
      name: 'Warehousing & Commercial Buildings',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NjI3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      energyConsumption: 'HVAC, lighting, and operational energy consumption',
      compliance: 'Green building certifications and corporate sustainability commitments',
      potential: 'Solar installations, energy-efficient systems, and smart building technologies',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-700">
              Specialized carbon management solutions for energy-intensive industrial and commercial operations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="text-teal-700" size={24} />
                      </div>
                      <h2 className="text-3xl text-gray-900">{industry.name}</h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm text-teal-700 mb-2">High Energy Consumption</h3>
                        <p className="text-gray-700">{industry.energyConsumption}</p>
                      </div>

                      <div>
                        <h3 className="text-sm text-blue-700 mb-2">Compliance Exposure</h3>
                        <p className="text-gray-700">{industry.compliance}</p>
                      </div>

                      <div>
                        <h3 className="text-sm text-green-700 mb-2">Carbon Reduction Potential</h3>
                        <p className="text-gray-700">{industry.potential}</p>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Characteristics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">
            Common Characteristics of Target Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-3">High Energy Intensity</h3>
              <p className="text-gray-700">
                Significant electricity, fuel, or thermal energy consumption creating substantial carbon footprints.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-3">Regulatory Exposure</h3>
              <p className="text-gray-700">
                Facing current or anticipated carbon compliance requirements, reporting obligations, or sustainability certifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-3">Measurable Reduction Potential</h3>
              <p className="text-gray-700">
                Clear opportunities for emission reductions through technology upgrades, process improvements, or operational changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Is Your Industry Ready for Carbon Management?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Contact us for an industry-specific assessment and carbon reduction roadmap.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule an Industry Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
