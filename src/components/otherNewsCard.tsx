import Image from "next/image";

interface News {
    title: string,
    category: string,
    description: string,
    firstPublished: string,
    imageUrl: string
}

const otherNewsCard = ({ news } : {news: News}) => {
    return (
        <div className="flex gap-4 mt-4 ">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>

                    <Image
                        width={500}
                        height={300}
                        src={news.imageUrl}
                        alt="Shoes" />

                </figure>
                <div className="card-body">
                    <p className="text-red-500">{news.category}</p>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.description}</p>
                    <p>{new Date(news.firstPublished).toLocaleString("bn-BD", {
                        dateStyle: "full",
                        timeStyle: "medium",
                        hour12: true,
                    })}</p>
                </div>
            </div>
        </div>
    );
};

export default otherNewsCard;