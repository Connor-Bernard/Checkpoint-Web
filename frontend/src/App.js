import ExpandedFooter from './components/footer/ExpandedFooter';
import Footer from './components/footer/Footer';
import GetInTouch from './components/get-in-touch/GetInTouch';
import PopOut from './components/popout/PopOut';

export default function App() {
    return (
        <div className='flex flex-col'>
            <PopOut />
            <GetInTouch />
            <ExpandedFooter />
            <Footer />
        </div>
    );
}
