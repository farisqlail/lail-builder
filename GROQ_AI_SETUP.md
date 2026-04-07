# Fitur Groq AI Website Generator

## Deskripsi
Fitur baru yang memungkinkan pengguna untuk membuat website dengan dua cara:
1. **Langkah demi Langkah** - Formulir terstruktur dengan pertanyaan spesifik
2. **AI Prompt dengan Groq** - Ceritakan visi website Anda dalam bentuk prompt

## Instalasi & Setup

### 1. Install Groq SDK
```bash
npm install groq-sdk
```

### 2. Setup Environment Variable
Buat file `.env.local` di root project dengan API key Groq Anda:
```
GROQ_API_KEY=your_groq_api_key_here
```

Dapatkan API key dari: https://console.groq.com

### 3. Struktur File yang Ditambahkan

```
app/
  api/
    generate-website-with-prompt/
      route.ts          # API endpoint untuk Groq AI
  ai-generator/
    page.tsx          # Updated dengan mode selector & Groq prompt

lib/
  groq-utils.ts       # Utility function untuk Groq integration
```

## Cara Menggunakan

### Mode 1: Langkah demi Langkah
1. Pergi ke `/ai-generator`
2. Pilih "Langkah demi Langkah"
3. Isi formulir dengan informasi bisnis Anda
4. Pilih fitur penting yang diinginkan
5. AI akan generate konfigurasi website

### Mode 2: AI Prompt dengan Groq
1. Pergi ke `/ai-generator`
2. Pilih "AI Prompt (Groq)" - pilihan baru dengan badge "NEW"
3. Masukkan prompt deskriptif tentang website Anda
4. Contoh prompt:
   ```
   Saya ingin membuat website toko online modern untuk menjual elektronik berkualitas tinggi. 
   Website harus memiliki fitur showcase produk, testimonial pelanggan, form contact, 
   dan tampilan yang profesional dengan dominasi warna biru.
   ```
5. Klik "Analisis & Generate"
6. AI Groq akan menganalisis prompt dan membuat konfigurasi website
7. Review hasil dan klik "Lihat & Edit Website" untuk customize lebih lanjut

## API Endpoint

### POST `/api/generate-website-with-prompt`

**Request Body:**
```json
{
  "prompt": "String deskripsi website dari user"
}
```

**Response:**
```json
{
  "businessName": "string",
  "businessType": "ecommerce|services|portfolio|saas|blog|nonprofit|restaurant|education|realestate|health",
  "businessDescription": "string",
  "selectedFeatures": ["about", "showcase", "testimonials", "pricing", "contact", "team", "blog", "portfolio", "faq", "cta"],
  "colorScheme": "#hex_color",
  "additionalInfo": "string (optional)"
}
```

## Fitur Utama

### 1. Mode Selection
- UI yang user-friendly untuk memilih antara dua mode
- Penjelasan singkat tentang setiap mode
- Badge "NEW" untuk mode Groq

### 2. Groq AI Analysis
- Menggunakan model Mixtral 8x7B
- Analisis natural language prompt dari user
- Extract business info, features, dan preferences
- Return konfigurasi website dalam format JSON

### 3. Error Handling
- Validasi input (prompt tidak boleh kosong)
- Error handling untuk API failure
- User-friendly error messages

### 4. Loading States
- Loading indicator saat AI sedang bekerja
- Informative progress messages
- Prevent multiple submissions

## Sistem Prompting

API Groq menggunakan system prompt yang sophisticated untuk:
1. Menganalisis intent user
2. Extract business name dan type
3. Identify fitur-fitur penting
4. Detect preferensi warna
5. Return valid JSON response

## Integration dengan Builder

Setelah website di-generate, user dapat:
1. Melihat summary/preview
2. Edit & customize di Builder page
3. Mengganti template, warna, dan fitur
4. Export code

## Limitations

- Groq API memiliki rate limiting (tergantung on plan)
- Max tokens: 1024 per request
- Model: Mixtral 8x7B

## Troubleshooting

### API Key Error
```
Error: GROQ_API_KEY tidak dikonfigurasi
```
**Solusi:** Pastikan `.env.local` dengan GROQ_API_KEY sudah dibuat di root project

### Parse JSON Error
```
Error: Gagal parse respons AI
```
**Solusi:** Prompt mungkin terlalu kompleks, coba simplify prompt atau ulangi lagi

### Rate Limit Error
```
Error: Rate limit exceeded
```
**Solusi:** Tunggu beberapa saat sebelum membuat request baru

## Future Improvements

1. Add prompt templates untuk inspiring users
2. Save generated configs di database
3. Improve AI prompt untuk hasil lebih konsisten
4. Add feedback mechanism untuk improve AI responses
5. Support multiple languages

## Testing

Untuk testing fitur Groq:
1. Buka `/ai-generator`
2. Pilih "AI Prompt (Groq)"
3. Masukkan sample prompt
4. Verifikasi respons dan generated config

Sample prompts untuk testing:
- "Buat website e-commerce untuk toko baju dengan desain modern"
- "Saya butuh portfolio website untuk fotografer profesional"
- "Website SaaS untuk app manajemen project dengan fitur testimonial"
