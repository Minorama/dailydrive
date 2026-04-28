import './App.css';
import { TooltipProvider } from './components/shadcn/ui/tooltip';
import { Toaster } from './components/shadcn/ui/sonner';
import { Onboarding } from './pages/onboarding/onboarding';

function App() {
    return (
        <>
            <Toaster />
            <TooltipProvider>
                <div className="bg-[url(/backdrop.png)] bg-cover bg-center min-h-screen w-full">
                    <Onboarding />
                </div>
            </TooltipProvider>
        </>
    );
}

export default App;
