# HL7 Mapping Reference Guide

This document provides detailed mapping references between our master data model and various HL7 standards, including HL7 v2.x, HL7 v3 RIM, CDA, and FHIR. These mappings are essential for implementing interoperable healthcare systems that can communicate effectively across different standards.

## 1. Patient Data Mappings

### Patient Demographics

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Patient.id | PID-3 (Patient Identifier List) | Patient.id | recordTarget/patientRole/id | Patient.identifier |
| Patient.name | PID-5 (Patient Name) | Patient.name | recordTarget/patientRole/patient/name | Patient.name |
| Patient.birthDate | PID-7 (Date/Time of Birth) | Patient.birthTime | recordTarget/patientRole/patient/birthTime | Patient.birthDate |
| Patient.gender | PID-8 (Administrative Sex) | Patient.administrativeGenderCode | recordTarget/patientRole/patient/administrativeGenderCode | Patient.gender |
| Patient.address | PID-11 (Patient Address) | Patient.addr | recordTarget/patientRole/addr | Patient.address |
| Patient.telecom | PID-13, PID-14 (Phone Numbers) | Patient.telecom | recordTarget/patientRole/telecom | Patient.telecom |
| Patient.maritalStatus | PID-16 (Marital Status) | Patient.maritalStatusCode | recordTarget/patientRole/patient/maritalStatusCode | Patient.maritalStatus |
| Patient.language | PID-15 (Primary Language) | Patient.languageCommunication | recordTarget/patientRole/patient/languageCommunication | Patient.communication |
| Patient.contact | NK1 segment | Patient.contactParty | recordTarget/patientRole/patient/guardian | Patient.contact |

### Patient Insurance Information

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Coverage.id | IN1-2 (Insurance Plan ID) | Coverage.id | encompassingEncounter/responsibleParty | Coverage.identifier |
| Coverage.type | IN1-3 (Insurance Company ID) | Coverage.type | encompassingEncounter/responsibleParty/code | Coverage.type |
| Coverage.policyHolder | IN1-16 (Name of Insured) | Coverage.policyholder | encompassingEncounter/responsibleParty/assignedPerson | Coverage.policyHolder |
| Coverage.beneficiary | IN1-4 (Insurance Company Name) | Coverage.beneficiary | encompassingEncounter/responsibleParty/representedOrganization | Coverage.beneficiary |
| Coverage.relationship | IN1-17 (Insured's Relationship) | Coverage.relationship | encompassingEncounter/responsibleParty/code | Coverage.relationship |
| Coverage.period | IN1-12, IN1-13 (Plan Effective/Expiration Date) | Coverage.effectiveTime | encompassingEncounter/effectiveTime | Coverage.period |
| Coverage.payor | IN1-4 (Insurance Company Name) | Coverage.author | encompassingEncounter/responsibleParty/representedOrganization | Coverage.payor |

## 2. Clinical Data Mappings

### Encounter/Visit Information

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Encounter.id | PV1-19 (Visit Number) | Encounter.id | encompassingEncounter/id | Encounter.identifier |
| Encounter.status | PV1-2 (Patient Class) | Encounter.statusCode | encompassingEncounter/code | Encounter.status |
| Encounter.class | PV1-2 (Patient Class) | Encounter.code | encompassingEncounter/code | Encounter.class |
| Encounter.type | PV1-4 (Admission Type) | Encounter.code | encompassingEncounter/code | Encounter.type |
| Encounter.subject | PV1-3 (Assigned Patient Location) | Encounter.subject | encompassingEncounter/responsibleParty | Encounter.subject |
| Encounter.participant | PV1-7, PV1-8, PV1-9, PV1-17 (Attending Doctor, etc.) | Encounter.performer | encompassingEncounter/encounterParticipant | Encounter.participant |
| Encounter.period | PV1-44, PV1-45 (Admit Date/Time, Discharge Date/Time) | Encounter.effectiveTime | encompassingEncounter/effectiveTime | Encounter.period |
| Encounter.reason | PV2-3 (Admit Reason) | Encounter.reasonCode | encompassingEncounter/code | Encounter.reasonCode |
| Encounter.diagnosis | No direct mapping | Encounter.pertinentInformation | encompassingEncounter/diagnosis | Encounter.diagnosis |
| Encounter.location | PV1-3 (Assigned Patient Location) | Encounter.location | encompassingEncounter/location | Encounter.location |

### Observations and Results

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Observation.id | OBX-3 (Observation Identifier) | Observation.id | entry/observation/id | Observation.identifier |
| Observation.status | OBX-11 (Observation Result Status) | Observation.statusCode | entry/observation/statusCode | Observation.status |
| Observation.category | OBR-24 (Diagnostic Service Section ID) | Observation.code | entry/observation/code | Observation.category |
| Observation.code | OBX-3 (Observation Identifier) | Observation.code | entry/observation/code | Observation.code |
| Observation.subject | PID-3 (Patient ID) | Observation.subject | entry/observation/subject | Observation.subject |
| Observation.encounter | PV1-19 (Visit Number) | Observation.encounter | entry/observation/entryRelationship | Observation.encounter |
| Observation.effectiveDateTime | OBX-14 (Date/Time of the Observation) | Observation.effectiveTime | entry/observation/effectiveTime | Observation.effectiveDateTime |
| Observation.issued | OBR-22 (Results Rpt/Status Chng Date/Time) | Observation.availabilityTime | entry/observation/author/time | Observation.issued |
| Observation.performer | OBX-16 (Responsible Observer) | Observation.performer | entry/observation/performer | Observation.performer |
| Observation.value[x] | OBX-5 (Observation Value) | Observation.value | entry/observation/value | Observation.value[x] |
| Observation.interpretation | OBX-8 (Abnormal Flags) | Observation.interpretationCode | entry/observation/interpretationCode | Observation.interpretation |
| Observation.referenceRange | OBX-7 (References Range) | Observation.referenceRange | entry/observation/referenceRange | Observation.referenceRange |

### Conditions and Problems

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Condition.id | PRB-3 (Problem ID) | Observation.id | entry/act/id | Condition.identifier |
| Condition.clinicalStatus | PRB-14 (Problem Status) | Observation.statusCode | entry/act/statusCode | Condition.clinicalStatus |
| Condition.verificationStatus | No direct mapping | Observation.uncertaintyCode | entry/act/uncertaintyCode | Condition.verificationStatus |
| Condition.category | No direct mapping | Observation.code | entry/act/code | Condition.category |
| Condition.severity | PRB-26 (Problem Severity) | Observation.severityCode | entry/act/entryRelationship/observation[code="SEV"]/value | Condition.severity |
| Condition.code | PRB-4 (Problem Code) | Observation.code | entry/act/code | Condition.code |
| Condition.subject | PRB-2 (Patient ID) | Observation.subject | entry/act/subject | Condition.subject |
| Condition.encounter | No direct mapping | Observation.encounter | entry/act/entryRelationship | Condition.encounter |
| Condition.onsetDateTime | PRB-16 (Problem Onset Date) | Observation.effectiveTime | entry/act/effectiveTime | Condition.onsetDateTime |
| Condition.abatementDateTime | PRB-17 (Problem Resolved Date) | Observation.effectiveTime | entry/act/effectiveTime | Condition.abatementDateTime |
| Condition.recordedDate | PRB-7 (Problem Established Date) | Observation.availabilityTime | entry/act/author/time | Condition.recordedDate |
| Condition.recorder | PRB-8 (Problem Established By) | Observation.author | entry/act/author | Condition.recorder |

### Medications

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| Medication.id | RXE-2 (Give Code) | ManufacturedProduct.id | entry/substanceAdministration/consumable/manufacturedProduct/id | Medication.identifier |
| Medication.code | RXE-2 (Give Code) | ManufacturedProduct.code | entry/substanceAdministration/consumable/manufacturedProduct/manufacturedMaterial/code | Medication.code |
| Medication.status | No direct mapping | ManufacturedProduct.statusCode | entry/substanceAdministration/statusCode | Medication.status |
| Medication.manufacturer | RXE-17 (Substance Manufacturer Name) | ManufacturedProduct.manufacturer | entry/substanceAdministration/consumable/manufacturedProduct/manufacturerOrganization | Medication.manufacturer |
| Medication.form | RXE-6 (Give Drug Strength Volume Units) | ManufacturedProduct.formCode | entry/substanceAdministration/consumable/manufacturedProduct/manufacturedMaterial/formCode | Medication.form |
| Medication.amount | RXE-10 (Dispense Amount) | ManufacturedProduct.quantity | entry/substanceAdministration/doseQuantity | Medication.amount |
| Medication.ingredient | RXC segment | ManufacturedProduct.ingredient | entry/substanceAdministration/consumable/manufacturedProduct/manufacturedMaterial/ingredient | Medication.ingredient |

| MedicationRequest.id | RXE-1 (Quantity/Timing) | SubstanceAdministration.id | entry/substanceAdministration/id | MedicationRequest.identifier |
| MedicationRequest.status | ORC-5 (Order Status) | SubstanceAdministration.statusCode | entry/substanceAdministration/statusCode | MedicationRequest.status |
| MedicationRequest.intent | ORC-1 (Order Control) | SubstanceAdministration.moodCode | entry/substanceAdministration/moodCode | MedicationRequest.intent |
| MedicationRequest.medicationCodeableConcept | RXE-2 (Give Code) | SubstanceAdministration.consumable | entry/substanceAdministration/consumable | MedicationRequest.medicationCodeableConcept |
| MedicationRequest.subject | PID-3 (Patient ID) | SubstanceAdministration.subject | entry/substanceAdministration/subject | MedicationRequest.subject |
| MedicationRequest.encounter | PV1-19 (Visit Number) | SubstanceAdministration.encounter | entry/substanceAdministration/entryRelationship | MedicationRequest.encounter |
| MedicationRequest.authoredOn | RXE-25 (Give Authorization Date/Time) | SubstanceAdministration.author | entry/substanceAdministration/author/time | MedicationRequest.authoredOn |
| MedicationRequest.requester | ORC-12 (Ordering Provider) | SubstanceAdministration.author | entry/substanceAdministration/author | MedicationRequest.requester |
| MedicationRequest.reasonCode | RXE-27 (Give Indication) | SubstanceAdministration.reasonCode | entry/substanceAdministration/entryRelationship/observation[typeCode="RSON"] | MedicationRequest.reasonCode |
| MedicationRequest.dosageInstruction | RXE-1, RXE-3, RXE-4, RXE-5 (Quantity/Timing, etc.) | SubstanceAdministration.effectiveTime | entry/substanceAdministration/effectiveTime | MedicationRequest.dosageInstruction |

### Allergies and Intolerances

| Master Data Model | HL7 v2.x | HL7 v3 RIM | CDA | FHIR |
|-------------------|----------|------------|-----|------|
| AllergyIntolerance.id | AL1-1 (Set ID) | Observation.id | entry/act/id | AllergyIntolerance.identifier |
| AllergyIntolerance.clinicalStatus | No direct mapping | Observation.statusCode | entry/act/statusCode | AllergyIntolerance.clinicalStatus |
| AllergyIntolerance.verificationStatus | No direct mapping | Observation.uncertaintyCode | entry/act/uncertaintyCode | AllergyIntolerance.verificationStatus |
| AllergyIntolerance.type | AL1-2 (Allergy Type) | Observation.code | entry/act/code | AllergyIntolerance.type |
| AllergyIntolerance.category | No direct mapping | Observation.code | entry/act/code | AllergyIntolerance.category |
| AllergyIntolerance.criticality | No direct mapping | Observation.criticality | entry/act/entryRelationship/observation[code="SEV"]/value | AllergyIntolerance.criticality |
| AllergyIntolerance.code | AL1-3 (Allergy Code/Mnemonic/Description) | Observation.code | entry/act/code | AllergyIntolerance.code |
| AllergyIntolerance.patient | PID-3 (Patient ID) | Observation.subject | entry/act/subject | AllergyIntolerance.patient |
| AllergyIntolerance.onsetDateTime | AL1-6 (Onset Date) | Observation.effectiveTime | entry/act/effectiveTime | AllergyIntolerance.onsetDateTime |
| AllergyIntolerance.recordedDate | No direct mapping | Observation.availabilityTime | entry/act/author/time | AllergyIntolerance.recordedDate |
| AllergyIntolerance.recorder | No direct mapping | Observation.author | entry/act/author | AllergyIntolerance.recorder |
| AllergyIntolerance.reaction.manifestation | AL1-5 (Allergy Reaction) | Observation.value | entry/act/entryRelationship/observation[code="MFST"]/value | AllergyIntolerance.reaction.manifestation |
| AllergyIntolerance.reaction.severity | AL1-4 (Allergy Severity) | Observation.severityCode | entry/act/entryRelationship/observation[code="SEV"]/value | AllergyIntolerance.reaction.severity |

## 3. Implementation Notes

### HL7 v2.x Implementation Notes

1. **Segment Repetition**: Many HL7 v2.x segments can repeat to represent multiple instances of the same type of data. For example, multiple OBX segments can be used to represent multiple observations.

2. **Z-Segments**: Custom Z-segments can be used to represent data that doesn't fit into standard segments. These should be documented in implementation guides.

3. **Version Compatibility**: Be aware of version differences when implementing HL7 v2.x interfaces. Fields may have different meanings or be located in different positions in different versions.

4. **Optional Fields**: Many fields in HL7 v2.x are optional. Implementations should clearly document which fields are required for their specific use case.

5. **Delimiters**: HL7 v2.x uses special characters as delimiters. The default delimiters are:
   - Field separator: |
   - Component separator: ^
   - Subcomponent separator: &
   - Repetition separator: ~
   - Escape character: \

### HL7 v3 RIM Implementation Notes

1. **RIM-Based Modeling**: All HL7 v3 messages are derived from the Reference Information Model (RIM), which consists of six core classes: Act, Entity, Role, Participation, ActRelationship, and RoleLink.

2. **XML Format**: HL7 v3 messages are formatted in XML, which provides a more structured format than HL7 v2.x.

3. **Data Types**: HL7 v3 uses a rich set of data types that are more expressive than those in HL7 v2.x.

4. **Vocabulary Binding**: HL7 v3 has stronger vocabulary binding requirements than HL7 v2.x, which helps ensure semantic interoperability.

5. **Implementation Complexity**: HL7 v3 is generally considered more complex to implement than HL7 v2.x due to its more rigorous modeling approach.

### CDA Implementation Notes

1. **Document Structure**: CDA documents consist of a header and a body. The header contains metadata about the document, patient, and encounter, while the body contains the clinical content.

2. **Levels of Encoding**: CDA supports three levels of encoding:
   - Level 1: Unstructured narrative text
   - Level 2: Structured markup of sections
   - Level 3: Fully structured entries within sections

3. **Templates**: CDA implementation guides define templates that constrain the CDA standard for specific use cases.

4. **Narrative Text**: CDA requires human-readable narrative text in addition to structured data, ensuring that documents can be read by humans even if the receiving system cannot process the structured data.

5. **XML Format**: Like HL7 v3, CDA documents are formatted in XML.

### FHIR Implementation Notes

1. **RESTful API**: FHIR is designed to be implemented as a RESTful API, which makes it easier to integrate with modern web technologies.

2. **Resource-Based**: FHIR organizes healthcare data into resources, which are the basic building blocks of the standard.

3. **Multiple Formats**: FHIR resources can be represented in multiple formats, including JSON, XML, and RDF.

4. **Extensions**: FHIR allows for extensions to resources, which enables customization while maintaining interoperability.

5. **Profiles**: FHIR profiles constrain resources for specific use cases, similar to CDA templates.

6. **Implementation Maturity**: Different FHIR resources have different levels of maturity, which should be considered when implementing.

## 4. Cross-Standard Integration Strategies

### HL7 v2.x to FHIR Conversion

1. **Segment to Resource Mapping**: Map HL7 v2.x segments to corresponding FHIR resources (e.g., PID segment to Patient resource).

2. **Field to Element Mapping**: Map individual fields in HL7 v2.x segments to elements in FHIR resources.

3. **Code System Translation**: Translate code systems used in HL7 v2.x to those used in FHIR.

4. **Message to Bundle Conversion**: Convert HL7 v2.x messages to FHIR Bundles, which can contain multiple resources.

5. **Event-Based Integration**: Use FHIR Subscriptions to trigger HL7 v2.x messages or vice versa.

### CDA to FHIR Conversion

1. **Document to Bundle Conversion**: Convert CDA documents to FHIR Bundles with a Composition resource as the entry point.

2. **Section to Resource Mapping**: Map CDA sections to corresponding FHIR resources.

3. **Entry to Resource Mapping**: Map CDA entries to corresponding FHIR resources.

4. **Narrative Preservation**: Preserve narrative text from CDA in FHIR resources.

5. **Template to Profile Mapping**: Map CDA templates to FHIR profiles.

### HL7 v3 to FHIR Conversion

1. **RIM to Resource Mapping**: Map RIM classes to corresponding FHIR resources.

2. **Data Type Conversion**: Convert HL7 v3 data types to FHIR data types.

3. **Vocabulary Mapping**: Map HL7 v3 vocabulary to FHIR terminology.

4. **Message to Bundle Conversion**: Convert HL7 v3 messages to FHIR Bundles.

5. **Service-Based Integration**: Use FHIR Operations to implement HL7 v3 services.

## 5. Validation and Testing

### HL7 v2.x Validation

1. **Message Structure Validation**: Validate that messages conform to the expected structure for their message type and trigger event.

2. **Segment Validation**: Validate that segments contain the required fields and that fields contain valid values.

3. **Data Type Validation**: Validate that field values conform to their expected data types.

4. **Code Set Validation**: Validate that coded values are from the expected code sets.

5. **Application-Level Validation**: Validate that messages make sense in the context of the application (e.g., an admission message for a patient who is already admitted).

### FHIR Validation

1. **Resource Validation**: Validate that resources conform to their definitions in the FHIR specification.

2. **Profile Validation**: Validate that resources conform to the profiles that constrain them for specific use cases.

3. **Reference Validation**: Validate that references between resources are valid.

4. **Business Rule Validation**: Validate that resources conform to business rules that are not captured in the FHIR specification or profiles.

5. **API Validation**: Validate that API requests and responses conform to the FHIR RESTful API specification.

### CDA Validation

1. **Schema Validation**: Validate that CDA documents conform to the CDA schema.

2. **Template Validation**: Validate that CDA documents conform to the templates that constrain them for specific use cases.

3. **Vocabulary Validation**: Validate that coded values in CDA documents are from the expected code systems.

4. **Narrative Validation**: Validate that narrative text is present and consistent with structured data.

5. **Business Rule Validation**: Validate that CDA documents conform to business rules that are not captured in the CDA schema or templates.

## 6. Security and Privacy Considerations

### Authentication and Authorization

1. **User Authentication**: Verify the identity of users accessing the system.

2. **System Authentication**: Verify the identity of systems exchanging data.

3. **Authorization**: Control access to data based on user roles and permissions.

4. **OAuth 2.0**: Use OAuth 2.0 for delegated authorization, particularly with FHIR APIs.

5. **SMART on FHIR**: Use SMART on FHIR for authorization of healthcare applications.

### Data Protection

1. **Encryption**: Encrypt data in transit and at rest.

2. **Digital Signatures**: Use digital signatures to ensure data integrity and non-repudiation.

3. **Secure Transport**: Use secure transport protocols (e.g., TLS) for data exchange.

4. **Data Segmentation**: Segment sensitive data to control access.

5. **De-identification**: De-identify data when appropriate for secondary use.

### Audit and Monitoring

1. **Audit Logging**: Log all access to and changes to data.

2. **Audit Trail**: Maintain an audit trail that can be reviewed for security incidents.

3. **Monitoring**: Monitor systems for suspicious activity.

4. **Alerting**: Alert administrators to potential security incidents.

5. **Reporting**: Generate reports on system usage and security incidents.

### Consent Management

1. **Consent Capture**: Capture patient consent for data sharing.

2. **Consent Enforcement**: Enforce patient consent preferences when sharing data.

3. **Consent Revocation**: Allow patients to revoke consent.

4. **Consent Documentation**: Document patient consent decisions.

5. **Consent Exchange**: Exchange consent information between systems.

## 7. Terminology and Code System Mappings

### SNOMED CT to ICD-10 Mapping

| SNOMED CT | ICD-10 | Description |
|-----------|--------|-------------|
| 22298006 | M24.9 | Joint disorder |
| 73211009 | K29.70 | Gastritis |
| 44054006 | E11.9 | Type 2 diabetes mellitus |
| 38341003 | I10 | Essential hypertension |
| 195967001 | J45.909 | Asthma |

### LOINC to Local Code Mapping

| LOINC | Local Code | Description |
|-------|------------|-------------|
| 8302-2 | HT | Height |
| 29463-7 | WT | Weight |
| 8867-4 | HR | Heart rate |
| 8480-6 | BP-S | Systolic blood pressure |
| 8462-4 | BP-D | Diastolic blood pressure |

### RxNorm to NDC Mapping

| RxNorm | NDC | Description |
|--------|-----|-------------|
| 198440 | 00071-0155-23 | Lipitor 10 MG Oral Tablet |
| 310798 | 00006-0951-54 | Cozaar 50 MG Oral Tablet |
| 314076 | 00006-0749-31 | Zocor 20 MG Oral Tablet |
| 197319 | 00009-0029-01 | Norvasc 5 MG Oral Tablet |
| 213169 | 00173-0489-09 | Ventolin HFA 90 MCG/ACTUAT Inhalation Aerosol |

## 8. Implementation Scenarios

### Primary Care EHR Integration

1. **Patient Registration**: Exchange patient demographic information using HL7 v2.x ADT messages or FHIR Patient resources.

2. **Problem List Management**: Exchange problem list information using HL7 v2.x ORU messages, CDA documents, or FHIR Condition resources.

3. **Medication Management**: Exchange medication information using HL7 v2.x RDE messages, CDA documents, or FHIR MedicationRequest resources.

4. **Laboratory Results**: Exchange laboratory results using HL7 v2.x ORU messages, CDA documents, or FHIR Observation resources.

5. **Referrals**: Exchange referral information using HL7 v2.x REF messages, CDA documents, or FHIR ServiceRequest resources.

### Hospital Information System Integration

1. **Admission, Discharge, Transfer**: Exchange ADT information using HL7 v2.x ADT messages or FHIR Encounter resources.

2. **Order Management**: Exchange order information using HL7 v2.x ORM messages or FHIR ServiceRequest resources.

3. **Result Reporting**: Exchange result information using HL7 v2.x ORU messages or FHIR Observation and DiagnosticReport resources.

4. **Medication Administration**: Exchange medication administration information using HL7 v2.x RAS messages or FHIR MedicationAdministration resources.

5. **Discharge Summaries**: Exchange discharge summary information using CDA documents or FHIR Composition resources.

### Health Information Exchange

1. **Patient Identity Management**: Exchange patient identity information using HL7 v2.x ADT messages, PIX/PDQ transactions, or FHIR Patient resources.

2. **Document Exchange**: Exchange clinical documents using XDS transactions, CDA documents, or FHIR DocumentReference resources.

3. **Query for Documents**: Query for clinical documents using XDS transactions or FHIR search operations.

4. **Notification**: Notify systems of new or updated information using HL7 v2.x messages, FHIR Subscriptions, or FHIR Messaging.

5. **Consent Management**: Exchange consent information using CDA consent directives or FHIR Consent resources.

### Public Health Reporting

1. **Immunization Reporting**: Report immunization information using HL7 v2.x VXU messages or FHIR Immunization resources.

2. **Syndromic Surveillance**: Report syndromic surveillance information using HL7 v2.x ADT messages or FHIR Observation resources.

3. **Electronic Lab Reporting**: Report laboratory results for reportable conditions using HL7 v2.x ORU messages or FHIR Observation resources.

4. **Cancer Registry Reporting**: Report cancer cases using HL7 v2.x ORU messages, CDA documents, or FHIR Condition resources.

5. **Vital Records Reporting**: Report births and deaths using HL7 v2.x messages, CDA documents, or FHIR Observation resources.
