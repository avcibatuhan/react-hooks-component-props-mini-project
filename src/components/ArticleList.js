import Article from "./Article";

export default function ArticleList({ posts }){
    return (
        <div>
            <main>
            {posts.map((post) => {
                return (
                    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
                )
            })}
            </main>
        </div>
    );
}