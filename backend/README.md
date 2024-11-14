# Checkpoint Website Backend

Backend API service for the Checkpoint Website.

## Prerequisites

> [!TIP]
> You can use [nvm](https://github.com/nvm-sh/nvm) to install and manage Node.js versions.  Once installed, you can use the command `nvm use` to automatically switch to the recommended engine version.

- Node.js (v18 or higher recommended)
- MongoDB (v6.0 or higher) (recommended, see the [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/))

## Setup

1. Clone the repository:

```bash
git clone https://github.com/connor-bernard/checkpoint-website.git
cd checkpoint-website-backend
```

1. Install dependencies:

```bash
npm install
```

1. Create a `.env` file in the root directory with the following variables:

> [!IMPORTANT]
> The `MONGODB_URI` variable must point to a MongoDB instance.  You can use the default value if you have a local instance running on the default port (27017) or set it to the URI of your MongoDB instance.

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/checkpoint-db
NODE_ENV=development
```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server with nodemon for hot reloading and run ESLint checks before each reload.

### Production Mode

```bash
npm start
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with hot reloading
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Run ESLint and automatically fix issues

## Project Structure

```preformatted
src/
├── index.js               # Application entry point
├── api/                   # API configuration file
    ├── index.js           # Default API router
    └── v1/                # APIv1
        ├── index.js       # APIv1 router
        ├── controllers/   # Controller actions
        ├── helpers/       # Helper functions
        ├── interfaces/    # Interface definitions
        ├── middlewares/   # Middleware functions
        ├── models/        # Database models
        ├── routes/        # APIv1 routes
        ├── services/      # External service integrations
        └── validations/   # Request validation schemas
├── config/                # Configuration files
├── db/                    # Database configuration
├── lib/                   # Library files
└── index.js               # Application entry point
```

## Dependencies

### Main Dependencies

- Express - Web framework
- Mongoose - MongoDB ODM
- Cors - Cross-origin resource sharing
- Helmet - Security middleware
- Express Validator - Request validation
- Express Rate Limit - API rate limiting
- Dotenv - Environment variable management

### Dev Dependencies

- ESLint - Code linting
- Nodemon - Development server with hot reload

## License

This project is licensed under the MIT License - see the LICENSE file for details.
