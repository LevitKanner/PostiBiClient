import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import './App.css';
import TextField from "./components/TextField";

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <div className="min-h-screen min-w-full">
                <TextField label="Username" required/>
                Home page
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
