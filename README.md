# ImageVerse - Generate, Share, and Download Infinite Imagination!

ImageVerse is an innovative full-stack web application designed for generating AI-based images from user-provided prompts. It also allows users to share these generated images within the ImageVerse Community.

## Features
- Users can provide prompts for AI-based image generation.
- Users can share the generated images within the ImageVerse Community.
- Display of shared images in a community showcase along with user information and prompts.
- Users have the ability to download images from the community showcase.
- The application includes a random prompt generator for more creative exploration.

## Tech Stack
- Frontend: React
- Backend: NodeJS, Express
- Database: MongoDB
- AI Image Generation: OpenAI
- Image Management: Cloudinary

## Setup and Installation

To run this project, you need to follow these steps:

### 1. Clone the Repository
Open your terminal and run the following command:

```bash
git clone https://github.com/shikharrajat/ImageVerse.git
```
Navigate into the cloned repository:

```bash
cd ImageVerse
```

### 2. Install the Dependencies
Install the required dependencies by running:

```bash
npm install
```
### 3. Set up Environment Variables
Create a `.env` file in the root of your project. Fill it with necessary variables:

```
OPENAI_API_KEY = your_openai_api_key
CLOUDINARY_API_KEY = your_cloudinary_api_key
CLOUDINARY_API_SECRET = your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
MONGODB_URI = your_mongodb_uri
```

### 4. Start the Application
Now, you can start the application by running:

```bash
npm start
```

The server will start running on the specified port (default: 3000).

## Contributions
Contributions, issues, and feature requests are welcome!

## License
This project is licensed under the MIT License. See `LICENSE` for more information.

## Acknowledgements
Thanks to OpenAI for providing the API used for image generation and to Cloudinary for providing the service for image management.
