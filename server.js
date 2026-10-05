const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Cho phép đọc dữ liệu JSON
app.use(express.json());

// Phục vụ các file tĩnh trong thư mục 'public' (chứa index.html)
app.use(express.static(path.join(__dirname, 'public')));

// API sinh mã thật từ máy chủ
app.get('/api/get-code', (req, res) => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const generatedCode = `B1-${randomNum}`;

    // Trả dữ liệu JSON về cho Frontend
    res.json({
        success: true,
        step: 1,
        code: generatedCode
    });
});

// Mở cổng Server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});
