# 🧑‍💼 Employee Directory - Frontend Assignment

A responsive and modular web app built using Java, Freemarker, HTML/CSS, and vanilla JavaScript. It allows users to view, filter, search, add, edit, and delete employee records in a clean and interactive UI.

---

## 🚀 Live Demo

🔗 [View on Netlify](https://tacnique-employee-directory.netlify.app/)

<img width="1867" height="862" alt="Screenshot 2025-07-13 143538" src="https://github.com/user-attachments/assets/f065250f-d9e7-4a20-8aff-90c19ead7124" />

---

## 🗂 Project Structure

```
employee-directory/
├── bin/                    # Compiled Java classes
├── lib/                    # Freemarker JAR
├── output/                 # Generated HTML (index.html + assets for deployment)
│   └── index.html
├── public/                 # Static assets (CSS/JS)
│   ├── css/
│   └── js/
│       └── ui/
├── src/                    # Java source
│   └── FreemarkerRunner.java
├── templates/              # Freemarker templates
│   ├── layout.ftl
│   ├── dashboard.ftl
│   └── components/
│       ├── employee-card.ftl
│       ├── form-sidebar.ftl
│       └── filter-sidebar.ftl
└── README.md

```


## 🛠 Setup & Run Instructions

### 📌 Requirements

- Java JDK 21+
- Freemarker JAR (already included in `lib/`)
- VS Code or any Java-supported IDE

### ▶️ Steps


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
