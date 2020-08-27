import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Slider from './Slider/Slider';
import CosmosPolicies from './CosmosPolicies/CosmosPolicies';
import CosmosCategories from './CosmosCategories/CosmosCategories';
import CosmosFeaturedProducts from '../product-component/CosmosFeaturedProducts/CosmosFeaturedProducts';
import CosmosSpecialDeals from './CosmosSpecialDeals/CosmosSpecialDeals';
import CosmosSponsoredAds from './CosmosSponsoredAds/CosmosSponsoredAds';
import CosmosProducts from '../product-component/CosmosProducts/CosmosProducts';
import CosmosSubCategories from './CosmosSubCategories/CosmosSubCategories';
import CosmosSportsCategories from './CosmosSportsCategories/CosmosSportsCategories';
import CosmosAbout from './CosmosAbout/CosmosAbout';
import CosmosAccessories from './CosmosAccessories/CosmosAccessories';
import CosmosBrands from './CosmosBrands/CosmosBrands';
import CosmosFacilites from './CosmosFacilities/CosmosFacilities';
import CosmosNews from './CosmosNews/CosmosNews';
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
