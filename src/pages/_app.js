import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
    </TransactionsProvider>
  );
}
>>>>>>> 1135985 (Initial commit from Create Next App)
