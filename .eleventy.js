module.exports = function (eleventyConfig) {
  // Sao chép nguyên các thư mục tài nguyên sang web đã build
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // Ngày kiểu Việt Nam: dd/mm/yyyy
  eleventyConfig.addFilter("dateVi", function (value) {
    const d = new Date(value);
    const p = (n) => String(n).padStart(2, "0");
    return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
  });

  // Ngày ISO cho sitemap / schema
  eleventyConfig.addFilter("dateISO", function (value) {
    return new Date(value).toISOString();
  });

  // Ước lượng thời gian đọc: ~200 từ / phút
  eleventyConfig.addFilter("readingTime", function (content) {
    const text = String(content || "").replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Tóm tắt dự phòng nếu bài không nhập tóm tắt
  eleventyConfig.addFilter("excerptFallback", function (content, max) {
    const text = String(content || "").replace(/<[^>]+>/g, "").trim();
    const n = max || 150;
    return text.length > n ? text.slice(0, n) + "…" : text;
  });

  // Lọc danh sách bài theo chuyên mục (dùng ở trang Bài viết)
  eleventyConfig.addFilter("byCategory", function (posts, cat) {
    if (!cat) return posts;
    return posts.filter((p) => (p.data.category || "") === cat);
  });

  // Tên hiển thị của chuyên mục từ mã
  eleventyConfig.addFilter("catLabel", function (key) {
    const map = {
      "quan-ly": "Quản lý & Lãnh đạo",
      "cong-nghe": "Công nghệ cho người quản lý",
      "chuyen-doi-so": "Chuyển đổi số & Vận hành",
      "su-nghiep": "Góc nhìn & Sự nghiệp"
    };
    return map[key] || "Khác";
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
