

function Footer() { 
    return (
      <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>2023,
                made with <i className="fa fa-heart" aria-hidden="true"></i> by for a better web.
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  