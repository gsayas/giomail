import type {MetaFunction} from "@remix-run/node";
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
    return [
        {title: "GioMail"},
        {name: "description", content: "GioMail - A Simple Email Client"},
    ];
};

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-16">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Welcome to GioMail
                    </h1>
                </header>
                <p className="leading-6 text-gray-700 dark:text-gray-200">
                    Hello World <Button>Click me</Button>
                </p>
            </div>
        </div>
    );
}
