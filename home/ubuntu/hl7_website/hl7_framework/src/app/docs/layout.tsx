import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-100 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <h2 className="font-bold mb-2">Documentation</h2>
        <ul className="space-y-1">
          <li>
            <Link href="/docs/overview" className="block p-2 hover:bg-gray-200 rounded">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/docs/data-model" className="block p-2 hover:bg-gray-200 rounded">
              Data Model
            </Link>
            <ul className="pl-4 space-y-1 mt-1">
              <li>
                <Link href="/docs/data-model#core-entities" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Core Entities
                </Link>
              </li>
              <li>
                <Link href="/docs/data-model#clinical-entities" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Clinical Entities
                </Link>
              </li>
              <li>
                <Link href="/docs/data-model#administrative-entities" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Administrative Entities
                </Link>
              </li>
              <li>
                <Link href="/docs/data-model#data-types" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Data Types
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/docs/mappings" className="block p-2 hover:bg-gray-200 rounded">
              HL7 Mappings
            </Link>
            <ul className="pl-4 space-y-1 mt-1">
              <li>
                <Link href="/docs/mappings#hl7-v2" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  HL7 v2.x
                </Link>
              </li>
              <li>
                <Link href="/docs/mappings#hl7-v3-rim" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  HL7 v3 RIM
                </Link>
              </li>
              <li>
                <Link href="/docs/mappings#cda" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  CDA
                </Link>
              </li>
              <li>
                <Link href="/docs/mappings#fhir" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  FHIR
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/docs/implementation" className="block p-2 hover:bg-gray-200 rounded">
              Implementation
            </Link>
            <ul className="pl-4 space-y-1 mt-1">
              <li>
                <Link href="/docs/implementation#security" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Security & Privacy
                </Link>
              </li>
              <li>
                <Link href="/docs/implementation#interoperability" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Interoperability
                </Link>
              </li>
              <li>
                <Link href="/docs/implementation#scenarios" className="block p-1 hover:bg-gray-200 rounded text-sm">
                  Implementation Scenarios
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/docs/validation" className="block p-2 hover:bg-gray-200 rounded">
              Validation
            </Link>
          </li>
          <li>
            <Link href="/framework" className="block p-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded font-medium">
              Complete HL7 Framework
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
