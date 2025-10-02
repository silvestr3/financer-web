# GEMINI.md

## Project Overview

This is a web application built with React and TypeScript, using Vite for the build tooling. It appears to be a financial tracking application, based on the project name "financer-web" and the presence of components related to charts, tables, and transactions.

The project uses a modern frontend stack, including:

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS with `clsx` and `tailwind-merge` for utility class management.
*   **UI Components:** A mix of custom components and Radix UI primitives, suggesting a design system-oriented approach.
*   **Data Fetching:** TanStack Query for managing server-state.
*   **Routing:** React Router for navigation.
*   **Linting and Formatting:** Biome for code quality.

## Application Structure

The application is divided into the following pages:

*   **Dashboard:** The main dashboard, which displays a summary of the user's financial situation. It is composed of a balance chart, summary cards, a categories chart, and a list of recent transactions.
*   **Income:** A page for managing income, which displays a table of income data.
*   **Expenses:** A page for managing expenses (not yet implemented).
*   **Investments:** A page for managing investments (not yet implemented).

## Building and Running

*   **Development:** To run the development server, use the following command:
    ```bash
    bun dev
    ```
*   **Build:** To create a production build, use the following command:
    ```bash
    bun build
    ```
*   **Linting:** To lint the codebase, use the following command:
    ```bash
    bun lint
    ```
*   **Formatting:** To format the codebase, use the following command:
    ```bash
    bun format
    ```
*   **Preview:** To preview the production build, use the following command:
    ```bash
    bun preview
    ```

## Development Conventions

*   **Path Aliases:** The project uses the `@` alias for the `src` directory. For example, `import { Button } from "@/components/ui/button"` is used to import the `Button` component.
*   **Styling:** The project uses Tailwind CSS for styling. It also uses `clsx` and `tailwind-merge` to conditionally apply and merge Tailwind CSS classes.
*   **Component Structure:** The project has a `components` directory with `global` and `ui` subdirectories. The `ui` directory contains reusable UI components, while the `global` directory contains more complex, application-specific components.
*   **State Management:** The project uses TanStack Query for managing server-state.
*   **Routing:** The project uses React Router for routing, with routes defined in the `src/router` directory.
