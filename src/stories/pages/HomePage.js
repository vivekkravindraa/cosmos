import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Slider from '../../components/home-component/Slider/Slider';
import CosmosPolicies from '../../components/home-component/CosmosPolicies/CosmosPolicies';
import CosmosCategories from '../../components/home-component/CosmosCategories/CosmosCategories';
import CosmosFeaturedProducts from '../../components/product-component/CosmosFeaturedProducts/CosmosFeaturedProducts';
import CosmosSpecialDeals from '../../components/home-component/CosmosSpecialDeals/CosmosSpecialDeals';
import CosmosSponsoredAds from '../../components/home-component/CosmosSponsoredAds/CosmosSponsoredAds';
import CosmosSubCategories from '../../components/home-component/CosmosSubCategories/CosmosSubCategories';
import CosmosProducts from '../../components/product-component/CosmosProducts/CosmosProducts';
import CosmosSportsCategories from '../../components/home-component/CosmosSportsCategories/CosmosSportsCategories';
import CosmosAbout from '../../components/home-component/CosmosAbout/CosmosAbout';
import CosmosAccessories from '../../components/home-component/CosmosAccessories/CosmosAccessories';
import CosmosBrands from '../../components/home-component/CosmosBrands/CosmosBrands';
import CosmosFacilites from '../../components/home-component/CosmosFacilities/CosmosFacilities';
import CosmosNews from '../../components/home-component/CosmosNews/CosmosNews';
import Footer from '../../common-components/Footer/Footer';
import BottomNavigation from '../../common-components/BottomNavigation/BottomNavigation';

export default function HomeComponent() {
    const size = useWindowSize();

    return (
        <div style={{ 'backgroundColor': '#EEEEEE' }}>
            <div style={size.width >= 992 ? {} : { position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '3' }}>
                <Header />
            </div>
            <div style={size.width >= 992 ? {} : { position: 'relative', top: '100px' }}>
                <Slider />
                <CosmosPolicies />
                <CosmosCategories />
                <div style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': '60% 40%',
                    'backgroundColor': '#424242',
                    'margin': '40px',
                    'padding': '40px 0'
                } : {}}>
                    <CosmosFeaturedProducts />
                    <div>
                        <CosmosSpecialDeals />
                        <CosmosSponsoredAds />
                    </div>
                </div>
                <CosmosSubCategories />
                <CosmosProducts />
                <CosmosSportsCategories />
                <CosmosAbout />
                <CosmosAccessories />
                <CosmosBrands />
                <CosmosFacilites />
                <CosmosNews />
                <Footer />
            </div>
            {size.width >= 992 ? null : <BottomNavigation />}
        </div>
    )
}
