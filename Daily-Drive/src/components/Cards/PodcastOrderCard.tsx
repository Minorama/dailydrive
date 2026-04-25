import { BaseCard } from './BaseCard';
import { Button } from '../shadcn/ui/button';
import { Trash2, Menu, Pin } from 'lucide-react';

interface PodcastOrderCard {
    title: string;
    description: string;
    pinned: boolean;
}
const PodcastOrderCard = ({ title, description, pinned }: PodcastOrderCard) => {
    return (
        <BaseCard className="py-4 px-6 gap-5">
            <img src="src\assets\placeholder.png" alt="Podcast image" />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col mr-10">
                    <h1 className="text-white font-light text-2xl">{title}</h1>
                    <p className="text-grey-400 font-light italic">{description}</p>
                </div>
                <div className="flex flex-row">
                    <Button
                        variant={'destructive'}
                        size={'icon-md'}
                        aria-label="Delete button"
                        className="cursor-pointer"
                    >
                        <Trash2 size={35} />
                    </Button>
                    <Button
                        variant={'ghost'}
                        size={'icon-md'}
                        aria-label="Pin button"
                        className={`cursor-pointer ${pinned ? 'text-white' : 'rotate-45'}`}
                    >
                        <Pin size={35} />
                    </Button>
                    <Button
                        variant={'ghost'}
                        size={'icon-md'}
                        aria-label="Reorder button"
                        className="cursor-ns-resize"
                    >
                        <Menu size={35} />
                    </Button>
                </div>
            </div>
        </BaseCard>
    );
};

export { PodcastOrderCard };
