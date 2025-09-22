# Portfolio Data Analyst - Next.js

Portfolio website cho Data Analyst sử dụng Next.js với Pages Router và TailwindCSS.

## 🚀 Cài đặt và chạy

### Dependencies cần thiết:
```bash
npm install next react react-dom tailwindcss react-icons
```

### Chạy development server:
```bash
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem website.

## 📁 Cấu trúc dự án

```
portfolio-data-analyst-nextjs/
├── components/
│   ├── Header.js          # Avatar + social links
│   ├── CaseCard.js        # Card component cho case studies
│   └── Layout.js          # Wrapper layout với SEO
├── data/
│   └── caseStudies.js     # Dữ liệu mẫu cho case studies
├── pages/
│   ├── _app.js           # App wrapper với CSS global
│   ├── index.js          # Trang chủ
│   └── case-studies/
│       └── [slug].js      # Dynamic route cho case study details
├── styles/
│   └── globals.css       # TailwindCSS + font Inter
└── tailwind.config.js    # Cấu hình TailwindCSS
```

## ✨ Tính năng

### 🏠 Trang chủ (/)
- **Header**: Avatar SVG + greeting "Hey there! I am Trong Triet Nguyen"
- **Social Links**: LinkedIn, GitHub, Tableau, Blog, Shop với react-icons
- **Layout 2 cột**:
  - **Cột trái**: About section "Operations | Data Analyst"
  - **Cột phải**: Case Study Gallery với 6 projects

### 📊 Case Study Details (/case-studies/[slug])
- Dynamic routing cho từng case study
- Chi tiết project với hình ảnh, mô tả, achievements
- Technologies used tags
- Back button navigation

### 🎨 Styling
- **TailwindCSS** cho styling
- **Font Inter** clean và hiện đại
- **Responsive design**: Desktop 2 cột, Mobile stack dọc
- **Hover effects** cho cards và buttons
- **SEO optimized** với Next.js Head

### 📱 Responsive Design
- **Desktop**: Grid 2 cột (About | Case Studies)
- **Tablet**: Case studies grid 2 columns
- **Mobile**: Single column layout

## 🔧 Customization

### Thay đổi thông tin cá nhân:
1. Sửa `components/Header.js` - thay "Trong Triet Nguyen" thành tên của bạn
2. Cập nhật social links trong `socialLinks` array
3. Sửa About section trong `pages/index.js`

### Thêm case studies:
1. Thêm object mới vào `data/caseStudies.js`
2. Đảm bảo có `slug`, `title`, `description`, `image`, `bgColor`
3. Thêm `fullDescription` và `details` array cho trang chi tiết

### Styling:
- Sửa `tailwind.config.js` để thay đổi theme
- Cập nhật `styles/globals.css` cho custom CSS
- Thay đổi colors trong components

## 📦 Dependencies

- **next**: ^15.5.3 - React framework
- **react**: ^18.3.1 - UI library  
- **react-dom**: ^18.3.1 - DOM rendering
- **tailwindcss**: ^3.4.0 - CSS framework
- **react-icons**: ^5.0.0 - Icon library

## 🌐 SEO Features

- Dynamic page titles và meta descriptions
- Open Graph tags
- Responsive meta viewport
- Font preloading cho performance
- Clean URL structure

## 🎯 Demo Features

Website hiển thị:
- ✅ Avatar placeholder với SVG icon
- ✅ Social buttons với hover effects  
- ✅ 6 case studies với hình ảnh từ Unsplash
- ✅ Responsive grid layout
- ✅ Dynamic routing cho case study details
- ✅ Clean typography với font Inter
- ✅ Professional color scheme

Truy cập website để xem demo hoàn chỉnh!