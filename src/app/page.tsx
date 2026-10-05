import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import OtherNewsCard from "@/components/OtherNewsCard";


interface IotherSections {
  curationId: string,
  title: string,
  articles: {
    id: string,
    title: string,
    category: string,
    description: string,
    firstPublished: string,
    imageUrl: string
  }[]
}

export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0]
  const otherSections: IotherSections[] = sections.slice(1);


  return (
    <div>
      <div className="grid grid-cols-3">

        {/* main news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          {/* other news section */}
          {otherSections.map((os) => <div key={os.curationId}>
            <h1 className="font-bold border-b-2 border-b-red-400 mt-4 me-18">{os.title}</h1>

            <div className="grid grid-cols-3 gap-4 me-16">
              {os.articles.map((news) => (
                <OtherNewsCard key={news.id} news={news} />
              ))}
            </div>

          </div>)}

        </div>

        {/* most read section */}
        <div className="col-span-1 my-4">
          <div className=" border border-gray-200 rounded-xl w-fit p-4">
            <MostRead />
          </div>

        </div>

      </div>
    </div>
  );
}
