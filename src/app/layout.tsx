"use client"
import './globals.css'
import '../styles/tailwind.css'
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from '@/store';
import 'react-loading-skeleton/dist/skeleton.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="font-inter  custom-tippy dashcode-app">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>{children}
          </Provider>
        </QueryClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
