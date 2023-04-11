import { AppContext } from '../../context/AppContext';
import { LanguageSelectRadio } from './styles';
import { useContext } from 'react';

export function LanguageSelect() {

    const { setLanguageSelect, languageSelect, themeValue } = useContext(AppContext)

    function handleRadioChange(event: any) {
        setLanguageSelect(event.target.value);
    }

    return (
        <LanguageSelectRadio variant={themeValue}>
            <input type="radio" id="en" name="options" value="en" checked={languageSelect === 'en'} onChange={handleRadioChange} />
            <label htmlFor="en" title='Only important texts and tutorials are translated'>en</label>
            <div></div>
            <input type="radio" id="pt" name="options" value="pt" checked={languageSelect === 'pt'} onChange={handleRadioChange} />
            <label htmlFor="pt" title='Apenas textos e tutoriais importantes serão traduzidos'>pt</label>
        </LanguageSelectRadio>
    );
}