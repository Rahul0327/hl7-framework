# HL7 Framework Master Data Model

A comprehensive approach to healthcare interoperability documentation website built with Next.js.

## Overview

This website provides comprehensive documentation for the HL7 Framework Master Data Model, a unified approach to healthcare data representation and exchange that integrates concepts from multiple HL7 standards including HL7 v2.x, HL7 v3 Reference Information Model (RIM), Clinical Document Architecture (CDA), and Fast Healthcare Interoperability Resources (FHIR).

## Features

- Comprehensive documentation of HL7 standards
- Detailed data model with entity relationships
- Mappings between different HL7 standards
- Implementation guidance
- Validation information
- Password protection for secure access
- Responsive design for all devices
- Search functionality

## Authentication

The site is protected with HTTP Basic Authentication. The middleware.js file contains the authentication logic.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/hl7-framework.git
cd hl7-framework
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push this repository to GitHub
2. Import the project into Vercel
3. Vercel will detect Next.js and configure the build settings automatically
4. Your site will be deployed with a URL like `your-project.vercel.app`

### Other Hosting Options

You can also deploy this site to any platform that supports Node.js applications:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional VPS with Nginx

## License

This project is licensed under the MIT License - see the LICENSE file for details.
