export interface Test {
  name: string;
  description?: string;
  questions: Question[];
}

export interface Question {
  text: string;
  choices: Choice[];
}

export interface Choice {
  value: ChoiceValue;
  price: number;
}

export type ChoiceValue = number | string;

export const TESTS: Test[] = [
  {
    name: 'Тест 1',
    description: 'Тест по теме "Рыночные отношения, конкуренция"',
    questions: [
      {
        text: 'Равновесная цена:',
        choices: [
          { value: 'возникает в условиях конкуренции', price: 1 },
          { value: 'устраивает только продавцов', price: 0 },
          { value: 'устанавливается государством', price: 0 },
        ],
      },
      {
        text: 'Найдите черты совершенной конкуренции:',
        choices: [
          {
            value:
              'рынок делят между собой несколько крупных фирм-производителей, государство оказывает значительное влияние на цены',
            price: 0,
          },
          {
            value:
              'цены устанавливает небольшое число крупных производителей, на рынке присутствует большое количество продавцов и покупателей',
            price: 0,
          },
          {
            value:
              'отсутствует контроль за ценами со стороны государства, на рынке присутствует большое количество продавцов и покупателей',
            price: 1,
          },
        ],
      },
      {
        text: 'Неценовая конкуренция включает в себя:',
        choices: [
          { value: 'рекламу', price: 1 },
          { value: 'увеличение прибыли благодаря повышению цен', price: 0 },
          { value: 'увеличение прибыли благодаря небольшому спросу', price: 0 },
        ],
      },
      {
        text: 'Монополист, реализуя свой продукт по разным ценам различным группам потребителей, осуществляет:',
        choices: [
          { value: 'ценовое регулирование', price: 1 },
          { value: 'ценовой демпинг', price: 0 },
          { value: 'политику выравнивания цен', price: 0 },
        ],
      },
      {
        text: 'Монополистическая равновесная цена по сравнению с ценой рынка совершенной конкуренции будет:',
        choices: [
          { value: 'выше', price: 1 },
          { value: 'ниже', price: 0 },
          { value: 'такой же', price: 0 },
        ],
      },
      {
        text: 'Предприятие, на рынке монополистической конкуренции, в краткосрочном периоде может:',
        choices: [
          { value: 'работать при убытках, превышающих постоянные издержки', price: 0 },
          { value: 'максимизировать прибыль', price: 1 },
          { value: 'получать нормальную прибыль', price: 0 },
        ],
      },
      {
        text: 'Монополистический рынок характеризуется:',
        choices: [
          { value: 'свободой входа', price: 0 },
          { value: 'одним предприятием', price: 1 },
          { value: 'дифференциацией продукта', price: 0 },
        ],
      },
      {
        text: 'Рынок чистой конкуренции характеризуется формой конкурентной борьбы:',
        choices: [
          { value: 'ценовая', price: 1 },
          { value: 'реклама', price: 0 },
          { value: 'лидерство в ценах', price: 0 },
        ],
      },
      {
        text: 'Предприятие в условиях долгосрочного равновесия при монополистической конкуренции:',
        choices: [
          { value: 'возмещает общие издержки', price: 1 },
          { value: 'получает экономическую прибыль', price: 0 },
          { value: 'не возмещает переменные издержки', price: 0 },
        ],
      },
      {
        text: 'Единственная структура на рынке, не способная влиять на цены – это…',
        choices: [
          { value: 'чистая монополия', price: 0 },
          { value: 'олигополия', price: 0 },
          { value: 'монополистическая конкуренция', price: 1 },
          { value: 'чистая конкуренция', price: 0 },
        ],
      },
    ],
  },

  {
    name: 'Тест 2',
    description: 'Тест по теме "Виды и функции конкуренции"',
    questions: [
      {
        text: 'Для рынка совершенной конкуренции характерно, что:',
        choices: [
          { value: 'фирмы осуществляют неценовую конкуренцию', price: 1 },
          { value: 'фирмы не имеют собственной политики в области установления цен', price: 0 },
          { value: 'фирмы производят дифференцированную продукцию', price: 0 },
        ],
      },
      {
        text: 'Олигополистическая взаимозависимость означает, что',
        choices: [
          {
            value: 'каждая фирма производит продукцию, похожую, но не идентичную той, которую производят конкуренты',
            price: 1,
          },
          { value: 'все фирмы производят одну и ту же продукцию', price: 0 },
          {
            value:
              'каждая фирма должна учитывать реакцию конкурентов, когда она проводит определенную ценовую политику',
            price: 0,
          },
          { value: 'каждая фирма несет убытки из-за неустойчивости рыночных цен', price: 0 },
        ],
      },
      {
        text: 'Совершенная конкуренция:',
        choices: [
          { value: 'наличие единственного производителя на рынке', price: 0 },
          { value: 'существование нескольких крупных производителей, делящих рынок определенной продукции', price: 0 },
          { value: 'присутствие на рынке множества производителей, выпускающих однотипную продукцию', price: 1 },
        ],
      },
      {
        text: 'Монополия:',
        choices: [
          { value: 'наличие единственного производителя на рынке', price: 1 },
          { value: 'существование нескольких крупных производителей, делящих рынок определенной продукции', price: 0 },
          { value: 'присутствие на рынке множества производителей, выпускающих однотипную продукцию', price: 0 },
        ],
      },
      {
        text: 'Неценовая конкуренция включает в себя:',
        choices: [
          { value: 'увеличение прибыли благодаря небольшому спросу', price: 0 },
          { value: 'совершенствование продукта', price: 1 },
          { value: 'увеличение продаж от понижения цены', price: 0 },
        ],
      },
      {
        text: 'Модель рынка совершенной конкуренции характеризуется:',
        choices: [
          { value: 'дифференциацией продукта', price: 0 },
          { value: 'разной степенью доступности рыночной информации', price: 0 },
          { value: 'множеством мелких фирм', price: 1 },
        ],
      },
      {
        text: 'Тип рынка, если на нем в качестве покупателя выступает лишь одно предприятие:',
        choices: [
          { value: 'монополия', price: 0 },
          { value: 'монопсония', price: 1 },
          { value: 'олигополия', price: 0 },
          { value: 'полиполия', price: 0 },
        ],
      },
      {
        text: 'Наилучший пример чистой монополии — это:',
        choices: [
          { value: 'булочная рядом с вашим домом', price: 0 },
          { value: 'производитель пива', price: 0 },
          { value: 'единственная авиалиния между вашим городом и столицей страны', price: 1 },
          { value: 'городское предприятие водоснабжения', price: 0 },
        ],
      },
      {
        text: 'Можно утверждать, что с ростом цены на продукцию монополиста его общая прибыль:',
        choices: [
          { value: 'уменьшится', price: 0 },
          { value: 'увеличится', price: 1 },
          { value: 'не изменится', price: 0 },
        ],
      },
    ],
  },
];

export const GLOSSARY: Map<string, string> = new Map([
  ['Конкуренция', 'соперничество экономических субъектов за лучшие условия производства, купли и продажи товаров'],
  [
    'Дискриминационные условия',
    'условия доступа на товарный рынок, условия производства, обмена, потребления, приобретения, продажи, иной передачи товара, при которых хозяйствующий субъект или несколько хозяйствующих субъектов поставлены в неравное положение по сравнению с другим хозяйствующим субъектом или другими хозяйствующими субъектами',
  ],
  [
    'Монополистическая деятельность',
    'злоупотребление хозяйствующим субъектом, группой лиц своим доминирующим положением, соглашения или согласованные действия, запрещенные антимонопольным законодательством, а также иные действия (бездействие), признанные в соответствии с федеральными законами монополистической деятельностью',
  ],
  ['Конкурентная цена', 'цена, по которой финансовая услуга может быть оказана в условиях конкуренции'],
  ['Антимонопольный орган', 'федеральный антимонопольный орган и его территориальные органы'],
  [
    'Товарный рынок',
    'товары, которые могут быть сравнимы по их функциональному назначению, применению, качественным и техническим характеристикам, цене и другим параметрам таким образом, что приобретатель действительно заменяет или готов заменить один товар другим при потреблении (в том числе при потреблении в производственных целях)',
  ],
  [
    'Финансовая услуга',
    'банковская услуга, страховая услуга, услуга на рынке ценных бумаг, услуга по договору лизинга, а также услуга, оказываемая финансовой организацией и связанная с привлечением и (или) размещением денежных средств юридических и физических лиц',
  ],
  [
    'Картель',
    'ограничивающее конкуренцию соглашение между хозяйствующими субъектами-конкурентами, то есть между хозяйствующими субъектами, осуществляющими продажу товаров на одном товарном рынке',
  ],
  [
    'Искусственные монополии',
    'это объединения нескольких предприятий, которые создаются ради получения монополистических выгод',
  ],
  [
    'Синдикат',
    'это объединение ряда предприятий одной отрасли, при котором за его участниками сохраняются производственная самостоятельность и собственность на средства производства. Однако предприятия, входящие в синдикат, теряют коммерческую самостоятельность, а произведённая ими продукция реализуется через единую контору',
  ],
  [
    'Трест',
    'это единое акционерное общество, господствующее в определённой отрасли. Предприятия, входящие в трест, лишены производственной и коммерческой самостоятельности',
  ],
  [
    'Концерн',
    'это объединение предприятий различных отраслей хозяйства, торговых фирм, банков, транспортных компаний, которое находится под единым финансовым контролем',
  ],
  ['Монопсония', 'ситуация на рынке, когда имеется только один покупатель и множество продавцов'],
]);

export const TASKS: { name: string; description: string; text: string; taskQuestions: string[] }[] = [
  {
    name: 'Функции рынка',
    description: 'Найдите правильные ответы',
    text: 'Найдите в приведённом ниже списке характеристики функций рынка (рыночного механизма)',
    taskQuestions: ['стихийная', 'санирующая', 'стимулирующая', 'директивная', 'посредническая', 'поддерживающая'],
  },
  {
    name: 'Анализ текста',
    description: 'Прочитайте текст и выполните задания 1−4',
    text:
      '«Коренное отличие рыночного ценообразования от централизованного установления цен состоит в том, что реальный процесс формирования цен здесь происходит не в сфере производства, не на предприятии, а в сфере реализации продукции, т. е. на рынке, под воздействием спроса и предложения, товарно-денежных отношений. Цена товара и его полезность проходят проверку рынком и окончательно формируются на рынке. <…>\n' +
      '\n' +
      '  Механизм ценообразования в условиях рыночных отношений проявляется через цены, их динамику. Динамика цен формируется под воздействием двух важнейших факторов — стратегического и тактического.\n' +
      '\n' +
      '  Стратегический фактор выражается в том, что цены образуются на основе стоимости товаров. Постоянно происходят колебания цен вокруг стоимости. Процесс этот весьма сложный.\n' +
      '\n' +
      '  Тактический фактор проявляется в том, что цены на конкретные товары формируются под влиянием конъюнктуры рынка. <…>\n' +
      '\n' +
      '  Мощным двигателем рыночной экономики является конкуренция. Именно она движет экономику вперёд, используя такой действенный механизм, как закон стоимости, механизм ценообразования. Конкуренция является своеобразным экзаменом для предпринимателя на совершенство его производства, на жизнестойкость и выживаемость. Но вместе с тем конкуренция, и это главное, есть механизм стимулирования постоянного и всестороннего совершенствования производства, механизм закрепления в экономике всего здорового и вытеснения несовершенного и отстающего. <…>\n' +
      '\n' +
      '  Конкуренция неизбежно ставит предпринимателя в такое положение, когда он вынужден (если хочет выжить в конкурентной борьбе) менять многое в стратегии и тактике производства, непрерывно работать над его совершенствованием, повышать качество своей продукции, осваивать её новые виды, использовать наиболее совершенные и гибкие методы ценообразования и т. д.\n' +
      '\n' +
      '  Рыночный механизм ценообразования должен быть таким, чтобы он создавал условия для конкуренции и ликвидации монополизма в промышленности и торговле и через это способствовал оптимизации их структуры, а также структуры потребления.\n' +
      '\n' +
      '  Цены, которые в условиях рынка устанавливаются по соглашению сторон, называются договорными (свободными) ценами. Идея договорного рыночного ценообразования заключается в том, чтобы нацелить предприятие-изготовителя на выпуск товаров, пользующихся спросом, что должно способствовать ликвидации дефицита. Гибкость и оперативность в установлении рыночных цен приводит к тому, что экономика становится более динамичной и ориентируется на удовлетворение общественных потребностей. Свободные (договорные) цены, которые устанавливаются по соглашению товаропроизводителей и потребителей продукции, являются важнейшим элементом согласования экономических интересов в народном хозяйстве. <…>\n' +
      '\n' +
      '  Следует сказать, что свободные цены сами по себе ещё не обеспечивают экономический рост, а во многих случаях, особенно в условиях дефицита, приводят к стремительному повышению уровня цен».',
    taskQuestions: [
      'Что, по мнению автора, означает понятие «свободные (договорные) цены»? В чём заключается их значение для развития народного хозяйства?',
      'Под воздействием каких двух факторов, с точки зрения автора, формируется динамика цен? В чём выражаются эти факторы?',
      'Автор утверждает, что конкуренция является «мощным двигателем рыночной экономики». Проиллюстрируйте тремя примерами влияние конкуренции на развитие производства.',
      'По мнению ряда экономистов, в условиях рыночной экономики государство не должно утрачивать контроль над ценами на товары и услуги. Используя содержание текста и обществоведческие знания, выскажите три предположения о возможных формах и проявлениях подобного контроля.',
    ],
  },
];
