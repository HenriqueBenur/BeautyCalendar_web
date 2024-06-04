# Beauty Calendar Project

## Overview

The Beauty Calendar Project is a web application designed to facilitate appointment scheduling for beauty salons. This project is built using a React frontend and a Flask backend. 

## Table of Contents

1. [Backend Setup](#backend-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Server](#running-the-server)
2. [Frontend Setup](#frontend-setup)
    - [Installation](#installation-1)
    - [Running the Development Server](#running-the-development-server)
3. [Configuration](#configuration)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## Backend Setup

### Prerequisites

- Python 3.9 or higher
- pip (Python package installer)
- virtualenv (optional, but recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/beauty-calendar-project.git
   cd beauty-calendar-project/backend

2. **Create a virtual environment:**
   ```sh
   python3 -m venv venv

3. **Activate the virtual environment:**
   - On Windows:
      ```sh
      venv\Scripts\activate
   - On macOS/Linux:
      ```sh
      source venv/bin/activate
4. **Install the required dependencies:**
   ```sh
   pip install -r requirements.txt
### Running the Server
1. *Start the Flask server:*
   ```sh
   python app.py
   ````
   By default, the server will run on http://0.0.0.0:5000.
### Backend API Endpoints
- `GET /api/example` - Returns a sample message to ensure the backend is working.