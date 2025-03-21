export default function Mappings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">HL7 Mappings</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700">
          This section provides comprehensive mappings between the master data model and various HL7 standards,
          enabling interoperability between systems implementing different standards.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="hl7-v2">HL7 v2.x Mappings</h2>
      <p className="mb-4">
        The model maps to HL7 v2.x segments and fields, supporting common message types:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Patient information maps to PID, PD1 segments</li>
        <li>Encounter information maps to PV1, PV2 segments</li>
        <li>Observation information maps to OBX, OBR segments</li>
        <li>Order information maps to ORC, RXE segments</li>
        <li>Allergy information maps to AL1, IAM segments</li>
      </ul>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h3 className="font-bold mb-2">Example mapping for Patient demographics:</h3>
        <ul className="list-none space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">Patient.id → PID-3</code> (Patient Identifier List)</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.name → PID-5</code> (Patient Name)</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.birthDate → PID-7</code> (Date/Time of Birth)</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.gender → PID-8</code> (Administrative Sex)</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.address → PID-11</code> (Patient Address)</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.telecom → PID-13, PID-14</code> (Phone Numbers)</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="hl7-v3">HL7 v3 RIM Mappings</h2>
      <p className="mb-4">
        The model aligns with the HL7 v3 RIM classes and attributes:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Person, Patient, Practitioner map to Entity class</li>
        <li>Encounter, Observation, Procedure map to Act class</li>
        <li>Relationships map to Participation and ActRelationship classes</li>
      </ul>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h3 className="font-bold mb-2">Example mapping for Patient:</h3>
        <ul className="list-none space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">Patient → Patient</code> class in RIM</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.id → Patient.id</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.name → Patient.name</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.birthDate → Patient.birthTime</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.gender → Patient.administrativeGenderCode</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.address → Patient.addr</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.telecom → Patient.telecom</code></li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="cda">CDA Mappings</h2>
      <p className="mb-4">
        The model maps to CDA document structures, sections, and entries:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Patient information maps to recordTarget/patientRole</li>
        <li>Encounter information maps to encompassingEncounter</li>
        <li>Clinical information maps to entries in the document body</li>
      </ul>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h3 className="font-bold mb-2">Example mapping for Patient demographics:</h3>
        <ul className="list-none space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">Patient.id → recordTarget/patientRole/id</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.name → recordTarget/patientRole/patient/name</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.birthDate → recordTarget/patientRole/patient/birthTime</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.gender → recordTarget/patientRole/patient/administrativeGenderCode</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.address → recordTarget/patientRole/addr</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.telecom → recordTarget/patientRole/telecom</code></li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4" id="fhir">FHIR Mappings</h2>
      <p className="mb-4">
        The model closely aligns with FHIR resources and data types:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Primary entities map to FHIR administrative resources</li>
        <li>Clinical entities map to FHIR clinical resources</li>
        <li>Administrative entities map to FHIR workflow and financial resources</li>
      </ul>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h3 className="font-bold mb-2">Example mapping for Patient:</h3>
        <ul className="list-none space-y-1">
          <li><code className="bg-gray-100 px-1 rounded">Patient → Patient</code> resource</li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.id → Patient.identifier</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.name → Patient.name</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.birthDate → Patient.birthDate</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.gender → Patient.gender</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.address → Patient.address</code></li>
          <li><code className="bg-gray-100 px-1 rounded">Patient.telecom → Patient.telecom</code></li>
        </ul>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8">
        <h4 className="font-bold text-yellow-800 mb-2">Next Steps</h4>
        <p className="text-yellow-700">
          Explore the <a href="/docs/implementation" className="text-blue-600 hover:text-blue-800 underline">Implementation</a> section 
          for guidance on implementing this data model with the appropriate HL7 standard for your use case.
        </p>
      </div>
    </div>
  )
}
