"use strict";

export const noInfo = `Информация в технологическом регламенте не была найдена`;

export const valveHeadings = [
  "Место установки:",
  "Назначение клапана:",
  "Тип клапана:",
  "Обоснование выбора клапана:",
];
export const valves = [
  {
    number: "FV-3031",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "FV-4001",
    location: "Линия сжиженного газа с установки ГФУ.",
    use: "Регулирование расхода сжиженного газа.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения Е-501.",
    coordinates: [57.533405, 39.783011],
    important: true,
  },
  {
    number: "FV-4003",
    location: "Линия циркуляции насосов подачи сырья в E-501.",
    use: "Регулирование избыточного количества СНГ в Е-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан открывается, возвращая сжиженный газ в E-501, во избежание поломки насоса. ",
    coordinates: [57.5333021, 39.782856],
    important: true,
  },
  {
    number: "FV-4004",
    location: "Линия подачи сырья в выпарной аппарат T-503.",
    use: "Регулирование расхода сжиженного газа для поддержания постоянного давления в T-503.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения T-503.",
    coordinates: [57.5333401, 39.7827799],
    important: true,
  },
  {
    number: "FV-4005",
    location:
      "Линия сброса избытка испарённого газа в систему топливного газа.",
    use: "Регулирование расхода испаренного газа в систему топливного газа.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание превышения давления в системе топливного газа.",
    coordinates: [57.5334595, 39.7830639],
    important: true,
  },
  {
    number: "FV-4006",
    location: "Линия подачи смеси испарённого сырья с водородом в Т-513.",
    use: "Регулирование расхода испаренного сырья с водородом в Т-513.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание роста давления в системе.",
    coordinates: [57.5332726, 39.7829365],
    important: false,
  },
  {
    number: "FV-4007",
    location:
      "Линия подачи циркуляционного водорода с установки гидрокрекинга.",
    use: "Регулирование расхода водорода на смешение с сырьем.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, прекращая поступление водорода на смешение с сырьем во избежание превышения давления в системе технологического газа.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "FV-8-3809",
    location: "Линия разгрузки насоса Н-504",
    use: "Регулирование минимального расхода конденсата через Н-504",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание поломки насосов Н-504А/В.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "FV-4008",
    location: "Линия сырьевого газа из Т-502 в Т-513.",
    use: "Отключение подачи сырьевого газа на установку.",
    type: "НЗ",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5334197, 39.7826934],
    important: true,
  },
  {
    number: "FV-4009",
    location: "Линия вывода конденсата из Т-502 в Е-508.",
    use: "Регулирование расхода пара среднего давления в Т-502.",
    type: "НЗ",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.533384, 39.7826907],
    important: true,
  },
  {
    number: "FV-4010",
    location:
      "Линия подачи смешанного газа в змеевик предварительного подогрева сырья",
    use: "Регулирование расхода смешанного газа в Т-513",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, прекращая поступление смешанного газа во избежание превышения давления в системе технологического газа.",
    coordinates: [57.5329402, 39.7824332],
    important: true,
  },
  {
    number: "FV-4013",
    location: "Линия подачи питательной котловой воды в змеевик экономайзера",
    use: "Регулирование расхода котловой питательной воды в экономайзер Т-514",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения Е-502.",
    coordinates: [57.5328239, 39.7825425],
    important: false,
  },
  {
    number: "FV-4014",
    location: "Байпас насыщенного пара высокого давления.",
    use: "Регулирование расхода пара высокого давления в коллектор пара среднего давления.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание роста давления в системе пара среднего давления.",
    coordinates: [57.5328729, 39.7824651],
    important: false,
  },
  {
    number: "FV-4015",
    location:
      "Линия подачи пара высокого давления в подогреватель смешанного сырья",
    use: "Регулирование расхода перегретого водяного пара в тройник смешения перед T-511.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание  конденсации пара в реакционных аппаратах П-501 и Р-502.",
    coordinates: [57.5329337, 39.7826763],
    important: false,
  },
  {
    number: "FV-4016",
    location:
      "Линия подачи насыщенного пара высокого давления в подогреватель смешанного сырья",
    use: "Регулирование расхода насыщенного технологического пара в тройник смешения перед T-511",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание  конденсации пара в реакционных аппаратах П-501 и Р-502.",
    coordinates: [57.5329337, 39.7826763],
    important: false,
  },
  {
    number: "FV-4018",
    location: "Линия подачи питательной котловой воды в паросборник.",
    use: "Регулирование расхода питательной котловой воды в паросборник.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения Е-502.",
    coordinates: [57.5329645, 39.7825871],
    important: false,
  },
  {
    number: "FV-4019",
    location:
      "Линия подачи циркулирующей воды в ударные трубы парогенератора высокого давления Т-510.",
    use: "Регулирование расхода котловой воды в T-510.",
    type: "НО",
    shutdownReason: "Клапан откроется, для предотвращения перегрева T-510.",
    coordinates: [57.5327527, 39.7829834],
    important: false,
  },
  {
    number: "FV-4019A",
    location: "Линия подачи пара среднего давления к турбине насоса H-502A.",
    use: "Регулирование производительности насоса H-502A.",
    type: "НО",
    shutdownReason:
      "Клапан откроется, обеспечив непрерывное поступление воды в котлоагрегаты для их постепенного охлаждения.",
    coordinates: [57.532719, 39.7824229],
    important: false,
  },
  {
    number: "FV-4020",
    location: "Линия циркуляции котловой воды от H-502A/В в Е-502.",
    use: "Регулирование расхода котловой воды через парогенератор T-504.",
    type: "НО",
    shutdownReason:
      "Клапан откроется, обеспечив непрерывное поступление воды в парогенератор для его постепенного охлаждения.",
    coordinates: [57.5329868, 39.7825506],
    important: false,
  },
  {
    number: "FV-4023",
    location:
      "Линия рецикла насоса деаэрированной питательной котловой воды H-503А.",
    use: "Регулирование расхода рецикловой деаэрированной котловой воды.",
    type: "НО",
    shutdownReason: "Клапан откроется, во избежании поломки насоса Н-503А.",
    coordinates: [57.5328502, 39.7822415],
    important: false,
  },
  {
    number: "FV-4024",
    location:
      "Линия рецикла насоса деаэрированной питательной котловой воды H-503В.",
    use: "Регулирование расхода рецикловой деаэрированной котловой воды.",
    type: "НО",
    shutdownReason: "Клапан откроется, во избежании поломки насоса Н-503В.",
    coordinates: [57.5328414, 39.7823095],
    important: false,
  },
  {
    number: "FV-4028",
    location: "Линия отходящего газа КЦА в печь П-501.",
    use: "Регулирование расхода отходящего газа на сжигание в печь П-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание превышения температуры в П-501.",
    coordinates: [57.5330099, 39.7827474],
    important: false,
  },
  {
    number: "FV-4034",
    location: "Линия вывода конденсата из подогревателя топливного газа",
    use: "Регулирование расхода пара среднего давления в нагреватель T-508.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание роста давления в Е-509.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "FV-4052",
    location: "Линия подачи отходящего газа в П-502",
    use: "Регулирование расхода отходящего газа КЦА к горелкам печи П-502.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание превышения температуры в П-502.",
    coordinates: [57.5325473, 39.782225],
    important: false,
  },
  {
    number: "FV-4751",
    location: "Линия вывода  очищенного водорода с КЦА М-701 на ЛЧ 24/7, ГОБ.",
    use: "Регулирование расхода водорода с КЦА М-701 на ЛЧ 24/7, ГОБ.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание нарушения технологического режима на установках ЛЧ 24/7, ГОБ.",
    coordinates: [57.5333135, 39.7830602],
    important: true,
  },
  {
    number: "FV-6006",
    location: "Линия вывода очищенного водорода на установку риформинга с НРК.",
    use: "Регулирование расхода водорода на установку риформинга с НРК.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание нарушения технологического режима на установке риформинга с НРК",
    coordinates: [57.533255, 39.7832047],
    important: false,
  },
  {
    number: "HV-3091",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.5331238, 39.7826619],
    important: false,
  },
  {
    number: "HV-4051",
    location: "Линия сжиженного газа на приём Н-501А/В.",
    use: "Отключение подачи сжиженного газа из емкости E-501 к насосам H-501А/В.",
    type: "Не изменяет положения",
    shutdownReason: "Клапан не меняет положения во избежание поломки Н-501А/В.",
    coordinates: [57.533464, 39.783174],
    important: true,
  },
  {
    number: "HV-4053",
    location: "Линия подачи азота в змеевик Т-513.",
    use: "Подача азота в змеевик T-513.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-4054",
    location: "Линия подачи азота в змеевик Т-513.",
    use: "Подача азота в змеевик T-513.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-4061",
    location: "Линия продувки конвекционной секции П-501.",
    use: "Включение/отключение подачи пара среднего давления в конвекционную секцию П-501.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5329073, 39.7823481],
    important: true,
  },
  {
    number: "HV-4062",
    location: "Линия продувки конвекционной секции П-501.",
    use: "Включение/отключение подачи пара среднего давления в конвекционную секцию П-501.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5327806, 39.7820852],
    important: true,
  },
  {
    number: "HV-4063",
    location: "Линия продувки радиантной секции П-501.",
    use: "Включение/отключение подачи пара среднего давления в радиантную секцию П-501.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5329645, 39.7822073],
    important: true,
  },
  {
    number: "HV-4064",
    location: "Линия отвода пара среднего давления в сеть завода.",
    use: "Включение/отключение отвода пара среднего давления в сети НПЗ.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5329805, 39.7824654],
    important: true,
  },
  {
    number: "HV-4071",
    location: "Линия на выкиде насосов H-501A/B.",
    use: "Закрытие нагнетания H-501A/B.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5333021, 39.782856],
    important: true,
  },
  {
    number: "HV-5005",
    location: "Линия сырьевого газа до Т-502.",
    use: "Отключение подачи сырьевого газа на установку.",
    type: "НЗ",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-6001",
    location:
      "Линия подачи ВСГ с установки риформинга с НРК на блок КЦА М-701.",
    use: "Закрытие/открытие подачи ВСГ на блок КЦА M-701",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-6014",
    location: "Линия подачи водорода на НПЗ.",
    use: "Закрытие/открытие подачи водорода в сети НПЗ.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-7023",
    location: "Линия топливного газа на установку из заводской сети",
    use: "Закрытие/открытие подачи топливного газа на установку",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "HV-8205",
    location: "Линия подачи пара на паровую завесу печи П-501",
    use: "Закрытие/открытие подачи пара на паровую завесу печи П-501",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.532793, 39.7820128],
    important: true,
  },
  {
    number: "HV-8206",
    location: "Линия подачи пара на паровую завесу печи П-502",
    use: "Закрытие/открытие подачи пара на паровую завесу печи П-502",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5326378, 39.7823229],
    important: true,
  },
  {
    number: "HV-9757",
    location: "Линия вывода очи-щенного водорода с КЦА М-701 на ЛЧ 24/7, ГОБ.",
    use: "Закрытие/открытие подачи водорода с КЦА М-701 на ЛЧ 24/7, ГОБ.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в открытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: true,
  },
  {
    number: "LV-4004",
    location: "Линия отвода конденсата из сборника парового конденсата.",
    use: "Регулирование уровня парового конденсата в сборнике E-510.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание снижения уровня в Е-510 и роста температуры в Т-503.",
    coordinates: [57.5332885, 39.7828218],
    important: false,
  },
  {
    number: "LV-4005",
    location: "Линия отвода конденсата из емкости непрерывной продувки.",
    use: "Регулирование уровня в емкости непрерывной продувки E-504.",
    type: "НЗ",
    shutdownReason: "Клапан закроется, во избежание перегрева Т-507 и Е-617.",
    coordinates: [57.5330523, 39.7827632],
    important: false,
  },
  {
    number: "LV-4008",
    location:
      "Линия отвода конденсата из охладительного испарителя технологического конденсата.",
    use: "Регулирование уровня в охладительном испарителе E-508.",
    type: "НЗ",
    shutdownReason: "Клапан закроется, во избежание перегрева Е-603.",
    coordinates: [57.5330912, 39.782442],
    important: false,
  },
  {
    number: "LV-4009",
    location: "Линия отвода конденсата из сепаратора горячего продукта.",
    use: "Регулирование уровня в сепараторе горячего продукта E-506.",
    type: "НЗ",
    shutdownReason: "Клапан закроется, во избежание повышения давления в Е-508",
    coordinates: [57.5333021, 39.782856],
    important: true,
  },
  {
    number: "LV-4011",
    location: "Линия отвода конденсата из сепаратора холодного продукта.",
    use: "Регулирование уровня в сепараторе холодного продукта E-507.",
    type: "НЗ",
    shutdownReason: "Клапан закроется, во избежание повышения давления в Е-508",
    coordinates: [57.5333425, 39.7828118],
    important: true,
  },
  {
    number: "LV-4013",
    location:
      "Линия подпитки деминерализованной воды в подогреватель питательной котловой воды.",
    use: "Регулирование уровня в деаэраторе E-603.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения Е-603.",
    coordinates: [57.5333551, 39.7826676],
    important: true,
  },
  {
    number: "MOV-6008",
    location: "Линия отходящего газа КЦА на входе в компрессор CK-701.",
    use: "Включение/отключение подачи отходящего газа КЦА к CK-701.",
    type: "Задвижка с электроприводом",
    shutdownReason:
      "Задвижка закрывается по сигналу аварийной блокировки для отключения CK-701 от технологической схемы.",
    coordinates: [57.5335629, 39.7824856],
    important: true,
  },
  {
    number: "MOV-6009",
    location: "Линия отходящего газа КЦА на выходе из компрессора CK-701.",
    use: "Включение/отключение подачи отходящего газа КЦА из CK-701.",
    type: "Задвижка с электроприводом",
    shutdownReason:
      "Задвижка закрывается по сигналу аварийной блокировки для отключения CK-701 от технологической схемы.",
    coordinates: [57.5335629, 39.7824856],
    important: true,
  },
  {
    number: "PCV-4028",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.5329337, 39.7826763],
    important: false,
  },
  {
    number: "PCV-4030",
    location: "Пилотный газ в сырьевую печь.",
    use: "Регулирование давления пилотного газа на входе в П-502.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, обеспечивая сгорание остатков газа пилотных горелок печи П-502.",
    coordinates: [57.5326378, 39.7823229],
    important: true,
  },
  {
    number: "PCV-55017A",
    location: "Воздух КИП на блок КЦА (M-501).",
    use: "Регулирование давления воздуха КИП.",
    type: "НО",
    shutdownReason: "Клапан открывается, обеспечивая работу приборов КиА.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "PCV-55017B",
    location: "Воздух КИП на блок КЦА (M-501).",
    use: "Регулирование давления воздуха КИП.",
    type: "НО",
    shutdownReason: "Клапан открывается, обеспечивая работу приборов КиА.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "PCV-75017A",
    location: "Воздух КИП на блок КЦА (M-701).",
    use: "Регулирование давления воздуха КИП.",
    type: "НО",
    shutdownReason: "Клапан открывается, обеспечивая работу приборов КиА.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "PCV-75017B",
    location: "Воздух КИП на блок КЦА (M-701).",
    use: "Регулирование давления воздуха КИП.",
    type: "НО",
    shutdownReason: "Клапан открывается, обеспечивая работу приборов КиА.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "PV-3313",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.5327982, 39.7820708],
    important: false,
  },
  {
    number: "PV-4001A",
    location:
      "Линия поддавливания уравнительной емкости смешанного сжиженного газа Е-501.",
    use: "Регулирование давления в Е-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в Е-501.",
    coordinates: [57.5334413, 39.7831434],
    important: true,
  },
  {
    number: "PV-4001B",
    location:
      "Линия сброса газа из уравнительной емкости смешанного газа Е-501.",
    use: "Регулирование давления в Е-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в Е-501.",
    coordinates: [57.5333857, 39.7830233],
    important: true,
  },
  {
    number: "PV-4003",
    location: "Линия сброса давления из Р-503А/В на факел.",
    use: "Регулирование давления в реакторах P-503A,B.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления в Р-503А/В.",
    coordinates: [57.5331153, 39.7825452],
    important: true,
  },
  {
    number: "PV-4007",
    location: "Линия пара высокого давления в пароохладитель М-504.",
    use: "Регулирование давления в линии пара высокого давления после M-503",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в коллекторе пара среднего давления.",
    coordinates: [57.5329832, 39.7823514],
    important: true,
  },
  {
    number: "PV-4010",
    location:
      "Линия подачи пара из емкости непрерывной продувки E-504 в пароохладитель низкого давления М-505.",
    use: "Регулирование давления в емкости E-504.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения температуры в Е-603.",
    coordinates: [57.5330099, 39.7827474],
    important: false,
  },
  {
    number: "PV-4011",
    location: "Линия пара среднего давления в охладитель М-505.",
    use: "Регулирование давления пара низкого давления на входе в E-603.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения температуры в Е-603.",
    coordinates: [57.5330226, 39.7825275],
    important: false,
  },
  {
    number: "PV-4013",
    location: "Линия пара на турбины насоса деаэрированной воды Н-503В.",
    use: "Регулирование давления пара среднего давления, подаваемого на турбину насоса H-503B.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, обеспечивая непрерывную подачу деаэрированной воды к потребителям.",
    coordinates: [57.5327957, 39.7822374],
    important: false,
  },
  {
    number: "PV-4016A",
    location: "Линия пара среднего давления в шлемовый трубопровод Е-508.",
    use: "Регулирование давления в испарителе технологического конденсата E-508.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления Е-508.",
    coordinates: [57.533084, 39.7823752],
    important: false,
  },
  {
    number: "PV-4016B",
    location:
      "Линия вывода пара в охладитель испарителя технологического конденсата.",
    use: "Регулирование давления в испарителе технологического конденсата E-508.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения температуры в Е-603.",
    coordinates: [57.533084, 39.7823752],
    important: false,
  },
  {
    number: "PV-4017",
    location: "Сепаратор холодного продукта.",
    use: "Регулирование давления в сепараторе холодного продукта E-507.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления в Е-507.",
    coordinates: [57.5333857, 39.7830233],
    important: true,
  },
  {
    number: "PV-4018A",
    location: "Линия водорода блока КЦА М-501 в E-102 А/В/С",
    use: "Регулирование давления водорода на блоке КЦА М-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в E-102 А/В/С установки гидрокрекинга.",
    coordinates: [57.533318, 39.7831105],
    important: true,
  },
  {
    number: "PV-4018B",
    location: "Линия отвода водорода блока КЦА М-501 в топливный газ.",
    use: "Регулирование давления водорода на блоке КЦА М-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в системе топливного газа.",
    coordinates: [57.5334595, 39.7830639],
    important: true,
  },
  {
    number: "PV-4018C",
    location:
      "Линия отвода водорода блока КЦА М-501 на факел низкого давления.",
    use: "Регулирование давления водорода на блоке КЦА М-501.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления на блоке М-501.",
    coordinates: [57.5333857, 39.7830233],
    important: true,
  },
  {
    number: "PV-4024",
    location: "Линия топливного газа в печь парового риформинга.",
    use: "Регулирование давления топливного газа на входе в печь П-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения температуры в П-501.",
    coordinates: [57.5329337, 39.7826763],
    important: false,
  },
  {
    number: "PV-4028",
    location: "Линия топливного газа в сырьевую печь.",
    use: "Регулирование давления топливного газа к горелкам печи П-502.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения температуры в П-502.",
    coordinates: [57.5325946, 39.7822475],
    important: false,
  },
  {
    number: "PV-4036",
    location: "Линия подачи топливного газа из заводской сети в Е-509.",
    use: "Регулирование давления в сепараторе топливного газа Е-509.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание роста давления в системе топливного газа.",
    coordinates: [57.5332712, 39.7829593],
    important: false,
  },
  {
    number: "PV-4040",
    location: "Линия сброса отходящего газа КЦА M-501 в факельную систему. ",
    use: "Регулирование давления в адсорберах M-501.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание роста давления в сепараторе отдувочного газа М-501-V2.",
    coordinates: [57.5333135, 39.7830602],
    important: true,
  },
  {
    number: "PV-4136",
    location:
      "Линия сброса давления из сепаратора топливного газа E-509 на факел низкого давления",
    use: "Регулирование давления в Е-509 (при нормальных условиях клапан закрыт)",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления в системе топливного газа.",
    coordinates: [57.5333857, 39.7830233],
    important: true,
  },
  {
    number: "PV-6008A",
    location: "Линия водорода блока КЦА М-701 в E-102 А/В/С",
    use: "Регулирование давления водорода блока КЦА М-701 на выходе с установки",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в E-102 А/В/С установки гидрокрекинга.",
    coordinates: [57.5332908, 39.7831424],
    important: true,
  },
  {
    number: "PV-6008B",
    location:
      "Линия сброса водорода блока КЦА М-701 в систему топливного газа.",
    use: "Регулирование давления водорода блока КЦА М-701 на выходе с установки",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание повышения давления в системе топливного газа.",
    coordinates: [57.5334595, 39.7830639],
    important: true,
  },
  {
    number: "PV-6008C",
    location: "Линия сброса водорода блока КЦА М-701 в факельный коллектор.",
    use: "Регулирование давления водорода блока КЦА М-701 на выходе с установки",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления на блоке М-701.",
    coordinates: [57.5333857, 39.7830233],
    important: true,
  },
  {
    number: "PV-6009",
    location: "Линия сброса отходящего газа КЦА М-701 на факел.",
    use: "Регулирование давления в системе КЦА М-701.",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления в линии отходящего газа КЦА.",
    coordinates: [57.5333135, 39.7830602],
    important: true,
  },
  {
    number: "PV-6300",
    location: "Линия разгрузки СК-701",
    use: "Регулирование давления в системе СК-701",
    type: "НО",
    shutdownReason:
      "Клапан открывается, во избежание повышения давления в системе",
    coordinates: [57.5335629, 39.7824856],
    important: false,
  },
  {
    number: "TV-3049",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.5330885, 39.7826066],
    important: false,
  },
  {
    number: "TV-4015",
    location:
      "Линия подачи питательной котловой воды в охладитель пара высокого давления.",
    use: "Регулирование температуры пара высокого давления после охладителя пара M-503.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание  попадания конденсата пара в реакционные аппараты П-501 и Р-502.",
    coordinates: [57.5329805, 39.7824654],
    important: false,
  },
  {
    number: "TV-4018",
    location:
      "Линия подачи котловой воды от насосов H-502А/В в экономайзер T-514.",
    use: "Регулирование температуры деаэрированной котловой воды на входе в экономайзер.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается во избежание повышения температуры деминерализованной воды на входе в экономайзер Т-514.",
    coordinates: [0, 0],
    important: false,
  },
  {
    number: "TV-4040",
    location: "Линия подачи питательной котловой воды в охладитель пара СД.",
    use: "Регулирование температуры пара среднего давления после охладителя пара M-504.",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание попадания конденсата на паровые турбины насосов.",
    coordinates: [57.532992, 39.7825037],
    important: false,
  },
  {
    number: "TV-4050",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.532992, 39.7825037],
    important: false,
  },
  {
    number: "TV-4056",
    location: "Байпас питательной котловой воды на подогревателе Т-505",
    use: "Регулирование температуры питательной котловой воды на входе в E-502.",
    type: "НО",
    shutdownReason:
      "НО	Клапан открывается, обеспечивая меньший нагрев котловой воды.",
    coordinates: [57.5334616, 39.7829231],
    important: false,
  },
  {
    number: "TV-4063",
    location:
      "Линия подачи питательной котловой воды в охладитель пара низкого давления M-505.",
    use: "Регулирование температуры пара низкого давления.",
    type: "НЗ",
    shutdownReason: "Клапан закрывается, во избежание переполнения Е-603.",
    coordinates: [57.53301, 39.7824929],
    important: false,
  },
  {
    number: "UV-3006",
    location: noInfo,
    use: noInfo,
    type: noInfo,
    shutdownReason: noInfo,
    coordinates: [57.5328549, 39.7821208],
    important: false,
  },
  {
    number: "UV-4001",
    location: "Линия подачи сырья в змеевик подогревателя смешанного сырья",
    use: "Отключение подачи сырья в змеевик подогревателя смешанного сырья",
    type: "НЗ",
    shutdownReason:
      "Клапан закрывается, во избежание роста давления в системе технологического газа.",
    coordinates: [57.5329931, 39.7827306],
    important: true,
  },
  {
    number: "UV-4003",
    location: "Газ сепаратора холодного продукта в секцию КЦА.",
    use: "Отключение подачи конвертированного газа на блок КЦА (M-501).",
    type: "НЗ",
    shutdownReason: "Клапан закроется, для аварийного отключения блока КЦА.",
    coordinates: [57.5332392, 39.7828389],
    important: true,
  },
  {
    number: "UV-4005",
    location:
      "Отходящий газ из системы очистки водорода к горелкам печи П-501.",
    use: "Отключение подачи отходящего газа к горелкам печи П-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-501.",
    coordinates: [57.5332766, 39.7829355],
    important: true,
  },
  {
    number: "UV-4006",
    location: "Линия подачи основного потока топливного газа к печи П-501.",
    use: "Отключение топливного газа в печь парового риформинга.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-501.",
    coordinates: [57.5329337, 39.7826763],
    important: true,
  },
  {
    number: "UV-4007",
    location: "Линия подачи пилотного газа в печь парового риформинга",
    use: "Отключение подачи пилотного газа в печь П-501.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-501.",
    coordinates: [57.5329337, 39.7826763],
    important: true,
  },
  {
    number: "UV-4008",
    location: "Линия подачи топливного газа в сырьевую печь П-502.",
    use: "Отключение подачи топливного газа в сырьевую печь П-502.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-502.",
    coordinates: [57.5326218, 39.7822948],
    important: true,
  },
  {
    number: "UV-4009",
    location: "Линия пилотного газа в сырьевую печь П-502.",
    use: "Отключение подачи пилотного газа в печь П-502.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-502.",
    coordinates: [57.5326378, 39.7823229],
    important: true,
  },
  {
    number: "UV-4051",
    location: "Линия отходящего газа в П-502",
    use: "Отключение подачи отходящего газа в топку П-502.",
    type: "НЗ",
    shutdownReason:
      "Клапан закроется, во избежание повышения температуры в печи П-502.",
    coordinates: [57.532798, 39.7820587],
    important: true,
  },
  {
    number: "UV-4053",
    location: "Линия подачи пара среднего давления в П-502",
    use: "Подача пара в топку П-502.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5327928, 39.7820852],
    important: true,
  },
  {
    number: "UV-7014",
    location: "Линия продувки азотом факельного коллектора",
    use: "Подача азота к факельному коллектору.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5333135, 39.7830602],
    important: false,
  },
  {
    number: "UV-7015",
    location: "Линия продувки азотом факельного коллектора",
    use: "Подача азота к факельному коллектору.",
    type: "Не изменяет положения",
    shutdownReason:
      "Во время нормальной эксплуатации клапан находится в закрытом положении, которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5329803, 39.7823524],
    important: false,
  },
  {
    number: "UV-9755",
    location: "Линия ГПС от клапанной сборки FV-4010 до змеевика печи Т-513",
    use: "Аварийное закрытие. Закрытие/открытие подачи ГПС в Т-513",
    type: "Не изменяет положения",
    shutdownReason:
      "Клапан закрывается при   падении давления в линии змеевика печи П-502, снижение содержания кислорода в отходящих дымовых газах и увеличении температуры дымовых газов – одновременно. Во время нормальной эксплуатации клапан находится в открытом положении которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5328524, 39.7825915],
    important: false,
  },
  {
    number: "UV-9756",
    location:
      "Линия рециркуляции деарированой питательной котловой воды после клапанной сборки FV-4023.",
    use: "Аварийное закрытие. Закрытие/открытие подачи деарированой питательной котловой воды  в Е-603 от Н-503В",
    type: "Не изменяет положения",
    shutdownReason:
      "Клапан закрывается при   падении давления в линии змеевика печи П-502, снижение содержания кислорода в отходящих дымовых газах и увеличении температуры дымовых газов – одновременно. Во время нормальной эксплуатации клапан находится в открытом положении которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [57.5328502, 39.7822415],
    important: false,
  },
  {
    number: "UV-1-6959",
    location:
      "Линия 6959к отдувочный газ от компрессора СК-701 на УПВ-2 до секущей задвижки на границе комплекса",
    use: "Аварийное закрытие. Закрытие/открытие подачи отдувочного газа от СК-701 на КУ УПВ-2",
    type: "Не изменяет положения",
    shutdownReason:
      "Клапан закрывается при падении давления в линии ниже блокировочного значения. Во время нормальной эксплуатации клапан находится в открытом положении которое не изменяется при прекращении подачи воздуха КИП.",
    coordinates: [0, 0],
    important: false,
  },
];
export const numbers = [
  "FV-3031",
  "FV-8-3809",
  "FV-4001",
  "FV-4003",
  "FV-4004",
  "FV-4005",
  "FV-4006",
  "FV-4007",
  "FV-4008",
  "FV-4009",
  "FV-4010",
  "FV-4013",
  "FV-4014",
  "FV-4015",
  "FV-4016",
  "FV-4018",
  "FV-4019",
  "FV-4019A",
  "FV-4020",
  "FV-4023",
  "FV-4024",
  "FV-4028",
  "FV-4034",
  "FV-4052",
  "FV-4751",
  "FV-6006",
  "HV-3091",
  "HV-4051",
  "HV-4053",
  "HV-4054",
  "HV-4061",
  "HV-4062",
  "HV-4063",
  "HV-4064",
  "HV-4071",
  "HV-5005",
  "HV-6001",
  "HV-6014",
  "HV-7023",
  "HV-8205",
  "HV-8206",
  "HV-9757",
  "LV-4004",
  "LV-4005",
  "LV-4008",
  "LV-4009",
  "LV-4011",
  "LV-4012",
  "LV-4013",
  "MOV-6008",
  "MOV-6009",
  "PCV-4028",
  "PCV-4030",
  "PCV-55017A",
  "PCV-55017B",
  "PCV-75017A",
  "PCV-75017B",
  "PV-3313",
  "PV-4001A",
  "PV-4001B",
  "PV-4003",
  "PV-4007",
  "PV-4010",
  "PV-4011",
  "PV-4013",
  "PV-4016A",
  "PV-4016B",
  "PV-4017",
  "PV-4018A",
  "PV-4018B",
  "PV-4018C",
  "PV-4024",
  "PV-4028",
  "PV-4036",
  "PV-4040",
  "PV-4136",
  "PV-6008A",
  "PV-6008B",
  "PV-6008C",
  "PV-6009",
  "PV-6300",
  "TV-3049",
  "TV-4015",
  "TV-4018",
  "TV-4040",
  "TV-4050",
  "TV-4056",
  "TV-4063",
  "UV-1-6959",
  "UV-3006",
  "UV-4001",
  "UV-4003",
  "UV-4005",
  "UV-4006",
  "UV-4007",
  "UV-4008",
  "UV-4009",
  "UV-4051",
  "UV-4053",
  "UV-7014",
  "UV-7015",
  "UV-9755",
  "UV-9756",
];
