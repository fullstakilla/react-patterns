import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import '@/shared/index.css'
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={appRouter()} />
);
