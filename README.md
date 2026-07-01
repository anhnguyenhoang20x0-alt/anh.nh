# Trang hồ sơ năng lực — Nguyễn Hoàng Anh

Trang portfolio 1 trang, hiển thị mini-CV và các bằng cấp/chứng chỉ.
Không cần cài gì cả — chỉ là HTML/CSS/JS thuần, mở file `index.html` là chạy được luôn.

## Cấu trúc thư mục

```
portfolio/
├── index.html        ← khung trang (không cần sửa)
├── style.css          ← giao diện (không cần sửa)
├── script.js          ← xử lý hiển thị (không cần sửa)
├── data.js            ← ✍️ NỘI DUNG — sửa file này khi cập nhật thông tin
└── assets/
    ├── avatar.jpg      ← ảnh đại diện
    └── certs/          ← để ảnh bằng cấp / chứng chỉ / giấy khen ở đây
```

## Cách thêm bằng cấp mới (làm 2 bước)

**Bước 1:** Bỏ ảnh bằng cấp mới vào thư mục `assets/certs/`
Ví dụ: `assets/certs/chung-chi-mos.jpg`

**Bước 2:** Mở file `data.js`, tìm mục `CERTIFICATES`, thêm 1 khối như sau:

```js
{
  id: "cert-002",
  title: "Chứng chỉ Tin học MOS",
  issuer: "Microsoft",
  year: "2023",
  type: "Chứng chỉ",
  image: "assets/certs/chung-chi-mos.jpg",
},
```

Nhớ thêm dấu phẩy `,` giữa các khối nếu đã có mục khác phía trên. Lưu file, F5 lại trang là thấy ngay.

## Cách sửa thông tin mini-CV

Cũng trong `data.js`, sửa trực tiếp trong mục `PROFILE` (họ tên, chức danh, giới thiệu, email, SĐT...) và mục `SKILLS` (danh sách kỹ năng).

## Xem thử trên máy trước khi đăng

Cách đơn giản nhất: double-click file `index.html` để mở bằng trình duyệt.

(Nếu ảnh không hiện do trình duyệt chặn file local, có thể chạy lệnh sau trong thư mục này rồi mở `http://localhost:8000`:)
```
python3 -m http.server 8000
```

## Đăng lên GitHub Pages (miễn phí)

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com
2. Tạo 1 repository mới, ví dụ đặt tên `ho-so-nang-luc` — để **Public**, không cần tick gì thêm.
3. Upload toàn bộ các file/thư mục trong đây lên repo đó:
   - Vào repo vừa tạo → **Add file → Upload files**
   - Kéo thả toàn bộ nội dung thư mục `portfolio/` (bao gồm cả thư mục `assets/`) vào
   - Bấm **Commit changes**
4. Bật GitHub Pages:
   - Vào **Settings** (của repo) → **Pages** (menu bên trái)
   - Mục **Source**, chọn **Deploy from a branch**
   - Branch chọn `main`, thư mục chọn `/ (root)` → **Save**
5. Đợi khoảng 1–2 phút, trang sẽ có địa chỉ dạng:
   `https://<ten-tai-khoan-github>.github.io/<ten-repo>/`
   (GitHub sẽ hiện link này ngay trong mục Pages sau khi build xong)

## Cập nhật sau khi đã đăng lên

Mỗi lần thêm bằng cấp mới:
1. Sửa `data.js` + thêm ảnh vào `assets/certs/` như hướng dẫn ở trên (làm trên máy)
2. Vào lại repo trên GitHub → **Add file → Upload files** → kéo thả đúng các file đã thay đổi (`data.js` và ảnh mới) → **Commit changes**
3. Trang sẽ tự cập nhật sau khoảng 1 phút, không cần làm lại bước Bật Pages.

> Mẹo: nếu dùng nhiều, bạn có thể cài **GitHub Desktop** (ứng dụng có giao diện, không cần dòng lệnh) để việc upload/cập nhật nhanh hơn thao tác kéo-thả trên web.
