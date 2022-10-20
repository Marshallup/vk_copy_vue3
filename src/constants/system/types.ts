import { WHITE_THEME, DARK_THEME, SYSTEM_THEME } from '@/enums/system'

export type TTheme =
  | typeof WHITE_THEME
  | typeof DARK_THEME
  | typeof SYSTEM_THEME

export type TThemes = [
  typeof WHITE_THEME,
  typeof DARK_THEME,
  typeof SYSTEM_THEME
]
