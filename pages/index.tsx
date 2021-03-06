import { GetStaticProps } from 'next/types';
import { SWRConfig } from 'swr';

import { API } from '@utils/const';
import { getUsers } from '@utils/api';

import Layout from '@components/common/Layout';
import UserList from '@components/user/ListCards';

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();
  return {
    props: {
      fallback: {
        [API]: users,
      },
    },
    revalidate: 1,
  };
};

const Index = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <UserList />
      </Layout>
    </SWRConfig>
  );
};

export default Index;
