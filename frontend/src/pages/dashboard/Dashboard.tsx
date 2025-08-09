import React, { useState } from 'react'
import type { JournalCardProps } from '@/types/types';
import journalCardsData from './components/dummyData';
import NoteCard from './components/NoteCard';
import { AddUpdateModal } from './components/addUpdateModal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';


interface Props { }

function Dashboard(props: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { } = props

    const handleSaveNote = (note: { title: string; content: string; tags: string[] }) => {
        console.log("New note:", note)
        // Here you would typically save the note to your state or database
    }
    return (
        <div className=' flex justify-center items-center mt-[10vh] mx-[5vw] '>
            <div className='md:grid md:grid-cols-3 flex flex-col gap-5'>
                {journalCardsData.map((data, index) => (
                    <NoteCard
                        key={index}
                        title={data.title}
                        date={data.date}
                        description={data.description}
                        hashtags={data.hashtags}
                        isPinned={data.isPinned}
                    />)
                )}
            </div>
            {/* Add Note Button */}
            <div className="fixed bottom-6 right-6 z-10">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                    <Plus className="h-6 w-6" />
                </Button>
            </div>
            <AddUpdateModal open={isModalOpen} onOpenChange={setIsModalOpen} onSave={handleSaveNote} />
        </div>
    )
}

export default Dashboard
