// TabsComponent.js 또는 TabsComponent.tsx

import React, { useState } from 'react';

import {
  TabsContainer,
  TabButton,
  TabContent
} from "../Styles/SharedStyles";

interface TabsComponentProps {
    tabs: string[];
    contents: JSX.Element[];
  }

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, contents }) => {
    const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer>
      {tabs.map((tab: string, index: number) => (
        <TabButton
          key={index}
          className={activeTab === index ? "active" : ""}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </TabButton>
      ))}

      {contents.map((content: JSX.Element, index: number) => (
        <TabContent key={index} className={activeTab === index ? "active" : ""}>
          {content}
        </TabContent>
      ))}
    </TabsContainer>
  );
};

export default TabsComponent;
