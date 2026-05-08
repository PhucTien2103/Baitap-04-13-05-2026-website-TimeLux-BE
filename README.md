Database name: btvn01_mongodb           ;           
Connection String: mongodb://localhost:27017/btvn01_mongodb

http://localhost:8088/crud          ;           
http://localhost:8088/get-crud

Trang Đăng ký (Register Page): http://localhost:8088/register-page

Trang Xác thực OTP đăng ký: http://localhost:8088/verify-otp-page

Trang Quên mật khẩu: http://localhost:8088/forgot-password-page

Trang Nhập OTP và đặt lại mật khẩu: http://localhost:8088/reset-password-page

Luồng quên mật khẩu:
1. Truy cập http://localhost:8088/forgot-password-page
2. Nhập email đã đăng ký để nhận mã OTP.
3. Sau khi gửi thành công, hệ thống chuyển sang http://localhost:8088/reset-password-page
4. Nhập OTP nhận được qua email và mật khẩu mới để đặt lại mật khẩu.

Các API xử lý phía sau:
- POST /api/forgot-password
- POST /api/reset-password


Ảnh kết quả trong MongoDB: /screenshots/mongodb_compass_result.jpg
