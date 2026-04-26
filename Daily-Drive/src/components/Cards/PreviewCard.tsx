import { BaseCard } from './BaseCard';
import { Disc, Podcast } from 'lucide-react';

interface PreviewCardProps {
    title: string;
    artist: string;
    album?: string;
}

const PreviewCard = ({ title, artist, album }: PreviewCardProps) => {
    return (
        <BaseCard className="py-4 px-6 gap-5">
            <img
                src={album ? 'src/assets/placeholderSong.png' : 'src/assets/placeholderPodcast.png'}
                alt="Preview image"
            />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col mr-10">
                    <h1 className="text-white font-light text-2xl">{title}</h1>
                    <p className="text-grey-400 font-light italic">
                        {artist}
                        {album ? ' • ' + album : ''}
                    </p>
                </div>
                <div className="text-white">
                    {album ? <Disc size={40} /> : <Podcast size={40} />}
                </div>
            </div>
        </BaseCard>
    );
};

export { PreviewCard };
