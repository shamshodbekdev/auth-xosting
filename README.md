# auth-xosting.net

A secure, modern authentication interface for the xosting.net platform. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Overview

This project serves as the central authentication gateway for xosting.net, providing a seamless and secure login and registration experience for our users.

## ✨ Features

- **Modern UI/UX**: Dark-themed, premium design with glassmorphism and aurora effects.
- **Form Validation**: Robust validation using Zod and React Hook Form.
- **Responsive**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Social Login**: Pre-configured buttons for Google, Telegram, and GitHub (OAuth integration pending).
- **TypeScript**: Fully typed for reliability and maintainability.
- **Loading States**: Smooth user feedback during form submission.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Webpack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom theme)
- **Form Handling**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shamshodbekdev/xosting.net.git
cd auth-xosting
Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
Open http://localhost:3000 in your browser.

📁 Project Structure
text
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable UI components
├── lib/          # Utilities and validation schemas
└── public/       # Static assets (logos, icons)
🔒 Security
This project is designed with security in mind. All form inputs are validated on the client side. Server-side authentication and API integration will be added in the next phase.

📄 License
This project is proprietary and belongs to xosting.net. All rights reserved.

👨‍💻 Author
Shamshodbek - @shamshodbekdev