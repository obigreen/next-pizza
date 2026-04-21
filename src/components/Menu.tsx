'use client'

import {usePathname} from "next/navigation";
import {MENU} from "@/src/components/menu.data";
import {MenuItem} from "@/src/components/MenuItem";


export function Menu() {

    const pathname = usePathname();

    return (
        <nav className="flex gap-6 text-sm">
            {MENU.map(menuItem => {
                return (
                    <MenuItem key={menuItem.name} menuItem={menuItem} isActive={pathname === menuItem.href}/>
                )
            })}
        </nav>
    )
}