import './TagList.scss';

function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagList;