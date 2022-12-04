import { useAppSelector } from "../../app/hooks";
import { Posts } from "../../components/posts/Posts";
import { Share } from "../../components/share/Share";
import { Stories } from "../../components/stories/Stories";
import { selectDarkMode } from "../../themeRedux/themeSlice";

export const Home = () => {
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <div className={`home ${darkMode ? "darkMode" : ""}`}>
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};
