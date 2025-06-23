import React from 'react'
import type { JournalCardProps } from '@/types/types';
import journalCardsData from './components/dummyData';
import { data } from 'react-router';
import NoteCard from './components/NoteCard';


interface Props { }

function Dashboard(props: Props) {
    const { } = props

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

        </div>
    )
}

export default Dashboard
