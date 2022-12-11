import { Posts } from "../../components/posts/Posts";
import { Share } from "../../components/share/Share";
import { Stories } from "../../components/stories/Stories";

export const Home = () => {
  let userId: any;

  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts userId={userId} />
    </div>
  );
};
