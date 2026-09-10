# Trưa Nay Ăn Gì 🍜

**Tiếng Việt** · [English](README.en.md)

Chưa biết ăn gì trưa nay? Mở hòm, quay món và để bữa trưa có chút bất ngờ.

Đây là phiên bản cộng đồng chạy trên máy của bạn, không cần đăng nhập hay backend. Bạn có thể lọc món, thêm danh sách món riêng và lưu sở thích ngay trong trình duyệt.

## Chạy trên máy

Cần **Node.js 22.12+** và phiên bản **pnpm** ghi trong [package.json](package.json).

```sh
git clone https://github.com/VHN-DEV/truanayangi.git
cd truanayangi
pnpm install --frozen-lockfile
pnpm start
```

Mở [127.0.0.1:5173](http://127.0.0.1:5173). Không cần tạo `.env` hay cấu hình dịch vụ bên ngoài. Nếu cổng đang bận, chạy `pnpm start --port 5188`.

Các lệnh phát triển:

```sh
pnpm test       # Chạy kiểm tra
pnpm build      # Tạo bản build
pnpm preview    # Xem bản build tại http://127.0.0.1:4173
```

Máy chủ chỉ lắng nghe trên `127.0.0.1`. Sau khi cài dependencies, ứng dụng tải tài nguyên từ máy; các liên kết bên ngoài chỉ mở khi bạn bấm vào.

## Dữ liệu của bạn

Sở thích, danh sách món và lượt quay tự lưu bằng cookie trong trình duyệt hiện tại. Xóa cookie sẽ đặt lại dữ liệu; dữ liệu không đồng bộ giữa các thiết bị. Lượt quay hiển thị là của riêng trình duyệt này.

Nếu cookie bị chặn hoặc danh sách món quá lớn, ứng dụng sẽ báo chưa lưu.

