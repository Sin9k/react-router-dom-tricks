import TabletMac from "@material-ui/icons/TabletMac";
import Web from "@material-ui/icons/Web";
import AspectRatio from "@material-ui/icons/AspectRatio";
import Cancel from "@material-ui/icons/Cancel";
import RestorePage from "@material-ui/icons/RestorePage";
import HdrWeak from "@material-ui/icons/HdrWeak";

export const TRICKS_ROUTES = [
  {
    title: "Responsive Routes",
    url: "/responsive-routes",
    Icon: TabletMac,
  },
  {
    title: "Popup Routes",
    url: "/popups-routes",
    Icon: Web,
  },
  {
    title: "Custom Prompt",
    url: "/custom-prompt",
    Icon: AspectRatio,
  },
  {
    title: "Close Popup",
    url: "/close-popup",
    Icon: Cancel,
  },
  {
    title: "Restore Prevented Route",
    url: "/restore-prevented-route",
    Icon: RestorePage,
  },
  {
    title: "Stepper",
    url: "/stepper",
    Icon: HdrWeak,
  },
];
