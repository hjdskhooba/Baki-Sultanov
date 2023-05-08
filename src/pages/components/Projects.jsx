import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../redux/reducer/popup";
const Projects = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup);
  const projectsArr = useRef(null);
  const [tum, setTum] = useState(false);
  const projects = useSelector((state) => state.projects);
  const choosedProject = projects.find((el) => el.id == popup.id);

  useEffect(() => {
    projectsArr.current.childNodes.forEach((el) =>
      el.addEventListener("click", () => {
        setTum(!tum);
        dispatch(setPopup(el.dataset.id));
      })
    );
  }, []);

  return (
    <>
      <div
        className="app"
        style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
        onClick={(e) =>
          e.target.className == "projects-row" || e.target.className == "row"
            ? setTum(false)
            : null
        }
      >
        <div className="row">
          <div className="projects-row" ref={projectsArr}>
            {projects.map((item) => (
              <div className="tile" data-id={item.id} key={item.id}>
                <img src={item.image} alt="" className="title-img" />
                <div className="text">
                  <h1>{item.title}</h1>
                  <h2 className="animate-text"></h2>
                  <p className="animate-text">{item.description}</p>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`popup-window ${tum ? "show" : "hide"}`}>
            <a href={choosedProject.link}>
              <h3>{choosedProject.title}</h3>
              <img src={choosedProject.example} alt="" height="80%" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
