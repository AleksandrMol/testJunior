export const initialData = {
    tasks: {
      'Word-1': { id: 'Word-1', content: 'vibe' },
      'Word-2': { id: 'Word-2', content: 'of' },
      'Word-3': { id: 'Word-3', content: 'I' },
      'Word-4': { id: 'Word-4', content: 'the' },
      'Word-5': { id: 'Word-5', content: 'photography' },
      'Word-6': { id: 'Word-6', content: 'film' },
      'Word-7': { id: 'Word-7', content: 'love' },
    },
    columns: {
      'Lines-1': {
        id: 'Lines-1',
        title: '',
        taskIds: [],
      },
      'Lines-2': {
        id: 'Lines-2',
        title: '',
        taskIds: [],
      },

      'WordField-1': {
        id: 'WordField-1',
        title: '',
        taskIds: ['Word-1'],
      },
      'WordField-2': {
        id: 'WordField-2',
        title: '',
        taskIds: ['Word-2'],
      },
      'WordField-3': {
        id: 'WordField-3',
        title: '',
        taskIds: ['Word-3'],
      },
      'WordField-4': {
        id: 'WordField-4',
        title: '',
        taskIds: ['Word-4'],
      },
      'WordField-5': {
        id: 'WordField-5',
        title: '',
        taskIds: ['Word-5'],
      },
      'WordField-6': {
        id: 'WordField-6',
        title: '',
        taskIds: ['Word-6'],
      },
      'WordField-7': {
        id: 'WordField-7',
        title: '',
        taskIds: ['Word-7'],
      },
    },
    // Облегчить изменение порядка столбцов
    columnOrder: ['Lines-1', 'Lines-2'],
    wordOrder: ['WordField-1', 'WordField-2', 'WordField-3', 'WordField-4', 'WordField-5', 'WordField-6', 'WordField-7'],
    // Фраза
    phrase: 'Я люблю атмосферу пленочной фотографии.',
    correctAnswer: 'I love the vibe of film photography',
  };