import '../assets/glitch.scss';
import '../assets/typing.scss';
import resumeData from '../data/resume.json';

const Content = () => {
    const name = (resumeData?.basics?.name || 'AGUNG PRASETYO').toUpperCase();
    const headline = resumeData?.basics?.headline || 'Backend Developer';

    return (
        <div>
            <div className=' flex flex-col items-center justify-center'>
                <div className='lg:mt-72 mt-40 mb-32 flex flex-col items-center justify-center'>
                    <h1 className="glitch text-neutral-300 " data-text={`I'm ${name}`}>{`I'm ${name}`}</h1>
                    <h1 className="typing">{headline}</h1>
                </div>
            </div>
        </div>
    );
};

export default Content;