import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,
};

export default {
    items: [
        {
            id: 'navigation',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: icons['HomeOutlinedIcon'],
                    url: '/dashboard/default',
                },
            ],
        },
    ],
};
