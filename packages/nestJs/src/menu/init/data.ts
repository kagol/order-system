export type MenuNode = {
    name: string;
    order: number;
    menuType: string;
    icon: string;
    component: string;
    path: string;
    locale: string;
    children?: MenuNode[];
    parentId?: any;
}

export const root: MenuNode[] = [
    {
        name: 'Board',
        order: 1,
        menuType: 'normal',
        icon: 'IconApplication',
        component: 'board/index',
        path: 'board',
        locale: 'menu.board',
        children: [
            {
                name: 'Home',
                order: 1,
                menuType: 'normal',
                icon: '',
                component: 'board/home/index',
                path: 'home',
                locale: 'menu.home',
            },
            {
                name: 'Work',
                order: 2,
                menuType: 'normal',
                icon: '',
                component: 'board/work/index',
                path: 'work',
                locale: 'menu.work',
            },
        ]
    },
    {
        name: 'List',
        order: 2,
        menuType: 'normal',
        icon: 'IconFiles',
        component: 'list/index',
        path: 'list',
        locale: 'menu.list',
        children: [
            {
                name: 'Table',
                order: 1,
                menuType: 'normal',
                icon: '',
                component: 'list/search-table/index',
                path: 'table',
                locale: 'menu.list.searchTable',
            },
        ]
    },
    {
        name: 'Form',
        order: 3,
        menuType: 'normal',
        icon: 'IconSetting',
        component: 'form/index',
        path: 'form',
        locale: 'menu.form',
        children: [
            {
                name: 'Base',
                order: 1,
                menuType: 'normal',
                icon: '',
                component: 'form/base/index',
                path: 'base',
                locale: 'menu.form.base',
            },
            {
                name: 'Step',
                order: 2,
                menuType: 'normal',
                icon: '',
                component: 'form/step/index',
                path: 'step',
                locale: 'menu.form.step',
            },
        ]
    },
    {
        name: 'Profile',
        order: 4,
        menuType: 'normal',
        icon: 'IconFiletext',
        component: 'profile/index',
        path: 'profile',
        locale: 'menu.profile',
        children: [
            {
                name: 'Detail',
                order: 1,
                menuType: 'normal',
                icon: '',
                component: 'profile/detail/index',
                path: 'detail',
                locale: 'menu.profile.detail',
            },
        ]
    },
    {
        name: 'Result',
        order: 5,
        menuType: 'normal',
        icon: 'IconSuccessful',
        component: 'result/index',
        path: 'result',
        locale: 'menu.result',
        children: [
            {
                name: 'Success',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'result/success/index',
                path: 'success',
                locale: 'menu.result.success',
            },
            {
                name: 'Error',
                order: 2,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'result/error/index',
                path: 'error',
                locale: 'menu.result.error',
            },
        ]
    },
    {
        name: 'Exception',
        order: 6,
        parentId: null,
        menuType: 'normal',
        icon: 'IconCueL',
        component: 'exception/index',
        path: 'exception',
        locale: 'menu.exception',
        children: [
            {
                name: '403',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'exception/403/index',
                path: '403',
                locale: 'menu.exception.403',
            },
            {
                name: '404',
                order: 2,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'exception/404/index',
                path: '404',
                locale: 'menu.exception.404',
            },
            {
                name: '500',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'exception/500/index',
                path: '500',
                locale: 'menu.exception.500',
            },
        ]
    },
    {
        name: 'User',
        order: 7,
        parentId: null,
        menuType: 'normal',
        icon: 'IconUser',
        component: 'user/index',
        path: 'user',
        locale: 'menu.user',
        children: [
            {
                name: 'Info',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'user/info/index',
                path: 'info',
                locale: 'menu.user.info',
            },
        ]
    },
    {
        name: 'Cloud',
        order: 8,
        parentId: null,
        menuType: 'normal',
        icon: 'IconDownloadCloud',
        component: 'cloud/index',
        path: 'cloud',
        locale: 'menu.cloud',
        children: [
            {
                name: 'Hello',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'cloud/hello/index',
                path: 'hello',
                locale: 'menu.cloud.hello',
            },
            {
                name: 'Contracts',
                order: 2,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'cloud/contracts/index',
                path: 'contracts',
                locale: 'menu.cloud.contracts',
            },
        ]
    },
    {
        name: 'MenuPage',
        order: 9,
        parentId: null,
        menuType: 'normal',
        icon: 'IconApp',
        component: 'menu/index',
        path: 'menuPage',
        locale: 'menu.menuPage',
        children: [
            {
                name: 'SecondMenu',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: '',
                component: 'menu/index',
                path: 'secondMenu',
                locale: 'menu.menuPage.second',
                children: [
                    {
                        name: 'ThirdMenu',
                        order: 1,
                        parentId: null,
                        menuType: 'normal',
                        icon: '',
                        component: 'menu/demo/index',
                        path: 'thirdMenu',
                        locale: 'menu.menuPage.third',
                    },
                ]
            },
        ]
    },
    {
        name: 'SystemManager',
        order: 10,
        parentId: null,
        menuType: 'normal',
        icon: 'IconTotal',
        component: 'menu/index',
        path: '',
        locale: 'menu.systemManager',
        children: [
            {
                name: 'AllMenu',
                order: 1,
                parentId: null,
                menuType: 'admin',
                icon: 'IconGrade',
                component: 'menu/info/index',
                path: 'menu/allMenu',
                locale: 'menu.menu.info',
            },
            {
                name: 'AllPermission',
                order: 1,
                parentId: null,
                menuType: 'admin',
                icon: 'IconFolderOpened',
                component: 'permission/info/index',
                path: 'permission/allPermission',
                locale: 'menu.permission.info',
            },
            {
                name: 'AllRole',
                order: 1,
                parentId: null,
                menuType: 'admin',
                icon: 'IconActivation',
                component: 'role/info/index',
                path: 'role/allRole',
                locale: 'menu.role.info',
            },
            {
                name: 'AllInfo',
                order: 1,
                parentId: null,
                menuType: 'admin',
                icon: 'IconGroup',
                component: 'userManager/info/index',
                path: 'userManager/allInfo',
                locale: 'menu.userManager.info',
            },
            {
                name: 'Local',
                order: 14,
                parentId: null,
                menuType: 'normal',
                icon: 'IconFlag',
                component: 'locale/index',
                path: 'locale',
                locale: 'menu.i18n',
            },
        ]
    },
    {
        name: 'MyOrder',
        order: 0,
        parentId: null,
        menuType: 'normal',
        icon: 'IconPurchasePlannedOrder',
        component: 'order/index',
        path: 'order',
        locale: 'menu.myOrder',
        children: [
            {
                name: 'Bought',
                order: 0,
                parentId: null,
                menuType: 'normal',
                icon: 'IconDiscountSup',
                component: 'order/bought/index',
                path: 'bought',
                locale: 'menu.myOrder.bought',
            },
            {
                name: 'CreateOrder',
                order: 1,
                parentId: null,
                menuType: 'normal',
                icon: 'IconAdd',
                component: 'order/create/index',
                path: 'order/create',
                locale: 'menu.myOrder.create',
            }
        ]
    },
]