# myUCUE

เว็บแอป React + Tailwind CSS สำหรับช่วยนักเรียนมัธยมปลายค้นหาคณะ/สาขาที่เหมาะกับตัวเอง

## Features

- Landing page responsive / mobile-first
- Assessment 8 ข้อ พร้อม progress bar
- Client-side weighted scoring
- Recommendation results 3–5 อันดับ
- Faculty detail
- Compare 2–3 faculties
- สมัครสมาชิกและ login ด้วยอีเมล/รหัสผ่าน
- บันทึกโปรไฟล์ ผลลัพธ์ และลักษณะนิสัยแยกตามบัญชีใน browser
- Mock data แยกใน `src/data.js`
- Reusable components: `Header`, `Button`, `FacultyCard`, `InfoBlock`, `CompareTable` ฯลฯ
- ใช้โลโก้ `public/myUCUE.png` ที่ให้มา

## Run

```bash
npm install
npm run dev
```

เปิด URL ที่ Vite แสดงใน terminal

หมายเหตุ: ระบบบัญชีปัจจุบันเป็น client-side demo ข้อมูลถูกเก็บใน `localStorage` เหมาะสำหรับการทดลองบนเครื่องเดียว หากนำขึ้นใช้งานจริงควรย้ายบัญชีและรหัสผ่านไปเก็บผ่าน backend ที่ปลอดภัย

## ต่อ Backend/API ในอนาคต

ย้าย `faculties` จาก `src/data.js` ไปเป็น API response โดยคง field หลัก เช่น:

- `id`
- `name`
- `short`
- `description`
- `subjects`
- `skills`
- `careers`
- `tuition`
- `pros`
- `considerations`
- `tags`

จากนั้นเปลี่ยน data source ใน `App.jsx` / data layer ได้โดยไม่ต้องรื้อ UI ทั้งระบบ.
