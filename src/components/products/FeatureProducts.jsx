import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaArrowsSpin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Ratings from "../Ratings";
import { useDispatch, useSelector } from "react-redux";
import { add_to_card, add_to_compare, add_to_wishlist, messageClear } from "../../store/reducers/cardReducer";
import { toast } from "react-hot-toast";
import Skeleton from "../Skeleton";

const FeatureProducts = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage, comparelist_count } = useSelector((state) => state.card);
  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  const add_wishlist = (pro) => {
    if (userInfo) {
      dispatch(
        add_to_wishlist({
          userId: userInfo.id,
          productId: pro._id,
          name: pro.name,
          price: pro.price,
          image: pro.images[0],
          discount: pro.discount,
          rating: pro.rating,
          slug: pro.slug,
        })
      );
    } else {
      navigate("/login");
    }
  };

  const add_compare = (pro) => {
    if (userInfo) {
      if (comparelist_count >= 4) {
        toast.error("Already Added Many Items");
      } else {
        dispatch(
          add_to_compare({
            userId: userInfo.id,
            productId: pro._id,
            name: pro.name,
            price: pro.price,
            image: pro.images[0],
            discount: pro.discount,
            rating: pro.rating,
            slug: pro.slug,
            colorArray: pro.colorArray,
          })
        );
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="w-[85%] sm:w-[96%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[100px] h-[4px] bg-[#7fad39] mt-4"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-2">
        {products
          ? products.map((p, i) => (
              <div
                className="border group transition-all duration-500 hover:shadow-md z-0 bg-slate-50 rounded-lg"
                key={i}
              >
                <div className="relative overflow-hidden">
                  {p.discount ? (
                    <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-pink-400 font-semibold text-xs right-2 top-2">
                      {p.discount}
                    </div>
                  ) : (
                    ""
                  )}
                  <img
                    onClick={() => navigate(`/product/details/${p.slug}`)}
                    className="sm:h-[180px] w-full h-[240px] cursor-pointer rounded-lg"
                    src={`${p.images[0]}`}
                    alt="img"
                  />
                <ul className="flex flex-col transition-all duration-500 justify-start items-start gap-2 z-50 mt-0 sm:mt-4">
                <li
                  onClick={() => add_card(p._id)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded shadow hover:bg-blue-400 hover:text-white absolute -left-10 top-10 xs:top-[4px] sm:top-[4px] group-hover:left-5 transition-all duration-300"
                >
                  <AiOutlineShoppingCart />
                </li>
                <li
                  onClick={() => add_wishlist(p)}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded shadow hover:bg-blue-400 hover:text-white absolute -left-10 top-[88px] xs:top-[50px] sm:top-[50px] group-hover:left-5 transition-all duration-500"
                >
                  <AiFillHeart />
                </li>
                <li
                  onClick={() => add_compare(p)}
                  className="w-[38px] h-[38px] cursor-pointer z-50 bg-white flex justify-center items-center rounded shadow hover:bg-blue-400 hover:text-white absolute -left-10 top-[136px] xs:top-[94px] sm:top-[94px] group-hover:left-5 transition-all duration-700"
                >
                  <FaArrowsSpin />
                </li>
                <Link
                  to={`/product/details/${p.slug}`}
                  className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded shadow hover:bg-blue-400 hover:text-white absolute -left-10 top-[184px] xs:top-[138px] sm:top-[138px] group-hover:left-5 transition-all duration-1000"
                >
                  <FaEye />
                </Link>
                </ul>
                </div>
                <div
                  onClick={() => navigate(`/product/details/${p.slug}`)}
                  className="py-1 cursor-pointer text-slate-600 px-2"
                >
                  <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center">
                    <text className="font-medium text-sm sm:text-md">{p.name}</text>
                  </div>
                  <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center">
                    <span className="text-xs sm:text-md font-bold">Ksh {p.price}</span>
                  </div>
                  <div className="flex mt-0 sm:mt-1 mb-0 sm:mb-1">
                  <Ratings className="text-md sm:text-lg" ratings={p.rating} />
                  </div>
                </div>
                {/* 
                <div
                  onClick={() => navigate(`/product/details/${p.slug}`)}
                  className="py-3 cursor-pointer text-slate-600 px-2"
                >
                  <h2 className="font-medium">{p.name}</h2>
                  <div className="flex justify-start items-center gap-3">
                    <span className="text-lg  font-bold">Ksh{p.price}</span>
                    <div className="flex">
                      <Ratings ratings={p.rating} />
                    </div>
                  </div>
                </div>*/}
              </div>
            ))
          : Array.from({ length: 12 }).map((_, i) => <Skeleton styles={"h-[260px] w-full "} key={i} />)}
      </div>
    </div>
  );
};

export default FeatureProducts;
