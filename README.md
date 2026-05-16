# TimeLux Backend

Backend Node.js/Express cho đồ án website bán đồng hồ TimeLux.

Project xử lý đăng ký, đăng nhập, OTP, phân quyền người dùng và API sản phẩm cho giao diện bán hàng ở Frontend.

## Công nghệ sử dụng

- Node.js
- Express
- MongoDB
- Mongoose
- JWT access token
- JWT refresh token
- bcryptjs
- express-validator
- nodemailer
- nodemon
- Babel

## Role trong hệ thống

```txt
R1: Admin
R2: User/member
R3: Moderator
```

Phần bán hàng TimeLux dành cho `R2`.

## Chức năng Backend

- Đăng ký tài khoản.
- Gửi OTP xác thực đăng ký.
- Đăng nhập.
- Cấp `accessToken` và `refreshToken`.
- Refresh token.
- Logout.
- Lấy profile theo role.
- Quản lý user cho Admin/Moderator.
- API sản phẩm:
  - Lấy danh sách sản phẩm.
  - Tìm kiếm sản phẩm.
  - Lọc theo danh mục.
  - Lọc theo giá.
  - Lọc sản phẩm khuyến mãi.
  - Sắp xếp sản phẩm.
  - Lấy chi tiết sản phẩm theo id.

## Cách chạy Backend

Mở terminal tại thư mục:

```powershell
cd C:\Users\PC\Desktop\CCNPMM\DoAnCuoiKy\website-chatting
```

Cài package nếu chưa có:

```powershell
npm install
```

Tạo file `.env` dựa theo `.env.example`.

Ví dụ:

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

Chạy server:

```powershell
npm start
```

Backend mặc định chạy tại:

```txt
http://localhost:8088
```

## Seed tài khoản mẫu

Chạy lệnh:

```powershell
npx babel-node src/seedData.js
```

Script này tạo một số user mẫu:

```txt
Admin:     lấy email/password từ .env, role R1
Moderator: lấy email/password từ .env, role R3
User:      user@chatapp.com / User@123, role R2
User:      khang@chatapp.com / Khang@123, role R2
Inactive:  inactive@chatapp.com / Inactive@123, chưa kích hoạt
```

Lưu ý: mật khẩu được hash trước khi lưu vào MongoDB.

## API xác thực

```txt
POST /api/register
POST /api/verify-otp
POST /api/forgot-password
POST /api/reset-password
POST /api/login
POST /api/refresh-token
POST /api/logout
```

Khi login thành công, Backend trả về:

```txt
accessToken
refreshToken
user
```

Frontend lưu token vào `localStorage`.

## API profile

```txt
GET /user/profile
GET /admin/profile
GET /moderator/profile
```

Các API này cần header:

```txt
Authorization: Bearer <accessToken>
```

## API quản lý user

```txt
GET    /admin/users
POST   /admin/users
PUT    /admin/users/:id
DELETE /admin/users/:id
```

Quyền:

- `R1` Admin có quyền quản lý đầy đủ.
- `R3` Moderator được xem danh sách user, nhưng bị giới hạn một số thao tác theo middleware hiện có.

## API sản phẩm TimeLux

```txt
GET /api/products
GET /api/products/:id
```

Các API này dành cho role `R2`, có middleware:

```js
authenticateToken
authorizeUser
```

Ví dụ gọi danh sách sản phẩm:

```txt
GET /api/products?search=rose&category=Women's Watches&maxPrice=5000&promotionOnly=true&sortBy=price-low
```

Query hỗ trợ:

```txt
search
category
maxPrice
promotionOnly
sortBy
```

Các giá trị `sortBy`:

```txt
newest
best-selling
price-low
price-high
```

Ví dụ gọi chi tiết:

```txt
GET /api/products/watch-1
```

## Dữ liệu sản phẩm

Model sản phẩm nằm ở:

```txt
src/models/product.js
```

Các field chính:

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

Nếu collection `products` trong MongoDB đang trống, `product.controller.js` sẽ tự insert danh sách sản phẩm mẫu lần đầu khi gọi API sản phẩm.

Ảnh không lưu trực tiếp trong MongoDB. Backend chỉ lưu `imageKeys`, Frontend map key đó thành ảnh static trong thư mục asset.

## Các file quan trọng

```txt
src/server.js
```

Khởi động Express server và kết nối route.

```txt
src/config/connectDB.js
```

Kết nối MongoDB.

```txt
src/route/web.js
```

Khai báo toàn bộ route API.

```txt
src/models/user.js
src/models/product.js
```

Schema MongoDB cho user và product.

```txt
src/controllers/product.controller.js
```

Xử lý API sản phẩm.

```txt
src/middleware/loginMiddleware.js
```

Xác thực access token và kiểm tra role.

## Luồng test bài bán hàng

1. Chạy MongoDB.
2. Chạy Backend bằng `npm start`.
3. Chạy Frontend.
4. Login bằng tài khoản `R2`.
5. Vào `/home`.
6. Frontend gọi `GET /api/products`.
7. Backend kiểm tra token và role `R2`.
8. Backend trả danh sách sản phẩm từ MongoDB.
9. Frontend hiển thị UI bán đồng hồ.
10. Bấm chi tiết sản phẩm, Frontend gọi `GET /api/products/:id`.
