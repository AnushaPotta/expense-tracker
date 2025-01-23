import "@/styles/globals.css";
import { TransactionsProvider } from "@/context/TransactionsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </TransactionsProvider>
  );
}

export default MyApp;
