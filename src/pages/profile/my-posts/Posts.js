import style from "../profile.module.css";

export default function Posts() {
  let posts = [
    { id: 1, post: "Hi, need to talk", likeCount: "10" },
    { id: 2, post: "It's my first post", likeCount: "4" },
  ];
  return (
    <div className={style.posts}>
      {posts.map((el) => (
        <h5>{el.post}</h5>
      ))}
    </div>
  );
}
