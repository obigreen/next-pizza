import type {Metadata} from 'next';
import {Explore} from "@/src/app/(public)/explore/Explore";
import {Suspense} from "react";


export const metadata: Metadata = {
    title: "Explore",
}

export default function ExplorePage() {

    return (

        //Suspense здесь из-за useSearchParams(), лоадер до прогрузки страницы компонента
        <Suspense>
            <Explore/>
        </Suspense>
    )
}
