const articles = [
  {
    id: 1,
    image: "/bg.png",
    title: "7 ways to decorate your home",
    link: "/blog",
  },
  {
    id: 2,
    image: "/hero.png",
    title: "Kitchen organization",
    link: "/blog",
  },
  {
    id: 3,
    image: "/bg.png",
    title: "Decor your bedroom",
    link: "/blog",
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <div className="text-right mt-4">
          <a href="/blog" className=" hover:underline">
            More Articles &rarr;
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="rounded overflow-hidden shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <a href={article.link} className=" hover:underline mt-2 block">
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
