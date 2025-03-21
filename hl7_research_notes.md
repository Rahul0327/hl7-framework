# HL7 Framework Research Notes

## Overview of HL7 Standards

Health Level Seven (HL7) is a set of international standards for the transfer of clinical and administrative health data between applications with the aim to improve patient outcomes and health system performance. The HL7 standards focus on the application layer, which is "layer 7" in the Open Systems Interconnection model.

## Primary HL7 Standards

### HL7 Version 2.x
- An interoperability specification for health and medical transactions
- Uses a non-XML encoding syntax based on segments and delimiters
- Widely implemented and very successful due to its flexibility
- Contains many optional data elements and segments
- Example message segments: MSH (header), PID (Patient Identity), PV1 (Patient Visit), OBX (Observation)
- Supported by every major health informatics vendor in the United States

### HL7 Version 3
- Based on the Reference Information Model (RIM)
- Uses a model-driven methodology that produces messages and electronic documents expressed in XML syntax
- Built around subject domains with storyboard descriptions, trigger events, interaction designs
- Includes domain object models derived from the RIM, hierarchical message descriptors (HMDs)
- Focuses on semantic interoperability by specifying information in a complete clinical context
- Implemented in countries like UK, Netherlands, Canada, Mexico, Germany, and Croatia

### Clinical Document Architecture (CDA)
- A document markup standard that specifies the structure and semantics of "clinical documents"
- Based on HL7 Version 3
- Defines a clinical document as having six characteristics:
  1. Persistence
  2. Stewardship
  3. Potential for authentication
  4. Context
  5. Wholeness
  6. Human readability
- Can contain any type of clinical content (Discharge Summary, Imaging Report, Admission & Physical, etc.)
- Popular for inter-enterprise information exchange (HIE)
- Supports the exchange of clinical documents between those involved in patient care
- Supports re-use of clinical data for public health reporting, quality monitoring, patient safety, and clinical trials

### Fast Healthcare Interoperability Resources (FHIR)
- A modern API-focused standard for healthcare data exchange
- Leverages modern web technologies such as RESTful APIs
- Enables a more connected health ecosystem that strengthens health data interoperability
- Supports innovative applications and promotes improved health outcomes
- Designed to enable health data, including clinical and administrative data, to be quickly and efficiently exchanged
- Organized into levels:
  - Level 1: Basic framework (Foundation, Datatypes, Extensions)
  - Level 2: Implementation support (Security, Conformance, Terminology, Exchange)
  - Level 3: Real-world healthcare concepts (Patient, Practitioner, Organization, etc.)
  - Level 4: Healthcare process data (Clinical, Diagnostics, Medications, Workflow, Financial)
  - Level 5: Reasoning about healthcare process (Clinical Reasoning, Medication Definition)

## Key Data Components

### Administrative Data
- Patient demographics (name, DOB, gender, address, contact information)
- Provider information (practitioners, organizations, locations)
- Healthcare service details
- Care team composition
- Encounter/visit information

### Clinical Data
- Problems/conditions
- Allergies and intolerances
- Procedures
- Medications
- Immunizations
- Vital signs and observations
- Diagnostic reports
- Care plans and goals
- Family history
- Risk assessments

### Financial Data
- Claims
- Coverage
- Billing accounts
- Invoices
- Explanation of benefits

### Workflow Data
- Appointments
- Schedules
- Tasks
- Referrals
- Care coordination

### Common Data Types
- Identifiers
- Codes and terminology
- Quantities and measurements
- Dates and times
- Text and narratives
- References to other resources
- Extensions for additional data

## Message Structures
- HL7 v2.x: Segment-based messages with delimiters
- HL7 v3: XML-based messages derived from RIM
- FHIR: JSON or XML resources with RESTful API interactions

## Interoperability Considerations
- Semantic interoperability: Ensuring systems share the meaning of exchanged information
- Syntactic interoperability: Ensuring systems can parse and process the data format
- Transport protocols: Methods for transmitting messages between systems
- Security and privacy: Protecting sensitive health information during exchange
- Terminology bindings: Using standard code systems for consistent interpretation
