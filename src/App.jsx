import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashboard";
import Booking from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const quaryClint = new QueryClient({
  defaultOptions: {
    queries: {
      queries: {
        staleTime: 0,
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={quaryClint}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashbord />} />
            <Route path="booking" element={<Booking />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" 
      gutter={12}
      containerStyle={{top: 30}}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 4000,
        },
        style: {
          backgroundColor: "var(--color-gray-0)",
          color: "var(--color-gray-700)",
          fontSize:"16px",
          maxWidth:"400px",
          padding:"15px 22px",
        },
      }}/>
    </QueryClientProvider>
  );
}

export default App;
