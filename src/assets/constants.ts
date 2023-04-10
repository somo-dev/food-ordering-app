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