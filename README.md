## Overview

Cloud Analytics Dashboard is a comprehensive web-based application designed to streamline the process of Cloud log data management and Visual Improvement with help of Charts.

# VIDEO LINK BELOW

<a href="https://www.loom.com/share/89abbe06c4f64e278b09160374017f9f?sid=7eb08e8e-2114-483c-bf2e-ba323f78318b"><strong>Click Here</strong></a>

## Components of the project

Frontend

    Tech Stack: React, Material-UI, React Charts, Nivo, Apex-Charts
    Responsibilities: Cloud Analytics UI and User interface for submitting and querying Cloud log data.

Backend

    Tech Stack: Node.js, Express, MongoDB
    Responsibilities: API endpoints for data ingestion and querying. It interacts with the MongoDB database to store and retrieve log data.

Database

    MongoDB: Stores log data.

## System Design Overview

1. Frontend Application

   Role: for better understanding of cloud resources and Cloud Usage.

   Charts to understand how usage data at different times.
   Form for log data submission to the backend.
   Interface for querying logs with filters.
   Real-time display of ingested logs.
   UI elements for full-text search capabilities.

2. Backend Application

   Role: Handles HTTP requests, processes data, and interacts with the database.
   Technology: Node.js with Express.js and MongoDB(database).

   Features:

   ##### Log Data Ingestion Endpoint (/ingest-billing):

   -> Accepts HTTP POST requests with log data.

   -> Validates and processes data before saving it to the database.

   ##### Query Endpoint (/search):

   -> Handles GET requests with various query parameters for filtering logs.

   -> Implements full-text search using regular expressions.
   (for real-time log ingestion).

   -> Updates the frontend in real-time when new logs are ingested.

## BONUS FEATURES

### 1) Combine Multiple Filters

### 2) Utilize regular expressions for search.(For Message Input In Query Interface)

### 3) Provide real-time log ingestion and searching capabilities.

## HOW TO RUN

### Clone the repository

`git clone https://github.com/Pheewww/Cloud-Analytics-Dashboard`

### Navigate to the frontend project directory

`cd Frontend`

### Install dependencies

`npm install`

### start the frontend application

`npm run dev` or `npm start`

### Navigate to the backend project directory

`cd Backend`

### Install dependencies

`npm install`

### Start the backend server

`node server.js`

## Known Issues

known issues or limitations within the system.

    More data visual Charts can be added for diffrent data-points
    Load Balancing and Caching could have been implemented in backend
    Filtering with timestamp could have also ben implemented
