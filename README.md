# Product Management Application

A simple product management application with both client and admin interfaces, built with Node.js, Express, MongoDB, and Pug template engine.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Pug** - Template engine
- **Bootstrap** - CSS framework for UI
- **dotenv** - Environment variable management

## Key Features

- Client-side product listing page
- Admin dashboard for product management
- Product pagination on both client and admin pages
- Advanced filtering, search, and product status display
- MongoDB integration for persistent data storage
- Responsive user interface

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
```

2. Navigate to the project directory:

```bash
cd BackEnd-Ecom
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and configure environment variables:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/yourDatabaseName
PATH_ADMIN=/admin
```

5. Start the application:

```bash
npm start
```

6. Open your browser and access:

- Client: `http://localhost:3000/`
- Admin: `http://localhost:3000/admin/dashboard`

## Project Structure

- `index.js` - Application entry point
- `config/` - Database and system configuration
- `routes/` - Route definitions for client and admin sections
- `controller/` - Business logic for routes
- `models/` - Mongoose schema definitions
- `views/` - Pug templates for client and admin sections
- `public/` - Static assets (CSS, JavaScript, images)
- `helper/` - Utility functions for filtering and searching

## Main Routes

**Client Routes:**
- `/` - Home page
- `/products` - Product listing page

**Admin Routes** (based on `PATH_ADMIN` in `.env`):
- `/admin/dashboard` - Admin dashboard
- `/admin/products` - Product management page

## Notes

- `app.locals.prefixAdmin` stores the admin path prefix from `config/system.js`
- Client controllers implement `limit` and `skip` parameters for pagination
- Pug templates are organized in `views/client` and `views/admin` directories
- Product filtering and search are handled in the `helper/` directory

## Future Enhancements

- Add create, update, and delete product functionality in admin panel
- Implement user authentication for admin access
- Enhance UI/UX and pagination experience
- Add product image upload functionality
- Implement product categories and detailed product pages
