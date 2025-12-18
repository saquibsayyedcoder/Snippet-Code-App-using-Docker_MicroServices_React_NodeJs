import { useParams } from "react-router-dom";
import CreateComment from "./CreateComment";

const SnippetDetails = () => {
  const { id } = useParams(); // ✅ NOW EXISTS

  return (
    <div>
      <h2>Snippet Details</h2>

      {/* ✅ Pass snippetId correctly */}
      <CreateComment snippetId={id} />
    </div>
  );
};

export default SnippetDetails;
