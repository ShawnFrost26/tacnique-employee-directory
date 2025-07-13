# 🧑‍💼 Employee Directory - Frontend Assignment

A responsive and modular web app built using Java, Freemarker, HTML/CSS, and vanilla JavaScript. It allows users to view, filter, search, add, edit, and delete employee records in a clean and interactive UI.

---

## 🚀 Live Demo

*(Optional: Add Netlify/Vercel or local preview screenshot here)*

---

## 🗂 Project Structure

employee-directory/
├── bin/ # Compiled Java classes
├── lib/ # Freemarker JAR
├── output/ # Generated dashboard HTML
├── public/ # Static assets
│ ├── css/ # Modular CSS files
│ └── js/ # Modular JS files
│   └── ui/ # UI logic (filters, form, search, pagination)
├── src/
│ └── FreemarkerRunner.java # Main Java file that renders the HTML
├── templates/
│ ├── layout.ftl # Base layout using Freemarker macro
│ ├── dashboard.ftl # Main view rendering employees
│ └── components/ # Reusable components (cards, form, sidebars)
└── README.md



## 🛠 Setup & Run Instructions

### 📌 Requirements

- Java JDK 21+
- Freemarker JAR (already included in `lib/`)
- VS Code or any Java-supported IDE

### ▶️ Steps

```bash
# 1. Compile Java source
javac -cp ".;lib/freemarker-2.3.34.jar" -d bin src/FreemarkerRunner.java

# 2. Run the Java program to generate HTML
java -cp ".;bin;lib/freemarker-2.3.34.jar" FreemarkerRunner

Output: output/dashboard.html

🌐 View in browser
Use Live Server extension in VS Code to open output/dashboard.html
or open it directly in a browser.

🔍 Features
View employees in responsive cards

Add/edit employee via form sidebar

Filter by first name, department, or role

Live search by name or email

Responsive design with pagination dropdown (10 / 25 / 50 / 100)

Modular JS/CSS and clean project layout


🔧 Challenges Faced
Integrating Freemarker cleanly

Managing modular JS with vanilla JavaScript

Responsive card layout across varying screen sizes

Handling dynamic filtering and pagination without frameworks


✅ What I'd Improve with More Time
Store data persistently using localStorage or backend API

Add proper form validations (email format, duplicate checks)

Implement animations/transitions for sidebar opening