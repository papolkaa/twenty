export const mockedObjectMetadataItems = {
  edges: [
    {
      node: {
        id: 'a3195559-cc20-4749-9565-572a2f506581',
        dataSourceId: '',
        nameSingular: 'company',
        namePlural: 'companies',
        labelSingular: 'Company',
        labelPlural: 'Companies',
        description: null,
        icon: 'IconBuildingSkyscraper',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '397eabc0-c5a1-4550-8e68-839c878a8d0e',
                type: 'text',
                name: 'name',
                label: 'Name',
                description: 'The company name.',
                placeholder: null,
                icon: 'IconBuildingSkyscraper',
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '7ad234c7-f3b9-4efc-813c-43dc97070b07',
                type: 'url',
                name: 'url',
                label: 'URL',
                description:
                  'The company website URL. We use this url to fetch the company icon.',
                placeholder: null,
                icon: 'IconLink',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: 'a578ffb2-13db-483c-ace7-5c30a13dff2d',
                type: 'relation',
                name: 'accountOwner',
                label: 'Account Owner',
                description:
                  'Your team member responsible for managing the company account.',
                placeholder: null,
                icon: 'IconUserCircle',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: 'b7fd622d-7d8b-4f5a-b148-a7e9fd2c4660',
                type: 'number',
                name: 'employees',
                label: 'Employees',
                description: 'Number of employees in the company.',
                placeholder: null,
                icon: 'IconUsers',
                isCustom: true,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '60ab27ed-a959-471e-b583-887387f7accd',
                type: 'url',
                name: 'linkedin',
                label: 'Linkedin',
                description: null,
                placeholder: null,
                icon: 'IconBrandLinkedin',
                isCustom: false,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
            {
              node: {
                id: '6daadb98-83ca-4c85-bca5-7792a7d958ad',
                type: 'boolean',
                name: 'prioritySupport',
                label: 'Priority Support',
                description: 'Whether the company has priority support.',
                placeholder: null,
                icon: 'IconHeadphones',
                isCustom: true,
                isActive: false,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 6,
        },
      },
    },
    {
      node: {
        id: 'c973efa3-436e-47ea-8dbc-983ed869c04d',
        dataSourceId: '',
        nameSingular: 'workspace',
        namePlural: 'workspaces',
        labelSingular: 'Workspace',
        labelPlural: 'Workspaces',
        description: null,
        icon: 'IconApps',
        isCustom: true,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: 'f955402c-9e8f-4b91-a82c-95f6de392b99',
                type: 'text',
                name: 'slug',
                label: 'Slug',
                description: null,
                placeholder: null,
                icon: 'IconSlash',
                isCustom: true,
                isActive: true,
                isNullable: true,
                createdAt: '',
                updatedAt: '',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 1,
        },
      },
    },
  ],
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  },
  totalCount: 2,
};
