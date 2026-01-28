import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function FAQs() {
  const faqs = [
    {
      question: 'What is a carbon credit?',
      answer:
        'A carbon credit represents one tonne of carbon dioxide equivalent (CO2e) that has been prevented from entering the atmosphere or removed from it. Carbon credits are generated through verified emission reduction projects and can be traded in compliance or voluntary carbon markets. Each credit is issued by a recognized registry after third-party verification.',
    },
    {
      question: 'Is carbon credit trading mandatory in India?',
      answer:
        'Currently, carbon credit generation and trading is largely voluntary in India, though regulatory frameworks are evolving. However, many industries are preparing for future compliance requirements, and corporate sustainability commitments often drive participation in carbon markets. Some sectors may face mandatory reporting or reduction targets in the near future.',
    },
    {
      question: 'Who verifies emission reductions?',
      answer:
        'Emission reductions must be verified by accredited third-party validation and verification bodies (VVBs). These are independent organizations approved by carbon credit registries to assess whether emission reduction projects meet the required standards and methodologies. The verification process ensures credibility and market acceptance of the credits.',
    },
    {
      question: 'How long does it take to generate carbon credits?',
      answer:
        'From project initiation to first credit issuance, the typical timeline is 6-12 months. This includes baseline assessment (1-2 months), project design and validation (3-6 months), implementation and monitoring (12+ months for annual cycles), and verification and issuance (2-3 months). Subsequent credit generations follow annual monitoring and verification cycles.',
    },
    {
      question: 'How are carbon credit prices decided?',
      answer:
        'Carbon credit prices are determined by market dynamics including supply and demand, credit quality (methodology, vintage, co-benefits), verification standards, buyer requirements, and broader market conditions. Prices vary significantly based on the type of project, geographic origin, and certification standards. There are no guaranteed pricing structures as markets fluctuate.',
    },
    {
      question: 'Is consulting profitable without actually trading credits?',
      answer:
        'Yes, carbon credit consulting services are independent revenue streams. Clients pay for assessment fees, project structuring, registry registration, verification coordination, and ongoing monitoring and reporting support. These are milestone-based or retainer arrangements separate from any credit trading activities.',
    },
    {
      question: 'What industries are best suited for carbon credit projects?',
      answer:
        'Industries with high energy consumption and clear emission reduction opportunities are ideal candidates. These include manufacturing (textiles, cement, chemicals), food processing and cold storage, warehousing and commercial buildings, and facilities with significant fuel combustion, electricity use, or process emissions.',
    },
    {
      question: 'Do I need to implement emission reductions before starting?',
      answer:
        'No, you should conduct a baseline assessment first. Carbon credit projects require establishing a baseline before implementing reductions so that the reduction can be accurately measured and verified. Our consulting process helps identify which reduction initiatives are viable for credit generation before implementation.',
    },
    {
      question: 'What is the difference between voluntary and compliance markets?',
      answer:
        'Compliance markets are driven by regulatory requirements where entities must meet emission reduction targets through credits or allowances. Voluntary markets allow organizations to purchase credits to offset their emissions voluntarily, often for corporate sustainability goals or carbon-neutral commitments. India currently has a developing voluntary market with evolving compliance frameworks.',
    },
    {
      question: 'Can small and medium enterprises participate in carbon credit programs?',
      answer:
        'Yes, though the economics depend on the scale of emissions and reduction potential. Smaller facilities may benefit from aggregated or programmatic approaches where multiple similar projects are bundled. An initial feasibility assessment helps determine whether carbon credit generation is viable for your specific operation size and type.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Knowledge & Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700">
              Clear, straightforward answers about carbon credits, compliance, and the process of generating and trading carbon credits.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-8">Key Terminology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Baseline</h3>
              <p className="text-gray-700 text-sm">
                The reference scenario representing emissions that would occur without the carbon reduction project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Additionality</h3>
              <p className="text-gray-700 text-sm">
                The requirement that emission reductions would not have occurred without the carbon credit incentive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-700 text-sm">
                Independent third-party assessment confirming that emission reductions have been achieved as claimed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Registry</h3>
              <p className="text-gray-700 text-sm">
                A platform that tracks and issues carbon credits, ensuring no double-counting and maintaining transparency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Vintage</h3>
              <p className="text-gray-700 text-sm">
                The year in which the emission reductions occurred, affecting credit value and market demand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-2">Methodology</h3>
              <p className="text-gray-700 text-sm">
                The approved protocol defining how emissions are measured, monitored, and verified for a specific project type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Still Have Questions?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Schedule a consultation to discuss your specific situation and carbon credit potential.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
