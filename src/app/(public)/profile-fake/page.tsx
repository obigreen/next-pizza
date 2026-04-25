import type { Metadata } from 'next';
import {ProfileFake} from "@/src/app/(public)/profile-fake/ProfileFake";

export const metadata: Metadata = {
    title: 'ProfileFake',
}


export default function ProfileFakePage() {
    return  <ProfileFake />
}
