import { Input } from '../shadcn/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
    placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
    return (
        <div className="relative">
            <Input placeholder={placeholder} className="pl-11" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-500" />
        </div>
    );
};

export { SearchBar };
