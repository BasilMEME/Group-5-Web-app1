
# 🚀 Student Information System - SpaceX Theme Edition

## 👥 Group Members & Roles
- **Turaya** - CSS Design (Space theme, layout, UI effects)
- **Balighot** - View Students, Add, and Delete functionalities
- **Defeo** - Handled the rest (Login system, session handling, edit functions, registration, responsive design)

---

## 📚 Project Overview

The **Student Information System** is a web-based PHP & MySQL project designed to manage student records using a simple interface with a futuristic **outer space theme**. The application supports the following core features:

### ✅ Features
- Admin Login/Logout system with session handling
- Add, View, Edit, and Delete student records
- Responsive Design using Bootstrap 5
- Space-themed background with transparency and animations
- Secure password storage (MD5-based)
- Modular code with reusable CSS

---

## ⚙️ Setup Instructions

1. **Install XAMPP**  
   Download and install [XAMPP](https://www.apachefriends.org/index.html) for local PHP and MySQL development.

2. **Create the Database**
   - Open `phpMyAdmin` (http://localhost/phpmyadmin/)
   - Create a new database called:  
     ```
     student_db
     ```

   - Run the following SQL to create the `students` and `admins` tables:

     ```sql
     CREATE TABLE admins (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL,
       password VARCHAR(100) NOT NULL
     );

     CREATE TABLE students (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       course VARCHAR(100) NOT NULL,
       dob DATE NOT NULL
     );

     -- Optional: Add a default admin
     INSERT INTO admins (username, password) VALUES ('admin', MD5('admin123'));
     ```

3. **Place Project Files**
   - Copy all project files into:  
     ```
     C:\xampp\htdocs\student_system
     ```

4. **Start the Server**
   - Open XAMPP
   - Start **Apache** and **MySQL**
   - Visit in browser:  
     ```
     http://localhost/student_system/login.php
     ```

5. **Login**
   - Username: `admin`  
   - Password: `admin123`

---

## 🌌 Theme Notes

The UI is inspired by **outer space**, using deep blacks, purples, and transparent card layouts to give a futuristic, SpaceX-like look. All pages use a unified style from `style.css`.

---

## 🛠 Technologies Used

- **PHP 8+**
- **MySQL**
- **Bootstrap 5**
- **Custom CSS (style.css)**

---

✅ Project fully tested on XAMPP with PHP 8.2.12

> Submitted as part of FT Assignment #1, Group 3
