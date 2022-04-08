import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const perPage = 5;

  const fetchData = (page, perPage) => {
    setLoading(true);
    setErr(false);
    axios("https://www.themealdb.com/api/json/v1/1/categories.php", {
      method: "GET",
      params: {
        _page: page,
        _limit: perPage,
      },
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setData([]);
        setErr(true);
      });
  };

  useEffect(() => {
    fetchData(page, perPage);
  }, [page, perPage]);
  console.log(data);
  return (
    <div className="App">
      {err && <div className="error"> Something went wrong! Try again </div>}
      <div>
        {data.map((item) => (
          <div style={{ display: "flex", gap: "1rem" }} key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      {loading && <div>...loading</div>}
      <button
        disabled={loading || page === 1}
        onClick={() => setPage((page) => page - 1)}
      >
        PREV
      </button>
      <button disabled={loading} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
      <div>Current page: {page}</div>
    </div>
  );
}
