import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


interface HeadLines {
    id: string,
    title: string
}

const Marquee = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news');
    const data = await res.json()
    const headLines: HeadLines[] = data.data;
    return (
        <div className="bg-red-500 text-white">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-700 py-1 px-2 font-bold">সর্বশেষ</div>
                <MarqueeText className="py-1" direction="right" duration={15}>
                    {headLines.map((n, id) => <Link className="hover:underline" href={`/news/${n.id}`} key={id}>
                        <span >
                            <span>{n.title}</span>
                            <span className="mx-3">•</span>
                        </span>
                    </Link>)}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;