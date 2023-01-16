import React from 'react';
import './Fem.css';
import { fem1, fem2, fem3, fem4, fem5, fem6, fem7, fem8 } from '../assets';
import { FemProject } from '../Components';

const Fem = () => {
  return (
    <section className="fem">
      <h1>Front end mentor&apos;s site challenges</h1>
      <p>feel free to go check the code and don&apos;t forget to drop your ❤️</p>
      <div className="projects-container femprojects">
        <FemProject
          name="Rating Card Component"
          img={fem1}
          femurl="https://www.frontendmentor.io/solutions/interactive-rating-component-jIrP2zjVi0"
          repo="https://github.com/Foparty/ratingComponentMain"
          live="https://ratingcardfem.netlify.app/"
        />
        <FemProject
          name="Responsive Product Card"
          img={fem2}
          femurl="https://www.frontendmentor.io/solutions/product-preview-card-component-UyzikBQ8YB"
          repo="https://github.com/Foparty/femProductPreviewCard"
          live="https://femproductpreviewcard.netlify.app/"
        />
        <FemProject
          name="QR Code Card"
          img={fem3}
          femurl="https://www.frontendmentor.io/solutions/qr-code-component-jIbJxwwrX4"
          repo="https://github.com/Foparty/03_qrcode"
          live="https://femqrcode.netlify.app/"
        />
        <FemProject
          name="Order Summary Component"
          img={fem4}
          femurl="https://www.frontendmentor.io/solutions/order-summary-component-AIn6EWrbhg"
          repo="https://github.com/Foparty/summarycomponent"
          live="https://ordersummarycardfem.netlify.app/"
        />
        <FemProject
          name="NFT Card"
          img={fem5}
          femurl="https://www.frontendmentor.io/solutions/nft-preview-card-component-Uq-ymyCHJG"
          repo="https://github.com/Foparty/femnftcard"
          live="https://femnftcard.netlify.app/"
        />
        <FemProject
          name="Grid Responsive Page"
          img={fem6}
          fem="https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-93jkVtBhqg"
          repo="https://github.com/Foparty/fembaseapparel"
          live="https://femapparelbase.netlify.app/"
        />
        <FemProject
          name="Stats Preview Card"
          img={fem7}
          femurl="https://www.frontendmentor.io/solutions/stats-preview-card-component-hyWMf6PcL8"
          repo="https://github.com/Foparty/femstatspreviewcard"
          live="https://femstatscard.netlify.app/"
        />
        <FemProject
          name="3 Column Card Component"
          img={fem8}
          femurl="https://www.frontendmentor.io/solutions/3column-preview-card-component-WdE3kMCtGb"
          repo="https://github.com/Foparty/fem3columcard"
          live="https://fem3columcardcomponent.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Fem;
