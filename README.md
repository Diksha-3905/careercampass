# CareerCampass 🎓✨  
Your AI-powered career guide and assessment platform.  

CareerCampass helps students and professionals explore career paths, assess their skills, and get AI-driven insights to shape their journey. It integrates **Firebase Authentication**, **Gemini AI**, and a modern **React + Vite + TailwindCSS** stack for a smooth experience.  

---

## 🚀 Features  
- 🔐 **Authentication**: Sign up, log in, and manage profiles with Firebase.  
- 🏠 **Home Page**: Welcome screen with an introduction to CareerCampass.  
- 📊 **Dashboard**: Personalized dashboard with career recommendations.  
- 🤖 **AI-Powered Quiz**: Take quizzes and get Gemini AI–powered insights.  
- 👤 **Profile Page**: Manage personal details and progress.  
- 🔥 **Modern Stack**: React + TypeScript + Vite + TailwindCSS.  

---

## 🛠️ Tech Stack  
- **Frontend**: React (Vite + TypeScript)  
- **Styling**: TailwindCSS  
- **Backend/Services**: Firebase (Auth, Firestore planned)  
- **AI Integration**: Gemini API (Google Generative AI)  

---

## 📂 Project Structure  
careercampass/
├── src/
│ ├── pages/ # All pages (Auth, Dashboard, Quiz, etc.)
│ ├── services/ # Gemini API service
│ ├── App.tsx # Main app routing
│ ├── main.tsx # Entry point
│ └── firebase.ts # Firebase setup
├── public/ # Static assets
├── package.json
├── vite.config.js
└── tailwind.config.js

---

## ⚡ Getting Started  

1️⃣ Clone the Repository  
```bash
git clone https://github.com/Diksha-3905/careercampass.git
cd careercampass

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env.local file in the root and add your Firebase + Gemini API keys:
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_GEMINI_API_KEY=your_gemini_key

4️⃣ Run the App
npm run dev

Now visit 👉 http://localhost:5173

🌍 Deployment
You can deploy CareerCampass easily with:

Vercel (recommended)

Firebase Hosting

🤝 Contributing

Contributions are welcome! Feel free to fork the repo, create a branch, and submit a PR.

📜 License

This project is licensed under the MIT License.

✨ Author

Developed with ❤️ by Diksha Wagh
