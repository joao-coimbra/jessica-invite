# 💌 Jessica Invite

A modern, responsive digital invitation web application built with **React**, **TypeScript**, and **Vite**. This project serves as a fast and interactive way to share event details and collect RSVPs.

[![Deploy with Vercel](https://vercel.com/button)](https://convite-jessica.vercel.app)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🚀 Live Demo

Check out the live application here:
👉 **[https://convite-jessica.vercel.app](https://convite-jessica.vercel.app)**

## 🛠️ Technologies Used

*   **[React](https://react.dev/)** - UI Library
*   **[TypeScript](https://www.typescriptlang.org/)** - Static Type Checking
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
*   **[Biome](https://biomejs.dev/)** - High-performance linter and formatter (configured via `biome.jsonc`)
*   **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 💻 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (Version 18+ recommended)
*   [pnpm](https://pnpm.io/installation) (Preferred package manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/joao-coimbra/jessica-invite.git
    cd jessica-invite
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    pnpm dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

## 🏗️ Building for Production

To create an optimized build for deployment:

```bash
pnpm build
```
This will generate a `dist` folder containing the compiled assets ready to be hosted.

To preview the production build locally:
```bash
pnpm preview
```

## 📂 Project Structure

```bash
jessica-invite/
├── .cursor/        # Editor configuration
├── public/         # Static assets (favicons, images)
├── src/            # Source code
│   ├── main.tsx    # Entry point
│   ├── App.tsx     # Main component
│   └── ...         # Components and styles
├── biome.jsonc     # Linter and formatter config
├── index.html      # HTML entry point
├── package.json    # Project dependencies and scripts
└── vite.config.ts  # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
*Developed by [Joao Coimbra](https://github.com/joao-coimbra)*
