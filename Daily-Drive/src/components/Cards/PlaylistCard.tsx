import { BaseCard } from './BaseCard';
import { Button } from '../shadcn/ui/button';
import { Trash2, Pencil } from 'lucide-react';

interface PlaylistCardProps {
    title: string;
    description: string;
}

const PlaylistCard = ({ title, description }: PlaylistCardProps) => {
    return (
        <BaseCard>
            <img src="src\assets\placeholder.png" />
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="flex flex-row">
                    <Button>
                        <Pencil />
                    </Button>
                    <Button variant={'destructive'}>
                        <Trash2 />
                    </Button>
                </div>
            </div>
        </BaseCard>
    );
};
