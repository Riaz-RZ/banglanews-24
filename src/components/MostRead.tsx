import Link from "next/link";

interface Inews {
    id: string,
    rank: number,
    title: string
}

const MostRead = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news: Inews[] = data.data
    console.log(news);
    return (
        <div>
            <h2 className="font-bold text-2xl">সর্বাধিক পঠিত</h2>
            {news.map((n) =>

                <div className="p-1.5 flex" key={n.id}>
                    <p className="text-red-500 me-2 font-bold">{n.rank}</p>
                    <Link href={`/news/${n.id}`}>
                        <h2 className="font-bold">{n.title}</h2>
                    </Link>
                </div>

            )}
        </div>
    );
};

export default MostRead;