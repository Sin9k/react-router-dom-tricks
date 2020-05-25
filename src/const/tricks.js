import TabletMac from "@material-ui/icons/TabletMac";
import Web from "@material-ui/icons/Web";
import AspectRatio from "@material-ui/icons/AspectRatio";
import Cancel from "@material-ui/icons/Cancel";
import Save from "@material-ui/icons/Save";
import HdrWeak from "@material-ui/icons/HdrWeak";
import DynamicFeed from "@material-ui/icons/DynamicFeed";

import responsiveRoutes from "~/assets/images/responsive-routes.png";
import popusRoutes from "~/assets/images/popus-routes.png";
import customPrompt from "~/assets/images/custom-prompt.png";
import closePopup from "~/assets/images/close-popup.png";
import redirectAfterLogin from "~/assets/images/redirect-after-login.png";
import multiStepForm from "~/assets/images/multi-step-form.png";

export const TRICKS_ROUTES = [
  {
    title: "Responsive Routes",
    shortTitle: "Responsive Routes",
    description:
      "During development of adaptive website for all platforms (desktop / mobile). In some cases, one page in the desktop version is equivalent to whole set of screens in the mobile version. In this video you will know how is it possible to switch one route on the desktop to 3 routes on the mobile phone in runtime",
    url: "/responsive-routes",
    Icon: TabletMac,
    image: responsiveRoutes,
    enYouTube: "https://youtu.be/X3zE2eIpUmk",
    ruYouTube: "https://youtu.be/FtYzwa0DjW8",
    github:
      "https://github.com/Sin9k/react-router-dom-tricks#responsive-routes",
  },
  {
    title: "Managing pop-ups using react-router",
    shortTitle: "Pop-up Routes",
    description:
      "In this video, we will show you several ways how to manage pop-ups using React-router. In our test application, you will see how to make a specific URL for your pop-ups and share links with others, how to control closing animation, and also how to deal with other problems related to managing pop-ups!",
    url: "/popups-routes",
    Icon: Web,
    image: popusRoutes,
    enYouTube: "https://youtu.be/RYo3kwdDdBI",
    ruYouTube: "https://youtu.be/4YHnZSMo9vo",
    github: "https://github.com/Sin9k/react-router-dom-tricks#popups-routes",
  },
  {
    title: "How to close pop-up via history.goBack",
    shortTitle: "Close Popup",
    description:
      'If you carefully watched the video "Managing pop-ups using react-router", you probably were outraged by my negligence when closing pop-ups using history.goBack. This was not an accident, there is no simple solution to this problem, so we created a separate video on how to make sure that users who came to your site through a direct link to the pop-up do not leave the site when trying to click the cross',
    url: "/close-popup",
    Icon: Cancel,
    image: closePopup,
    enYouTube: "https://youtu.be/tl5_k6YBRKg",
    ruYouTube: "https://youtu.be/fqYk-b1lhyI",
    github:
      "https://github.com/Sin9k/react-router-dom-tricks#how-to-use-historygoback-for-closing-popup",
  },
  {
    title: "Custom React Router Prompts",
    shortTitle: "Custom Prompt",
    description:
      "In this video, we will show you how useful can be Prompt from the React-Router library. In our Demo, you can see how to implement your custom Prompt component instead of the system message window, dive into the details of how Prompt works, find out whether you can prevent the page reloading and a lot of other useful information that you will definitely need for your high-quality application.",
    url: "/custom-prompt",
    Icon: AspectRatio,
    image: customPrompt,
    enYouTube: "https://youtu.be/ZE5I9RbMaGY",
    ruYouTube: "https://youtu.be/qDJ2OMcz8is",
    github: "https://github.com/Sin9k/react-router-dom-tricks#custom-prompt",
  },
  {
    title: "Redirect After Login",
    shortTitle: "Redirect After Login",
    description:
      "In this video, we will consider another react-router trick. We’ll tell you how to restore the previous URL after a redirect. We will show you how to manage react-router properly in order to be able to create authorized pages. With the help of our demo you can find how to redirect unauthorized users to the sign in page firstly when they go to the authorized page, and only then redirect them exactly to the page that they originally wanted. And also, a lot of other interesting things!",
    url: "/restore-prevented-route",
    Icon: Save,
    image: redirectAfterLogin,
    enYouTube: "https://youtu.be/VI3Mo6FJCZA",
    ruYouTube: "https://youtu.be/7Ot95R_TP4g",
    github:
      "https://github.com/Sin9k/react-router-dom-tricks#redirect-after-login",
  },
  {
    title: "Perfect stepper",
    shortTitle: "Perfect stepper",
    description:
      "On my opinion it's the best multi step form what a lot of you have ever seen. It handles a lot of edge cases of business requirements and is able to scale to your specific requirements",
    url: "/stepper",
    Icon: HdrWeak,
    image: multiStepForm,
    enYouTube: "https://youtu.be/-j8s0RNOZ8U",
    ruYouTube: "https://youtu.be/d3SH1H-shlg",
    github: "https://github.com/Sin9k/react-router-dom-tricks",
  },
  {
    title: "Managing two pop-ups at the same time using react-router",
    shortTitle: "Two pop-ups at the same time",
    description: "",
    url: "/two-popups",
    Icon: DynamicFeed,
    image: null,
    enYouTube: "",
    ruYouTube: "",
    github: "",
  },
];
