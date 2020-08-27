import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useWindowSize } from '../../../utils/useWindowSize';

import { Icon } from '../../../building-blocks/atoms/Icon/Icon';
import { Input } from '../../../building-blocks/atoms/Input/Input';
import { Label } from '../../../building-blocks/atoms/Label/Label';
import Icons from '../../../building-blocks/organisms/Icons/Icons';
import Policies from '../../../building-blocks/organisms/Policies/Policies';

import cosmosLogo from '../../../assets/images/common-component-assets/cosmosLogo/cosmosLogoS.png';
import cosmosShield from '../../../assets/images/common-component-assets/cosmosShield/cosmosShield.png';
import cosmosFooterRightArrow from '../../../assets/images/common-component-assets/cosmosFooterRightArrow/cosmosFooterRightArrow.png';
import cosmosFooterDownArrow from '../../../assets/images/common-component-assets/cosmosFooterDownArrow/cosmosFooterDownArrow.png';

import {
    policies,
    appStoreIcons,
    footerLinks,
    socialIcons,
    paymentIcons
} from '../../../mocks/common-component-mocks/FooterJsonData';

import '../../../assets/styles/common-component-styles/Footer.scss';

export default function Footer() {
    const size = useWindowSize();
    const [ linkId, setLinkId ] = useState(0);

    const handleLinkId = (id) => {
        if(id !== linkId) {
            setLinkId(id);
        } else {
            setLinkId(0);
        }
    }

    return (
        <div className="footerContainer">
            <div className="footerTop">
                <div className="footerPolicies">
                    <Policies policies={policies} />
                </div>
                <div className="footerAppStores">
                    <Label label={'Try our Mobile experience on'} />
                    <Icons icons={appStoreIcons} />
                </div>
            </div>
            <div className="footerMiddle">
                <div className="footerLinks">
                    {
                        size.width >= 992 ?
                            footerLinks.map((link, index) => {
                                return (
                                    <div key={index}>
                                        <Label label={link.title} />
                                        <div>
                                            {link.topics.map((topic, index) => {
                                                return <Router key={index}>
                                                    <Link key={index} to="/">{topic}</Link>
                                                </Router>
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        :
                            footerLinks.map((link, index) => {
                                return (
                                    <div key={index} onClick={() => handleLinkId(link.id)}>
                                        <div style={{
                                            display: 'flex', flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Label label={link.title} />
                                            {
                                                    linkId === link.id
                                                ?
                                                    <Icon src={cosmosFooterDownArrow} /> 
                                                :
                                                    <Icon src={cosmosFooterRightArrow} />
                                            }
                                        </div>
                                        {linkId === link.id && <div>
                                            {link.topics.map((topic, index) => {
                                                return <Router key={index}>
                                                    <Link key={index} to="/">{topic}</Link>
                                                </Router>
                                            })}
                                        </div>}
                                    </div>
                                )
                            })
                    }
                </div>
                <div className="footerSocial">
                    <div className="footerFollowUs">
                        <Label label={'FOLLOW US'} />
                        <Icons icons={socialIcons} />
                    </div>
                    <div className="footerBlogSite">
                        <Label label={'OUR BLOG SITE'} />
                        <Input
                            type={'text'}
                            value=""
                            placeholder={'cosmosblogspot.ae'}
                            handleChangeReference={(e) => console.log(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footerSecurity">
                    <Icon src={cosmosShield} />
                    <Label label={'100% SECURE TRANSACTIONS'} />
                    <Label label={'Secure SSL Encryption'} />
                </div>
                <div className="footerPayments">
                    <Icons icons={paymentIcons} />
                </div>
                <div className="footerLogo">
                    <Icon src={cosmosLogo} />
                </div>
                <div className="footerContact">
                    <Label label={'Got queries? Call Us!'} />
                    <Label label={'+1800 753 23 56'} />
                </div>
            </div>
        </div>
    )
}
