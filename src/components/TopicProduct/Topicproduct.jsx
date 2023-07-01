import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { arrproductslice, newarrrange1 } from "../../redux/Slicesort";
import Filterdropdown from "./Dropdownfilter/Dropdown";
import Listtopicproduct from "./Listtopicproduct/Listtopicproduct";
import FilterPriceanditemproduct from "./FilterPriceanditemproduct/FilterPriceanditemproduct";
import { useOutletContext } from "react-router-dom";


export default function Topicproduct() {
  const a = useSelector((b) => b.sort.rangeprice);
const [x,setX]=useOutletContext()
  const [listarrpro, setListarrpro] = useState([]);
  const getvaluesort = useSelector((valueset) => valueset.sort.value);
  const sendarrproduct = useDispatch();
  const getarrnew = useSelector((item) => item.sort.newarrrange);
  const newarr = [...getarrnew];
  const param = useParams();
  const [total, setTotal] = useState(0);
  console.log('render', getarrnew);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backoffice.nodemy.vn/api/categories?filters[slug][$eq]=${param.slug}&populate[1]=products&populate[2]=products.image`
        );
        const listarr = response.data.data[0].attributes.products.data;

        setListarrpro(listarr);
        sendarrproduct(newarrrange1(listarr));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [getvaluesort,x]);

  useEffect(() => {
    sendarrproduct(arrproductslice(listarrpro));
  }, [listarrpro]);
  useEffect(() => {
    setTotal(newarr.length);
  }, [newarr]);
  newarr.sort((a, b) => {
    if (getvaluesort === "up") {
      return a.attributes.price - b.attributes.price;
    } else if (getvaluesort === "down") {
      return b.attributes.price - a.attributes.price;
    }
    return 0;
  });
  return (
    <>
      <div className="pt-[1.25rem]">
        <Filterdropdown total={total} />
        <div className="flex">
          <Listtopicproduct listproductProp={newarr} />
          <FilterPriceanditemproduct listproductProp={newarr} />
        </div>
      </div>
    </>
  );
}
