
import { CloseBtn, DialogBox, LangueBtn, Message, Text } from './langModal.style'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslation } from 'react-i18next'

export const LangModal = () => {
    const {  i18n } = useTranslation()
    return (

        <DialogBox dir='ltr' id='lang'>
            <Message>
            <CloseBtn onClick={() => (window as any).lang.close()}><Icon icon="ph:x" width={30} /></CloseBtn>
            <Text>
                please choose your language :
            </Text>
            <div>
                <LangueBtn
                    onClick={() => {
                        i18n.changeLanguage("en");
                        (window as any).lang.close();
                    }
                    }
                ><Icon icon="flag:us-4x3" color="white" width={40} height={38} /></LangueBtn>
                <LangueBtn
                     onClick={() => {
                        i18n.changeLanguage("he");
                        (window as any).lang.close();
                    }
                    }
                ><Icon icon="twemoji:flag-israel" color="white" width={40} height={40} /></LangueBtn>
            </div>
            </Message>
        </DialogBox >

    )
}
