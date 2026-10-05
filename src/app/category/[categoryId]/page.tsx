import OtherNewsCard from "@/components/OtherNewsCard";

interface News {
    id: string,
    title: string
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const CategoryNews = async ({ params }: {params:{categoryId: string}}) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews: News[] = data.data;
    return (
        <div>
            <h1 className="font-bold text-2xl border-b-2 border-red-500 my-4">{data.title}</h1>
            <div className="grid grid-cols-3 my-4 gap-10">
                {categoryNews.map(news => <OtherNewsCard key={news.id} news={news}/> )}
            </div>
        </div>
    );
};

export default CategoryNews;