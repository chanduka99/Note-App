"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search } from "lucide-react"

interface NavbarProps {
    brandName?: string
    userName?: string
    userInitials?: string
    onSearch?: (query: string) => void
    onLogout?: () => void
}

export function Navbar({
    brandName = "Notes",
    userName = "Test User",
    userInitials = "TU",
    onSearch,
    onLogout,
}: NavbarProps) {
    return (
        <nav className="w-full bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
                {/* Brand/Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-lg font-semibold text-gray-900">{brandName}</h1>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search Notes"
                            className="w-full bg-gray-50 border-gray-200 pl-4 pr-10 py-2 text-sm placeholder:text-gray-500 focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                            onChange={(e) => onSearch?.(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* User Profile Section */}
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gray-100 text-gray-700 text-sm font-medium">{userInitials}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-700 font-medium">{userName}</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 p-0 h-auto font-normal"
                            onClick={onLogout}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
