export default function Overview() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">HL7 Framework Master Data Model</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700">
          This documentation provides a comprehensive overview of the HL7 Framework Master Data Model, 
          a unified approach to healthcare data representation and exchange.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="introduction">Introduction</h2>
      <p className="mb-4">
        Healthcare interoperability remains a significant challenge in the industry, with different systems 
        using various standards and formats for data exchange. The HL7 framework provides standards for the 
        exchange, integration, sharing, and retrieval of electronic health information, but implementing 
        these standards can be complex due to their diversity and evolution over time.
      </p>
      <p className="mb-4">
        This master data model addresses these challenges by providing a unified approach that incorporates 
        elements from multiple HL7 standards. It serves as a blueprint for designing healthcare information 
        systems that can seamlessly exchange data with other systems, regardless of which specific HL7 
        standard they implement.
      </p>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Purpose and Scope</h3>
      <p className="mb-3">The purpose of this master data model is to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Provide a comprehensive framework for healthcare data representation aligned with HL7 standards</li>
        <li>Enable semantic interoperability between healthcare systems</li>
        <li>Support implementation of healthcare information systems that can exchange data across different standards</li>
        <li>Serve as a reference for mapping between different HL7 standards</li>
        <li>Facilitate compliance with healthcare interoperability requirements</li>
      </ul>
      
      <p className="mb-3">The scope of the model includes:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Patient demographic information</li>
        <li>Clinical data (observations, conditions, procedures, medications, etc.)</li>
        <li>Administrative data (encounters, appointments, etc.)</li>
        <li>Financial data (coverage, claims, etc.)</li>
        <li>Document management</li>
        <li>Terminology and code systems</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="hl7-standards">HL7 Standards Overview</h2>
      <p className="mb-4">
        The HL7 framework encompasses multiple standards that have evolved over time to address different 
        aspects of healthcare interoperability. The key standards incorporated in this master data model are:
      </p>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">HL7 Version 2.x</h3>
      <p className="mb-4">
        HL7 v2.x is a messaging standard that defines how electronic data should be exchanged between 
        different healthcare applications. It uses a non-XML encoding syntax based on segments and delimiters. 
        Despite being one of the older standards, it remains widely implemented due to its flexibility and 
        widespread adoption.
      </p>
      <p className="mb-3">Key characteristics:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Segment-based message structure (e.g., PID for patient identification, OBX for observations)</li>
        <li>Pipe-delimited format</li>
        <li>Support for various message types (ADT, ORM, ORU, etc.)</li>
        <li>Extensive optionality allowing for flexible implementation</li>
      </ul>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">HL7 Version 3 and Reference Information Model (RIM)</h3>
      <p className="mb-4">
        HL7 v3 represents a significant departure from v2.x, using a formal methodology based on 
        object-oriented principles. At its core is the Reference Information Model (RIM), which provides 
        a coherent shared model between all the domains covered by HL7.
      </p>
      <p className="mb-3">Key characteristics:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>XML-based format</li>
        <li>Based on the Reference Information Model (RIM)</li>
        <li>More rigorous and consistent than v2.x</li>
        <li>Stronger focus on semantic interoperability</li>
      </ul>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Clinical Document Architecture (CDA)</h3>
      <p className="mb-4">
        CDA is a document markup standard that specifies the structure and semantics of clinical documents 
        for exchange. It is based on the HL7 v3 RIM and uses XML for encoding.
      </p>
      <p className="mb-3">Key characteristics:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Document-centric approach</li>
        <li>Combination of structured and unstructured content</li>
        <li>Human readability requirement</li>
        <li>Three levels of semantic interoperability (from unstructured to fully structured)</li>
      </ul>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Fast Healthcare Interoperability Resources (FHIR)</h3>
      <p className="mb-4">
        FHIR is a next-generation standard designed to be easier to implement while addressing the 
        shortcomings of previous standards. It combines the best features of HL7 v2.x, v3, and CDA 
        while leveraging modern web technologies.
      </p>
      <p className="mb-3">Key characteristics:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Resource-based architecture</li>
        <li>RESTful API approach</li>
        <li>Support for JSON, XML, and RDF formats</li>
        <li>Built-in support for modern web technologies</li>
        <li>Focus on implementability and developer experience</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="model-structure">Master Data Model Structure</h2>
      <p className="mb-4">
        The master data model is structured to provide a comprehensive framework for healthcare data 
        representation while maintaining alignment with HL7 standards. The model is organized into 
        several key components:
      </p>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Core Entities and Relationships</h3>
      <p className="mb-4">
        The foundation of the model consists of core entities representing the primary actors and 
        concepts in healthcare, along with their relationships. These include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Primary entities (Person, Patient, Practitioner, Organization, Location)</li>
        <li>Clinical entities (Encounter, Condition, Observation, Procedure, Medication, etc.)</li>
        <li>Administrative entities (Coverage, Claim, Appointment, etc.)</li>
        <li>Document entities (DocumentReference, DiagnosticReport, etc.)</li>
      </ul>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Data Types</h3>
      <p className="mb-4">
        The model defines a comprehensive set of data types to represent various kinds of information:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Primitive types (string, boolean, integer, decimal, date, etc.)</li>
        <li>Complex types (Identifier, HumanName, Address, ContactPoint, etc.)</li>
        <li>Coded concepts and terminology references</li>
      </ul>
      
      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Terminology Bindings</h3>
      <p className="mb-4">
        To ensure semantic interoperability, the model includes bindings to standard terminologies 
        and code systems:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Code systems (SNOMED CT, LOINC, RxNorm, ICD-10, etc.)</li>
        <li>Value sets for specific domains</li>
        <li>Context-specific terminology bindings</li>
      </ul>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8">
        <h4 className="font-bold text-yellow-800 mb-2">Next Steps</h4>
        <p className="text-yellow-700">
          Explore the detailed <a href="/docs/data-model" className="text-blue-600 hover:text-blue-800 underline">Data Model</a> section 
          to learn about specific entities and their attributes, or visit the <a href="/docs/mappings" className="text-blue-600 hover:text-blue-800 underline">HL7 Mappings</a> section 
          to understand how the model maps to different HL7 standards.
        </p>
      </div>
    </div>
  )
}
