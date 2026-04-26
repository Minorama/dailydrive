interface SongSquareProps {
    onRemove: () => null;
}

const SongSquare = ({ onRemove }: SongSquareProps) => {
    return (
        <div>
            <p> This is a new component</p>
        </div>
    );
};

export { SongSquare };
