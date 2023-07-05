import styles from "./article.module.css";

type ArticleProps = {
  imgUrl: string;
  date: string;
  text: string;
};

const Article = ({ imgUrl, date, text }: ArticleProps) => (
  <div className={styles.article}>
    <div className={styles.articleImage}>
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className={styles.articleContent}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
