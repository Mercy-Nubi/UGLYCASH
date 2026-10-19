import type { ComponentType } from "react";
import Main from "./Main";
import Updating from "./Updating";
import SkySplash from "./SkySplash";
import Intro from "./Intro";
import Onb1 from "./Onb1";
import Onb2 from "./Onb2";
import Onb3 from "./Onb3";
import Onb4 from "./Onb4";
import Onb5 from "./Onb5";
import Welcome from "./Welcome";
import CreateAccount from "./CreateAccount";
import GoogleConsent from "./GoogleConsent";
import Username from "./Username";
import UsernameFilled from "./UsernameFilled";
import FoundUs from "./FoundUs";
import WhereFound from "./WhereFound";
import Income from "./Income";
import IncomeType from "./IncomeType";
import IncomeWhere from "./IncomeWhere";
import FaceID from "./FaceID";
import Home from "./Home";
import AddFunds from "./AddFunds";
import Withdraw from "./Withdraw";
import PTour1 from "./PTour1";
import PTour2 from "./PTour2";
import PTour3 from "./PTour3";
import Portfolio from "./Portfolio";
import Rewards from "./Rewards";
import Profile from "./Profile";
import AddFundsGuide from "./AddFundsGuide";
import MoveMoney from "./MoveMoney";
import Send from "./Send";
import Receive from "./Receive";
import Verify from "./Verify";
import CardIntro from "./CardIntro";
import Phone from "./Phone";
import PhotoAccess from "./PhotoAccess";
import Insights from "./Insights";
import PnLSheet from "./PnLSheet";
import Settings from "./Settings";
import HomeDark from "./HomeDark";
import Feed from "./Feed";
import Chats from "./Chats";
import NewClub from "./NewClub";
import CTour1 from "./CTour1";
import CTour2 from "./CTour2";
import CTour3 from "./CTour3";
import CTour4 from "./CTour4";
import Communities from "./Communities";

export type Screen = { path: string; title: string; height: number; Component: ComponentType };

export const screens: Screen[] = [
  { path: "Main", title: "01 Splash", height: 844, Component: Main },
  { path: "Updating", title: "02 Splash \u00b7 updating", height: 844, Component: Updating },
  { path: "SkySplash", title: "03 Splash \u00b7 sky", height: 844, Component: SkySplash },
  { path: "Intro", title: "04 The opportunity app", height: 844, Component: Intro },
  { path: "Onb1", title: "05 Onboarding \u00b7 get paid", height: 844, Component: Onb1 },
  { path: "Onb2", title: "06 Onboarding \u00b7 spend", height: 844, Component: Onb2 },
  { path: "Onb3", title: "07 Onboarding \u00b7 earn", height: 844, Component: Onb3 },
  { path: "Onb4", title: "08 Onboarding \u00b7 follow traders", height: 844, Component: Onb4 },
  { path: "Onb5", title: "09 Onboarding \u00b7 trade", height: 844, Component: Onb5 },
  { path: "Welcome", title: "10 Welcome", height: 844, Component: Welcome },
  { path: "CreateAccount", title: "11 Create account sheet", height: 844, Component: CreateAccount },
  { path: "GoogleConsent", title: "12 Google sign-in prompt", height: 844, Component: GoogleConsent },
  { path: "Username", title: "13 Username \u00b7 empty", height: 844, Component: Username },
  { path: "UsernameFilled", title: "14 Username \u00b7 available", height: 844, Component: UsernameFilled },
  { path: "FoundUs", title: "15 How did you find us", height: 844, Component: FoundUs },
  { path: "WhereFound", title: "16 Where did you find us", height: 844, Component: WhereFound },
  { path: "Income", title: "17 How you make money", height: 844, Component: Income },
  { path: "IncomeType", title: "18 Online income type", height: 844, Component: IncomeType },
  { path: "IncomeWhere", title: "19 Where income comes from", height: 844, Component: IncomeWhere },
  { path: "FaceID", title: "20 Enable Face ID", height: 844, Component: FaceID },
  { path: "Home", title: "21 Home", height: 844, Component: Home },
  { path: "AddFunds", title: "22 Add funds sheet", height: 844, Component: AddFunds },
  { path: "Withdraw", title: "23 Withdraw \u00b7 pick a destination", height: 844, Component: Withdraw },
  { path: "PTour1", title: "24 Portfolio tour \u00b7 trade", height: 844, Component: PTour1 },
  { path: "PTour2", title: "25 Portfolio tour \u00b7 traders", height: 844, Component: PTour2 },
  { path: "PTour3", title: "26 Portfolio tour \u00b7 self-custody", height: 844, Component: PTour3 },
  { path: "Portfolio", title: "27 Portfolio \u00b7 markets (scrolls)", height: 844, Component: Portfolio },
  { path: "Rewards", title: "28 Rewards", height: 844, Component: Rewards },
  { path: "Profile", title: "29 Profile", height: 844, Component: Profile },
  { path: "AddFundsGuide", title: "30 How to add funds", height: 844, Component: AddFundsGuide },
  { path: "MoveMoney", title: "31 Move money globally", height: 844, Component: MoveMoney },
  { path: "Send", title: "32 Send \u00b7 keypad", height: 844, Component: Send },
  { path: "Receive", title: "33 Receive money", height: 844, Component: Receive },
  { path: "Verify", title: "34 Get verified", height: 844, Component: Verify },
  { path: "CardIntro", title: "35 The Ugly Visa (scrolls)", height: 844, Component: CardIntro },
  { path: "Phone", title: "36 Phone number", height: 844, Component: Phone },
  { path: "PhotoAccess", title: "37 Photo access sheet", height: 844, Component: PhotoAccess },
  { path: "Insights", title: "38 Profile insights", height: 844, Component: Insights },
  { path: "PnLSheet", title: "39 Portfolio P&L sheet", height: 844, Component: PnLSheet },
  { path: "Settings", title: "40 Settings", height: 844, Component: Settings },
  { path: "HomeDark", title: "41 Home \u00b7 dark theme", height: 844, Component: HomeDark },
  { path: "Feed", title: "42 UGLY feed (scrolls)", height: 844, Component: Feed },
  { path: "Chats", title: "43 Chats \u00b7 no clubs yet", height: 844, Component: Chats },
  { path: "NewClub", title: "44 Create a club", height: 844, Component: NewClub },
  { path: "CTour1", title: "45 Communities tour \u00b7 intro", height: 844, Component: CTour1 },
  { path: "CTour2", title: "46 Communities tour \u00b7 house", height: 844, Component: CTour2 },
  { path: "CTour3", title: "47 Communities tour \u00b7 trading clubs", height: 844, Component: CTour3 },
  { path: "CTour4", title: "48 Communities tour \u00b7 RSR Central", height: 844, Component: CTour4 },
  { path: "Communities", title: "49 Communities \u00b7 clubs leaderboard (scrolls)", height: 844, Component: Communities },
];
