import React from 'react';

import SidePanel from '../../components/side-panel/side-panel.component';
import DataCell from '../../components/data-cell/data-cell.component';
import { Scrollbars } from 'react-custom-scrollbars';
import './home-page.styles.scss';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
  
  
const HomePage = () => {
    return(
        <div className="home-page">
            <Scrollbars renderThumbVertical={renderThumb} ref={this.scrollbarRef}>
                <SidePanel />
            </Scrollbars>
            <DataCell/>
        </div>
    );
}

export default HomePage;
