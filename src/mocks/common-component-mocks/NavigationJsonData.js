import cosmosUser from '../../assets/images/common-component-assets/cosmosUser/cosmosUser.png';
import cosmosStore from '../../assets/images/common-component-assets/cosmosStore/cosmosStore.png';

import cosmosAccessories from '../../assets/images/common-component-assets/cosmosAccessories/cosmosAccessories.png';
import cosmosAllSports from '../../assets/images/common-component-assets/cosmosAllSports/cosmosAllSports.png';
import cosmosKidsCycling from '../../assets/images/common-component-assets/cosmosKidsCycling/cosmosKidsCycling.png';
import cosmosMenRunning from '../../assets/images/common-component-assets/cosmosMenRunning/cosmosMenRunning.png';
import cosmosWomenExercise from '../../assets/images/common-component-assets/cosmosWomenExercise/cosmosWomenExercise.png';
import cosmosRightArrowBlack from '../../assets/images/common-component-assets/cosmosRightArrowBlack/cosmosRightArrowBlack.png';

import cosmosHome from '../../assets/images/common-component-assets/cosmosHome/cosmosHome.png';
import cosmosCategories from '../../assets/images/common-component-assets/cosmosCategories/cosmosCategories.png';
import cosmosOffers from '../../assets/images/common-component-assets/cosmosOffers/cosmosOffers.png';
import cosmosProfile from '../../assets/images/common-component-assets/cosmosProfile/cosmosProfile.png';

export const navigationItems = [
    {
        'id': 1,
        'label': 'Sign in',
        'src': cosmosUser,
        'icon': '',
    },
    {
        'id': 2,
        'label': 'My Store',
        'src': cosmosStore,
        'icon': '',
    },
    {
        'id': 3,
        'label': 'All Sports',
        'src': cosmosAllSports,
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': [
            {
                'id': 1,
                'label': 'Aquagym',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 2,
                'label': 'Archery',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 3,
                'label': 'Badminton',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 4,
                'label': 'Baseball',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 5,
                'label': 'Basketball',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 6,
                'label': 'Billards',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 7,
                'label': 'Bodyboard',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 8,
                'label': 'Bodybuilding',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 9,
                'label': 'Boomerang, Frisbae',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 10,
                'label': 'Boxing',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 11,
                'label': 'Carrom',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 12,
                'label': 'Climbing',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 13,
                'label': 'Cricket',
                'src': '',
                'icon': cosmosRightArrowBlack,
            },
            {
                'id': 14,
                'label': 'Cross Training',
                'src': '',
                'icon': cosmosRightArrowBlack,
            }
        ]
    },
    {
        'id': 4,
        'label': 'Men',
        'src': cosmosMenRunning,
        'icon': '',
        'subNavigationItems': []
    },
    {
        'id': 5,
        'label': 'Women',
        'src': cosmosWomenExercise,
        'icon': '',
        'subNavigationItems': []
    },
    {
        'id': 6,
        'label': 'Kids',
        'src': cosmosKidsCycling,
        'icon': '',
        'subNavigationItems': []
    },
    {
        'id': 7,
        'label': 'Accessories',
        'src': cosmosAccessories,
        'icon': '',
        'subNavigationItems': []
    },
    {
        'id': 8,
        'label': 'Company',
        'src': '',
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': []
    },
    {
        'id': 9,
        'label': 'Franchise',
        'src': '',
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': []
    },
    {
        'id': 10,
        'label': 'Sports Infra',
        'src': '',
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': []
    },
    {
        'id': 11,
        'label': 'News & Events',
        'src': '',
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': []
    },
    {
        'id': 12,
        'label': 'Careers',
        'src': '',
        'icon': cosmosRightArrowBlack,
        'subNavigationItems': []
    }
];

export const bottomNavigationItems = [
    {
        'src': cosmosHome,
        'label': 'Home'
    },
    {
        'src': cosmosCategories,
        'label': 'Categories'
    },
    {
        'src': cosmosOffers,
        'label': 'Offer Zone'
    },
    {
        'src': cosmosProfile,
        'label': 'Profile'
    }
];
