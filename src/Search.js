import React, { useState } from "react";
import data from "./data";
const Search = () => {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-table h4">search</label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} alt="img" className="card-imag-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
