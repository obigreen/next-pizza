import type { Metadata } from 'next';
import {Explore} from "@/src/app/(public)/explore/Explore";


export const metadata: Metadata = {
    title: "Explore",
}

export default function ExplorePage() {
    return <Explore/>
}
