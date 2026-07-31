import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const NAME_TITLES = /^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s+/i

export function getInitials(name: string) {
  const words = name.replace(NAME_TITLES, "").trim().split(/\s+/)
  const first = words[0]?.[0] ?? ""
  const last = words.length > 1 ? words[words.length - 1][0] : ""
  return (first + last).toUpperCase()
}
