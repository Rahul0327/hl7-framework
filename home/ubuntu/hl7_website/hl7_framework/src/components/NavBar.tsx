import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          HL7 Framework
        </Link>
        <div className="flex space-x-4">
          <Link href="/framework" className="hover:text-blue-200">
            Framework
          </Link>
          <Link href="/docs/overview" className="hover:text-blue-200">
            Overview
          </Link>
          <Link href="/docs/data-model" className="hover:text-blue-200">
            Data Model
          </Link>
          <Link href="/docs/mappings" className="hover:text-blue-200">
            Mappings
          </Link>
          <Link href="/docs/implementation" className="hover:text-blue-200">
            Implementation
          </Link>
        </div>
      </div>
    </nav>
  );
}
