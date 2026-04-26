import { CircleX } from 'lucide-react';
import { Button } from '../../shadcn/ui/button';

interface PlaylistSquareProps {
    onRemove: () => void;
    image: string;
}

const PlaylistSquare = ({ onRemove, image }: PlaylistSquareProps) => {
    return (
        <div className="relative flex group">
            <img
                src={image ? image : 'src/assets/placeholderPodcast.png'}
                alt="Podcast placeholder image"
            />
            <Button
                variant={'destructive'}
                size={'icon-xs'}
                className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out text-grey-100"
                onClick={onRemove}
            >
                <CircleX />
            </Button>
        </div>
    );
};

export { PlaylistSquare };
