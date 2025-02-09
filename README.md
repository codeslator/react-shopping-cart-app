# ⚛️ Shopping Cart App - React

Manage the guitar shopping cart and buy all that you want. This app was created with **Vite** + **React 18** + **TypeScript** using **Chakra UI** to create UI and testing with **Vitest + React Testing Library**.

Example from **React + TypeScript** course by **Juan Pablo de la Torre**.

**Demo**: 

### 🚀 About:

- Created with **React 18** + **Vite** + **TypeScript**.
- Routing with **Wouter**.
- Use **Chakra UI** to create layout.
- State management with **Zustand**.
- Data fetching with **Axios**.
- Data stored in **Supabase**.
- Testing with **Vitest** and **React Testing Library**
- Deployed in **Vercel**.

### ✅ Features:

- Select a Guitar and click in "Add to Cart" button.
- Open the Shopping Cart in the navbar.
- You can increment o decrement the item quantity in the "+" or "-" icon buttons.
- You can remove a specific item from the cart in the item "Trash" icon button.
- You can remove all items from the cart in the "Remove all" button.
- You can navigate to checkout page.
- Login page, register page & checkout page are just layouts.

### 📋 Requirements

To run this app, you must have installed Node 18 or major & NPM.

### ⚙️ Installation

This README has the instructions to install and execute this webapp. The first step is clone the repository from GitHub.
```
https://github.com/codeslator/c.git
```

After clone the repository, you must to install all dependencies.

```
cd https://github.com/codeslator/react-shopping-cart-app.git
npm install
```

When dependencies are installed, before run the webapp in local, make sure you have the .env file in the repository with the following variables:
```
VITE_SUPABASE_API_URL='your supabase api url here'
VITE_SUPABASE_API_KEY='your apikey url here'
```

Finally, you can execute the Vite App using the following command:
```
npm run dev
```
If application started correctly, will be listen in 5173 port. Open in your Browser the following URL: http://localhost:5173/