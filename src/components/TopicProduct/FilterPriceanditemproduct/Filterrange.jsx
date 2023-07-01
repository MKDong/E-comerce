import React, { useRef, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterrange, newarrrange1 } from "../../../redux/Slicesort";

function Filterrange() {
  const [rangemin, setRangermin] = useState(0);
  const [rangemax, setRangermax] = useState(30000000);
  const input1 = useRef();
  const input2 = useRef();
  const shootpricenew = useDispatch();
  const track = useRef();
  const mingap = 0;
  const getarrproducts = useSelector((item) => item.sort.arrprouduct);
  const shootarrapi = useDispatch();

  function shootprice() {
    shootpricenew(filterrange({ rangemin, rangemax }));
    let arrfilter = getarrproducts.filter((item) => {
      if (
        rangemin < item.attributes.price &&
        item.attributes.price < rangemax
      ) {
        return item;
      } else {
        return null;
      }
    });

    shootarrapi(newarrrange1(arrfilter));
  }
  function oninput1(e) {
    let value1 = input1.current.value;
    let value2 = input2.current.value;
    if (parseInt(value2) - parseInt(value1) <= mingap) {
      value1 = parseInt(value2) - mingap;
    }
    e.target.value = value1;
    setRangermin(parseInt(e.target.value));
    fillcolor();
  }

  function oninput2(e) {
    let value1 = input1.current.value;
    let value2 = input2.current.value;
    if (parseInt(value2) - parseInt(value1) <= mingap) {
      value2 = parseInt(value1) + mingap;
    }
    e.target.value = value2;
    setRangermax(parseInt(e.target.value));
    fillcolor();
  }
  function fillcolor() {
    let value1 = input1.current.value;
    let value2 = input2.current.value;
    const percent1 = (value1 / input1.current.max) * 100;
    const percent2 = (value2 / input1.current.max) * 100;

    track.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  return (
    <div>
      <div className="filterrange">
        <div>
          <div ref={track}></div>
        </div>
        <input
          type="range"
          ref={input1}
          onInput={(e) => {
            oninput1(e);
          }}
          min={0}
          max={100000000}
          value={rangemin}
        />
        <input
          type="range"
          ref={input2}
          onInput={(e) => {
            oninput2(e);
          }}
          min={0}
          max={100000000}
          value={rangemax}
        />
      </div>
      <button onClick={shootprice}>Lọc</button>
      <div className="valuefilter">
        <div>
          <span className="value1">
            {rangemin.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          <span>-</span>
          <span className="value2">
            {rangemax.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filterrange;
