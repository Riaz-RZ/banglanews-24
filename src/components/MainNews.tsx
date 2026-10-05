import Image from "next/image";

interface Article {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string
}

interface News {
    title: string,
    articles: Article[]
}

const MainNews = ({ news }: {news: News}) => {
    const firstNews = news.articles[0]
    const otherN = news.articles
    const otherNews = otherN.slice(1, 5)
 
    


    return (
        <div className="flex gap-4 mt-4 ">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>

                    <Image
                        width={500}
                        height={300}
                        src={firstNews.imageUrl}
                        alt="Shoes" />

                </figure>
                <div className="card-body">
                    <p className="text-red-500">{news.title}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
                {otherNews.map((on) => (
                    <div className="p-3 border-b border-gray-200" key={on.id}>
                        <p className="text-red-500">{news.title}</p>
                        <h2>{on.title}</h2>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default MainNews;