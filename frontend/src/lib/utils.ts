import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Session from 'supertokens-web-js/recipe/session';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function doesSessionExist(): Promise<boolean> {
  if (await Session.doesSessionExist()) {
    // user is logged in
    return true;
  } else {
    // user has not logged in yet
    return false;
  }
}