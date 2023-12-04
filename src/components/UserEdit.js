import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const filmsid = useParams();
  const FilmID = filmsid.id;
  const [id, idchange] = useState("");
  const [img, imgchange] = useState("");
  const [tittle, tittlechange] = useState("");
  const [episode, episodechange] = useState("");
  const [Year, yearchange] = useState("");
  const [Nation, Nationchange] = useState("");
  const [info, infochange] = useState("");
  const [clip, clipchange] = useState("");
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  useEffect(() => {
    fetch(`https://6535e207c620ba9358ecbed0.mockapi.io/projecttest/${FilmID}`)
      .then((res) => res.json())
      .then((resp) => {
        idchange(resp.id);
        imgchange(resp.img);
        tittlechange(resp.tittle);
        episodechange(resp.episode);
        yearchange(resp.Year);
        Nationchange(resp.Nation);
        infochange(resp.info);
        clipchange(resp.clip);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [filmsid]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (img.length === 0 || tittle.length === 0) {
      setValidation(true);
    } else {
      const filmdata = { img, tittle, episode, Year, Nation, info, clip };

      fetch(
        `https://6535e207c620ba9358ecbed0.mockapi.io/projecttest/${FilmID}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(filmdata),
        }
      )
        .then((res) => {
          alert("Saved successfully.");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Film Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        value={img}
                        onChange={(e) => imgchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {img.length == 0 && validation && (
                        <span className="text-danger">
                          Enter the Link of img
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Tittle</label>
                      <input
                        value={tittle}
                        onChange={(e) => tittlechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">Enter the tittle</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Episode</label>
                      <input
                        value={episode}
                        onChange={(e) => episodechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">Enter the episode</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Year</label>
                      <input
                        value={Year}
                        onChange={(e) => yearchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">Enter the year</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Nation</label>
                      <input
                        value={Nation}
                        onChange={(e) => Nationchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">Enter the nation</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>info</label>
                      <input
                        value={info}
                        onChange={(e) => infochange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">
                          Enter the information
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>clip</label>
                      <input
                        value={clip}
                        onChange={(e) => clipchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {tittle.length == 0 && validation && (
                        <span className="text-danger">Enter the Link</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/login" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
