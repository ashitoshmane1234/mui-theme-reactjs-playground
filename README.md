# 🌈 React MUI Theme Playground

A **dynamic theme editor React application** demonstrating professional UI skills, MUI theming, and enterprise-grade sidebar/dashboard layout.

This project is built with **React.js**, **MUI (Material UI)**, and **React Router**, featuring a **mini-variant sidebar**, **live theme customization**, and a **responsive dashboard-like layout**. Perfect as a **portfolio project** to showcase frontend skills.

---

## 🎯 Features

### 1. Dynamic Theme Editor
- Change **primary & secondary colors** live.
- Toggle **light/dark mode**.
- Change **typography/font** for the entire app.
- Theme changes **persist across page reloads** (using `localStorage`).
- Real-time preview on **Showcase page**.

### 2. Showcase Page (UI Components)
Demonstrates MUI components that respond to the theme:

- Buttons (Contained, Outlined, Text)
- Cards
- Forms (TextField, Buttons)
- Alerts (Success, Warning, Error)
- Grid & Stack layouts for responsive design

### 3. Mini-Variant Sidebar
- **Collapsed by default**: only icons visible.
- **Expands on hover**: shows icon + text.
- **Active item** highlights with **theme primary color**.
- **No tooltips** or floating overlays.
- Fixed below **top navbar**.
- Smooth CSS transitions.
- Enterprise-grade, SaaS-style sidebar.

### 4. Responsive Navbar
- Top **AppBar** with project title.
- Sidebar integration.
- Always visible, does **not overlap sidebar**.

---

## 🛠️ Technologies Used

- **React.js** – Frontend framework
- **MUI (Material UI)** – Component library & theming
- **React Router** – Navigation
- **CSS-in-JS / sx prop** – Styling & animations
- **LocalStorage** – Persistent theme

---

## ⚡ Project Structure

src/
│
├─ components/
│ ├─ Navbar.js # Top AppBar
│ └─ Sidebar.js # Mini-variant sidebar
│
├─ context/
│ └─ ThemeContext.js # Global theme state & persistence
│
├─ pages/
│ ├─ ShowcasePage.js # Demo UI components
│ └─ ThemeEditor.js # Live theme customization
│
├─ App.js # App layout + routing
└─ index.js # React entry point


---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x (or Yarn)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/<your-username>/<repo-name>.git

