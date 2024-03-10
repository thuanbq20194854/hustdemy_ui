export const tabPaths = ['goals', 'curriculum', 'pricing', 'basics']

export const courseManageContentTabs = [
  {
    id: '1',
    title: 'Plan your course',
    children: [
      {
        id: '1',

        tabName: 'Intended Learners',
        tabPath: 'goals'
      }
    ]
  },
  {
    id: '2',

    title: 'Create your content',
    children: [
      {
        id: '1',

        tabName: 'Curriculum',
        tabPath: 'curriculum'
      }
    ]
  },
  {
    id: '3',
    title: 'Publish your course',
    children: [
      {
        id: '1',
        tabName: 'Course Landing Page',
        tabPath: 'basics'
      },
      {
        id: '2',
        tabName: 'Pricing',
        tabPath: 'pricing'
      }
    ]
  }
]
