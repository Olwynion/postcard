// ============================================================================
// ДАННЫЕ КВИЗА «Наша история любви»
// ============================================================================
// Как менять (не углубляясь в код):
//
// 1) Поменять фото/видео после правильного ответа на вопрос
//    → в нужном вопросе поменяйте значение поля `reveal:` на другой путь.
//      Пример: хотите, чтобы после вопроса №1 лежало фото 2, а после №2 — фото 1:
//        вопрос1: reveal: '/photos/.../фото2.jpg'
//        вопрос2: reveal: '/photos/.../фото1.jpg'
//
// 2) Поменять состав или порядок фото/видео периода
//    → просто добавьте/удалите/переставьте строки в списке `gallery:`.
//      Что выше в списке — то показывается первым.
//
// Пути к файлам лежат в папке `public/photos/` (поэтому начинаются с `/photos/`).
// Видео определяются автоматически по расширению (.mp4/.mov), остальное — фото.
// ============================================================================

// MediaRef — это путь к файлу (строка). Подпись, эмодзи и фон будут подобраны
// автоматически. Если захотите задать их вручную — можно вписать объект вида
// { type, caption, emoji, gradient, src } вместо строки.
export type MediaRef = MediaItem | string;

export interface MediaItem {
  type: 'photo' | 'video';
  caption: string;
  emoji: string;
  gradient: string;
  src?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  reveal: MediaRef;
}

export interface TimelineEvent {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  emoji: string;
  questions: QuizQuestion[];
  gallery: MediaRef[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1', date: '2025-08-10', displayDate: '10 авг 2025', title: 'Первые шаги', emoji: '💑',
    questions: [
      {
        id: 'q1', text: 'Что мы показываем на нашей первой совместной фото?',
        options: ['Знак френдзоны', 'Класс', 'Сердечко', 'Два пальца'],
        correctIndex: 2,
        reveal: '/photos/first steps/IMG_5913.jpg',
      },
      {
        id: 'q2', text: 'Кто сидел на лавочке, за которой Андрей сделал Даше предложение?',
        options: ['Данек', 'Ярик', 'Владос', 'Денчик'],
        correctIndex: 2,
        reveal: '/photos/first steps/first_video.mp4',
      },
    ],
    gallery: [
      '/photos/first steps/IMG_5913.jpg',
      '/photos/first steps/first_video.mp4',
    ],
  },
  {
    id: '2', date: '2025-08-30', displayDate: '30 авг 2025', title: 'Начало отношений', emoji: '❤️',
    questions: [
      {
        id: 'q1', text: 'Где начались наши отношения?',
        options: ['В кофе руме', 'На лавочке в соседнем дворе', 'В подъезде', 'В августе'],
        correctIndex: 1,
        reveal: '/photos/start/IMG_5412 (1).jpg',
      },
      {
        id: 'q2', text: 'Кто фотографировал нас на Пушке 31 числа?',
        options: ['Данек', 'Ярик', 'Селфи'],
        correctIndex: 1,
        reveal: '/photos/start/IMG_5437.jpg',
      },
    ],
    gallery: [
      '/photos/start/IMG_5412 (1).jpg',
      '/photos/start/IMG_5437.jpg',
      '/photos/start/IMG_5438.jpg',
    ],
  },
  {
    id: '3', date: '2025-09-30', displayDate: '30 сен 2025', title: 'Первый месяц', emoji: '💕',
    questions: [
      {
        id: 'q1', text: 'Какой букет был на месяц отношений?',
        options: ['Розовые розы', 'Бежевые розы', 'Красно-белые розы', 'Другие розовые розы :)'],
        correctIndex: 2,
        reveal: '/photos/1st month/IMG_1672.jpg',
      },
      {
        id: 'q2', text: 'Что мы делали на месяц отношений?',
        options: ['Сидели дома', 'Просто гуляли', 'Ходили вкусно покушать', 'Ходили за зарплатой в столбар'],
        correctIndex: 3,
        reveal: '/photos/1st month/IMG_1685.jpg',
      },
    ],
    gallery: [
      '/photos/1st month/IMG_1672.jpg',
      '/photos/1st month/IMG_1685.jpg',
      '/photos/1st month/IMG_1733.jpg',
      '/photos/1st month/IMG_1739.jpg',
      '/photos/1st month/IMG_1841.jpg',
    ],
  },
  {
    id: '4', date: '2025-10-06', displayDate: '6 окт 2025', title: 'Твой день рождения', emoji: '🎂',
    questions: [
      {
        id: 'q1', text: 'Кто пришёл поздравлять тебя в 12 ночи?',
        options: ['Данек, Алина, Ярик, Я', 'Данек, Алина, Лева, Ярик, Я', 'Алина, Лева, Ярик, Я', 'Данек, Алина, Лева, Ярик, Я, т-фест'],
        correctIndex: 3,
        reveal: '/photos/your bday/IMG_1570.jpg',
      },
    ],
    gallery: [
      '/photos/your bday/IMG_1570.jpg',
      '/photos/your bday/IMG_1587.jpg',
      '/photos/your bday/IMG_1671.jpg',
      '/photos/your bday/IMG_1826.jpg',
    ],
  },
  {
    id: '5', date: '2025-10-11', displayDate: '11 окт 2025', title: 'Первый концерт', emoji: '🎵',
    questions: [
      {
        id: 'q1', text: 'На какой концерт мы сходили первым?',
        options: ['Звери', 'Три дня дождя', 'Папин олимпос'],
        correctIndex: 1,
        reveal: '/photos/1st concert/IMG_1455.jpg',
      },
    ],
    gallery: [
      '/photos/1st concert/IMG_1455.jpg',
      '/photos/1st concert/IMG_6002.jpg',
      '/photos/1st concert/IMG_6012.mp4',
      '/photos/1st concert/IMG_6018.mp4',
      '/photos/1st concert/IMG_6033.mp4',
      '/photos/1st concert/IMG_6036.mp4',
      '/photos/1st concert/IMG_6047.mp4',
      '/photos/1st concert/IMG_6048.mp4',
      '/photos/1st concert/IMG_6050.mp4',
      '/photos/1st concert/IMG_6051.mp4',
      '/photos/1st concert/IMG_6056.mp4',
      '/photos/1st concert/IMG_6058.mp4',
    ],
  },
  {
    id: '6', date: '2025-10-14', displayDate: '14 окт 2025', title: 'Маленькая мечта', emoji: '✨',
    questions: [
      {
        id: 'q1', text: 'Какой песни не было на концерте Зверей в Иваново?',
        options: ['Снегопад', 'Напитки покрепче', 'Капканы', 'Дожди-пистолеты'],
        correctIndex: 0,
        reveal: '/photos/small wish/IMG_6059.mp4',
      },
    ],
    gallery: [
      '/photos/small wish/IMG_6059.mp4',
      '/photos/small wish/IMG_6099.mp4',
      '/photos/small wish/IMG_6101.mp4',
      '/photos/small wish/IMG_006105.mp4',
      '/photos/small wish/IMG_006110.mp4',
      '/photos/small wish/IMG_006113.mp4',
      '/photos/small wish/IMG_006124.mp4',
      '/photos/small wish/IMG_006137.mp4',
    ],
  },
  {
    id: '7', date: '2025-11-22', displayDate: '22 ноя 2025', title: 'Первая поездка', emoji: '✈️',
    questions: [
      {
        id: 'q1', text: 'Куда была наша первая совместная поездка?',
        options: ['В Москву', 'В Лунево', 'В Ярославль', 'На бали'],
        correctIndex: 2,
        reveal: '/photos/1st trip/IMG_0519.jpg',
      },
    ],
    gallery: [
      '/photos/1st trip/IMG_0519.jpg',
      '/photos/1st trip/IMG_0532.jpg',
      '/photos/1st trip/IMG_0550.jpg',
      '/photos/1st trip/IMG_0570.jpg',
      '/photos/1st trip/IMG_0594.jpg',
    ],
  },
  {
    id: '8', date: '2025-12-30', displayDate: '30 дек 2025 - 1 янв 2026', title: 'Новый год', emoji: '🎆',
    questions: [
      {
        id: 'q1', text: 'Какого цвета был сноуборд у Даши на НГ?',
        options: ['Красный', 'Черный', 'Зеленый', 'Синий'],
        correctIndex: 3,
        reveal: '/photos/new year/IMG_6285.jpg',
      },
      {
        id: 'q2', text: 'Где Даша потеряла телефон в Луневке?',
        options: ['На катке', 'По дороге до номера', 'В ресторане', 'На гуляниях'],
        correctIndex: 3,
        reveal: '/photos/new year/IMG_6548.JPG',
      },
    ],
    gallery: [
      '/photos/new year/IMG_6285.jpg',
      '/photos/new year/IMG_6287.JPG',
      '/photos/new year/IMG_6337.JPG',
      '/photos/new year/IMG_6428.jpg',
      '/photos/new year/IMG_6437.JPG',
      '/photos/new year/IMG_6548.JPG',
      '/photos/new year/IMG_6550.jpg',
      '/photos/new year/IMG_1363.jpg',
      '/photos/new year/IMG_0342.mp4',
    ],
  },
  {
    id: '9', date: '2026-01-25', displayDate: '25 янв 2026', title: 'Новогодняя Москва', emoji: '🏙️',
    questions: [
      {
        id: 'q1', text: 'Какой сериал мы смотрели, когда я заболел в Москве?',
        options: ['Мы смотрели реалити', 'Кухня', 'Чернобыль'],
        correctIndex: 2,
        reveal: '/photos/NY Moscow/IMG_1646.jpg',
      },
      {
        id: 'q2', text: 'Мы были в пушистой комнате в ...',
        options: ['Первую поездку в Москву', 'Во вторую поездку в Москву'],
        correctIndex: 1,
        reveal: '/photos/NY Moscow/IMG_1793.jpg',
      },
    ],
    gallery: [
      '/photos/NY Moscow/IMG_1646.jpg',
      '/photos/NY Moscow/IMG_1658.jpg',
      '/photos/NY Moscow/IMG_1793.jpg',
      '/photos/NY Moscow/IMG_2195.jpg',
      '/photos/NY Moscow/IMG_2692.jpg',
    ],
  },
  {
    id: '10', date: '2026-02-28', displayDate: '28 фев 2026', title: '6 месяцев', emoji: '💖',
    questions: [
      {
        id: 'q1', text: 'Как мы отмечали 6 месяцев?',
        options: ['Сидели в современнике', 'Занимались лепкой', 'Ходили в цони', 'Верны только А и Б', 'Верны только Б и В'],
        correctIndex: 3,
        reveal: '/photos/6 months/IMG_3160.jpg',
      },
    ],
    gallery: [
      '/photos/6 months/IMG_3160.jpg',
      '/photos/6 months/IMG_3178.jpg',
      '/photos/6 months/IMG_3186.jpg',
      '/photos/6 months/IMG_3195.jpg',
    ],
  },
  {
    id: '11', date: '2026-02-28', displayDate: '28 фев - 12 май 2026', title: 'Микс', emoji: '📸',
    questions: [],
    gallery: [
      '/photos/Mix/IMG_3470.jpg',
      '/photos/Mix/IMG_3607.jpg',
      '/photos/Mix/IMG_3721.jpg',
      '/photos/Mix/IMG_3859.jpg',
      '/photos/Mix/IMG_6547.jpg',
    ],
  },
  {
    id: '12', date: '2026-05-12', displayDate: '12 май 2026', title: 'Мой ДР', emoji: '🎉',
    questions: [],
    gallery: [
      '/photos/My bday/IMG_4113.jpg',
      '/photos/My bday/IMG_4119.jpg',
    ],
  },
  {
    id: '13', date: '2026-05-30', displayDate: '30 май 2026', title: '9 месяцев', emoji: '💗',
    questions: [
      {
        id: 'q1', text: 'Что мы делали на 9 месяцев?',
        options: ['Ходили на концерт', 'Сидели в манеки', 'Ходили в театр', 'Ничего'],
        correctIndex: 2,
        reveal: '/photos/9 months/IMG_4251.jpg',
      },
    ],
    gallery: [
      '/photos/9 months/IMG_4251.jpg',
      '/photos/9 months/IMG_4255.jpg',
      '/photos/9 months/IMG_4266.jpg',
    ],
  },
  {
    id: '14', date: '2026-06-01', displayDate: '1 июн 2026', title: 'Наше совместное лето', emoji: '☀️',
    questions: [],
    gallery: [
      '/photos/summer/IMG_4400.JPG',
      '/photos/summer/IMG_4408.JPG',
      '/photos/summer/IMG_4452.JPG',
      '/photos/summer/IMG_4486.JPG',
      '/photos/summer/IMG_4595.JPG',
      '/photos/summer/IMG_4624.JPG',
      '/photos/summer/IMG_4738.JPG',
      '/photos/summer/IMG_4740.JPG',
      '/photos/summer/IMG_4836.JPG',
      '/photos/summer/IMG_4850.JPG',
      '/photos/summer/IMG_4859.JPG',
      '/photos/summer/IMG_4891.JPG',
      '/photos/summer/IMG_4909.JPG',
      '/photos/summer/IMG_4916.JPG',
      '/photos/summer/IMG_4939.JPG',
      '/photos/summer/IMG_4958.JPG',
      '/photos/summer/IMG_4986.JPG',
      '/photos/summer/IMG_5159.mp4',
      '/photos/summer/IMG_5218.JPG',
      '/photos/summer/IMG_5260.JPG',
      '/photos/summer/IMG_5323.JPG',
      '/photos/summer/IMG_5326.JPG',
      '/photos/summer/IMG_5353.JPG',
      '/photos/summer/IMG_5550.JPG',
      '/photos/summer/IMG_5553.JPG',
      '/photos/summer/IMG_5572.JPG',
      '/photos/summer/IMG_5575.JPG',
      '/photos/summer/IMG_5722.JPG',
      '/photos/summer/IMG_5723.JPG',
      '/photos/summer/IMG_5835.JPG',
      '/photos/summer/IMG_9929.jpg',
      '/photos/summer/IMG_9931.JPG',
      '/photos/summer/IMG_9973.JPG',
      '/photos/summer/IMG_0227.JPG',
      '/photos/summer/IMG_0360.JPG',
      '/photos/summer/IMG_2919.JPG',
      '/photos/summer/IMG_4542.JPG',
      '/photos/summer/IMG_4631.JPG',
      '/photos/summer/IMG_5375.JPG',
      '/photos/summer/IMG_5451.JPG',
      '/photos/summer/IMG_5481.JPG',
      '/photos/summer/IMG_5509.JPG',
      '/photos/summer/IMG_5686.JPG',
      '/photos/summer/IMG_5710.JPG',
      '/photos/summer/IMG_5800.JPG',
      '/photos/summer/IMG_5943.JPG',
      '/photos/summer/IMG_5948.JPG',
      '/photos/summer/IMG_6029.JPG',
      '/photos/summer/IMG_6062.JPG',
      '/photos/summer/IMG_6064.JPG',
      '/photos/summer/IMG_6067.JPG',
      '/photos/summer/IMG_6111.JPG',
    ],
  },
];
