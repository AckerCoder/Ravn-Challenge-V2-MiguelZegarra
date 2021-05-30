import SidePanel from '../../components/side-panel/side-panel.component';
import DataCell from '../../components/data-cell/data-cell.component';
import './home-page.styles.scss';
import Provider from '../../contexts/provider.component';

  
const HomePage = () => {
    return(
        <div className="home-page">
            <Provider>
                <SidePanel/>
                <DataCell/>
            </Provider>
        </div>
    );
}

export default HomePage;
