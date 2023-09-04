
import { FirstName, HeaderContainer, NameTitle, ProffesionTitle, TitlesConrtainer, ProfilePicture, ImgContainer, Titles } from './header.style'
import { useTranslation } from 'react-i18next'
import profile from '../../../assets/profile.jpg'

const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderContainer>
      <ImgContainer>
        <ProfilePicture src={profile} alt="" />
      </ImgContainer>
      <TitlesConrtainer>
        <Titles>
          <NameTitle>
            <FirstName>{t("firstName")}</FirstName>
            {t("lastName")}
          </NameTitle>
          <ProffesionTitle dir='ltr'>
            {t("profession")}
          </ProffesionTitle>
        </Titles>
      </TitlesConrtainer>
    </HeaderContainer>
  )
}

export default Header