import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#D4AF37]">Cookies Policy</h1>
        <div className="space-y-6">
          <p>Last updated: March 2024</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#D4AF37]">What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;