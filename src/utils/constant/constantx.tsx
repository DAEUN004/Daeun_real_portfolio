import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";
import FeedbackBtn from "../../components/button/FeedbackBtn";
import { EMAILL } from "./constant";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: EMAILL,
    tooltiptype: 'left',
    icon: <MailSentBtn name='Copy email address' />
  },
  {
    id: 2,
    datatooltip: 'Leave feedback',
    tooltiptype: 'left',
    icon: <FeedbackBtn name='Give feedback' />

  },
  {
    id: 3,
    datatooltip: 'Scroll to top',
    tooltiptype: 'left',
    icon: <GoTopBtn name='Scroll to top' />
  }
]