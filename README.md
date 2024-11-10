"# devsecops-sujet4" 
To add the Django backend information to your `README.md`, you can update the **Description**, **Installation**, and **Usage** sections to include setup steps for the backend. Here's an example of how you might structure it:

---

## Description

This project is a frontend interface for generating, editing, and managing AI-generated images, built with Angular. It communicates with a Django backend to handle image generation, user authentication, and data storage. The frontend provides tools for users to generate images from prompts, edit them, and save them to their galleries.

## Installation

### Frontend (Angular)
1. Clone the frontend repository:
    ```bash
    git clone
    cd djangofront
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variables in `.env`.
4. Run the frontend project:
    ```bash
    ng serve
    ```

### Backend (Django)
1. Clone the backend repository:
    ```bash
    
    cd auth
    ```
2. Set up a Python virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # For Linux/MacOS
    venv\Scripts\activate  # For Windows
    ```
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Set up your database:
    - If using SQLite, it's already configured.
    - For other databases, modify the `DATABASES` setting in `settings.py`.
5. Run database migrations:
    ```bash
    python manage.py migrate
    ```
6. Create a superuser to access the Django admin:
    ```bash
    python manage.py createsuperuser
    ```
7. Run the Django backend:
    ```bash
    python manage.py runserver
    ```

## Usage

1. **Frontend (Angular)**: Open your browser and go to `http://localhost:4200` to access the frontend.
2. **Backend (Django)**: The backend will be running at `http://localhost:8000`.
3. Register or log in to start using the app.
4. Generate images by entering prompts, edit them, and save your favorites.
5. Admin users can manage data through the Django admin at `http://localhost:8000/admin`.

## Features
- **Frontend**:
    - AI-based image generation
    - Various editing tools (background removal, resizing, etc.)
    - Save images to gallery
    - Share images with others
- **Backend**:
    - User authentication (registration, login, JWT token management)
    - Image generation API
    - Gallery management

## Contributing
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---

This structure includes both frontend and backend installation steps, usage instructions, and other details to ensure users know how to set up and work with both parts of the project.