import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        industry: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700">
              Get in touch to discuss your carbon management needs and request a baseline assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-teal-700" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-700 text-sm">India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700 text-sm">info@carablegroup.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700 text-sm">+91 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-700 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-gray-700 text-sm">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl text-gray-900 mb-6">Request a Baseline Assessment</h2>

                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your inquiry. We will get back to you within 24-48 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-900 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm text-gray-900 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                    >
                      <option value="">Select an industry</option>
                      <option value="textile">Textile & Garment Manufacturing</option>
                      <option value="food">Food Processing & Cold Storage</option>
                      <option value="cement">Cement & Building Materials</option>
                      <option value="chemicals">Chemicals & Packaging</option>
                      <option value="warehouse">Warehousing & Commercial Buildings</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-900 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your carbon management needs and objectives..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors flex items-center justify-center"
                  >
                    Submit Inquiry
                    <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-gray-900 mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                  1
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-700 text-sm">
                  We review your inquiry and assess initial fit for carbon credit projects.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                  2
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Consultation Call</h3>
                <p className="text-gray-700 text-sm">
                  Schedule a detailed discussion about your operations and carbon reduction potential.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                  3
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Proposal & Next Steps</h3>
                <p className="text-gray-700 text-sm">
                  Receive a tailored proposal outlining assessment scope, timeline, and engagement model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
