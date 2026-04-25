import { BaseCard } from './BaseCard';
import { Button } from '../shadcn/ui/button';
import { Trash2, Pencil } from 'lucide-react';

interface PlaylistCardProps {
    title: string;
    description: string;
}

const PlaylistCard = ({ title, description }: PlaylistCardProps) => {
    return (
        <BaseCard className="py-4 px-6 gap-5">
            <img src="src\assets\placeholder.png" alt="Playlist image" />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col mr-10">
                    <h1 className="text-white font-light text-2xl">{title}</h1>
                    <p className="text-grey-400 font-light italic">{description}</p>
                </div>
                <div className="flex flex-row">
                    <Button
                        variant={'ghost'}
                        size={'icon-md'}
                        aria-label="Edit button"
                        className="cursor-pointer"
                    >
                        <Pencil size={35} />
                    </Button>
                    <Button
                        variant={'destructive'}
                        size={'icon-md'}
                        aria-label="Delete button"
                        className="cursor-pointer"
                    >
                        <Trash2 size={35} />
                    </Button>
                </div>
            </div>
        </BaseCard>
    );
};

export { PlaylistCard };
