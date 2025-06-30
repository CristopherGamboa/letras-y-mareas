import { Color } from "@core/enums/color"
import { NavItemIcon } from "@core/enums/nav-item-icon"

export interface NavItem {
    route: string
    label: string
    color: Color
    icon?: NavItemIcon
}
