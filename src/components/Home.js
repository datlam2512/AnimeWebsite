import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Login.css'
export default function Home() {
  const navigate = useNavigate()
  const LoadEdit = (id) => {
    navigate(`/home/edit/${id}`);
  };

  const Removefunction = id => {
    if (window.confirm(`Are you sure you want to remove ${id}?`)) {
      fetch(`https://65450fc75a0b4b04436d8f9a.mockapi.io/ListFilm/${id}`, {
        method: "DELETE"
      })
        .then(res => {        
          alert("Remove successfully.")
          window.location.reload()
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
  const [data, setData] = useState([])
  const baseUrl = `https://65450fc75a0b4b04436d8f9a.mockapi.io/ListFilm`
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response)
      .then(e => e.json())
      .then(e => setData(e))
      .catch(error => console.log(error.message))
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="card-tittle">
          <h2 className="tittle-table">Film List</h2>
        </div>
        <div className="table-content">
          <div className="divbtn">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/home/create"
              className="btn add"
            >
             <button className="add">Add new</button>
            </Link>
          </div>
          <table className="table">
            <thead className="head-table">
              <tr>
                <td>ID</td>
                <td>Tittle</td>
                <td>Episode</td>
                <td>Year</td>
                <td>Nation</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="table-body">
              {data.map(item => (
                <tr key={item.id}>
                  <td className="table-info">{item.id}</td>
                  <td className="table-info">{item.tittle}</td>
                  <td className="table-info">{item.episode}</td>
                  <td className="table-info">{item.Year}</td>
                  <td className="table-info">{item.Nation}</td>
                  <td className="table-info">
                    <a
                      onClick={() => {
                        LoadEdit(item.id)
                      }}
                      className="btn  edit"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        Removefunction(item.id)
                      }}
                      className="btn  remove"
                    >
                      Remove
                    </a>              
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
