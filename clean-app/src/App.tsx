




import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


export function App()
{
    return (
        <main className='flex min-h-screen items-center justify-center bg-red-200'>
            <Card className='w-full max-w-2xl '>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    create your account
                  </CardTitle>
                  <CardDescription>
                    start with your personal informantion,
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className='space-y-4'>
                    <div className='space-y-2'>
                      <Label htmlFor="firstName"> First name</Label>
                    </div>
                  </form>
                </CardContent>
            </Card>
        </main>
    );
}
export default App;
