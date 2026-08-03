# 🦜 LingoAI — Modern AI-Powered Language Learning App

LingoAI is a Duolingo-inspired mobile application built with **Expo (React Native)** and **TypeScript**. It leverages real-time AI tutors, video-based lessons, and modern interactive mobile UI patterns to teach languages feature-by-feature.

---

## ✨ Features

- 🤖 **AI Video & Audio Lessons:** Interactive learning experience powered by AI Stream Vision Agents.
- 💬 **Real-time Chat Tutor:** Instant feedback and conversational practice.
- ⚡ **Local XP & Streaks:** Gamified learning metrics persisted locally.
- 🎨 **Pixel-Perfect Mobile UI:** Built with NativeWind (Tailwind CSS) styling.
- 🔐 **Authentication:** Secure user onboarding powered by Clerk.

---

## 🛠️ Tech Stack

- **Framework:** [Expo](https://expo.dev/), React Native, TypeScript
- **Routing:** Expo Router (File-based routing)
- **Styling:** [NativeWind v5](https://www.nativewind.dev/) (Tailwind CSS)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) with AsyncStorage persistence
- **Authentication:** [Clerk](https://clerk.com/)
- **AI & Video Streams:** [GetStream](https://getstream.io/) & Stream Vision Agents

---

## 📂 Project Structure

```txt
app/          # Expo Router screens and tab navigation
components/   # Reusable mobile-first UI elements
constants/    # Centralized image imports, colors, theme constants
data/         # Typed hardcoded lesson contents
store/        # Zustand global state modules
lib/          # Helper utilities for Clerk, Stream, API calls
