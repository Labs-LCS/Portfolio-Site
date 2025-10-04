
# Current Project: backend implementation of my PDF Editor (prototype) website

## Motivation

This study project seeks to migrate some of the heavy logic currently handled by my PDF Editor site to the backend (the original project was client-side only, with the primary objective of addressing a security concern I encountered during my legal career).

Despite utilizing a highly efficient library (MuPDF + WASM) for frontend PDF processing, significant processing remains. I intend to continue employ the same library from Artiflex (its Python version), as it is among the most exceptional open-source libraries in this domain, if not the most.

## Brief Description
The new architecture features a Python backend powered by the **FastAPI** framework, chosen for its high performance and native support for asynchronous tasks. Heavy operations will be managed as background jobs, allowing the user to continue interacting with the site without waiting. The flow is simple: the client uploads a file, the server immediately provides a job ID for tracking, and the frontend polls for a status update until the processed file is ready for download.

## **Implementation Plan – PDF Processing Backend**

The implementation of this project will proceed as follows:

### **1. Environment and Initial Setup**
* [ ] Configure the Firebase Admin SDK with the project credentials (JSON file).
* …

### **2. Core API and Endpoints**
* [ ] Implement the base structure of endpoints in FastAPI.
* [x] Create the POST endpoint to receive files and initiate tasks.
* [ ] Create the GET endpoint to check progress.
* [x] Create the GET endpoint to download the final file.
* …

### **3. Authentication and Security**
* [ ] Logic to validate all requests, even if the user is logged in.
* [ ] Protect all API endpoints with the authentication dependency.
* …

### **4. State and File Management**
* [ ] Implement an in-memory dictionary to manage task states.
* [x] Create logic to save uploaded files in a temporary directory with unique names.
* [ ] Implement logic to clean up temporary files (input/output) after a successful download.
* …

### **5. Business Logic**
* [ ] Create a processing function to **merge/concatenate** documents.
* [ ] Create a processing function to **rotate** pages.
* [ ] Create a processing function to **delete** pages/documents.
* [ ] Create a processing function for **OCR**.
* [ ] Integrate the processing functions with FastAPI BackgroundTasks.
* [ ] Implement error handling.
* …

### **6. Frontend Integration**
* [x] Modify the frontend to upload files to the new endpoint.
* [ ] Implement polling logic in the frontend to periodically check processing status.
* [ ] Ensure that the Firebase authentication token is sent in all backend requests, even after log in (Zero Trust).
* …
