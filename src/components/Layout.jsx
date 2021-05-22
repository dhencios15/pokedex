import Header from './Header';

const Layout = ({ children }) => (
  <main className='container py-4 mx-auto'>
    <Header />
    {children}
  </main>
);

export default Layout;
