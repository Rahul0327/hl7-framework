# HL7 Framework Master Data Model

## 1. Introduction

This master data model provides a comprehensive framework for healthcare data interoperability aligned with HL7 standards. It integrates concepts from HL7 v2.x, HL7 v3 (including the Reference Information Model), Clinical Document Architecture (CDA), and Fast Healthcare Interoperability Resources (FHIR) to create a unified approach to healthcare data representation and exchange.

The model is designed to support:
- Semantic interoperability between healthcare systems
- Consistent data representation across different healthcare domains
- Flexible implementation options based on organizational needs
- Compliance with healthcare data exchange standards
- Efficient integration of clinical and administrative workflows

## 2. Core Entities and Relationships

### 2.1 Primary Entities

#### 2.1.1 Person
- **Description**: Base entity for all human actors in the healthcare system
- **Key Attributes**:
  - Person ID (identifier)
  - Name (structured with components: given, family, prefix, suffix)
  - Date of Birth
  - Gender
  - Address (structured with components)
  - Contact Information (telecom)
  - Language Preferences
  - Marital Status
- **HL7 Mappings**:
  - HL7 v2: PID segment
  - HL7 v3: Person class in RIM
  - FHIR: Person resource

#### 2.1.2 Patient
- **Description**: A person receiving healthcare services
- **Extends**: Person
- **Key Attributes**:
  - Patient ID (identifier)
  - Medical Record Number
  - Insurance Information
  - Primary Care Provider
  - Patient Status
  - Special Needs
  - Advance Directives
- **HL7 Mappings**:
  - HL7 v2: PID, PD1 segments
  - HL7 v3: Patient class in RIM
  - FHIR: Patient resource

#### 2.1.3 Practitioner
- **Description**: A person with a formal responsibility in the healthcare process
- **Extends**: Person
- **Key Attributes**:
  - Practitioner ID (identifier)
  - Qualifications
  - Specialties
  - Roles
  - Organization Affiliations
  - License Numbers
- **HL7 Mappings**:
  - HL7 v2: PRD, STF segments
  - HL7 v3: Provider class in RIM
  - FHIR: Practitioner resource

#### 2.1.4 Organization
- **Description**: A formally recognized group in the healthcare system
- **Key Attributes**:
  - Organization ID (identifier)
  - Name
  - Type
  - Address
  - Contact Information
  - Parent Organization
- **HL7 Mappings**:
  - HL7 v2: ORG segment
  - HL7 v3: Organization class in RIM
  - FHIR: Organization resource

#### 2.1.5 Location
- **Description**: Physical place where healthcare services are provided
- **Key Attributes**:
  - Location ID (identifier)
  - Name
  - Type
  - Address
  - Managing Organization
  - Status
  - Operational Status
- **HL7 Mappings**:
  - HL7 v2: LOC segment
  - HL7 v3: Place class in RIM
  - FHIR: Location resource

### 2.2 Clinical Entities

#### 2.2.1 Encounter
- **Description**: An interaction between a patient and healthcare provider(s)
- **Key Attributes**:
  - Encounter ID (identifier)
  - Status
  - Class (inpatient, outpatient, emergency)
  - Type
  - Service Type
  - Priority
  - Subject (Patient)
  - Participants (Practitioners)
  - Period (start and end time)
  - Length
  - Reason
  - Diagnosis
  - Location
- **HL7 Mappings**:
  - HL7 v2: PV1, PV2 segments
  - HL7 v3: Encounter class in RIM
  - FHIR: Encounter resource

#### 2.2.2 Condition
- **Description**: Clinical conditions, problems, diagnoses, or other health matters
- **Key Attributes**:
  - Condition ID (identifier)
  - Subject (Patient)
  - Encounter
  - Asserter (Practitioner)
  - Date Recorded
  - Code (diagnosis/problem code)
  - Category (problem-list-item, encounter-diagnosis)
  - Clinical Status
  - Verification Status
  - Severity
  - Onset (date/time)
  - Abatement (date/time)
  - Stage
  - Evidence
- **HL7 Mappings**:
  - HL7 v2: DG1 segment
  - HL7 v3: Observation class in RIM
  - FHIR: Condition resource

#### 2.2.3 Observation
- **Description**: Measurements and assertions about a patient
- **Key Attributes**:
  - Observation ID (identifier)
  - Status
  - Category
  - Code (what was observed)
  - Subject (Patient)
  - Encounter
  - Effective Time
  - Issued (date/time result was made available)
  - Performer (Practitioner)
  - Value (result)
  - Interpretation
  - Reference Range
  - Method
  - Device
  - Component (for panel/battery observations)
- **HL7 Mappings**:
  - HL7 v2: OBX, OBR segments
  - HL7 v3: Observation class in RIM
  - FHIR: Observation resource

#### 2.2.4 Procedure
- **Description**: Actions performed on or for a patient
- **Key Attributes**:
  - Procedure ID (identifier)
  - Status
  - Code (procedure code)
  - Subject (Patient)
  - Encounter
  - Performed (date/time or period)
  - Performer (Practitioner)
  - Location
  - Reason
  - Outcome
  - Report
  - Complication
  - Follow Up
- **HL7 Mappings**:
  - HL7 v2: PR1 segment
  - HL7 v3: Procedure class in RIM
  - FHIR: Procedure resource

#### 2.2.5 Medication
- **Description**: Definition and details of a medication
- **Key Attributes**:
  - Medication ID (identifier)
  - Code
  - Status
  - Manufacturer
  - Form
  - Amount
  - Ingredient
  - Batch Number
  - Expiration Date
- **HL7 Mappings**:
  - HL7 v2: RXD, RXE segments
  - HL7 v3: Material class in RIM
  - FHIR: Medication resource

#### 2.2.6 MedicationRequest
- **Description**: Ordering of medication for a patient
- **Key Attributes**:
  - Request ID (identifier)
  - Status
  - Intent
  - Medication
  - Subject (Patient)
  - Encounter
  - Authored On
  - Requester (Practitioner)
  - Reason
  - Dosage Instructions
  - Dispense Request
  - Substitution
  - Prior Prescription
- **HL7 Mappings**:
  - HL7 v2: RXE, RXO segments
  - HL7 v3: SubstanceAdministration class in RIM
  - FHIR: MedicationRequest resource

#### 2.2.7 AllergyIntolerance
- **Description**: Risk of harmful or undesirable reactions to substances
- **Key Attributes**:
  - Allergy ID (identifier)
  - Clinical Status
  - Verification Status
  - Type (allergy, intolerance)
  - Category (food, medication, environment, biologic)
  - Criticality
  - Code (substance/product)
  - Patient
  - Onset
  - Recorder (Practitioner)
  - Asserter
  - Last Occurrence
  - Note
  - Reaction (manifestation, severity, exposure route)
- **HL7 Mappings**:
  - HL7 v2: AL1, IAM segments
  - HL7 v3: Observation class in RIM
  - FHIR: AllergyIntolerance resource

#### 2.2.8 CarePlan
- **Description**: Healthcare plan for a patient or group
- **Key Attributes**:
  - CarePlan ID (identifier)
  - Status
  - Intent
  - Category
  - Title
  - Description
  - Subject (Patient)
  - Encounter
  - Period
  - Created
  - Author (Practitioner)
  - Care Team
  - Addresses (Conditions)
  - Goal
  - Activity
- **HL7 Mappings**:
  - HL7 v2: No direct mapping
  - HL7 v3: Act class in RIM
  - FHIR: CarePlan resource

### 2.3 Administrative Entities

#### 2.3.1 Coverage
- **Description**: Insurance or payment information
- **Key Attributes**:
  - Coverage ID (identifier)
  - Status
  - Type
  - Payer (Organization)
  - Beneficiary (Patient)
  - Dependent
  - Relationship to Subscriber
  - Period
  - Payor
  - Class
  - Order
  - Network
  - Cost to Beneficiary
  - Subrogation
  - Contract
- **HL7 Mappings**:
  - HL7 v2: IN1, IN2, IN3 segments
  - HL7 v3: Coverage class in RIM
  - FHIR: Coverage resource

#### 2.3.2 Claim
- **Description**: Request for reimbursement for healthcare services
- **Key Attributes**:
  - Claim ID (identifier)
  - Status
  - Type
  - Use
  - Patient
  - Billable Period
  - Created
  - Enterer
  - Insurer
  - Provider
  - Priority
  - Funders Order
  - Related Claims
  - Prescription
  - Original Prescription
  - Payee
  - Referral
  - Facility
  - Care Team
  - Information
  - Diagnosis
  - Procedure
  - Insurance
  - Accident
  - Item
  - Total
- **HL7 Mappings**:
  - HL7 v2: No direct mapping
  - HL7 v3: FinancialTransaction class in RIM
  - FHIR: Claim resource

#### 2.3.3 Appointment
- **Description**: Booking of a healthcare event
- **Key Attributes**:
  - Appointment ID (identifier)
  - Status
  - Service Category
  - Service Type
  - Specialty
  - Appointment Type
  - Reason
  - Priority
  - Description
  - Start
  - End
  - Created
  - Comment
  - Participant (Patient, Practitioner)
  - Requested Period
- **HL7 Mappings**:
  - HL7 v2: SCH segment
  - HL7 v3: Act class in RIM
  - FHIR: Appointment resource

### 2.4 Document Entities

#### 2.4.1 DocumentReference
- **Description**: Reference to a clinical document
- **Key Attributes**:
  - Document ID (identifier)
  - Status
  - Document Status
  - Type
  - Category
  - Subject (Patient)
  - Date
  - Author (Practitioner)
  - Authenticator
  - Custodian (Organization)
  - Related To
  - Description
  - Security Label
  - Content (attachment, format, language)
  - Context (encounter, event, period, facility)
- **HL7 Mappings**:
  - HL7 v2: No direct mapping
  - HL7 v3: Document class in RIM, CDA document
  - FHIR: DocumentReference resource

#### 2.4.2 DiagnosticReport
- **Description**: Findings and interpretation of diagnostic tests
- **Key Attributes**:
  - Report ID (identifier)
  - Status
  - Category
  - Code
  - Subject (Patient)
  - Encounter
  - Effective (date/time)
  - Issued
  - Performer (Practitioner)
  - Result (Observation)
  - Imaging Study
  - Media
  - Conclusion
  - Conclusion Code
  - Presented Form
- **HL7 Mappings**:
  - HL7 v2: OBR segment
  - HL7 v3: Observation class in RIM
  - FHIR: DiagnosticReport resource

## 3. Data Types

### 3.1 Primitive Types
- **string**: A sequence of Unicode characters
- **boolean**: true or false
- **integer**: A whole number
- **decimal**: A rational number
- **uri**: Uniform Resource Identifier
- **url**: Uniform Resource Locator
- **canonical**: Canonical URL
- **base64Binary**: Base64 encoded content
- **instant**: Precise timestamp
- **date**: Calendar date
- **dateTime**: Date and time with timezone
- **time**: Time of day
- **code**: Restricted string from a defined set of values

### 3.2 Complex Types
- **Identifier**: Business identifier for an entity
  - Use
  - Type
  - System
  - Value
  - Period
  - Assigner

- **HumanName**: Name of a human
  - Use
  - Text
  - Family
  - Given
  - Prefix
  - Suffix
  - Period

- **Address**: Mailing or physical address
  - Use
  - Type
  - Text
  - Line
  - City
  - District
  - State
  - PostalCode
  - Country
  - Period

- **ContactPoint**: Contact details
  - System (phone, fax, email, etc.)
  - Value
  - Use (home, work, mobile, etc.)
  - Rank
  - Period

- **CodeableConcept**: Concept with coding from a terminology
  - Coding
  - Text

- **Coding**: Reference to a code in a terminology system
  - System
  - Version
  - Code
  - Display
  - UserSelected

- **Quantity**: A measured amount
  - Value
  - Comparator
  - Unit
  - System
  - Code

- **Period**: Time range
  - Start
  - End

- **Ratio**: Relationship between two quantities
  - Numerator
  - Denominator

- **Reference**: Reference to another resource
  - Reference
  - Type
  - Identifier
  - Display

- **Attachment**: Content referenced or embedded
  - ContentType
  - Language
  - Data
  - Url
  - Size
  - Hash
  - Title
  - Creation

## 4. Terminology Bindings

### 4.1 Code Systems
- **SNOMED CT**: Clinical terminology for clinical documentation and reporting
- **LOINC**: Logical Observation Identifiers Names and Codes for laboratory and clinical observations
- **RxNorm**: Normalized names for clinical drugs
- **ICD-10**: International Classification of Diseases, 10th Revision
- **CPT/HCPCS**: Procedure and service codes
- **UCUM**: Unified Code for Units of Measure

### 4.2 Value Sets
- **Administrative Gender**: Male, Female, Other, Unknown
- **Marital Status**: Married, Single, Divorced, Widowed, etc.
- **Contact Relationship**: Emergency Contact, Next of Kin, etc.
- **Encounter Type**: Inpatient, Outpatient, Emergency, etc.
- **Condition Category**: Problem List Item, Encounter Diagnosis, etc.
- **Observation Status**: Registered, Preliminary, Final, Amended, etc.
- **Medication Status**: Active, Completed, Entered in Error, etc.
- **Allergy Severity**: Mild, Moderate, Severe, etc.

## 5. Message Patterns

### 5.1 HL7 v2.x Message Patterns
- **ADT**: Admit, Discharge, Transfer
- **ORM**: Order Message
- **ORU**: Observation Result
- **SIU**: Scheduling Information Unsolicited
- **MDM**: Medical Document Management
- **DFT**: Detailed Financial Transaction
- **BAR**: Billing Account Record

### 5.2 FHIR Interaction Patterns
- **RESTful CRUD**: Create, Read, Update, Delete operations
- **Search**: Finding resources based on search parameters
- **Transactions**: Atomic updates of multiple resources
- **Operations**: Named operations beyond basic CRUD
- **Messaging**: Message-based exchange
- **Documents**: Document-based exchange
- **Subscriptions**: Event-based notifications

## 6. Implementation Considerations

### 6.1 Security and Privacy
- **Authentication**: Verification of identity
- **Authorization**: Permission to access resources
- **Audit Logging**: Recording of access and changes
- **Data Segmentation**: Controlling access to sensitive data
- **Consent Management**: Managing patient consent for data sharing

### 6.2 Interoperability
- **Syntactic Interoperability**: Ability to exchange data
- **Semantic Interoperability**: Ability to understand exchanged data
- **Transport Protocols**: HTTP, MLLP, SMTP, etc.
- **Content Encoding**: XML, JSON, etc.
- **Profiles and Implementation Guides**: Constraints for specific use cases

### 6.3 Extensibility
- **Extensions**: Adding additional data elements
- **Profiles**: Constraining resources for specific use cases
- **Custom Resources**: Creating new resource types
- **Custom Operations**: Defining specialized operations

## 7. Mapping to HL7 Standards

### 7.1 HL7 v2.x Mapping
- **Segments**: PID, PV1, OBR, OBX, etc.
- **Message Types**: ADT, ORM, ORU, etc.
- **Trigger Events**: A01, A03, A08, etc.
- **Z-Segments**: Custom extensions

### 7.2 HL7 v3 RIM Mapping
- **Act**: Procedures, observations, encounters
- **Entity**: Patients, practitioners, organizations
- **Role**: Patient roles, provider roles
- **Participation**: Relationships between acts and roles
- **ActRelationship**: Relationships between acts

### 7.3 FHIR Mapping
- **Resources**: Patient, Practitioner, Observation, etc.
- **Extensions**: Additional data elements
- **Profiles**: Constraints for specific use cases
- **Operations**: Named operations beyond basic CRUD
- **Search Parameters**: Parameters for finding resources

### 7.4 CDA Mapping
- **CDA Header**: Document metadata
- **CDA Body**: Clinical content
- **Sections**: Organized clinical information
- **Entries**: Structured clinical data
- **Templates**: Reusable patterns for documents
