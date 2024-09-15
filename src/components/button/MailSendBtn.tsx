import IcMail from '../../assets/icons/IcMail';
import { ButtonNameT } from '../../types/type';
import { EMAILL } from '../../utils/constant/constant';
import { WhiteCricleBtn } from './Button.styled';

function MailSentBtn({ name }: ButtonNameT) {
  const goToSite = () => {
    const mailUrl = EMAILL;
    navigator.clipboard.writeText(mailUrl).then(() => {
      alert("Email address has been copied!");
    })
  };

  return (
    <WhiteCricleBtn name={name} onClick={goToSite}>
      <IcMail
        width={'20'}
        height={'20'}
      />
    </WhiteCricleBtn>
  )
}

export default MailSentBtn
