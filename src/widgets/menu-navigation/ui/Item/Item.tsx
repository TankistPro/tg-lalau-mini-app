'use client'

import Link from "next/link"
import { MENU_CONFIG } from "../Navigation/Navigation"

import './item.scss'
import clsx from "clsx"
import { match } from "path-to-regexp"
import { usePathname } from "next/navigation"

interface Props {
  item: typeof MENU_CONFIG[0]
}

export function Item({item: { link, Icon}}: Props) {
  const pathname = usePathname();

  return <Link href={link} className={clsx("menu-item", {inactive: !match(link)(pathname)})}>
    <Icon style={{ fill: 'url(#activeLink)' }} />
  </Link>
}

