'use client'
import { PUBLIC_PAGES } from '@/shared/config'
import { Item } from '../Item/Item'
import './navigation.scss'

import HomeIcon from '../../../../../public/img/navigation/home.svg'
import LikesIcon from '../../../../../public/img/navigation/likes.svg'
import MessengerIcon from '../../../../../public/img/navigation/messenger.svg'
import ProfileIcon from '../../../../../public/img/navigation/profile.svg'
import SettingsIcon from '../../../../../public/img/navigation/settings.svg'

export const MENU_CONFIG = [
  {
    Icon: HomeIcon,
    link: PUBLIC_PAGES.HOME
  },
  {
    Icon: LikesIcon,
    link: PUBLIC_PAGES.LIKES
  },
  {
    Icon: MessengerIcon,
    link: PUBLIC_PAGES.MESSENGER
  },
  {
    Icon: ProfileIcon,
    link: PUBLIC_PAGES.PROFILE
  },
  {
    Icon: SettingsIcon,
    link: PUBLIC_PAGES.SETTINGS
  }
]

export function Navigation() {
  return <div className="menu-navigation">
    {MENU_CONFIG.map((item, index) => (
      <Item item={item} key={index} />
    ))}
  </div>
}