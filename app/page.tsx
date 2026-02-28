

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Chartered Accountants in Kerala | GST, Tax & Audit Excellence",
  description: "Elite CA firm in Kochi offering strategic financial solutions. Specialized in GST consulting, corporate tax planning, audit assurance & business registration across India.",
  keywords: [
    "Best CA in Kochi",
    "Top Chartered Accountant Kerala",
    "GST consultant Kochi",
    "Corporate tax advisor Kerala",
    "Audit firm in Kerala",
    "Company registration India",
    "Financial advisory Kochi"
  ],
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "FinAssure CA | Chartered Accountants",
    url: "https://finassureca.in",
    logo: "https://finassureca.in/logo.png",
    description: "Premium Chartered Accountancy services in Kerala specializing in GST, Income Tax, and Corporate Audit",
    areaServed: ["Kerala", "South India", "India"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Infopark Phase II",
      addressLocality: "Kakkanad, Kochi",
      addressRegion: "Kerala",
      postalCode: "682030",
      addressCountry: "India"
    },
    serviceType: [
      "GST Consulting & Compliance",
      "Corporate Income Tax Planning",
      "Statutory Audit & Assurance",
      "Company Registration",
      "Financial Advisory",
      "Startup Consultancy"
    ],
    priceRange: "₹₹",
    openingHours: "Mo-Fr 09:00-18:00",
    telephone: "+91-484-1234567",
    sameAs: [
      "https://linkedin.com/company/finassure-ca",
      "https://facebook.com/finassureca"
    ]
  };

  return (
    <>
      <main className="bg-gradient-to-b from-slate-50 to-white">
        
        {/* HERO SECTION - Modern Gradient with Floating Elements */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-blue-100">✨ Trusted by 500+ Businesses Across India</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Strategic Financial Excellence
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                    By Premier Chartered Accountants
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Empowering businesses in Kochi and beyond with elite GST advisory, 
                  tax optimization, and audit assurance services that drive sustainable growth.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Schedule Strategic Consultation
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                        <span className="text-white">👤</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="font-medium">4.9/5</span>
                    <span className="text-blue-200">(200+ reviews)</span>
                  </div>
                </div>
              </div>

              {/* Hero Image/Stats Card */}
              <div className="relative hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-300">10+</div>
                      <div className="text-sm text-blue-100 mt-2">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-300">₹500Cr+</div>
                      <div className="text-sm text-blue-100 mt-2">Tax Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-300">98%</div>
                      <div className="text-sm text-blue-100 mt-2">Client Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-300">24/7</div>
                      <div className="text-sm text-blue-100 mt-2">Expert Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-500 uppercase tracking-wider text-sm font-semibold mb-8">
              Trusted by Industry Leaders Across Kerala
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              {['Building Corp', 'TechPark', 'Global Bank', 'HealthPlus', 'EcoMart'].map((company) => (
                <div key={company} className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Premium Cards */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end accounting and advisory services tailored for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧮",
                  title: "GST Consulting",
                  description: "End-to-end GST compliance, strategic advisory, and litigation support for businesses of all sizes.",
                  features: ["Registration", "Return Filing", "Advisory", "Audit Support"],
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "📄",
                  title: "Corporate Tax Planning",
                  description: "Strategic tax optimization ensuring maximum savings while maintaining 100% compliance.",
                  features: ["Tax Planning", "Return Filing", "TDS Compliance", "International Tax"],
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  icon: "🛡️",
                  title: "Audit & Assurance",
                  description: "Comprehensive audit services delivered with precision, integrity, and deep insights.",
                  features: ["Statutory Audit", "Internal Audit", "Tax Audit", "Forensic Audit"],
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: "🏢",
                  title: "Company Registration",
                  description: "Hassle-free business setup assistance from incorporation to operational readiness.",
                  features: ["Private Limited", "LLP", "Partnership", "Section 8 Company"],
                  color: "from-emerald-500 to-emerald-600"
                },
                {
                  icon: "📊",
                  title: "Financial Advisory",
                  description: "Strategic financial planning and advisory services for sustainable growth.",
                  features: ["Business Valuation", "M&A Advisory", "Financial Modeling", "Due Diligence"],
                  color: "from-amber-500 to-amber-600"
                },
                {
                  icon: "💼",
                  title: "Startup Consultancy",
                  description: "Specialized guidance for startups from ideation to scale-up phase.",
                  features: ["Fundraising", "Investor Pitch", "Compliance", "Growth Strategy"],
                  color: "from-rose-500 to-rose-600"
                }
              ].map((service, index) => (
                <div key={index} 
                     className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  {/* Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-8 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION - Animated Counters */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { number: "500+", label: "Happy Clients", icon: "👥" },
                { number: "₹1000Cr+", label: "Transactions Handled", icon: "⚖️" },
                { number: "10,000+", label: "Returns Filed", icon: "📋" },
                { number: "100%", label: "Success Rate", icon: "📈" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION - Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Success, Our Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to ensure your financial goals are met with precision
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Discovery", desc: "In-depth consultation to understand your business needs" },
                { step: "02", title: "Strategy", desc: "Customized financial roadmap and compliance planning" },
                { step: "03", title: "Execution", desc: "Seamless implementation with regular updates" },
                { step: "04", title: "Review", desc: "Continuous monitoring and optimization" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-50 rounded-2xl p-8 group-hover:bg-blue-50 transition-colors duration-300">
                    <div className="text-5xl font-bold text-blue-200 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-2xl text-blue-300">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - Feature Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why FinAssure</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Beyond Traditional Accounting
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We partner with you to build financial strategies that drive real business outcomes.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "⏱️",
                      title: "Proactive Advisory",
                      desc: "Regular strategic reviews and forward-looking financial guidance"
                    },
                    {
                      icon: "🛡️",
                      title: "Zero-Delay Compliance",
                      desc: "Automated tracking and alerts ensuring never-miss deadlines"
                    },
                    {
                      icon: "👥",
                      title: "Dedicated Team",
                      desc: "Your personal CA team with industry-specific expertise"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 italic mb-6">
                  "FinAssure transformed our financial operations. Their strategic insights helped us save 30% on taxes while ensuring full compliance. Truly the best CA firm in Kerala."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div>
                    <h5 className="font-semibold">Rajesh Menon</h5>
                    <p className="text-sm text-gray-500">CEO, TechPark Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - Premium */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:30px_30px]"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join 500+ forward-thinking businesses that trust us with their financial success. 
              Get a complimentary strategic consultation with our senior partners.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>

            <p className="mt-8 text-blue-200 flex items-center justify-center gap-2">
              <span>⏱️</span>
              <span>30-minute strategy session • No obligation • Industry-specific insights</span>
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  FinAssure CA
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Premier Chartered Accountants in Kochi, delivering excellence in financial advisory and compliance since 2014.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">GST Consulting</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Audit Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Company Registration</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6">Contact</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>Infopark Phase II, Kakkanad</li>
                  <li>Kochi, Kerala 682030</li>
                  <li>+91 484 123 4567</li>
                  <li>contact@finassureca.in</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 FinAssure Chartered Accountants. All rights reserved.</p>
            </div>
          </div>
        </footer>

      
      </main>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}