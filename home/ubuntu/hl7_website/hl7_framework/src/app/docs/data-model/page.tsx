export default function DataModel() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Core Entities and Relationships</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700">
          This section details the master data model's core entities and their relationships, providing a comprehensive framework for healthcare data representation.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="core-entities">Primary Entities</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="person">Person</h3>
        <p className="mb-4">
          The Person entity serves as the base for all human actors in the healthcare system.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Person ID (identifier)</li>
          <li>Name (structured with components: given, family, prefix, suffix)</li>
          <li>Date of Birth</li>
          <li>Gender</li>
          <li>Address (structured with components)</li>
          <li>Contact Information (telecom)</li>
          <li>Language Preferences</li>
          <li>Marital Status</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="patient">Patient</h3>
        <p className="mb-4">
          The Patient entity represents a person receiving healthcare services.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Patient ID (identifier)</li>
          <li>Medical Record Number</li>
          <li>Insurance Information</li>
          <li>Primary Care Provider</li>
          <li>Patient Status</li>
          <li>Special Needs</li>
          <li>Advance Directives</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="practitioner">Practitioner</h3>
        <p className="mb-4">
          The Practitioner entity represents a person with a formal responsibility in the healthcare process.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Practitioner ID (identifier)</li>
          <li>Qualifications</li>
          <li>Specialties</li>
          <li>Roles</li>
          <li>Organization Affiliations</li>
          <li>License Numbers</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="organization">Organization</h3>
        <p className="mb-4">
          The Organization entity represents a formally recognized group in the healthcare system.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Organization ID (identifier)</li>
          <li>Name</li>
          <li>Type</li>
          <li>Address</li>
          <li>Contact Information</li>
          <li>Parent Organization</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="location">Location</h3>
        <p className="mb-4">
          The Location entity represents a physical place where healthcare services are provided.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Location ID (identifier)</li>
          <li>Name</li>
          <li>Type</li>
          <li>Address</li>
          <li>Managing Organization</li>
          <li>Status</li>
          <li>Operational Status</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="clinical-entities">Clinical Entities</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="encounter">Encounter</h3>
        <p className="mb-4">
          The Encounter entity represents an interaction between a patient and healthcare provider(s).
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Encounter ID (identifier)</li>
          <li>Status</li>
          <li>Class (inpatient, outpatient, emergency)</li>
          <li>Type</li>
          <li>Service Type</li>
          <li>Priority</li>
          <li>Subject (Patient)</li>
          <li>Participants (Practitioners)</li>
          <li>Period (start and end time)</li>
          <li>Length</li>
          <li>Reason</li>
          <li>Diagnosis</li>
          <li>Location</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="condition">Condition</h3>
        <p className="mb-4">
          The Condition entity represents clinical conditions, problems, diagnoses, or other health matters.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Condition ID (identifier)</li>
          <li>Subject (Patient)</li>
          <li>Encounter</li>
          <li>Asserter (Practitioner)</li>
          <li>Date Recorded</li>
          <li>Code (diagnosis/problem code)</li>
          <li>Category (problem-list-item, encounter-diagnosis)</li>
          <li>Clinical Status</li>
          <li>Verification Status</li>
          <li>Severity</li>
          <li>Onset (date/time)</li>
          <li>Abatement (date/time)</li>
          <li>Stage</li>
          <li>Evidence</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="observation">Observation</h3>
        <p className="mb-4">
          The Observation entity represents measurements and assertions about a patient.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Observation ID (identifier)</li>
          <li>Status</li>
          <li>Category</li>
          <li>Code (what was observed)</li>
          <li>Subject (Patient)</li>
          <li>Encounter</li>
          <li>Effective Time</li>
          <li>Issued (date/time result was made available)</li>
          <li>Performer (Practitioner)</li>
          <li>Value (result)</li>
          <li>Interpretation</li>
          <li>Reference Range</li>
          <li>Method</li>
          <li>Device</li>
          <li>Component (for panel/battery observations)</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="administrative-entities">Administrative Entities</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="coverage">Coverage</h3>
        <p className="mb-4">
          The Coverage entity represents insurance or payment information.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Coverage ID (identifier)</li>
          <li>Status</li>
          <li>Type</li>
          <li>Payer (Organization)</li>
          <li>Beneficiary (Patient)</li>
          <li>Dependent</li>
          <li>Relationship to Subscriber</li>
          <li>Period</li>
          <li>Payor</li>
          <li>Class</li>
          <li>Order</li>
          <li>Network</li>
          <li>Cost to Beneficiary</li>
          <li>Subrogation</li>
          <li>Contract</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="appointment">Appointment</h3>
        <p className="mb-4">
          The Appointment entity represents the booking of a healthcare event.
        </p>
        <p className="mb-3">Key attributes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Appointment ID (identifier)</li>
          <li>Status</li>
          <li>Service Category</li>
          <li>Service Type</li>
          <li>Specialty</li>
          <li>Appointment Type</li>
          <li>Reason</li>
          <li>Priority</li>
          <li>Description</li>
          <li>Start</li>
          <li>End</li>
          <li>Created</li>
          <li>Comment</li>
          <li>Participant (Patient, Practitioner)</li>
          <li>Requested Period</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="data-types">Data Types and Terminology</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="primitive-types">Primitive Types</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>string: A sequence of Unicode characters</li>
          <li>boolean: true or false</li>
          <li>integer: A whole number</li>
          <li>decimal: A rational number</li>
          <li>uri: Uniform Resource Identifier</li>
          <li>url: Uniform Resource Locator</li>
          <li>canonical: Canonical URL</li>
          <li>base64Binary: Base64 encoded content</li>
          <li>instant: Precise timestamp</li>
          <li>date: Calendar date</li>
          <li>dateTime: Date and time with timezone</li>
          <li>time: Time of day</li>
          <li>code: Restricted string from a defined set of values</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3" id="complex-types">Complex Types</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Identifier: Business identifier for an entity</li>
          <li>HumanName: Name of a human</li>
          <li>Address: Mailing or physical address</li>
          <li>ContactPoint: Contact details</li>
          <li>CodeableConcept: Concept with coding from a terminology</li>
          <li>Coding: Reference to a code in a terminology system</li>
          <li>Quantity: A measured amount</li>
          <li>Period: Time range</li>
          <li>Ratio: Relationship between two quantities</li>
          <li>Reference: Reference to another resource</li>
          <li>Attachment: Content referenced or embedded</li>
        </ul>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8">
        <h4 className="font-bold text-yellow-800 mb-2">Next Steps</h4>
        <p className="text-yellow-700">
          Explore the <a href="/docs/mappings" className="text-blue-600 hover:text-blue-800 underline">HL7 Mappings</a> section 
          to understand how these entities and data types map to different HL7 standards, or visit the 
          <a href="/docs/implementation" className="text-blue-600 hover:text-blue-800 underline">Implementation</a> section 
          for guidance on implementing this data model.
        </p>
      </div>
    </div>
  )
}
