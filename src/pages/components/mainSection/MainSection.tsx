
import { BigIcon, BigIconDown, ContactItem, ContactList, IntersetsLine, IntersetsList, LeftSection, Main, RightSection, Skill, SkillsList, Statment, StatmentContent, StatmentLeft, StatmentParagraph } from './MainSection.style'
import { Icon } from '@iconify/react';
import { A, Hr, ProgressBar, ProgressBarContainer, Span, Title } from '../main/main.style';
import { useTranslation } from 'react-i18next';
const MainSection = () => {
    const { t } = useTranslation()
    return (
        <Main>
            <LeftSection>
                <div>
                    <Title $position='center'>{t("contactTitle")}</Title>
                    <Hr />

                    <ContactList>
                        <ContactItem>
                            <Icon icon="ic:baseline-whatsapp" width={40} />
                            <A href="tel:+972-556-69-0763"> +972-556-69-0763</A>
                        </ContactItem>
                        <ContactItem>
                            <Icon icon="line-md:email"
                                width={40} />
                            <A href="mailto:shmouelKessous@gmail.com">shmouelKessous@gmail.com</A>
                        </ContactItem>
                        <ContactItem>
                            <Icon icon="mdi:github"
                                width={40} />
                            <A href="http://github.com/kobalt42z">kobalt42z</A>
                        </ContactItem>
                        <ContactItem>
                            <Icon icon="simple-icons:x"
                                width={40} />
                            <A href="https://twitter.com/shmouel_K">@shmouel_K</A>
                        </ContactItem>

                    </ContactList>
                </div>
                <div>
                    <Title $position='center'>{t("skillsTitle")}</Title>
                    <Hr />

                    <SkillsList dir='ltr'>
                        <Skill>
                            <Icon icon="vscode-icons:file-type-js-official" height={20} />
                            <Span>javascript</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={95}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="devicon:typescript" height={20} />
                            <Span>typeScript</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={80}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="devicon:java" height={20} />
                            <Span>java</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={60}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="devicon:c" height={20} />
                            <Span>c</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={60}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="vscode-icons:file-type-html" height={20} />
                            <Span>html/css</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={90}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="skill-icons:nodejs-dark" height={20} />
                            <Span>nodejs</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={90}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="skill-icons:expressjs-dark" height={20} />
                            <Span>express</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={90}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="logos:nestjs" height={20} />
                            <Span>nestJs</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={80}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="devicon:trpc" height={20} />
                            <Span>trpc</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={50}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="logos:aws-s3" height={20} />
                            <Span>AWS s3</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={40}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="skill-icons:redux" height={20} />
                            <Span>redux TK</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={90}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                     
                        <Skill>
                            <Icon icon="logos:firebase" height={20} />
                            <Span>firebase</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={60}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="logos:adonisjs-icon" height={20} />
                            <Span>adonisJs</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={50}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="skill-icons:react-dark" height={20} />
                            <Span>React</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={80}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="vscode-icons:file-type-sql" height={20} />
                            <Span>SQL</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={60}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="twemoji:flag-france" height={20} />
                            <Span>french</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={98}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                        <Skill>
                            <Icon icon="twemoji:flag-us-outlying-islands" height={20} />
                            <Span>english</Span>
                            <ProgressBarContainer>
                                <ProgressBar $val={50}></ProgressBar>
                            </ProgressBarContainer>
                        </Skill>
                    </SkillsList>
                </div>
                <div>
                    <Title $position='center'>{t("interestTitle")}</Title>
                    <Hr />

                    <IntersetsList>
                        <IntersetsLine>
                            <p>{t("interestContent.0")} </p>+
                            <p>{t("interestContent.1")}</p>
                        </IntersetsLine>
                        <hr />
                        <IntersetsLine>
                            <p>{t("interestContent.2")} </p>+
                            <p>{t("interestContent.3")}</p>
                        </IntersetsLine>
                        <hr />
                        <IntersetsLine>
                            <p>{t("interestContent.4")} </p>+
                            <p>{t("interestContent.5")}</p>
                        </IntersetsLine>
                        <hr />
                    </IntersetsList>
                </div>
            </LeftSection>
            <RightSection>
                <Statment>
                    <StatmentLeft>
                        <BigIcon>
                            <Icon icon="icon-park-solid:people" color="white" width={30} />
                        </BigIcon>
                        <BigIconDown $h={290} />
                    </StatmentLeft>
                    <StatmentContent>
                        <Title>{t("statementTitle")}</Title>
                        <Hr $full></Hr>
                        <StatmentParagraph>
                            {t("statementContent")}
                        </StatmentParagraph>
                    </StatmentContent>

                </Statment>
                <Statment>
                    <StatmentLeft>
                        <BigIcon>
                            <Icon icon="pajamas:work" color="white" width={30} />
                        </BigIcon>
                        <BigIconDown $h={850} />
                    </StatmentLeft>
                    <StatmentContent>
                        <Title>{t("experianceTitle")}</Title>
                        <Hr $full></Hr>
                        <StatmentParagraph>
                            <Title $m={0} $size={25}>{t("positionTitle1")} :</Title>
                            {t("positionContent1")}
                        </StatmentParagraph>
                        <StatmentParagraph>
                            <Title $m={0} $size={25}>{t("positionTitle2")} :</Title>
                            {t("positionContent2")}
                        </StatmentParagraph>
                        <StatmentParagraph>
                            <Title $m={0} $size={25}>{t("positionTitle3")} :</Title>
                            {t("positionContent3")}
                        </StatmentParagraph>
                    </StatmentContent>

                </Statment>
                <Statment>
                    <StatmentLeft>
                        <BigIcon>
                            <Icon icon="pajamas:work" color="white" width={30} />
                        </BigIcon>
                        
                        <BigIconDown $h={600} />
                    </StatmentLeft>
                    <StatmentContent>
                        <Title>{t("educationTitle")}</Title>
                        <Hr $full></Hr>
                        <StatmentParagraph>
                            <Title $m={0} $size={25}>{t("educationTitle1")} :</Title>
                            {t("educationContent1a")}
                            <br />
                            {t("educationContent1b")}
                        </StatmentParagraph>
                        <StatmentParagraph>
                            <Title $m={0} $size={25}>{t("educationTitle2")} :</Title>
                            {t("educationContent2a")}
                        </StatmentParagraph>

                    </StatmentContent>

                </Statment>
            </RightSection>
        </Main >
    )
}

export default MainSection