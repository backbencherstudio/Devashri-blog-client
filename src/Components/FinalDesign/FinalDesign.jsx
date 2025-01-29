import React from 'react';
import FinalDesignCard from '../sharedComponents/finalDesignCard';
// import {finaDesignData} from '../../finalDesignData/finalDesignData'
const FinalDesign = ({ data }) => {
  const finaDesignData = [
    { 
      id: 1,
      title: "Effortless and Secure Onboarding",
      content: [ "Guests join Luxe Events seamlessly with an",<span className="font-[500]" key="invitation"> invitation code </span>, "sent after their resort reservation. Entering the code fetches ",<span className="font-[500]" key="invitation">  reservation details automatically </span>, ", requiring only a password setup. This ensures ",<span className="font-[500]" key="invitation">  accuracy, </span>, "  eliminates manual entry, and supports the goal of a ",<span className="font-[500]" key="invitation"> streamlined, luxurious experience. </span>,],
      laptopGif:
        "/gif/gif1.gif",
      mobilePic: "/mobileRes/mobile1.png"
    },
    {
      id: 2,
      title: "Personalized Exploration Made Easy",
      content: [
        "Upon signing up, guests land on the ",
        <span className="font-[500]" key="explorePage">Explore Page</span>,
        ", showcasing activities tailored to their ",
        <span className="font-[500]" key="availability">availability</span>,
        " and ",
        <span className="font-[500]" key="stayDates">stay dates</span>,
        ". Guests can ",
        <span className="font-[500]" key="filterActivities">filter activities</span>,
        " by category or ",
        <span className="font-[500]" key="markFavorites">mark favorites</span>,
        ", ensuring a personalized and seamless booking experience. This directly aligns with the goal of ",
        <span className="font-[500]" key="elevatingSatisfaction">elevating guest satisfaction</span>,
        " and resolving the challenge of ",
        <span className="font-[500]" key="limitedVisibility">limited visibility</span>,
        " into resort offerings."
      ],
      laptopGif:
        "/gif/gif2.gif",
      mobilePic: "/mobileRes/mobile2.png"
    },
    {
      id: 3,
      title: "Streamlined Booking Process",
      content: [
        "Guests browse activities on the ",
        <span className="font-[500]" key="explorePage">Explore Page</span>,
        ", select an event, and easily book by choosing participants (fetched from reservations), selecting ",
        <span className="font-[500]" key="dateTime">date/time</span>,
        ", and adding ",
        <span className="font-[500]" key="paymentDetails">payment details</span>,
        ". The ",
        <span className="font-[500]" key="chargeSummary">charge summary</span>,
        " is displayed in real-time, and the booking is confirmed with a simple click. This process eliminates ",
        <span className="font-[500]" key="manualInefficiencies">manual booking inefficiencies</span>,
        " and ensures a ",
        <span className="font-[500]" key="smoothExperience">smooth</span>,
        ", ",
        <span className="font-[500]" key="personalizedExperience">personalized experience</span>,
        "."
      ],
      laptopGif:
        "/gif/gif3.gif",
      mobilePic: "/mobileRes/mobile3.png"
    },
    {
      id: 4,
      title: "Effortless Activity Tracking and Feedback",
      content: [
        "The ",
        <span className="font-[500]" key="bookingTab">Booking Tab</span>,
        " allows guests to view ",
        <span className="font-[500]" key="upcoming">upcoming</span>,
        " and ",
        <span className="font-[500]" key="pastActivities">past activities</span>,
        " date wise. Guests can access ",
        <span className="font-[500]" key="tickets">tickets</span>,
        " for ",
        "upcoming events and leave ",
        <span className="font-[500]" key="feedbackAndTips">feedback and tips</span>,
        " for guides after attending activities. This solution streamlines event management, ensuring a seamless guest experience and supporting ",
        <span className="font-[500]" key="personalizedService">personalized service</span>,
        "."
      ],
      laptopGif:
        "/gif/gif4.gif",
      mobilePic: "/mobileRes/mobile4.png"
    },
    {
      id: 5,
      title: "Streamlined Communication and Notifications",
      content: [
        "The ",
        <span className="font-[500]" key="inboxTab">Inbox Tab</span>,
        " allows guests to easily message ",
        <span className="font-[500]" key="guides">guides</span>,
        ", ",
        <span className="font-[500]" key="resortAdmins">resort admins</span>,
        ", and ",
        <span className="font-[500]" key="concierges">concierges</span>,
        " for any concerns or queries. Additionally, the ",
        <span className="font-[500]" key="notificationsSection">Notifications Section</span>,
        " keeps guests informed about ",
        <span className="font-[500]" key="activities">activities</span>,
        " and ",
        <span className="font-[500]" key="generalUpdates">general updates</span>,
        ", ensuring a smooth flow of communication and supporting the goal of an ",
        <span className="font-[500]" key="efficientAndResponsive">efficient and responsive guest experience</span>,
        "."
      ],
      laptopGif:
        "/gif/gif5.gif",
      mobilePic: "/mobileRes/mobile5.png"
    },
    {
      id: 6,
      title: "Comprehensive Profile Management",
      content: [
        "Guests have full control over their ",
        <span className="font-[500]" key="profileSettings">profile settings</span>,
        ", enabling them to ",
        <span className="font-[500]" key="editPersonalDetails">edit personal details</span>,
        ", ",
        <span className="font-[500]" key="changePasswords">change passwords</span>,
        ", and ",
        <span className="font-[500]" key="deactivateAccount">deactivate their account</span>,
        ". They can also ",
        <span className="font-[500]" key="managePaymentMethods">manage payment methods</span>,
        ", review ",
        <span className="font-[500]" key="eventCharges">event charges</span>,
        " through detailed receipts, and access ",
        <span className="font-[500]" key="contactInformation">contact information</span>,
        " for the resort and an ",
        <span className="font-[500]" key="faqSection">FAQ section</span>,
        ". This supports the goal of providing a ",
        <span className="font-[500]" key="personalizedExperience">personalized and seamless experience</span>,
        ", ensuring guests have everything they need to manage their stay efficiently."
      ],
      laptopGif:
        "/gif/gif6.gif",
      mobilePic: "/mobileRes/mobile6.png"
    }
  ];
  return (
    <div className="text-center lg:mt-[120px] md:mt-[100px] mt-[60px]">
      {/* Title Section */}
      <h1 className="lg:text-[28px] md:text-[26px] text-2xl font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic text-[#DD0101] mb-4">
        THE FINAL DESIGN
      </h1>
      <h1 className="lg:mb-[132px] text-[#2A2A2A] md:mb-[100px] mb-[60px] mb: text-[38px] md:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1px] lg:tracking-[1.44px] not-italic">
        Redefining Luxury Event Planning
      </h1>



    <div className='max-w-[1128px]'>
       {finaDesignData.map((data, index) => (
              <FinalDesignCard key={index} data={data} position={index % 2 === 0 ? "right" : "left"}/>
        ))}
    </div>

    </div>
  );
};

export default FinalDesign;
