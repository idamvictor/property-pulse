import "@/assets/styles/global.css";

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find Your Dream Rental Property',
  Keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
