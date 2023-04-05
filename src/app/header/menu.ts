import { MenuItem } from "./menu.model";

export const Menu: MenuItem[]=[
    {
        id: 400,
        label: 'Dashboard',
        icon: "dashboard",
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        
        },
        link: 'admin'

    },
    {
        id: 400,
        label: 'Project',
        icon: 'question_answer',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: 'project'
    },
    {
        id: 400,
        label: 'Invoices',
        icon: 'receipt',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: 'invoice'
    },
    {
        id: 400,
        label: 'Ticket',
        icon: 'support ',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: 'ticket'
    },
]