import type {ITweet} from "@/shared/types/tweet.interface";
import Link from "next/link";
import {PAGES} from "@/src/config/pages.config";


interface Props {
    tweet: ITweet
}

export function Tweet({tweet}: Props) {
    return (
        <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
            <div className="flex items-center gap-1 mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.963 6.817H1.686l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>

                <Link href={PAGES.PROFILE(tweet.author)} className="font-semibold">@{tweet.author}</Link>
            </div>
            <p className="text-white/90">{tweet.text}</p>
        </div>
    )
}
