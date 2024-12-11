import authorPic from "../../assets/images/img.jpg";

const AuthorCard = ({ name, _id, createdAt, email }) => {
  return (
    <div className="text-white author-card drop-shadow-md">
      <img
        src={authorPic}
        alt="author Pic"
        className="w-28 mb-3 h-28 rounded-md shadow"
      />
      <h2>{name}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
        corrupti natus labore, iste enim vero adipisci nisi nihil a.
      </p>
    </div>
  );
};

export default AuthorCard;
