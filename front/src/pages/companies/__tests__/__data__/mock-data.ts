import { GraphqlQueryCompany } from '../../../../interfaces/entities/company.interface';

export const mockCompaniesData: Array<GraphqlQueryCompany> = [
  {
    id: '89bb825c-171e-4bcc-9cf7-43448d6fb278',
    domain_name: 'airbnb.com',
    name: 'Airbnb',
    created_at: '2023-04-26T10:08:54.724515+00:00',
    address: '17 rue de clignancourt',
    employees: 12,
    account_owner: null,
    __typename: 'companies',
  },
  {
    id: 'b396e6b9-dc5c-4643-bcff-61b6cf7523ae',
    domain_name: 'aircall.io',
    name: 'Aircall',
    created_at: '2023-04-26T10:12:42.33625+00:00',
    address: '',
    employees: 1,
    account_owner: null,
    __typename: 'companies',
  },
  {
    id: 'a674fa6c-1455-4c57-afaf-dd5dc086361d',
    domain_name: 'algolia.com',
    name: 'Algolia',
    created_at: '2023-04-26T10:10:32.530184+00:00',
    address: '',
    employees: 1,
    account_owner: null,
    __typename: 'companies',
  },
  {
    id: 'b1cfd51b-a831-455f-ba07-4e30671e1dc3',
    domain_name: 'apple.com',
    name: 'Apple',
    created_at: '2023-03-21T06:30:25.39474+00:00',
    address: '',
    employees: 10,
    account_owner: null,
    __typename: 'companies',
  },
  {
    id: '5c21e19e-e049-4393-8c09-3e3f8fb09ecb',
    domain_name: 'bereal.com',
    name: 'BeReal',
    created_at: '2023-04-26T10:13:29.712485+00:00',
    address: '10 rue de la Paix',
    employees: 1,
    account_owner: null,
    __typename: 'companies',
  },
  {
    id: '9d162de6-cfbf-4156-a790-e39854dcd4eb',
    domain_name: 'claap.com',
    name: 'Claap',
    created_at: '2023-04-26T10:09:25.656555+00:00',
    address: '',
    employees: 1,
    account_owner: null,
    __typename: 'companies',
  },
];
