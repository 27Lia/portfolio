import React, { useState } from 'react';

import {
  TabsContainer,
  TabButton,
  TabContent,
  TapBox,
} from '../Styles/SharedStyles';

interface TabsComponentProps {
  tabs: string[];
  contents: JSX.Element[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, contents }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TapBox>
        {tabs.map((tab: string, index: number) => (
          <TabButton
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </TabButton>
        ))}
      </TapBox>

      {contents.map((content: JSX.Element, index: number) => (
        <TabContent key={index} className={activeTab === index ? 'active' : ''}>
          {content}
        </TabContent>
      ))}
    </>
  );
};

export default TabsComponent;
