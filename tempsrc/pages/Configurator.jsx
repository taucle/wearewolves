import { useNavigate } from 'react-router-dom';
import './styles/index.css';
import './styles/Configurator.css';
import '../components/RadioButton.tsx';
import RadioButton from '../components/RadioButton.tsx'

function Configurator() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <>
            <div className='title'>
                <h1>Configurator</h1>
            </div>
            <div className="buttons">
                <a>
                    <button onClick={handleBackClick}>⬅️ Back</button>
                </a>
                
                <RadioButton
                    id={"precise-version"}
                    value={"section-game-selection"}
                    name={"select-precise-game"}
                    label={"Version précise"}
                    onChange={() => true}
                />
                <RadioButton
                    id={"uncomplete-version"}
                    value={"section-card-selection"}
                    name={"select-precise-game"}
                    label={"Version incomplète"}
                    onChange={() => true}
                />
            </div>
        </>
    )
}

export default Configurator;
