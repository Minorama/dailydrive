import { Disc, CircleX } from 'lucide-react';
import { Button } from '../../shadcn/ui/button';

interface SongSquareProps {
    onRemove: () => void;
}

const SongSquare = ({ onRemove }: SongSquareProps) => {
    return (
        <div className="relative flex group">
            <img src="src\assets\placeholderSong.png" alt="Podcast placeholder image" />
            <Disc className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Button
                variant={'destructive'}
                size={'icon-xs'}
                className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out text-grey-100"
                onClick={onRemove}
                aria-label="Remove button"
            >
                <CircleX />
            </Button>
        </div>
    );
};

export { SongSquare };
