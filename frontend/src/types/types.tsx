export interface JournalCardProps {
    title: string
    date: string
    description: string
    hashtags: string[]
    isPinned?: boolean
}

export interface AddUpdateModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave?: (note: { title: string; content: string; tags: string[] }) => void
    initialData?: {
        title?: string
        content?: string
        tags?: string[]
    }
}


export interface NavbarProps {
    brandName?: string
    userName?: string
    userInitials?: string
    onSearch?: (query: string) => void
    onLogout?: () => void
}