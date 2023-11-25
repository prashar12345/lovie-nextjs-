import React, { useState, useEffect, useContext } from "react";
import Paragraph from "../Typography/Paragraph";
import { Add, Remove } from "react-ionicons";
import Button from "../inputs/Button";
import { Checkmark } from "react-ionicons";
import ApiClient from "../../methods/api/apiClient";
import { UserContext } from '../../pages/_app'
export const Category = ({ selected, setSelected, isclear }) => {
  const { category } = useContext(UserContext);
  const [categoryId, setcategoryId] = category
  const [myArray] = useState([])
  useEffect(() => {
    ApiClient.get('category/list/product', { page: 1 }).then(res => {
      if (res.success) {
        setoptions(res.data)
      }
    })
  }, [])
  const [open, setOpen] = useState(false);
  const [options, setoptions] = useState()
  const [categoriesList, setcategoryList] = useState([])
 
  const validateSelection = (selectedOption) => {
    return selected.some((s) => s === selectedOption);
  };
  const handlethis = (id) => {
    // console.log(id, 'this is id')


    const index = myArray.indexOf(id)
    if (index >= 0) { //if element exist in array 
      myArray.splice(index, 1)//removing element from array
    } else {
      myArray.push(id)//if element do not exist in array adding it to the array
    }
   
    let stringArr = myArray.toString()

    setcategoryId(stringArr)
   

  }
  function removeDuplicates(arr) {
    arr.filter((item, index) => {
      if (arr.indexOf(item) === index) {
        let index = arr.indexOf(item) === index
        const x = arr.splice(index, 1);
        return x
      }

    }
    );
  }
 
  return (
    <div className="border-b border-t border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Category" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4">
          {options.map((option, i) => {

            return <><input type="checkbox" id={option._id} onClick={e => handlethis(option && option._id)} /><span className="text-black ml-2">{option.name}</span><br></br></>
          })}

          {/* <div
              key={i}
              className="my-1 flex items-center gap-2 text-coolBlack"
            >
              <button
                onClick={e => handlethis(option && option._id)}
                // onClick={() => handleSelction(option._id)}
                type="button"
                className={`${validateSelection(option._id) === true
                  ? "bg-coolOrange border border-white"
                  : "border border-coolOrange"
                  } rounded h-4 w-4 flex items-center justify-center`}
              >
                <Checkmark color="white" height="14px" wdith="14px" />
              </button>
              <span className="text-coolBlack text-sm">{option.name}</span>
            </div> */}

        </div>
      )}
    </div>
  );
};
export const Style = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const { matrial } = useContext(UserContext);
  const [matrials, setmaterials] = matrial
  const [storeMat] = useState([])
  // const [options, setoptions] = useState()
  // useEffect(() => {
  //   ApiClient.get('category/list', { page: 1 }).then(res => {
  //     if (res.success) {
  //       setoptions(res.data)
  //     }
  //   })
  // }, [])
  const options = [
    "Textile",
    "Ceramic",
    "Metal",
    "Glass",
    "Wood",
    "Paper",
    "Leather",
    "Rubber",
    "Stone",
    "Pearl",
    "Plant",
    "Plastic",
    "Diatom Mud",
    "Other",
  ];

  const handlemate = (name) => {

    const index = storeMat.indexOf(name)
    if (index >= 0) { //if element exist in array 
      storeMat.splice(index, 1)//removing element from array
    } else {
      storeMat.push(name)//if element do not exist in array adding it to the array
    }

    let StringCoverted = storeMat.toString()
    setmaterials(StringCoverted)
  }
  // const validateSelection = (selectedOption) => {
  //   return selected.some((s) => s === selectedOption);
  // };

  // const handleSelction = (selectedOption) => {
  //   const inSelectedArr = selected.some((s) => s === selectedOption);

  //   if (inSelectedArr) {
  //     const filtered = selected.filter(
  //       (selection) => selection !== selectedOption
  //     );
  //     setSelected(filtered);
  //   } else {
  //     setSelected([...selected, selectedOption]);
  //   }
  // };

  return (
    <div className="border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Material" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {
        open && (
          <div>
            {
              options.map((option) => {
                console.log(option, 'checking here')
                return <><input type="checkbox" onClick={e => handlemate(option)} /><span className="text-black ml-2">{option && option}</span><br></br></>
              })
            }
          </div>
        )
      }
      {/* {open && (
        <div className="mt-4">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="my-1 flex items-center gap-2 text-coolBlack"
                    >
                      <button
                        onClick={() => handleSelction(option)}
                        type="button"
                        className={`${validateSelection(option) === true
                          ? "bg-coolOrange border border-white"
                          : "border border-coolOrange"
                          } rounded h-4 w-4 flex items-center justify-center`}
                      >
                        <Checkmark color="white" height="14px" wdith="14px" />
                      </button>
                      <span className="text-coolBlack text-sm">{option}</span>
                    </div>
                  ))}
                </div>
      )} */}
    </div>
  );
};
export const Price = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  // shortBy
  const { shortBy } = useContext(UserContext);
  const [price, setprice] = shortBy
  const [btn1, setbtn1] = useState(false)
  const [btn2, setbtn2] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    price: "",
  });
  return (
    <div className="border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Price" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4 flex flex-col items-start">
          <div className="my-1 flex items-center gap-2 text-coolBlack">
            <button
              onClick={e => { setprice('price ascending'); setbtn1(true); setbtn2(false) }}
              type="button"
              className={`${btn1
                ? "bg-coolOrange border border-white"
                : "border border-coolOrange"
                } rounded h-4 w-4 flex items-center justify-center`}
            >
              <Checkmark color="white" height="14px" wdith="14px" />
            </button>
            <span className="text-coolBlack text-sm">Low to High</span>
          </div>
          <div className="my-1 flex items-center gap-2 text-coolBlack">
            <button
              onClick={e => { setprice('price descending'); setbtn2(true); setbtn1(false) }}
              type="button"
              className={`${btn2
                ? "bg-coolOrange border border-white"
                : "border border-coolOrange"
                } rounded h-4 w-4 flex items-center justify-center`}
            >
              <Checkmark color="white" height="14px" wdith="14px" />
            </button>
            <span className="text-coolBlack text-sm">High to Low</span>
          </div>
        </div>
      )}
    </div>
  );
};
export const Size = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Size" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && <div className="mt-4">Nice Filters</div>}
    </div>
  );
};

export const Scores = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  const scoreItems = [
    { score: "HS", bg: "bg-coolOrange", border: "border-coolOrange" },
    { score: "OS", bg: "bg-coolDarkGreen", border: "border-coolDarkGreen" },
    { score: "QS", bg: "bg-coolBlack", border: "border-coolBlack" },
    { score: "CS", bg: "bg-gray-500", border: "border-gray-500" },
  ];

  return (
    <div className="text-coolBlack border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Scores" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4 flex flex-col items-start">
          {scoreItems.map((score, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`${score.bg} -ml-0.5 rounded-md p-1 text-[0.7rem] text-white`}
                >
                  {score.score}
                </div>
              </div>
              <div className="my-1 flex items-center gap-2 text-coolBlack">
                <button
                  onClick={() => setSelected(`${score.score} Low to High`)}
                  type="button"
                  className={`${selected === `${score.score} Low to High`
                    ? `${score.bg} border border-white`
                    : `border ${score.border}`
                    } rounded h-4 w-4 flex items-center justify-center`}
                >
                  <Checkmark color="white" height="14px" wdith="14px" />
                </button>
                <span className="text-coolBlack text-sm text-coolBlack">
                  Low to High
                </span>
              </div>
              <div className="my-1 flex items-center gap-2 text-coolBlack">
                <button
                  onClick={() => setSelected(`${score.score} High to Low`)}
                  type="button"
                  className={`${selected === `${score.score} High to Low`
                    ? `${score.bg} border border-white`
                    : `border ${score.border}`
                    } rounded h-4 w-4 flex items-center justify-center`}
                >
                  <Checkmark color="white" height="14px" wdith="14px" />
                </button>
                <span className="text-coolBlack text-sm ">High to Low</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = (text) => {
  const [categorySelection, setCategorySelection] = useState([]);
  const [materialSelection, setMaterialSelection] = useState([]);
  const [priceSelection, setPriceSelection] = useState("");
  const [scoreSelection, setScoreSelection] = useState("");
  const { category, matrial, shortBy } = useContext(UserContext);
  const [categoryId, setcategoryId] = category
  const [price, setprice] = shortBy
  const [isclear, setclear] = useState(false)
  const [matrials, setmaterials] = matrial
  const handleClearAll = () => {
    setcategoryId('')
    setmaterials('')
    setprice('')
    setclear(true)
    if (categoryId) {
      let arr = categoryId.split(" ")
      console.log(arr, 'my arr is here')
    }

  };
  return (
    <div className="mt-[12px]">
      <h3 className="text-md uppercase text-coolBlack font-medium mb-4">
        Filter
      </h3>
      <Category
        selected={categorySelection}
        setSelected={setCategorySelection}
        isclear={isclear}
      />
      <Style selected={materialSelection} setSelected={setMaterialSelection} />
      <Price selected={priceSelection} setSelected={setPriceSelection} />
      <Scores selected={scoreSelection} setSelected={setScoreSelection} />
      {/* <Size /> */}
      <div className="mt-10">
        <Button
          color="bg-coolDarkGreen"
          text="Clear All"
          padding="px-3 py-1"
          onClick={() => handleClearAll()}
        />
      </div>
    </div>
  );
};

export default Filters;
