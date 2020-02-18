import { SET_POSTS, CREATE_POST, CREATE_POST_ERROR } from "../constants/action-types";

const initState = {
  posts: [
    {
      "id": 1,
      "author": "Benedict Cumberbatch",
      "date": "15 Oct, 2018",
      "title": "8.2M Could Have Lower Mortgage Payments",
      "text": "Mortgage rates are dropping, giving millions of homeowners an opportunity to lower their monthly payments. An estimated 8.2 million borrowers could refinance and potentially lower their monthly payments by at least 75 basis points, estimates Black Knight, a mortgage software and analytics firm. This marks the largest percentage of homeowners who stand to benefit from lower mortgage rates since the end of 2016. Last week, the average 30-year fixed-rate mortgage reached a two-and-a-half-year low of 3.73%, Freddie Mac reports. The average borrower stands to save about $266 per month on their mortgage by refinancing, according to Black Knight. About 1.5 million borrowers—or 35% of those who took out their loans last year—could benefit from refinancing, the report notes. Refinancing can lower monthly payments and also provide access to money for homeowners who have substantial home equity. About 44 million borrowers have at least 20% equity in their homes. The average amount available to access is $136,000, Black Knight reports. Borrowers, however, are being more conservative in tapping into home equity than in years past. About $54 billion was withdrawn in home equity in the first quarter of this year—the lowest amount in four years. Black Knight reports that less than 1% of available equity has been withdrawn."
    },
    {
      "id": 2,
      "author": "Dawid Pemberton",
      "date": "23 Nov, 2018",
      "title": "4 Maintenance Chores Your Clients Shouldn’t Delay",
      "text": "Homeowners who fail to perform certain maintenance tasks in a timely manner may face hefty repair bills in the future. Professional home inspectors shared with Apartment Therapy some of the most important home maintenance chores that owners should be doing. Clean your gutters. Be sure to check and clean gutters throughout the year to remove any debris. “Once debris is carefully removed, any dirt or grime should be thoroughly cleaned and cleared; any missing caulk replaced; and holes, cracks, or loose areas repaired,” Benjamin Martin, a home inspector and president of Florida Certified Home Inspections, told Apartment Therapy. Check the HVAC system. Change filters out once a month. If any condensation is gathering on the outdoor AC unit, flush the condensate drain with soapy, hot water and vinegar, experts say. Hire an HVAC professional for semi-annual maintenance to keep it operating correctly and potentially stave off an expensive replacement. Flush out any plumbing clogs. Even seemingly small clogs can become more problematic if not taken care of right away. Regularly remove any grime or hair buildup in the shower; remove any gunk that accumulates near a toilet valve; and replace worn flappers (the rubber seal inside the tank), Martin says. Check underneath the sinks and inside the cabinets to make sure there are no water spouts from a leak. Address insect problems. Don’t let bug problems escalate, warns Kathleen Kuhn, CEO and president of HouseMaster Home Inspections. Termites can cause extensive damage; carpenter ants can damage the wood where they nest; and powder post beetles can create hollowed out spaces in your wood. Also, watch out for supersized bee hives. Call in a professional to get the home’s yard sprayed."
    },
    {
      "id": 3,
      "author": "Norah Greene",
      "date": "03 Jan, 2019",
      "title": "2 Billion Records Exposed in Smart-Home Device Breach",
      "text": "Just how secure is that “smart” security camera or door lock? That is being called into question after reports of a massive data breach hitting the smart-home industry that could extend to smart locks, home security cameras, and full smart-home kits. An database for devices manufactured by Orvibo, which runs an “internet of things” management platform, was left exposed to the internet without any password protection, security researchers with vpnMentor recently uncovered. The database includes more than 2 billion logs containing everything from user passwords to account reset codes and even conversations recorded by smart cameras, Forbes.com reports."
    }
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST:
      console.log('created post', action.post);
      return state;
    case CREATE_POST_ERROR:
      console.log('create project error', action.error);
    case SET_POSTS:
      console.log('set posts', action);
    default: 
      return state;
  }
};

export default postReducer