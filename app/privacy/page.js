import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | FindMyGen',
  description: 'Privacy policy for FindMyGen.com - How we handle your data'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700">← Back to Home</Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: October 10, 2025</p>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            <p className="text-gray-700">
              FindMyGen.com is committed to protecting your privacy. This policy explains how we handle 
              data on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">What We Collect</h2>
            <p className="text-gray-700">
              We use Vercel Analytics to understand how visitors use our site. This collects:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Anonymous page views and visit duration</li>
              <li>General location (country level only)</li>
              <li>Device and browser type</li>
              <li>Referral source (how you found us)</li>
            </ul>
            <p className="text-gray-700">
              <strong>We do NOT collect:</strong> Names, email addresses, IP addresses, or any personally 
              identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Quiz and Calculator Data</h2>
            <p className="text-gray-700">
              When you use our generation calculator or quiz:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>All processing happens in your browser</li>
              <li>Your responses are never sent to our servers</li>
              <li>Results are not stored anywhere</li>
              <li>Data exists only during your session</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
            <p className="text-gray-700">
              We do not use cookies. Vercel Analytics may use minimal session storage for basic 
              functionality, but this does not track or identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
            <p className="text-gray-700">
              Our site includes social sharing buttons (Twitter/X, Facebook). When you click these 
              buttons, you will be subject to those platforms privacy policies. We do not receive 
              any data from these interactions unless you choose to share.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Your Rights (GDPR)</h2>
            <p className="text-gray-700">
              Under GDPR, you have rights regarding your data. Since we do not collect personal data, 
              there is no personal information to access, modify, or delete. All analytics data is 
              anonymous and aggregated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Data Storage and Security</h2>
            <p className="text-gray-700">
              Our website is hosted on Vercel servers. Analytics data is stored securely by Vercel 
              in accordance with their privacy policy. No personal data is stored by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
            <p className="text-gray-700">
              Our site is suitable for all ages. We do not knowingly collect any information from 
              children under 13 or anyone else.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. Any changes will be posted on 
              this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy, please contact us through our 
              social media channels linked on the homepage.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Return to FindMyGen
          </Link>
        </div>
      </div>
    </div>
  )
}