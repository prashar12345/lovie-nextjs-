/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import { categories } from "../data/categories";

const TermsAndConditions = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative text-coolBlack w-fullobject-top">
        <h1 className="my-6 md:my-12 lg:my-14 text-3xl md:text-4xl lg:text-[48px] uppercase text-center z-20 font-bold">
          TERMS OF CONDITIONS
        </h1>
      </div>

      <div className="mb-14 text-coolBlack ">
        <div className="space-y-2 md:space-y-4 max-w-[50rem] mb-28 mx-auto text-coolBlack lg:space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="text-sm">
              Lovie Aurora values its customer and is dedicated to handpick the
              best products and offer premium customer services.
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              1. These Terms
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                • Strictly necessary cookies. These are cookies that are
                required for the operation of our website. They include, for
                example, cookies that enable you to log into secure areas of our
                website, use a shopping cart or make use of e-billing services.
              </p>
              <p className="text-sm text-[#363638] ">
                • Analytical or performance cookies. These allow us to recognise
                and count the number of visitors and to see how visitors move
                around our website when they are using it. This helps us to
                improve the way our website works, for example, by ensuring that
                users are finding what they are looking for easily.
              </p>
              <p className="text-sm text-[#363638] ">
                • Functionality cookies. These are used to recognise you when
                you return to our website. This enables us to personalise our
                content for you, greet you by name and remember your preferences
                (for example, your choice of language or region).
              </p>
              <p className="text-sm text-[#363638] ">
                • Targeting cookies. These cookies record your visit to our
                website, the pages you have visited and the links you have
                followed. We will use this information to make our website and
                the advertising displayed on it more relevant to your interests.
                We may also share this information with third parties for this
                purpose.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              2. Information About Us And How To Contact Us
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                2.1 Who we are. We are Lovie Aurora, a cross-boarder online
                marketplace with offices in Ontario, Canada. Our website is
                www.lovieaurora.com.
              </p>
              <p className="text-sm text-[#363638] ">
                2.2 How to contact us. You can contact us by using the live chat
                widget on our website or submit a case in Contact us page.
              </p>
              <p className="text-sm text-[#363638] ">
                2.3 How we may contact you. If we have to contact you, we will
                do so by telephone or by writing to you at the number or email
                address you provided to us when registering.
              </p>
              <p className="text-sm text-[#363638] ">
                2.4 "Writing" includes emails. When we use the words "writing"
                or "written" in these terms, this includes emails.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              3. Services, Registration Process And Rules
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                3.1 You must be over 18 years of age to register or login at our
                platform.
              </p>
              <p className="text-sm text-[#363638] ">
                3.2 Only one membership is permitted per individual.
              </p>
              <p className="text-sm text-[#363638] ">
                3.3 We have no control over, and will not be responsible or
                liable for: (a) any products or third party services you
                interact with, access, purchase or procure from suppliers or
                other third parties; or (b) any liability arising out of any
                transactions between you and third parties, including between
                you and suppliers or platform stores.
              </p>
              <p className="text-sm text-[#363638] ">
                3.4 It is your responsibility, not ours, to ensure that any
                products you purchase from stores comply with the laws of your
                jurisdiction, and the laws in your buyers’ jurisdiction,
                including without limitation any applicable product safety,
                product labelling and import/export laws.
              </p>
              <p className="text-sm text-[#363638] ">
                3.5 If you are signing up for the Services on behalf of your
                employer, then you represent and warrant that you have the
                authority to bind your employer to these Terms.
              </p>
              <p className="text-sm text-[#363638] ">
                3.6 We reserve the right to modify (including but not limited to
                adding or removing features), discontinue or terminate the
                services or any part thereof, or terminate your account or your
                access to the Services, for any reason without notice at any
                time. We shall not be liable to you or to any third party for
                any modification, discontinuance or termination of the services
                or any part thereof, or the termination of your account or your
                access to the services.
              </p>
              <p className="text-sm text-[#363638] ">
                3.7 We reserve the right to refuse the services to anyone for
                any reason at any time. In addition, we reserve the right, but
                are not obligated, to limit the availability of the services,
                products or services made available via a third party service
                that we make available in connection with the services.
              </p>
              <p className="text-sm text-[#363638] ">
                3.8 We reserve the right to provide the services and any other
                of our services to your competitors and make no promise of
                exclusivity in any particular market segment.
              </p>
              <p className="text-sm text-[#363638] ">
                3.9 You, and not us, are solely responsible for all of the terms
                and conditions of any transactions involving the purchase or
                sale of products, including without limitation, terms regarding
                payment, returns, warranties, shipping, handling,
                transportation, storage, liability, insurance fees, applicable
                taxes, title and license, all of which must be in accordance
                with applicable law.
              </p>

              <p className="text-sm text-[#363638] ">
                3.10 We will not be liable for any direct, indirect, incidental,
                special, consequential, punitive, extraordinary, exemplary or
                other damages whatsoever, that result from any third party
                services, products or your relationship with any supplier or
                buyer.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              4. Lovie Aurora Services
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                4.1 As soon as you register and order our services, you would be
                able to benefit from our Platform Service, which includes the
                following services (in chronological order), depending on your
                requests and feedback:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) Order Evaluation. We will evaluate your orders in terms of
                manufacture circumstance, supplier stability, quality and
                shipping preference. We will then may reach out to you if
                anything or uncertainty happened.
              </p>
              <p className="text-sm text-[#363638] ">
                (b) Preparing your order. We will need at least 3 business days
                to prepare your order including running a 360 degree check on
                the product, packaging, shipping to international shipper and
                etc.
              </p>
              <p className="text-sm text-[#363638] ">
                (c) Cancel the order. We will only allow you to cancel the order
                within the period when we are preparing your order, so you may
                have at least 48 hours to change your mind.
              </p>
              <p className="text-sm text-[#363638] ">
                (d) Shipped. Once the order status shows “shipped”, you can not
                cancel or recall the order, as all shipping would be
                international, so it is very hard to retrieve it back to our
                warehouse, However, we may arrange return/refund when you
                receive the order.
              </p>
              <p className="text-sm text-[#363638] ">
                (e) Delivery. When the parcel arrives at your country, it needs
                the custom clearance. But Lovie Aurora covers all the potential
                custom and the parcel will be handed on your house in a short
                time.
              </p>
              <p className="text-sm text-[#363638] ">
                (f) Confirm your purchase. When you receive the parvel, you have
                time to consider the decision whether you want to keep it. But
                there are some products can not be returned or exchanged, you
                will get notified on the return & exchange policy section. when
                you are purchasing.
              </p>
              <p className="text-sm text-[#363638] ">
                (g) Review. After confirmation of your delivery, you are allowed
                to rate the service by leaving a review on the product page and
                store page. You can have two reviews, one is for the store, the
                other is for the product.
              </p>
              <p className="text-sm text-[#363638] ">
                (h) Open a case. If you are not satisfied with any product or
                our service, you are welcome to open a case under your account.
                You can write down all the details and upload proof to support
                your decision. Our representative would write back to you in 24
                hours.
              </p>
              <p className="text-sm text-[#363638] ">
                (i) Live Chat. While you are purchasing, you may have some
                uncertainty and you need some profession advice from Lovie
                Aurora, then you can use the live chat widget to open a message
                box to talk with Lovie Aurora representative for ensuring your
                purchase and product information.
              </p>
              <p className="text-sm text-[#363638] ">
                (j) Pre-order. Lovie Aurora offers the pre-order products with
                limited quantity, you can order them in a discounted price and
                get them shipped out to you within the timeframe showing in the
                pre-order page.
              </p>
              <p className="text-sm text-[#363638] ">
                (k) Auction. As some products are very rare. Either it would
                take months to make a piece or it has limited in design or raw
                material, so we allow them to have it bided in public, so you
                can place your bids by reviewing the bidding information on the
                auction page.
              </p>
              <p className="text-sm text-[#363638] ">
                (l) Price fluctuation. As Lovie Aurora’s sellers are from many
                countries, so we put USD as the main currency to exchange our
                products. In order to have the most accurate calculation, we may
                change the price at the end of each quarter or year.
              </p>
              <p className="text-sm text-[#363638] ">
                (m) Shipping time. Most of transactions are international. This
                means we ship parcels globally. As the covid-19 is still active
                which may occur barriers for shipping. So if this happens,
                please be patient or contact Lovie Aurora customer service
                through live chat.
              </p>
              <p className="text-sm text-[#363638] ">
                (n) Promote us to your friends and family. Lovie Aurora is
                putting 100% endeavour to bring the best products to customer.
                This is the reason we hand picked all the products and evaluate
                each product for our customers. We value quality always beyond
                quantity.
              </p>
              <p className="text-sm text-[#363638] ">
                (o) Dispute solutions. In case there is a dispute between you,
                Lovie Aurora and its sellers, you can open a case to pursue a
                solution.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              5. Orders
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                5.1 How we will accept your order. Our acceptance of your order
                will take place when we place an order on our website and pay it
                off. After purchase, you would receive an email letter as a
                confirmation.
              </p>
              <p className="text-sm text-[#363638] ">
                5.2 If we cannot accept your order. If we are unable to accept
                your order, we will inform you by sending an email to you. Also,
                the payment would be retrieved back to your original payment
                method. If you have any unclear points, you can have the live
                chat with our representative.
              </p>
              <p className="text-sm text-[#363638] ">
                5.3 Your order number. We will assign an order number to your
                order and tell you what it is when we accept your order. It will
                help us if you can tell us the order number whenever you contact
                us about your order.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              6. Products
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                6.1 Products may vary slightly from their pictures. The images
                of the products on our website are for illustrative purposes
                only. Although we have made every effort to display the colours
                accurately, we cannot guarantee that a device's display of the
                colours accurately reflects the colour of the products. Your
                product may vary slightly from those images. Although we have
                made every effort to be as accurate as possible, because some of
                our products are handmade, all sizes, weights, capacities,
                dimensions and measurements indicated on our website have a 2%
                tolerance.
              </p>
              <p className="text-sm text-[#363638] ">
                6.2 Product packaging may vary. The packaging of the product may
                vary from that shown in images on our website.
              </p>
              <p className="text-sm text-[#363638] ">
                6.3 Making sure your measurements are accurate. If we are making
                the product to measurements you have given us you are
                responsible for ensuring that these measurements are correct.
                You can find information and tips on how to measure on our
                website or by contacting us.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              7. Your Rights To Make Changes
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                7.1 If you wish to make a change to the product you have ordered
                please contact us. We will let you know if the change is
                possible. If it is possible we will let you know about any
                changes to the price of the product, the timing of supply or
                anything else which would be necessary as a result of your
                requested change and ask you to confirm whether you wish to go
                ahead with the change.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              8. Our Rights To Make Changes
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                8.1 Minor changes to the products. We may change the product:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) to reflect changes in relevant laws and regulatory
                requirements; and
              </p>
              <p className="text-sm text-[#363638] ">
                (b) to implement minor technical adjustments and improvements,
                for example to address a security threat. These changes will not
                affect your use of the product.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              9. Providing The Products
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                9.1 Delivery costs. The costs of delivery will be free. But for
                the return/refund/exchange, the customer may need to pay the
                shipping fee to return the parcel to our warehouse.
              </p>
              <p className="text-sm text-[#363638] ">
                9.2 When we will provide the products. During the order
                preparation, we will let you know when we will provide the
                products to you. We will deliver the goods to you as soon as
                reasonably possible and in any event within 30 days after the
                day on which we accept your order.
              </p>
              <p className="text-sm text-[#363638] ">
                9.3 We are not responsible for delays outside our control. If
                our supply of the products is delayed by an event outside our
                control then we will contact you as soon as possible to let you
                know and we will take steps to minimise the effect of the delay.
                Provided we do this we will not be liable for delays caused by
                the event, but if there is a risk of substantial delay you may
                contact us.
              </p>
              <p className="text-sm text-[#363638] ">
                9.4 When you become responsible for the goods. A product which
                is goods will be your responsibility from the time we deliver
                the product to the address you gave us or you collect it from
                us.
              </p>
              <p className="text-sm text-[#363638] ">
                9.5 When you own goods. You own a product which is goods once we
                have received payment in full.
              </p>
              <p className="text-sm text-[#363638] ">
                9.6 What will happen if you do not give required information to
                us. We may need certain information from you so that we can
                supply the products to you. If so, this will have been stated in
                the description of the products on our website. We will contact
                you to ask for this information. If you do not give us this
                information within a reasonable time of us asking for it, or if
                you give us incomplete or incorrect information, we may either
                end the contract (and clause 12.2 will apply) or make an
                additional charge of a reasonable sum to compensate us for any
                extra work that is required as a result. We will not be
                responsible for supplying the products late or not supplying any
                part of them if this is caused by you not giving us the
                information we need within a reasonable time of us asking for
                it.
              </p>
              <p className="text-sm text-[#363638] ">
                9.7 Reasons we may suspend the supply of products to you. We may
                have to suspend the supply of a product to:
              </p>
              <p className="text-sm text-[#363638] ">
                9.8 We may also suspend supply of the products if you do not
                pay. If you do not pay us for the products when you are supposed
                to and you still do not make payment within 14 days of us
                reminding you that payment is due, we may suspend supply of the
                products until you have paid us the outstanding amounts. We will
                contact you to tell you we are suspending supply of the
                products. We will not suspend the products where you dispute the
                unpaid invoice. We will not charge you for the products during
                the period for which they are suspended. As well as suspending
                the products we can also charge you interest on your overdue
                payments.
              </p>
              <p className="text-sm text-[#363638] ">
                (a) deal with technical problems or make minor technical
                changes;
              </p>
              <p className="text-sm text-[#363638] ">
                (b) update the product to reflect changes in relevant laws and
                regulatory requirements;
              </p>
              <p className="text-sm text-[#363638] ">
                (c) make changes to the product as requested by you or notified
                by us to you (see clause 8).
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              10. Your Rights To Return The Product And End The Purchase
              Contract
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                10.1 You can always dismiss your purchase with us. Your rights
                when you end the contract will depend on what you have bought,
                whether there is anything wrong with it, how we are performing
                and when you decide to end the contract:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) If what you have bought is faulty or misdescribed you may
                have a legal right to end the contract (or to get the product
                repaired or replaced or a service re-performed or to get some or
                all of your money back);
              </p>
              <p className="text-sm text-[#363638] ">
                (b) If you want to end the contract because of something we have
                done or have told you we are going to do;
              </p>
              <p className="text-sm text-[#363638] ">
                (c) In all other cases (if we are not at fault and there is no
                right to change your mind).
              </p>
              <p className="text-sm text-[#363638] ">
                10.2 When you don't have the right to change your mind. You do
                not have a right to change your mind in respect of:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) services, once these have been completed.
              </p>
              <p className="text-sm text-[#363638] ">
                (b) products sealed for health protection or hygiene purposes,
                once these have been unsealed after you receive them; and
              </p>
              <p className="text-sm text-[#363638] ">
                (c) any products which become mixed inseparably with other items
                after their delivery.
              </p>
              <p className="text-sm text-[#363638] ">
                10.3 How long do I have to change my mind? How long you have
                depends on what you have ordered and how it is delivered.
              </p>
              <p className="text-sm text-[#363638] ">
                (a) Have you bought goods?, if so you can cancel your order
                within the order preparation period.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              11. Returns And Refunds
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                11.1 Tell us you want to end the purchase contract. To end the
                purchase contract with us, please let us know by either speaking
                with one of our agents by live chat or open a case under your
                account.
              </p>
              <p className="text-sm text-[#363638] ">
                11.2 Intangible products and other services. When you have
                received the design or service regarding intangible, you will
                not be eligible for a refund.
              </p>
              <p className="text-sm text-[#363638] ">
                11.3 Tangible transactions with products involved. There are
                three phases for this:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) You can cancel the order during the preparation period.
              </p>
              <p className="text-sm text-[#363638] ">
                (b) You can not cancel the order when the shipping status turns
                to “Shipped”
              </p>
              <p className="text-sm text-[#363638] ">
                (c) Not all the products can be returnable or exchangeable,
                please read the return/refund/exchange policy on specific
                products while placing your order.
              </p>
              <p className="text-sm text-[#363638] ">
                11.4 How we will refund you. We will refund you the price you
                paid for the products excluding delivery costs, by the method
                you used for payment. However, we may make deductions from the
                price, as described below.
              </p>
              <p className="text-sm text-[#363638] ">
                11.5 When your refund will be made. We will make any refunds due
                to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              12. Our Rights To End The Purchase Contract
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                12.1 We may end the contract if you break it. We may end the
                contract for a product at any time by writing to you if:
              </p>
              <p className="text-sm text-[#363638] ">
                (a) you do not make any payment to us when it is due and you
                still do not make payment within 14 days of us reminding you
                that payment is due; or
              </p>
              <p className="text-sm text-[#363638] ">
                (b) you do not, within a reasonable time of us asking for it,
                provide us with information that is necessary for us to provide
                the products;
              </p>
              <p className="text-sm text-[#363638] ">
                12.2 We may withdraw the product. We may write to you to let you
                know that we are going to stop providing the product. We will
                refund any sums you have paid in advance for products which will
                not be provided.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              13. Price And Payment
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                13.1 Where to find the price for the product. The price of the
                product (which includes VAT) will be the price indicated on the
                order and product pages when you placed your order. We take all
                reasonable care to ensure that the price of the product advised
                to you is correct. However please see clause 13.3 for what
                happens if we discover an error in the price of the product you
                order.
              </p>
              <p className="text-sm text-[#363638] ">
                13.2 We will pass on changes in the rate of VAT. If the rate of
                VAT changes between your order date and the date we supply the
                product, we will adjust the rate of VAT that you pay, unless you
                have already paid for the product in full before the change in
                the rate of VAT takes effect.
              </p>
              <p className="text-sm text-[#363638] ">
                13.3 What happens if we got the price wrong. It is always
                possible that, despite our best efforts, some of the products we
                sell may be incorrectly priced. We will normally check prices
                before accepting your order so that, where the product's correct
                price at your order date is less than our stated price at your
                order date, we will charge the lower amount. If the product's
                correct price at your order date is higher than the price stated
                to you, we will contact you for your instructions before we
                accept your order.
              </p>
              <p className="text-sm text-[#363638] ">
                13.4 When you must pay and how you must pay. We accept payment
                with PayPa and Credit Cards.
              </p>
              <p className="text-sm text-[#363638] ">
                13.5 What to do if you think an invoice is wrong. If you think
                an invoice is wrong please contact us promptly to let us know.
                You will not have to pay any interest until the dispute is
                resolved. Once the dispute is resolved we will charge you
                interest on correctly invoiced sums from the original due date.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              14. How We May Use Your Personal Information
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                How we may use your personal information. We will only use your
                personal information as set out in our Privacy Policy.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              15. Acceptable Use Restriction
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">15.1 You must:</p>
              <p className="text-sm text-[#363638] ">
                (a) not use our services in any unlawful manner, for any
                unlawful purpose, or in any manner inconsistent with these
                terms, or act fraudulently or maliciously, for example, by
                hacking into or inserting malicious code, such as viruses, or
                harmful data, into any service;
              </p>
              <p className="text-sm text-[#363638] ">
                (b) not infringe our intellectual property rights or those of
                any third party in relation to your use of any service (to the
                extent that such use is not licensed by these terms);
              </p>
              <p className="text-sm text-[#363638] ">
                (c) not transmit any material that is defamatory, offensive or
                otherwise objectionable in relation to your use of any service;
              </p>
              <p className="text-sm text-[#363638] ">
                (d) not use any service in a way that could damage, disable,
                overburden, impair or compromise our systems or security or
                interfere with other users; and
              </p>
              <p className="text-sm text-[#363638] ">
                (e) not collect or harvest any information or data from any
                service or our systems or attempt to decipher any transmissions
                to or from the servers running any Service.
              </p>
              <p className="text-sm text-[#363638] ">
                15.2 Verbal or written abuse of any kind (including threats of
                abuse or retribution) of our employees, members, or officers
                will result in immediate termination.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              16. Intellectual Property Rights
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                16.1 All intellectual property rights in our platform, the
                documentation and the services throughout the world belong to us
                and the rights in the services are licensed (not sold) to you.
                You have no intellectual property rights in, or to, the services
                other than the right to use them in accordance with these terms.
              </p>
            </div>
          </div>
          <div className="flex space-y-6 flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              17. Other Important Terms
            </h2>
            <div className="flex space-y-2 flex-col">
              <p className="text-sm text-[#363638] ">
                17.1 We may transfer this agreement to someone else. We may
                transfer our rights and obligations under these terms to another
                organisation.
              </p>
              <p className="text-sm text-[#363638] ">
                17.2 Nobody else has any rights under this contract (except
                someone you pass your guarantee on to). This contract is between
                you and us. No other person shall have any rights to enforce any
                of its terms.
              </p>
              <p className="text-sm text-[#363638] ">
                17.3 If a court finds part of this contract illegal, the rest
                will continue in force. Each of the paragraphs of these terms
                operates separately. If any court or relevant authority decides
                that any of them are unlawful, the remaining paragraphs will
                remain in full force and effect.
              </p>
              <p className="text-sm text-[#363638] ">
                17.4 Even if we delay in enforcing this contract, we can still
                enforce it later. If we do not insist immediately that you do
                anything you are required to do under these terms, or if we
                delay in taking steps against you in respect of your breaking
                this contract, that will not mean that you do not have to do
                those things and it will not prevent us taking steps against you
                at a later date. For example, if you miss a payment and we do
                not chase you but we continue to provide the products, we can
                still require you to make the payment at a later date.
              </p>
              <p className="text-sm text-[#363638] ">
                Which laws apply to this contract and where you may bring legal
                proceedings. These terms are governed by Canada law and you can
                bring legal proceedings in respect of the products in the
                Canada.
              </p>
            </div>
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

export default TermsAndConditions;
export async function getStaticProps(ctx) {
  // const api = process.env.NEXT_PUBLIC_API;

  // const categoryRes = await Category.find({});
  // const categoryData = await JSON.parse(JSON.stringify(categoryRes));

  return {
    props: { categories: categories },
  };
}
