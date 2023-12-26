// components
import Sidebar from "./components/Sidebar";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex">
      <Sidebar />
      {children}
    </div>
  );
}
