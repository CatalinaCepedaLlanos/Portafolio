import React from 'react';

export default () => {
  return (
    <footer id="footer" className="section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <div className="single-footer-widget">
              <h6 className="text-uppercase mb-20">CONTACTO</h6>
              <p>
                Amo a los gatos, el maquillaje y la decoración de interiores.<br></br>
                Actualmente disponible	👇🏽
              </p>

              <div className="footer-social d-flex align-items-center">
                <a href="https://www.linkedin.com/in/catacepedallanos/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="mailto:catalina.cepeda.llanos@gmail.com" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=56994339929" target="_blank">
                  <i className="fa fa-phone"></i>
                </a>
              </div>
						</div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
					<p className="footer-text m-0">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
            All rights reserved | This template is made with 
            <i className="fa fa-heart-o" aria-hidden="true" style={{ padding: '5px'}}></i> 
            by <a href="https://colorlib.com" target="_blank"> Colorlib</a>
          </p>
				</div>
      </div>
		</footer>
  );
};