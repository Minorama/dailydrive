import { Button } from '@/components/shadcn/ui/button';
import { Title } from '@/components/Titles/Title/Title';

const Onboarding = () => {
    return (
        <div className="flex min-h-screen h-full w-full justify-center items-center">
            <div className="flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Title>Daily Drive</Title>
                    <Title>Reloaded</Title>
                </div>
                <div>
                    <Button size={'lg'} variant={'default'}>
                        Begin
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { Onboarding };
