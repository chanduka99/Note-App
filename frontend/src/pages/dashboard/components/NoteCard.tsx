import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Pin } from "lucide-react"
import type { JournalCardProps } from "@/types/types"


export default function NoteCard({ title, date, description, hashtags, isPinned = false }: JournalCardProps) {
    return (
        <Card className="relative bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1">{title}</h3>
                        <p className="text-sm text-gray-500">{date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600">
                        <Pin className={`h-4 w-4 ${isPinned ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                        {hashtags.map((tag, index) => (
                            <span key={index} className="text-sm text-gray-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600">
                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
