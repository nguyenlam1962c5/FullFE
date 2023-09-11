import { IMenu, IPackage, TOKEN } from "@/_types_";

export const packages: IPackage[] = [
  {
    key: 'bnb-01',
    name: 'BNB PACKAGE 01',
    amount: 1000,
    bg: 'bnb-bg.png',
    icon: 'bnb.png',
    token: TOKEN.BNBT,
  },
  {
    key: 'bnb-02',
    name: 'BNB PACKAGE 02',
    amount: 2000,
    bg: 'bnb-bg.png',
    icon: 'bnb.png',
    token: TOKEN.BNBT,
  },
  {
    key: 'bnb-03',
    name: 'BNB PACKAGE 03',
    amount: 3000,
    bg: 'bnb-bg.png',
    icon: 'bnb.png',
    token: TOKEN.BNBT,
  },
  {
    key: 'usdt-01',
    name: 'USDT PACKAGE 01',
    amount: 1000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-02',
    name: 'USDT PACKAGE 02',
    amount: 2000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-03',
    name: 'USDT PACKAGE 03',
    amount: 3000,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  }
]

export const menus: IMenu[] = [
  {name: 'Tokens', url: '/token'},
  {name: 'List', url: '/list'},
  {name: 'Market', url: '/market'},
  {name: 'Auction', url: '/auction'},
]
