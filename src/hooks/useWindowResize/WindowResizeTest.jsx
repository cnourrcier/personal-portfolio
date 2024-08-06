import useWindowResize from ".";
import './styles.css';


export default function WindowResizeTest() {

    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return <div className='container'>
        <h1>useWindowResize Hook</h1>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </div>
}