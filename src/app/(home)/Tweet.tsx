import type {ITweet} from "@/shared/types/tweet.interface";

interface Props {
    tweet: ITweet
}

export function Tweet({tweet}: Props) {
    return (
        <div>
            <p>{tweet.text}</p>
            <span>@{tweet.author}</span>
        </div>
    )
}