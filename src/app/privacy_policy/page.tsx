"use client";
import React, { useState } from 'react';
import { ShoppingCart, CreditCard, Globe, Bell, Mail, Shield, Users, Lock, Search, ChevronDown, ExternalLink, X, Scale, FileText, Clock, Ban } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const EcommercePrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const privacySections = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Data Protection Commitment",
      content: [
        "End-to-end encryption for all personal data",
        "Regular security audits and penetration testing",
        "24/7 security monitoring and threat detection",
        "Automated backup and disaster recovery systems"
      ],
      highlight: true
    },
    // ... (previous privacy sections remain the same)
  ];

  const termsSections = [
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "General Terms",
      content: [
        "These terms constitute a legally binding agreement",
        "By using our services, you agree to these terms",
        "We reserve the right to modify these terms with notice",
        "Your continued use constitutes acceptance of changes"
      ],
      highlight: true
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "User Accounts",
      content: [
        "You must maintain accurate account information",
        "You are responsible for maintaining account security",
        "Accounts are limited to one per person",
        "We may terminate accounts that violate our terms"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Order Processing",
      content: [
        "Orders are subject to availability and confirmation",
        "Prices are subject to change without notice",
        "Shipping times are estimates only",
        "We reserve the right to refuse any order"
      ]
    },
    {
      icon: <Ban className="w-6 h-6 text-blue-600" />,
      title: "Prohibited Activities",
      content: [
        "Using our services for illegal purposes",
        "Attempting to access unauthorized areas",
        "Submitting false or misleading information",
        "Interfering with service operation"
      ]
    }
  ];

  // Filter sections based on search query and active tab
  const filterSections = (sections) => {
    return sections.filter(section => {
      const searchTerm = searchQuery.toLowerCase();
      const titleMatch = section.title.toLowerCase().includes(searchTerm);
      const contentMatch = section.content.some(item => 
        item.toLowerCase().includes(searchTerm)
      );
      return titleMatch || contentMatch;
    });
  };

  // Highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-yellow-200">{part}</span> : 
        part
    );
  };

  const SectionsList = ({ sections }) => {
    const filteredSections = filterSections(sections);
    
    return (
      <div className="space-y-6">
        {filteredSections.map((section, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-sm transition-all duration-200 ${
              section.highlight ? 'border-2 border-blue-200' : ''
            }`}
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {highlightText(section.title, searchQuery)}
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedSection === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-200 ${
                expandedSection === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0 border-t border-gray-100">
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <div>{highlightText(item, searchQuery)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        {filteredSections.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-600">No matching sections found for "{searchQuery}"</p>
            <button 
              onClick={clearSearch}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Lock className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Documents</h1>
          <p className="text-xl text-gray-600 mb-4">Everything you need to know about using our services</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 6, 2025</span>
            <span>•</span>
            <span>Version 2.1</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-3.5 p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Alert Banner */}
        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <AlertDescription className="text-blue-800">
            We've updated our legal documents to include new data protection measures and GDPR compliance updates.
          </AlertDescription>
        </Alert>

        {/* Tabs for Privacy Policy and Terms */}
        <Tabs defaultValue="privacy" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
          </TabsList>
          <TabsContent value="privacy">
            <SectionsList sections={privacySections} />
          </TabsContent>
          <TabsContent value="terms">
            <SectionsList sections={termsSections} />
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-white rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Need Help?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Contact Our Legal Team</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:legal@yourstore.com" className="text-blue-600 hover:text-blue-800">
                    legal@yourstore.com
                  </a>
                </p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-4 h-4" />
                  Download Full Legal Documentation
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-4 h-4" />
                  Cookie Policy
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-4 h-4" />
                  GDPR Rights
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center text-sm text-slate-500">
        <p className="tracking-wider">Last Updated: January 6, 2025</p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto my-4"></div>
        <p className="tracking-wider">Version 2.1</p>
      </div>
    </div>
  );
};

export default EcommercePrivacyPolicy;