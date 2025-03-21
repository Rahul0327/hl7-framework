import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">HL7 Framework Master Data Model</h1>
          <p className="text-xl">A comprehensive approach to healthcare interoperability</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to the HL7 Framework Documentation</h2>
            <p className="mb-6">
              This website provides comprehensive documentation for the HL7 Framework Master Data Model, a unified approach to healthcare data representation and exchange that integrates concepts from multiple HL7 standards including HL7 v2.x, HL7 v3 Reference Information Model (RIM), Clinical Document Architecture (CDA), and Fast Healthcare Interoperability Resources (FHIR).
            </p>
            <Link href="/framework" className="bg-blue-600 text-white px-6 py-2 rounded-md inline-block hover:bg-blue-700 transition">
              Explore HL7 Framework
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Core Data Model</h3>
              <p className="mb-4">
                Explore the comprehensive master data model that defines entities, relationships, data types, and terminology bindings aligned with HL7 standards.
              </p>
              <Link href="/docs/data-model" className="text-blue-600 hover:underline flex items-center">
                View Data Model →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">HL7 Mappings</h3>
              <p className="mb-4">
                Detailed mappings between the data model and various HL7 standards to facilitate implementation and integration across healthcare systems.
              </p>
              <Link href="/docs/mappings" className="text-blue-600 hover:underline flex items-center">
                View Mappings →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Implementation Guide</h3>
              <p className="mb-4">
                Practical guidance for implementing the HL7 Framework Master Data Model in healthcare information systems.
              </p>
              <Link href="/docs/implementation" className="text-blue-600 hover:underline flex items-center">
                View Implementation Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2025 HL7 Framework Master Data Model
        </div>
      </footer>
    </div>
  );
}
