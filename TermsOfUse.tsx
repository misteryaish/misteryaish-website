import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#D4AF37]">Terms of Use</h1>
        <div className="space-y-6">
          <p>Last updated: March 2024</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#D4AF37]">Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms of Use and all applicable 
              laws and regulations.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;