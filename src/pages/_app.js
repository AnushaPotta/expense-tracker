<<<<<<< HEAD
import "../styles/globals.css";
import { TransactionsProvider } from "@/context/TransactionsContext";

export default function App({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
    </TransactionsProvider>
  );
}
||||||| (empty tree)
=======
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
>>>>>>> 1135985 (Initial commit from Create Next App)
