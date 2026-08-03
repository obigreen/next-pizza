import type { Metadata } from 'next';
import {Profile} from "@/src/app/(public)/user/[username]/Profile";

export const metadata: Metadata = {
    title: 'profile'
}

export default function ProfilePage() {
    return (
        <div><Profile/></div>
    )
}