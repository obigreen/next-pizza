'use client'
//обязательно при работе с ссылками и хук usePathname() и т д (уточнить);

import {usePathname} from "next/navigation";
import {MENU} from "@/src/components/menu.data";
import {MenuItem} from "@/src/components/MenuItem";
import {match} from "path-to-regexp";


export function Menu() {

    // хук
    const pathname = usePathname();

    return (
        <nav className="flex gap-6 text-sm">
            {MENU.map(menuItem => {
                return (
                    <MenuItem key={menuItem.name}
                              menuItem={menuItem}
                              isActive={!!match(menuItem.href)(pathname)}
                    />
                )
            })}
        </nav>
    )
}


// isActive={pathname === menuItem.href} - было до библиотеки path-to-regexp