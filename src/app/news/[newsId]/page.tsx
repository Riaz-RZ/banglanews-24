import Image from "next/image";
import { notFound } from "next/navigation";

interface Inews {
    title: string;
    imageUrl: string;
    text: string;
}

const NewsDetails = async ({
    params,
}: {
    params: Promise<{ newsId: string }>;
}) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`
    );

    if (res.status === 404) {
        notFound();
    }

    if (res.status === 415) {
        const data = await res.json();

        if (data?.error?.code === "UNSUPPORTED_CONTENT") {
            return (
                <div className="py-4">
                    <h1 className="font-bold text-2xl">
                        লাইভ সংবাদ
                    </h1>
                    <p className="py-4">
                        এই সংবাদটি লাইভ আপডেট হিসেবে প্রকাশিত হয়েছে।
                    </p>
                    <a
                        className="text-red-600 underline"
                        href={`https://www.bbc.com/bengali/live/${newsId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        বিবিসি বাংলায় লাইভ আপডেট পড়ুন
                    </a>
                </div>
            );
        }
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch article: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const news: Inews | undefined = data?.data;

    if (!news) {
        notFound();
    }

    return (
        <div>
            <h1 className="font-bold text-2xl py-4">
                {news.title}
            </h1>

            <Image
                className="py-4"
                src={news.imageUrl}
                height={600}
                width={600}
                alt={news.title}
            />

            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetails;