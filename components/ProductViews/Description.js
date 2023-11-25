import React from "react";

const Description = ({ description, image }) => {
  return (
    <>
      {/* <Paragraph size="text-base" text={description} /> */}
      <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
      {image?.length ? (
        <div className="flex items-center justify-center relative w-[100%] h-[250px] sm:w-[80%] sm:h-[350px] lg:w-[70%] lg:h-[430px]  transition">
          <img
            src={`http://74.208.206.18:4600/images/products/${image}`}
            alt="descriptionImage"
          />
        </div>
      ) : null}
    </>
  );
};

export default Description;
