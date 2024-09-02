import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata = {
  title: "Expense Tracker",
  description: "",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
};

export default layout;
