import React, { useCallback, useState } from 'react';
import AdminGnb from '../AdminGnb';
import { useNavigate } from 'react-router-dom';
import { GNBTableTypes } from '@typedef/types';
type Props = { location: string };

const AdminGnbContainer = ({ location }: Props) => {
  const navigate = useNavigate();
  const tabTable: GNBTableTypes[] = [
    {
      label: 'Theme',
      path: '/admin/theme',
    },
    {
      label: 'GNB',
      path: '/admin/gnb',
    },
    {
      label: 'Home',
      path: '/admin',
    },
    {
      label: 'Products',
      path: '/admin/product',
    },
    {
      label: 'Add',
      path: '/admin/add',
    },

    {
      label: 'Community',
      path: '/admin/ommunity',
    },
  ];
  const [selectedTab, setSelectedTab] = useState<string>('/admin');
  const onTabClicked = useCallback(
    (path: string) => {
      setSelectedTab(path);
      navigate(path);
      window.scrollTo(0, 0);
    },
    [selectedTab, location],
  );
  return location.includes('admin') ? (
    <AdminGnb
      tabTable={tabTable}
      onTabClicked={onTabClicked}
      location={location}
    />
  ) : (
    <></>
  );
};

export default AdminGnbContainer;
