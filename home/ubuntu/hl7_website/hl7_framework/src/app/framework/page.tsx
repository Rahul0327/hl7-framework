import React from 'react';

export default function FrameworkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">HL7 Framework Overview</h1>
      
      <div className="prose max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What is HL7?</h2>
          <p>
            Health Level Seven International (HL7) is a not-for-profit, ANSI-accredited standards developing 
            organization dedicated to providing a comprehensive framework and related standards for the exchange, 
            integration, sharing, and retrieval of electronic health information that supports clinical practice 
            and the management, delivery and evaluation of health services.
          </p>
          <p className="mt-4">
            HL7 standards support clinical practice and the management, delivery, and evaluation of health 
            services, and are recognized as the most commonly used in the world.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">HL7 Standards Evolution</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">HL7 Version 2.x</h3>
            <p>
              HL7 v2.x is the workhorse of electronic data exchange in the clinical domain and arguably the most 
              widely implemented standard for healthcare in the world. This messaging standard allows the exchange 
              of clinical data between systems. It is designed to support a central patient care system as well as 
              a more distributed environment where data resides in departmental systems.
            </p>
            <p className="mt-2">
              Key characteristics:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Segment-based message structure (e.g., PID for patient identification, OBX for observations)</li>
              <li>Pipe-delimited format</li>
              <li>Support for various message types (ADT, ORM, ORU, etc.)</li>
              <li>Extensive optionality allowing for flexible implementation</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">HL7 Version 3 and Reference Information Model (RIM)</h3>
            <p>
              HL7 v3 represents a significant departure from v2.x, using a formal methodology based on object-oriented 
              principles. At its core is the Reference Information Model (RIM), which provides a coherent shared model 
              between all the domains covered by HL7.
            </p>
            <p className="mt-2">
              Key characteristics:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>XML-based format</li>
              <li>Based on the Reference Information Model (RIM)</li>
              <li>More rigorous and consistent than v2.x</li>
              <li>Stronger focus on semantic interoperability</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Clinical Document Architecture (CDA)</h3>
            <p>
              CDA is a document markup standard that specifies the structure and semantics of clinical documents for 
              exchange. It is based on the HL7 v3 RIM and uses XML for encoding.
            </p>
            <p className="mt-2">
              Key characteristics:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Document-centric approach</li>
              <li>Combination of structured and unstructured content</li>
              <li>Human readability requirement</li>
              <li>Three levels of semantic interoperability (from unstructured to fully structured)</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Fast Healthcare Interoperability Resources (FHIR)</h3>
            <p>
              FHIR is a next-generation standard designed to be easier to implement while addressing the shortcomings 
              of previous standards. It combines the best features of HL7 v2.x, v3, and CDA while leveraging modern 
              web technologies.
            </p>
            <p className="mt-2">
              Key characteristics:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Resource-based architecture</li>
              <li>RESTful API approach</li>
              <li>Support for JSON, XML, and RDF formats</li>
              <li>Built-in support for modern web technologies</li>
              <li>Focus on implementability and developer experience</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Core Components of HL7 Framework</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Message Structure</h3>
            <p>
              HL7 messages are composed of segments, which are logical groupings of data fields. Each segment begins 
              with a three-character code that identifies its type. For example:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>MSH: Message Header</li>
              <li>PID: Patient Identification</li>
              <li>OBR: Observation Request</li>
              <li>OBX: Observation Result</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Data Types</h3>
            <p>
              HL7 defines a comprehensive set of data types to represent various kinds of information:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Primitive types (string, boolean, integer, decimal, date, etc.)</li>
              <li>Complex types (Identifier, HumanName, Address, ContactPoint, etc.)</li>
              <li>Coded concepts and terminology references</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Terminology</h3>
            <p>
              HL7 standards rely on standardized terminologies and code systems to ensure semantic interoperability:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>SNOMED CT: Clinical terms</li>
              <li>LOINC: Laboratory observations</li>
              <li>RxNorm: Medications</li>
              <li>ICD-10: Diagnoses</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Security and Privacy</h3>
            <p>
              Implementing HL7 standards requires careful consideration of security and privacy aspects:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Authentication and authorization</li>
              <li>Audit logging</li>
              <li>Data encryption</li>
              <li>Consent management</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Interoperability Levels</h3>
            <p>
              HL7 addresses different levels of interoperability:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Technical interoperability: Ability to exchange data</li>
              <li>Syntactic interoperability: Ability to parse the data</li>
              <li>Semantic interoperability: Ability to understand the meaning of the data</li>
              <li>Process interoperability: Ability to integrate the data into workflows</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Implementation Strategies</h3>
            <p>
              Organizations can adopt different strategies for implementing HL7 standards:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Direct implementation using programming languages</li>
              <li>Use of integration engines (Mirth Connect, Rhapsody, etc.)</li>
              <li>API-based approaches with FHIR</li>
              <li>Hybrid approaches combining multiple standards</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Benefits of HL7 Standards</h2>
          <ul className="list-disc pl-6">
            <li>Improved patient care through better information sharing</li>
            <li>Reduced healthcare costs by eliminating duplicate tests and procedures</li>
            <li>Enhanced clinical decision support through access to comprehensive patient data</li>
            <li>Streamlined administrative processes</li>
            <li>Support for population health management and research</li>
            <li>Facilitation of regulatory compliance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Future Directions</h2>
          <p>
            The future of HL7 standards is focused on:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Continued development and adoption of FHIR</li>
            <li>Integration with emerging technologies like AI and machine learning</li>
            <li>Support for patient-generated health data</li>
            <li>Enhanced support for genomic data</li>
            <li>Improved tooling and implementation guidance</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
