export default function Validation() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Validation Results</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700">
          This section presents the validation results of the master data model against HL7 standards requirements,
          confirming its compliance and interoperability capabilities.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Compliance Assessment</h2>
      <p className="mb-4">
        The master data model has been validated against HL7 standards requirements and found to be compliant 
        across all major areas. The model successfully integrates concepts from HL7 v2.x, HL7 v3 RIM, CDA, 
        and FHIR to create a unified approach to healthcare data representation and exchange.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Compliance with HL7 v2.x</h3>
        <p className="mb-4">
          The model has been validated for compliance with HL7 v2.x segment structures, message structures, 
          and data types. It supports all required fields for common segments like PID, PV1, OBX, and ORC, 
          and accommodates the message structures for ADT, ORM, ORU, and other message types.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-semibold">✓ Compliant with HL7 v2.x standards</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Compliance with HL7 v3 RIM</h3>
        <p className="mb-4">
          The model aligns with the HL7 v3 RIM class structure, including Act, Entity, Role, Participation, 
          and ActRelationship classes. It supports the data types defined in the RIM and maintains the 
          semantic relationships between classes.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-semibold">✓ Compliant with HL7 v3 RIM standards</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Compliance with CDA</h3>
        <p className="mb-4">
          The model supports CDA document structures, including the header and body components. It accommodates 
          document templates, section templates, and entry templates, and supports the clinical statement 
          patterns used in CDA.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-semibold">✓ Compliant with CDA standards</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">Compliance with FHIR</h3>
        <p className="mb-4">
          The model aligns with FHIR resource structures, data types, and interaction patterns. It supports 
          the RESTful API approach of FHIR and accommodates the extension mechanism for customization.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700 font-semibold">✓ Compliant with FHIR standards</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Interoperability Assessment</h2>
      <p className="mb-4">
        The model has been assessed for both syntactic and semantic interoperability. It supports standard 
        message structures, data formats, and transport protocols for syntactic interoperability. For semantic 
        interoperability, it includes terminology bindings, code system support, and alignment with standard 
        information models.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Syntactic Interoperability</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Standard message formats</li>
            <li>Consistent data structures</li>
            <li>Transport protocol support</li>
            <li>Character encoding compatibility</li>
            <li>Schema validation support</li>
          </ul>
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-2">
            <p className="text-green-700 font-semibold">✓ Validated</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Semantic Interoperability</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Terminology bindings</li>
            <li>Code system support</li>
            <li>Value set definitions</li>
            <li>Concept mappings</li>
            <li>Semantic validation</li>
          </ul>
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-2">
            <p className="text-green-700 font-semibold">✓ Validated</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Validation Methodology</h2>
      <p className="mb-4">
        The validation process included the following steps:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>
          <span className="font-semibold">Standards Review:</span> Comprehensive review of HL7 standards 
          specifications to identify requirements and constraints.
        </li>
        <li>
          <span className="font-semibold">Structural Analysis:</span> Analysis of the data model structure 
          against standard information models.
        </li>
        <li>
          <span className="font-semibold">Mapping Verification:</span> Verification of mappings between the 
          data model and HL7 standards.
        </li>
        <li>
          <span className="font-semibold">Terminology Validation:</span> Validation of terminology bindings 
          and code system references.
        </li>
        <li>
          <span className="font-semibold">Use Case Testing:</span> Testing the model against common healthcare 
          interoperability use cases.
        </li>
      </ol>
      
      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Conclusion</h2>
      <p className="mb-4">
        The HL7 Framework Master Data Model has been validated and found to be compliant with HL7 standards 
        requirements. It provides a comprehensive and standards-aligned approach to healthcare data representation 
        and exchange, enabling interoperability across different healthcare systems and standards.
      </p>
      <p className="mb-4">
        Organizations implementing this model can be confident in its ability to support healthcare 
        interoperability requirements and facilitate data exchange with other systems implementing 
        HL7 standards.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h4 className="font-bold text-blue-800 mb-2">Next Steps</h4>
        <p className="text-blue-700">
          Now that you've reviewed the complete documentation, you can start implementing the HL7 Framework 
          Master Data Model in your healthcare information systems. Refer to the 
          <a href="/docs/implementation" className="text-blue-600 hover:text-blue-800 underline"> Implementation</a> section 
          for practical guidance on getting started.
        </p>
      </div>
    </div>
  )
}
