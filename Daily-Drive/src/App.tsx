import './App.css';
import { TooltipProvider } from './components/shadcn/ui/tooltip';
import { Toaster } from './components/shadcn/ui/sonner';

function App() {
    return (
        <>
            <Toaster />
            <TooltipProvider>
                <div>
                    <h1>This is my app!</h1>
                </div>
            </TooltipProvider>
        </>
    );
}

export default App;
