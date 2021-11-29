import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import NumberFormat from "react-number-format";
// import "react-toggle/style.css";
import {Link} from 'react-router-dom';
import './chart.css'
import { borderRadius } from "@mui/system";

function Home() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);


  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        setLoading(true);
        // console.log(responseArr)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  const countries = filterCountries.map((data, i) => {
    return (
      <Card
        key={i}
        // bg={darkTheme ? "dark" : "light"}
        // text={darkTheme ? "light" : "dark"}
        // className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>누적 확진자 {data.cases}</Card.Text>
          <Card.Text>누적 사망자 {data.deaths}</Card.Text>
          <Card.Text>누적 회복자 {data.recovered}</Card.Text>
          <Card.Text>신규 확진자 {data.todayCases}</Card.Text>
          <Card.Text>신규 사망자 {data.todayDeaths}</Card.Text>
          <Card.Text>코로나 치료자 {data.active}</Card.Text>
          <Card.Text>위중증 치료자 {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  const handleDarkThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <homepage>
      <div className='main__container'>
        <div
          style={{
            backgroundColor: darkTheme ? "black" : "white",
            color: darkTheme ? "white" : "black",
          }}
        >
          <br />
          
          <br />
          <h2
            // data-tip="Last modified date: 16/05/2020 - v2.2"
            style={{ textAlign: "center" }}
          >
            COVID-19인데 왜 21까지....?
          </h2>
          <br />
          <Link to="coronagraph">
            <button
              type="button"
              className="button"
            >코로나 보러 갈래?</button>
          </Link>
          {/* <div style={{ textAlign: "center" }}>
            <Toggle
              defaultChecked={false}
              icons={{
                checked: "🌜",
                unchecked: "🌞",
              }}
              onChange={handleDarkThemeChange}
            />
          </div> */}
          <br />
          <CardGroup>
            <Card
              bg="secondary"
              text="white"
              className="text-center"
              style={{ margin: "10px", borderRadius: "16px" }}
            >
              <Card.Body>
                <Card.Title>Cases</Card.Title>
                {/* <Card.Text>{latest.cases}</Card.Text> */}
                <NumberFormat
                  value={latest.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                  style={{ fontSize: "30px" }}
                />
              </Card.Body>
              <Card.Footer>
                <small>Last updated {lastUpdated}</small>
              </Card.Footer>
            </Card>
            <Card
              bg="danger"
              text={"white"}
              className="text-center"
              style={{ margin: "10px", borderRadius: "16px" }}
            >
              <Card.Body>
                <Card.Title>Deaths</Card.Title>
                <Card.Text>
                  {" "}
                  <NumberFormat
                    value={latest.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    style={{ fontSize: "30px" }}
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated {lastUpdated}</small>
              </Card.Footer>
            </Card>
            <Card
              bg="success"
              text={"white"}
              className="text-center"
              style={{ margin: "10px", borderRadius: "16px" }}
            >
              <Card.Body>
                <Card.Title>Recovered</Card.Title>
                <Card.Text>
                  {" "}
                  <NumberFormat
                    value={latest.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    style={{ fontSize: "30px" }}
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated {lastUpdated}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <br />
          <Form>
            <Form.Group controlId="formGroupSearch">
              <Form.Control
                bg="dark"
                type="text"
                placeholder="Search for countries"
                onChange={(e) => setSearchCountries(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Columns queries={queries}>{countries}</Columns>
        </div>
      </div>
    </homepage>
  );
}

export default Home;
