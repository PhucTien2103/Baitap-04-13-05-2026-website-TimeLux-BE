# TimeLux Backend

TimeLux Backend is a Node.js and Express API server for a luxury watch e-commerce website. The backend provides authentication, role-based authorization, user profile APIs, user management APIs, and product APIs used by the frontend storefront.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- express-validator
- nodemailer
- nodemon
- Babel

## Role Mapping

```txt
R1: Admin
R2: User / Member
R3: Moderator
```

The product storefront APIs are protected and available for authenticated users with role `R2`.

## Main Features

- User registration.
- OTP verification for registration.
- Login with access token and refresh token.
- Refresh access token.
- Logout.
- Forgot password and reset password with OTP.
- Profile API for User, Admin, and Moderator.
- User management API for Admin and Moderator flow.
- Product API for the TimeLux storefront.

## Environment Variables

Create a `.env` file based on `.env.example`.

Example:

```env
PORT=8088
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/btvn01_mongodb
ADMIN_EMAIL=admin@chatapp.com
ADMIN_PASSWORD=Admin@123
MODERATOR_EMAIL=moderator@chatapp.com
MODERATOR_PASSWORD=Mod@123
JWT_SECRET=your_access_token_secret
JWT_TEMP_SECRET=your_temp_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Default backend URL:

```txt
http://localhost:8088
```

## Seed Data

The project includes a seed script for creating sample users.

```bash
npx babel-node src/seedData.js
```

Sample accounts created by the seed script:

```txt
Admin:     configured by ADMIN_EMAIL and ADMIN_PASSWORD in .env
Moderator: configured by MODERATOR_EMAIL and MODERATOR_PASSWORD in .env
User:      user@chatapp.com / User@123
User:      khang@chatapp.com / Khang@123
Inactive:  inactive@chatapp.com / Inactive@123
```

Passwords are hashed before being stored in MongoDB.

## Authentication APIs

```txt
POST /api/register
POST /api/verify-otp
POST /api/forgot-password
POST /api/reset-password
POST /api/login
POST /api/refresh-token
POST /api/logout
```

Successful login returns:

```txt
accessToken
refreshToken
user
```

Protected APIs require:

```txt
Authorization: Bearer <accessToken>
```

## Profile APIs

```txt
GET /user/profile
GET /admin/profile
GET /moderator/profile
```

## User Management APIs

```txt
GET    /admin/users
POST   /admin/users
PUT    /admin/users/:id
DELETE /admin/users/:id
```

Access control:

- `R1` has full user management permissions.
- `R3` has limited user management permissions based on the existing middleware.

## Product APIs

```txt
GET /api/products
GET /api/products/:id
```

Product APIs use:

```js
authenticateToken
authorizeUser
```

Supported query parameters for `GET /api/products`:

```txt
search
category
maxPrice
promotionOnly
sortBy
```

Supported `sortBy` values:

```txt
newest
best-selling
price-low
price-high
```

Example:

```txt
GET /api/products?search=rose&category=Women's Watches&maxPrice=5000&promotionOnly=true&sortBy=price-low
```

Product detail example:

```txt
GET /api/products/watch-1
```

## Product Data Model

Product schema:

```txt
id
name
category
brand
price
salePrice
discount
stock
sold
isPromotion
isNewest
isBestSeller
imageKeys
description
specs
```

The product model is defined in:

```txt
src/models/product.js
```

If the `products` collection is empty, the product controller inserts initial TimeLux sample products when the product API is requested for the first time.

Product images are not stored as binary files in MongoDB. The backend stores `imageKeys`, and the frontend maps those keys to static image assets.

## Project Structure

```txt
src/server.js
```

Express server entry point.

```txt
src/config/connectDB.js
```

MongoDB connection configuration.

```txt
src/route/web.js
```

Main route registration file.

```txt
src/models/user.js
src/models/product.js
```

Mongoose models.

```txt
src/controllers/product.controller.js
```

Product API controller.

```txt
src/middleware/loginMiddleware.js
```

Authentication and role authorization middleware.
