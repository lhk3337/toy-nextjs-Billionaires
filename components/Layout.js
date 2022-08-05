import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="Responsive">
      <Navbar />
      <>{children}</>
    </div>
  );
}
