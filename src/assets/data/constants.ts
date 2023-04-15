import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const navMenu = [
    {
        name: "Search",
        link: "/search"
    },
    {
        name: "Offers",
        link: "/offers"
    },
    {
        name: "Help",
        link: "/help"
    },
    {
        name: "Sign In",
        link: "/signin"
    },
    {
        name: "Cart",
        link: "/checkout"
    },
]

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -4,
        top: 7,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
export const responsive2 = {
    desktop: {
        breakpoint: { max: 3000, min: 800 },
        items: 5,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 3,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
export const imageStore = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";