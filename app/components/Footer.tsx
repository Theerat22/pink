const Footer = () => {
    return (
      <footer style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
        <div className="flex-col justify-center text-center">
            <p>© {new Date().getFullYear()} developed by สิทธาเองจ้า</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  