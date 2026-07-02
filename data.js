/**
 * =====================================================================
 *  FILE DỮ LIỆU - CHỈNH SỬA Ở ĐÂY, KHÔNG CẦN ĐỘNG VÀO index.html / style.css
 * =====================================================================
 *  Muốn thêm bằng cấp mới? Kéo xuống mục CERTIFICATES bên dưới,
 *  copy 1 khối {...} rồi điền thông tin + đường dẫn ảnh là xong.
 * =====================================================================
 */

const PROFILE = {
  name: "Nguyễn Hoàng Anh",
  title: "Cán bộ hỗ trợ Công nghệ Thông tin",
  tagline: "IT Support Specialist",
  bio:
    "Mình là Hoàng Anh — tính cách vui vẻ, hòa đồng, thích hỗ trợ người khác và tham gia các hoạt động cộng đồng, chạy bộ. Hiện đang làm cán bộ kỹ thuật CNTT, xử lý sự cố và hỗ trợ hệ thống hằng ngày.",
  avatar: "assets/avatar.jpg",
  location: "Việt Nam",
  email: "anh.nguyenhoang20x0@gmail.com",
  phone: "0865502067",
  // Thêm link mạng xã hội nếu muốn, để trống "" thì mục đó sẽ tự ẩn
  socials: {
    linkedin: "",
    github: "",
    facebook: "",
  },
};

const SKILLS = [
  { name: "Xử lý sự cố CNTT", level: "Thành thạo" },
  { name: "Helpdesk / Hỗ trợ người dùng", level: "Thành thạo" },
  { name: "Quản trị hệ thống & công nghệ", level: "Tốt" },
  { name: "Tin học MOS", level: "Chứng chỉ" },
  { name: "Quan sát & phân tích dữ liệu", level: "Tốt" },
  { name: "Tổ chức & quản lý thời gian", level: "Tốt" },
];

/**
 * =====================================================================
 *  CERTIFICATES — DANH SÁCH BẰNG CẤP / CHỨNG CHỈ / GIẤY KHEN
 * =====================================================================
 *  Mỗi mục cần:
 *   - id:        mã duy nhất, viết liền không dấu (vd: "cert-004")
 *   - title:     tên bằng cấp / chứng chỉ / giấy khen
 *   - issuer:    đơn vị cấp
 *   - year:      năm cấp (chuỗi, vd: "2023")
 *   - type:      "Bằng cấp" | "Chứng chỉ" | "Giấy khen"
 *   - image:     đường dẫn ảnh, để trong assets/certs/
 *
 *  ĐỂ THÊM MỚI: copy khối bên dưới, đổi nội dung, thêm dấu phẩy
 *  giữa các khối. Ảnh thì bỏ file vào assets/certs/ trước.
 * =====================================================================
 */

const CERTIFICATES = [
  {
    id: "cert-001",
    title: "Lập trình Python trong phân tích dữ liệu (9.5 điểm)",
    issuer: "Trung tâm Tin học - Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM",
    year: "2026",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-python-da-2026.jpg",
  },
  {
    id: "cert-002",
    title: "Ứng dụng SQL trong phân tích dữ liệu (8.0 điểm)",
    issuer: "Trung tâm Tin học - Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM",
    year: "2026",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-sql-da-2026.jpg",
  },
  {
    id: "cert-003",
    title: "Tuyên dương hoàn thành xuất sắc nhiệm vụ - Phòng Đảm bảo",
    issuer: "Tổ chức Giáo dục FPT",
    year: "2025",
    type: "Giấy khen",
    image: "assets/certs/tuyen-duong-fpt-2025-2.jpg",
  },
  {
    id: "cert-004",
    title: "Tuyên dương phấn đấu hoàn thành công việc, nhiệm vụ (HK Fa26)",
    issuer: "Tổ chức Giáo dục FPT",
    year: "2025",
    type: "Giấy khen",
    image: "assets/certs/tuyen-duong-fpt-2025-1.jpg",
  },
  {
    id: "cert-005",
    title: "Nghiệp vụ Xuất nhập khẩu - Logistics tổng hợp",
    issuer: "Trung tâm Đào tạo & Tư vấn XNK Sài Gòn (SIMEX)",
    year: "2025",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-xnk-logistics-2025.jpg",
  },
  {
    id: "cert-006",
    title: "Nghiệp vụ sư phạm dạy trình độ Cao đẳng, Trung cấp",
    issuer: "Trường Cao đẳng Cơ điện Hà Nội",
    year: "2025",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-nghiep-vu-su-pham-2025.jpg",
  },
  {
    id: "cert-007",
    title: "Gemini Certified Educator",
    issuer: "Google for Education",
    year: "2025",
    type: "Chứng chỉ",
    image: "assets/certs/gemini-certified-educator-2025.jpg",
  },
  {
    id: "cert-008",
    title: "Quy định ứng xử trên các phương tiện truyền thông dành cho CBNV",
    issuer: "FPT Corporate University",
    year: "2025",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-quydinh-ungxu-fpt-2025.jpg",
  },
  {
    id: "cert-009",
    title: "Thành tích xuất sắc công tác tuyển chọn & gọi công dân nhập ngũ 2024",
    issuer: "UBND Phường Bình Trị Đông A",
    year: "2024",
    type: "Giấy khen",
    image: "assets/certs/giay-khen-nhap-ngu-2024.jpg",
  },
  {
    id: "cert-010",
    title: "Danh hiệu Thanh niên tiên tiến làm theo lời Bác",
    issuer: "Đoàn Phường Bình Trị Đông A",
    year: "2024",
    type: "Giấy chứng nhận",
    image: "assets/certs/chung-nhan-thanh-nien-tien-tien-2024.jpg",
  },
  {
    id: "cert-011",
    title: "Thành tích xuất sắc công tác Đoàn - Hội & phong trào thanh niên 2023",
    issuer: "UBND Phường Bình Trị Đông A",
    year: "2023",
    type: "Giấy khen",
    image: "assets/certs/giay-khen-doan-hoi-2023.jpg",
  },
  {
    id: "cert-012",
    title: "Thành tích xuất sắc công tác tuyển chọn & gọi công dân nhập ngũ 2023",
    issuer: "UBND Phường Bình Trị Đông A",
    year: "2023",
    type: "Giấy khen",
    image: "assets/certs/giay-khen-nhap-ngu-2023.jpg",
  },
  {
    id: "cert-013",
    title: "Bằng tốt nghiệp Cao đẳng - Quản trị Mạng máy tính (xếp loại Giỏi)",
    issuer: "Trường Cao đẳng nghề Bách Khoa Hà Nội",
    year: "2021",
    type: "Bằng cấp",
    image: "assets/certs/bang-tot-nghiep-cao-dang-2021.jpg",
  },
  {
    id: "cert-014",
    title: "Tích cực tham gia phòng, chống dịch Covid-19",
    issuer: "UBND Quận 12",
    year: "2021",
    type: "Giấy khen",
    image: "assets/certs/giay-khen-covid-quan12-2021.jpg",
  },
  {
    id: "cert-015",
    title: "Chiến sĩ tình nguyện đẩy lùi Covid-19",
    issuer: "Thành Đoàn TP. Hồ Chí Minh",
    year: "2021",
    type: "Giấy chứng nhận",
    image: "assets/certs/chien-si-tinh-nguyen-covid-2021.jpg",
  },
  {
    id: "cert-016",
    title: "Tri ân tích cực tham gia phòng, chống dịch Covid-19",
    issuer: "UBMTTQ Phường Bến Nghé, Quận 1",
    year: "2021",
    type: "Giấy tri ân",
    image: "assets/certs/tri-an-covid-benghe-2021.jpg",
  },
  {
    id: "cert-017",
    title: "Thư cảm ơn đồng hành cùng tuổi trẻ chống dịch Covid-19",
    issuer: "Quận Đoàn 12",
    year: "2021",
    type: "Thư cảm ơn",
    image: "assets/certs/thu-cam-on-covid-2021.jpg",
  },
  {
    id: "cert-018",
    title: "ILX2: Becoming a Successful Leader (Inclusive Leadership Training)",
    issuer: "CatalystX (Catalyst Inc.) trên nền tảng edX",
    year: "2021",
    type: "Chứng chỉ",
    image: "assets/certs/chung-chi-ilx2-leadership-2021.jpg",
  },
];
