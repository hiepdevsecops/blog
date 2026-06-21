# Hướng dẫn sử dụng Blog

Blog cá nhân dựng bằng **Eleventy + Decap CMS** (cùng công nghệ với web Quang Nga).

## 1. Chạy thử trên máy

```bash
npm install      # chỉ cần chạy lần đầu
npm start        # mở http://localhost:8080
```

`npm run build` tạo bản web tĩnh trong thư mục `_site/`.

## 2. Sửa tên & thông tin cá nhân

Mở file **`src/_data/site.js`** và sửa:
- `authorName` — tên hiển thị của bạn
- `authorTitle` — chức danh (vd: "Quản lý & Công nghệ")
- `tagline` — câu giới thiệu ở trang chủ
- `email`, `linkedin`, `facebook`, `github` — để trống cái nào chưa có

Sửa giới thiệu chi tiết trong **`src/ve-toi.njk`** (các chỗ có ghi 👉).

## 3. Viết bài mới

Mỗi bài là 1 file `.md` trong **`src/posts/`**. Cấu trúc:

```markdown
---
title: "Tiêu đề bài viết"
date: 2026-06-21
category: quan-ly        # quan-ly | cong-nghe | chuyen-doi-so | su-nghiep
excerpt: "Tóm tắt 1-2 câu hiện ở danh sách."
cover: "/uploads/anh.jpg"   # tùy chọn
---

Nội dung viết bằng Markdown ở đây...
```

4 chuyên mục (giá trị điền vào `category`):
| Mã | Tên hiển thị |
|---|---|
| `quan-ly` | Quản lý & Lãnh đạo |
| `cong-nghe` | Công nghệ cho người quản lý |
| `chuyen-doi-so` | Chuyển đổi số & Vận hành |
| `su-nghiep` | Góc nhìn & Sự nghiệp |

## 4. Đăng bài qua trang web (không cần code)

Sau khi deploy lên Netlify, vào **`/admin`** để soạn bài như gõ Word.
Cần bật **Identity + Git Gateway** trong Netlify (xem bước 5).

## 5. Đưa blog lên mạng (miễn phí)

1. Đẩy code lên một kho **GitHub**.
2. Vào [netlify.com](https://netlify.com) → New site → chọn kho đó. Netlify tự đọc `netlify.toml` và build.
3. Trong Netlify: **Identity** → Enable; **Identity → Services → Git Gateway** → Enable.
4. Sửa `site_url` trong `src/admin/config.yml` và `url` trong `src/_data/site.js` thành tên miền Netlify cấp.
5. Mời chính mình qua Identity → giờ đăng nhập được `/admin` để đăng bài.

## Cấu trúc thư mục

```
src/
  _data/        site.js (thông tin), duan.json, ghichu.json
  _includes/    base.njk (khung), post.njk (bài viết)
  posts/        các bài viết .md
  admin/        trang quản trị Decap CMS
  css/ js/      giao diện
  uploads/      ảnh tải lên
  *.njk         các trang: index, ve-toi, du-an, ghi-chu, lien-he, bai-viet
```
