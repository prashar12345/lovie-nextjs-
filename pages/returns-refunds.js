import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import { categories } from "../data";

const ShippingAndDelivery = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/returns-refunds.png"
          objectFit="cover"
          layout="fill"
          alt=""
          className="object-top"
        />
        <div className="hidden  bg-coolBlack absolute w-full h-full bg-opacity-10 md:flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-cool z-20 font-semibold">
            Return & Refund
          </h1>
        </div>
        <div className="md:hidden  bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-cool z-20 font-semibold text-center">
            Return <br /> Refund <br /> Exchange
          </h1>
        </div>
      </div>
      <div className="mb-14 mt-20 md:mt-32">
        <h1 className="uppercase md:tracking-[-2.4px] font-cool text-coolBlack text-2xl md:text-5xl font-semibold mb-4 md:mb-8 text-center">
          General Information
        </h1>
        <p className="text-center max-w-[50rem] text-coolBlack mx-auto md:text-base text-sm">
          As all of products on Lovie Aurora are uniquely made and produced, so
          we respect the effort that put by creators. Lovie Aurora created four
          ways for creators to choose from based on their product features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool text-coolBlack font-medium">
              1
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-coolBlack text-sm text-center md:text-left md:text-lg mt-2">
                Accept return / exchange
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
              2
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2 text-coolBlack">
                Accept return but no exchange
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
              3
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2 text-coolBlack">
                Accept exchange but no return
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium text-coolBlack">
              4
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2 text-coolBlack">
                No return / exchange
              </h4>
            </div>
          </div>
        </div>
        <p className="leading-relaxed text-sm mt-10 text-coolBlack text-center">
          Another key reason for us to implement such a combination of return
          service is that most products would be shipped internationally, so
          when customers want to return or exchange, the shipping cost would be
          very expensive and sending the product back to creators would become
          complicated, so we leave the choice to stores.
        </p>
        {/* WAYS TO RETURN */}
        <div className="my-[5rem] md:my-[10rem] text-star mx-auto flex flex-col items-center">
          <h3 className="font-cool uppercase text-center font-semibold text-2xl md:text-5xl mb-6 text-coolBlack">
            4 WAYS TO RETURN OR EXCHANGE
          </h3>

          <div className="text-center flex flex-col items-center justify-center">
            <div className="flex items-center mt-14 justify-center text-white font-cool text-4xl bg-coolBlack rounded-full h-[6rem] w-[6rem]">
              1
            </div>
            <h4 className=" text-xl font-cool uppercase font-semibold mt-6 mb-8 text-coolBlack">
              Accept Return/Exchange
            </h4>
            <div className="max-w-[40rem]">
              <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack">
                Accept Return/Exchange, Exception May Apply.
              </p>
              <p className="leading-relaxed text-left text-sm text-coolBlack">
                Under this term, Sellers are willing to accept return/exchange
                from buyers. However, the shipping cost would be paid by
                customers, as the international shipping cost is very expensive.
                We encourage buyers to make the purchase decision carefully.
                Exception may apply.
              </p>

              <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                Your Responsibilities:
              </p>
              <p className="leading-relaxed text-left text-sm text-coolBlack">
                1. The product must be unused and in its original package, and
                you may need to take photos or videos as proof before shipping
                it out. <br />
                2. You must contact Lovie Aurora within 7 days after the package
                delivered to you. <br />
                3. You must ship out your return/exchange within 15 days after
                receiving the shipping-back label from customer service of Lovie
                Aurora. <br /> 4. If your return/exchange fails to resell or
                gets broken, Lovie Aurora reserves the right to refuse your
                return/exchange requests.
              </p>
              <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                What products can’t be returned/exchanged?
              </p>
              <p className="leading-relaxed text-left text-sm text-coolBlack">
                • Not in the new and unused conditions <br /> • Custom orders{" "}
                <br /> • Perishable products (like food) <br /> • Digital
                products <br /> • Items on sale <br /> • Intimate items (for
                health reason)
              </p>
            </div>

            <>
              <div className="flex items-center mt-14 justify-center text-white font-cool text-4xl bg-coolBlack rounded-full h-[6rem] w-[6rem]">
                2
              </div>
              <h4 className=" text-xl font-cool uppercase font-semibold mt-6 mb-8 text-coolBlack">
                Accept Return But No Exchange
              </h4>
              <div className="max-w-[40rem]">
                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack">
                  Accept Return But No Exchange, Exception May Apply.
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  Under this term, Sellers are willing to accept return, but no
                  exchange offered. However, the shipping cost would be paid by
                  customers, as the international shipping cost is very
                  expensive. We encourage buyers to make the purchase decision
                  carefully. Exception may apply. The reason for no acceptance
                  of exchange may be lack of stock and limited sizes or colors.
                </p>

                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                  Your Responsibilities:
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  1. The product must be unused and in its original package, and
                  you may need to take photos or videos as proof before shipping
                  it out. <br />
                  2. You must contact Lovie Aurora within 7 days after the
                  package delivered to you. <br /> 3. You must ship out your
                  return/exchange within 15 days after receiving the
                  shipping-back label from customer service of Lovie Aurora.
                  <br /> 4. If your return/exchange fails to resell or gets
                  broken, Lovie Aurora reserves the right to refuse your
                  return/exchange requests.
                </p>
                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                  What products can’t be returned/exchanged?
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  • Not in the new and unused conditions <br />
                  • Custom orders <br />
                  • Perishable products (like food) <br />
                  • Digital products <br />
                  • Items on sale <br />
                  • Intimate items (for health reasons) <br />
                  • Anything that the seller refuses to offer exchange. <br />
                </p>
              </div>
            </>

            <>
              <div className="flex items-center mt-14 justify-center text-white font-cool text-4xl bg-coolBlack rounded-full h-[6rem] w-[6rem]">
                3
              </div>
              <h4 className=" text-xl font-cool uppercase font-semibold mt-6 mb-8 text-coolBlack">
                Accept Exchange But No Return
              </h4>
              <div className="max-w-[40rem]">
                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack">
                  Accept Exchange But No Return, Exception May Apply.
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  Under this term, Sellers are willing to accept exchange, but
                  no return from buyers. However, the exchange shipping cost
                  would be paid by customers, as the international shipping cost
                  is very expensive. We encourage buyers to make the purchase
                  decision carefully. Exception may apply.
                </p>

                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                  Your Responsibilities
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  1. The product must be unused and in its original package, and
                  you may need to take photos or videos as proof before shipping
                  it out. <br />
                  2. You must contact Lovie Aurora within 7 days after the
                  package delivered to you. <br />
                  3. You must ship out your return/exchange within 15 days after
                  receiving the shipping-back label from customer service of
                  Lovie Aurora. <br />
                  4. If your return/exchange fails to resell or gets broken,
                  Lovie Aurora reserves the right to refuse your return/exchange
                  requests.
                </p>

                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                  What products can’t be returned/exchanged?
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  • Not in the new and unused conditions <br />
                  • Custom orders <br />
                  • Perishable products (like food) <br />
                  • Digital products <br />
                  • Items on sale <br />
                  • Intimate items (for health reasons) <br />
                  • Anything that the seller refuses to offer return. <br />
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex items-center mt-14 justify-center text-white font-cool text-4xl bg-coolBlack rounded-full h-[6rem] w-[6rem]">
                    4
                  </div>
                </div>
                <h4 className=" text-xl font-cool uppercase font-semibold mt-6 mb-8 text-coolBlack">
                  No Return/Exchange
                </h4>
                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack">
                  No Return/Exchange, Exception May Apply.
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack mb-1 mt-2">
                  Under this term, Sellers refuse to accept return/exchange from
                  buyers. The reason for this policy may be the uniqueness of
                  products or sellers’ preference.
                </p>
                <p className="leading-relaxed text-left font-medium text-lg mb-1 text-coolBlack mt-8">
                  What products can’t be returned/exchanged?
                </p>
                <p className="leading-relaxed text-left text-sm text-coolBlack">
                  • Not in the new and unused conditions <br />
                  • Custom orders <br />
                  • Perishable products (like food) <br />
                  • Digital products <br />
                  • Items on sale <br />
                  • Intimate items (for health reasons) <br />
                  • Anything that the seller refuses to offer return. <br />
                </p>
              </div>
            </>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool font-semibold uppercase text-center text-4xl mt-14 mb-10 text-coolBlack">
            Still need help?
          </h3>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default ShippingAndDelivery;
export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));

  return {
    props: { categories: categories },
  };
}
