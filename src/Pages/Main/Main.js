import "./Main.css";
import posts from  "../../json/posts.json"
import Post from "../../components/Post/Post";

const Start = () => {
    return (     
            <ul className="posts">
                {posts.map((post) => (
                    <li key = {post.Id}>
                        <Post   
                        key = {post.Id}
                        title = {post.Title}
                        text = {post.Text}
                        imagename = {post.Id}
                        />
                    </li>
                ))}
            </ul>
    );
}

export default Start;