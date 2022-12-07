import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import noEntryImg from "../404/no-entry.png";



export const Page404 = () => {
  const darkMode = useAppSelector(selectDarkMode);
  const [count, setCount] = useState(6);
  const navigate = useNavigate();  
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/"); 
    }, 6000);

    setInterval(() => {
      setCount(count - 1); 
    }, 1000);

  },[count])
 

  return (
    <div className={`page404 ${darkMode ? "darkMode" : ""}`}>
      <h2>No Further Way</h2>
      <span>
        Stay Put You are Redirecting in{" "}
        <span
          className={`span ${darkMode ? "darkMode" : ""}`}
          style={{ color: "red", fontSize: "1.4em" }}
        >
          {count}
        </span>{" "}
        sec
      </span>
      <img
        className={`img ${darkMode ? "darkMode" : ""}`}
        src={noEntryImg}
        alt="no entry img"
      />
    </div>
  );
};
