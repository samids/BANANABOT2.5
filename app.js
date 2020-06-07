console.log('[bot_banana|Banana Bot] 2.5 >> Loading bot. Please, wait! // by vk.com/Samids');
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
user.setOptions({
	token: 'Ваш_Токен' //Токен группы
});
// вместо 182717712 - айди группы

const https = require('https');
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
let giving = false;
const promo = require('./base/promo.json');
const clans = require('./base/clans.json');
const botinfo = require('./base/botinfo.json');

const promos = '' 
const fortyn = '';
const win = ''; 
const lose = '';
const errors = '';

	var timeban = 604800;

setInterval(() => {
		timeban -= 1
	}, 604800);
let chatslist = require('./chatslist.json');

let settings = require('./settings.json'),
	base = require("./base.json"),
	chats = require('./chats.json');

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const businesses = [
	[ // Бизнес #1
		{ // Стандартный бизнес
			name: 'Шаурмечная',
			cost: 50000,
			earn: 200,
			workers: 1,
			id: 1,
			icon: '🥖'
		},

		{ // Первое улучшение
			name: '5 шаурмечных',
			cost: 350000,
			earn: 1000,
			workers: 10,
			id: 1,
			icon: '🥖'
		},

		{ // Второе улучшение
			name: 'Небольшая сеть шаурмечных',
			cost: 900000,
			earn: 2625,
			workers: 30,
			id: 1,
			icon: '🥖'
		},

		{ // 3 улучшение
			name: 'Средняя сеть шаурмечных',
			cost: 1200000,
			earn: 3750,
			workers: 50,
			id: 1,
			icon: '🥖'
		},

		{ // Последнее улучшение
			name: 'Лучшая шаурма в стране',
			cost: 4000000,
			earn: 11000,
			workers: 200,
			id: 1,
			icon: '🥖'
		}
	],

	[
		{
			name: 'Ларёк',
			cost: 100000,
			earn: 700,
			workers: 1,
			id: 2,
			icon: '🏪'
		},

		{
			name: '5 ларьков',
			cost: 500000,
			earn: 3700,
			workers: 5,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Средняя сеть ларьков',
			cost: 950000,
			earn: 7725,
			workers: 40,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки во всех городах страны',
			cost: 8000000,
			earn: 37450,
			workers: 150,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки в каждой стране',
			cost: 17500000,
			earn: 79950,
			workers: 400,
			id: 2,
			icon: '🏪'
		}
	],

	[
		{
			name: 'Забегаловка',
			cost: 300000,
			earn: 2700,
			workers: 3,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Общепит',
			cost: 450000,
			earn: 4350,
			workers: 7,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Ресторан',
			cost: 450000,
			earn: 7400,
			workers: 15,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Небольшая сеть ресторанов',
			cost: 4000000,
			earn: 19900,
			workers: 80,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Лучшие рестораны в стране',
			cost: 11000000,
			earn: 47400,
			workers: 300,
			id: 3,
			icon: '🍷'
		}
	],

	[
		{
			name: 'Мини-магазин',
			cost: 500000,
			earn: 4100,
			workers: 15,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Магазин',
			cost: 1250000,
			earn: 9350,
			workers: 10,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть магазинов',
			cost: 3000000,
			earn: 23350,
			workers: 70,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть супермаркетов',
			cost: 20000000,
			earn: 109850,
			workers: 500,
			id: 4,
			icon: '🏫'
		}
	],

	[
		{
			name: 'Завод в гараже',
			cost: 1500000,
			earn: 8800,
			workers: 5,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Средний завод',
			cost: 3500000,
			earn: 13800,
			workers: 20,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Сеть заводов',
			cost: 15000000,
			earn: 60800,
			workers: 200,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Главные заводы страны',
			cost: 50000000,
			earn: 274800,
			workers: 1000,
			id: 5,
			icon: '🏭'
		}
	],

	[
		{
			name: 'Угольная шахта',
			cost: 25000000,
			earn: 84700,
			workers: 50,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Золотая шахта',
			cost: 50000000,
			earn: 117200,
			workers: 75,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазная шахта',
			cost: 60000000,
			earn: 229700,
			workers: 200,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазный карьер',
			cost: 90000000,
			earn: 432700,
			workers: 360,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Крупнейший алмазный карьер',
			cost: 200000000,
			earn: 709700,
			workers: 700,
			id: 6,
			icon: '⛏'
		}
	],

	[
		{
			name: 'Маленький офис',
			cost: 80000000,
			earn: 229625,
			workers: 10,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Средний офис',
			cost: 240000000,
			earn: 329175,
			workers: 60,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Большой офис',
			cost: 240000000,
			earn: 614675,
			workers: 200,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Офис-небоскрёб',
			cost: 1000000000,
			earn: 1227275,
			workers: 700,
			id: 7,
			icon: '🏢'
		}
	],

	[
		{
			name: 'Любительский GameDev',
			cost: 150000000,
			earn: 302000,
			workers: 5,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'Инди GameDev',
			cost: 200000000,
			earn: 379500,
			workers: 10,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AA GameDev',
			cost: 750000000,
			earn: 1024500,
			workers: 50,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AAA GameDev',
			cost: 5000000000,
			earn: 6749500,
			workers: 500,
			id: 8,
			icon: '🕹'
		}
	],

	[
		{
			name: 'Нефтевышка',
			cost: 500000000,
			earn: 707000,
			workers: 8,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в море',
			cost: 750000000,
			earn: 1019000,
			workers: 20,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в океане',
			cost: 1250000000,
			earn: 4049000,
			workers: 50,
			id: 9,
			icon: '🏜'
		},

		{
			name: '5 нефтеплатформ в океане',
			cost: 5000000000,
			earn: 15249000,
			workers: 250,
			id: 9,
			icon: '🏜'
		}
	],

	[
		{
			name: 'Мини АЭС',
			cost: 800000000,
			earn: 1050700,
			workers: 40,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Средняя АЭС',
			cost: 1200000000,
			earn: 1496200,
			workers: 75,
			id: 10,
			icon: '💡'
		},

		{
			name: 'АЭС с 5 энергоблоками',
			cost: 4250000000,
			earn: 3088700,
			workers: 300,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Крупнейшая АЭС',
			cost: 10000000000,
			earn: 34843700,
			workers: 650,
			id: 10,
			icon: '💡'
		}
	],

	[
		{
			name: 'Apple Store',
			cost: 25000000000,
			earn: 250000000,
			workers: 75,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Магазин Apple',
			cost: 3000000000000,
			earn: 1000000000,
			workers: 150,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Центральный Apple Store',
			cost: 9000000000000,
			earn: 5000000000,
			workers: 250,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Завод Apple',
			cost: 20000000000000,
			earn: 11000000000,
			workers: 500,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 100000000000000,
			earn: 45000000000,
			workers: 1000,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 200000000000000,
			earn: 75000000000,
			workers: 1500,
			id: 11,
			icon: '🗺'
		}
	]
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сторож',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Продавец',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Няня',
		requiredLevel: 8,
		min: 6000,
		max: 8000,
		id: 4
	},
	{
		name: 'Курьер',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Слесарь',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Охранник',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Библиотекарь',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Воспитатель',
		requiredLevel: 25,
		min: 14500,
		max: 16500,
		id: 9
	},
	{
		name: 'Педагог',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 10
	},
	{
		name: 'Повар',
		requiredLevel: 65,
		min: 17500,
		max: 18500,
		id: 11
	},
	{
		name: 'Грузчик',
		requiredLevel: 95,
		min: 19500,
		max: 20500,
		id: 12
	},
	{
		name: 'Парикмахер',
		requiredLevel: 105,
		min: 23500,
		max: 24500,
		id: 13
	},
	{
		name: 'Врач',
		requiredLevel: 125,
		min: 24500,
		max: 25500,
		id: 14
	},
	{
		name: 'Торговый представитель',
		requiredLevel: 145,
		min: 26500,
		max: 27500,
		id: 15
	},
	{
		name: 'Специалист по валютным операциям',
		requiredLevel: 200,
		min: 55500,
		max: 70500,
		id: 16
	},
	{
		name: 'Юрист по налоговому праву',
		requiredLevel: 250,
		min: 70500,
		max: 110500,
		id: 17
	},
	{
		name: 'Программист PHP',
		requiredLevel: 300,
		min: 90500,
		max: 120500,
		id: 18
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	Q: 'q',
	W: 'ʍ',
	E: 'ǝ',
	R: 'ɹ',
	T: 'ʇ',
	Y: 'ʎ',
	U: 'u',
	I: 'ᴉ',
	O: 'o',
	P: 'p',
	A: 'ɐ',
	S: 's',
	D: 'd',
	F: 'ɟ',
	G: 'ƃ',
	H: 'ɥ',
	J: 'ɾ',
	K: 'ʞ',
	L: 'l',
	Z: 'z',
	X: 'x',
	C: 'ɔ',
	V: 'ʌ',
	B: 'b',
	N: 'n',
	M: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı',

	Й: 'ņ',
	Ц: 'ǹ',
	У: 'ʎ',
	К: 'ʞ',
	Е: 'ǝ',
	Н: 'н',
	Г: 'ɹ',
	Ш: 'm',
	Щ: 'm',
	З: 'ε',
	Х: 'х',
	Ъ: 'q',
	Ф: 'ф',
	Ы: 'ıq',
	В: 'ʚ',
	А: 'ɐ',
	П: 'u',
	Р: 'd',
	О: 'о',
	Л: 'v',
	Д: 'ɓ',
	Ж: 'ж',
	Э: 'є',
	Я: 'ʁ',
	Ч: 'һ',
	С: 'ɔ',
	М: 'w',
	И: 'и',
	Т: 'ɯ',
	Ь: 'q',
	Б: 'ƍ',
	Ю: 'oı'
}

let btc = 6000;

let users = require('./base/users.json');
let buttons = [];

	vk.updates.on(['chat_invite_user_by_link'], async (message, next) => {
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.senderId].isBanned && chats[message.chatId].users[message.senderId].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.senderId});
		    return message.send('@id' + message.senderId + ' - находится в бане.');}

		message.send(`🎉 || Приветствую тебя, игрок - ${user[0].first_name}! Вы попали в беседу, где Вы можете играть в меня или можете общаться с другими пользователями.\n\n👾 >> Чтобы в меня начать играть, нажмите нужную кнопку, ну или написать команду - Помощь`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});
	vk.updates.on(['chat_invite_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.payload.action.member_id].isBanned && chats[message.chatId].users[message.payload.action.member_id].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.payload.action.member_id});
		    return message.send('@id' + message.payload.action.member_id + ' - находится в бане.');}

		message.send(`🎉 || Приветствую тебя, игрок - ${user[0].first_name}! Вы попали в беседу, где Вы можете играть в меня или можете общаться с другими пользователями.\n\n👾 >> Чтобы в меня начать играть, нажмите нужную кнопку, ну или написать команду - Помощь`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});
	vk.updates.on(['chat_kick_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})

		message.send(`📢 || Пользователь под названием (${user[0].first_name}), к сожалению, вышел из этой беседы. Вы можете его кикнуть с помощью команды - Кик id${message.payload.action.member_id}\n\n💬 >> Или Вы можете продолжить играть в бота :3`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": `!permban id${message.payload.action.member_id}`
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});



setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += x.farm_count * 2;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += x.farm_count * 10;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += x.farm_count * 100;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		for(var i = 0; i < user.business.length; i++)
		{
			const biz = businesses[user.business[i].id - 1][user.business[i].upgrade - 1];
			user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.translation = false;
		user.timers.hasWorked = false;
		user.timers.commands = false;
		user.timers.clanwar = false;
		user.timers.bonus = false;
		user.timers.obva = false;
		user.timers.krik = false;
		user.timers.mine = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./base/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: 'Ваш_Токен', pollingGroupId: 182717712 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club182717712\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club182717712\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			realname: user_info.first_name,
			realfam: user_info.last_name,
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			diamonds: 0,
			emeralds: 0,
			coal: 0,
			iron: 0,
			gold: 0,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			biz: 0,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				translation: false,
				hasWorked: false,
				commands: false,
				clanwar: false,
				delacc: false,
				bonus: false,
				obva: false,
				krik: false,
				mine: false,
			},
			tag: user_info.first_name,
			clanid: false,
			keyboard: true,
			numberss: false,
			work: 0,
			businesses: [],
			pp: 0,
			notifications: true,
			ccard: false,
			card: 0,
			seccard: 0,
			cardss: 0,
			exp: 1,
			level: 1,
			right: 1,
			foolder: 0,
			floder: 0,
			operator: 0,
			number: 0,
			call: 0,
			language: 1,
			healths: 100,
			hunger: 100,
			reals: 0,
			jalobs: 0,
			referal: null,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				farm_count: 0
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
	}

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if (message.text) {
		message.user.floder += 1;
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`USER: ${message.text}`)
});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.on(/^(?:рандом баланс)$/i, async (message, bot) => {
	const bal = utils.random(50000);
	        
	        if(message.user.right <= 1) {
	if(message.user.timers.clearss) return bot(`через 1 час, Вы сможете ещё раз стереть баланс`);

	setTimeout(() => {
		message.user.timers.clearss = false;
	}, 1200000);

	message.user.timers.clearss = 0;
}
    message.user.balance = bal;
	return bot(`вы изменили свой баланс на -💰 ⇢ Денег: ${utils.sp(message.user.balance)}`);
});

cmd.on(/^(?:удалить аккаунт)$/i, async (message, bot) => {
			message.user.balance = 5000;
			message.user.dollars = 0;
			message.user.euro = 0;
			message.user.manat = 0;
			message.user.diamonds = 0;
			message.user.emeralds = 0;
			message.user.coal = 0;
			message.user.iron = 0;
			message.user.gold = 0;
			message.user.bank = 0;
			message.user.btc = 0;
			message.user.farm_btc = 0;
			message.user.biz = 0;
			message.user.rating = 0;
			message.user.regDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
			message.user.mention = true;
			message.user.ban = false;
			message.user.tag = user_info.first_name;
			message.user.clanid = false;
			message.user.keyboard = true;
			message.user.numberss = false;
			message.user.work = 0;
			message.user.business = 0;
			message.user.pp = 0;
			message.user.notifications = true;
			message.user.ccard = false;
			message.user.card = 0;
			message.user.seccard = 0;
			message.user.cardss = 0;
			message.user.exp = 1;
			message.user.level = 1;
			message.user.right = 1;
			message.user.foolder = 0;
			message.user.floder = 0;
			message.user.operator = 0;
			message.user.number = 0;
			message.user.language = 1;
			message.user.healths = 100;
			message.user.hunger = 100;
			message.user.referal = null;
			message.user.transport.car = 0;
			message.user.transport.yacht = 0;
			message.user.transport.airplane = 0;
			message.user.transport.helicopter = 0;
			message.user.realty.home = 0;
			message.user.realty.apartment = 0;
			message.user.misc.phone = 0;
			message.user.misc.farm = 0;
			message.user.marriage.partner = 0;
			message.user.timers.delacc = 0;
	        if(message.user.timers.delacc) return bot(`вы больше не можете удалять аккаунт!`);
	return bot(`вы решили удалить аккаунт ДО ИЗНАЧАЛЬНОГО СОСТОЯНИЯ, успешно!`);
});

cmd.on(/^(?:создать)\s?([0-9]+)?\s?([^\s	].*)?\s?([^\s	].*)?/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(!message.args[1]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		if(!message.args[2]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		 
		let balance = parserInt(message.args[2]); 
		let activ = Number(message.args[1]);

		var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: Number(balance),
		            		activ: activ,
		            		users: {}
		            	}
		}else{
			return message.reply(`[Error] Пересоздайте код еще раз.`);
		}
		 

		return message.reply(`
			[📝] >> Промокод - ${result}
			[🗝] >> Активаций в этом промокоде - ${activ}
			[💰] >> Валюты в этом промокоде - ${spaces(balance)} Coins  
			`);

});
	
cmd.on(/^(?:Промокод)\s?([0-9]+)?\s?([^\s	].*)?/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 3) return bot(`доступно с привилегии - Админ.`);
		if(!message.args[1]) return message.reply(`[✨] >> Пример - МCоздать (название) (сумма)`);
		if(!message.args[2]) return message.reply(`[✨] >> Пример - МCоздать (название) (сумма)`);
		 
		let balance = parserInt(message.args[1]); 

		if(!promo[message.args[2]]){
		            	promo[message.args[2]] = {
		            		balance: Number(balance),
		            		activ: 1000,
		            		users: {}
		            	}
		}else{
			return message.reply(`[Error] Пересоздайте код еще раз.`);
		}
		 

		return message.reply(`
			[📝] >> Промокод - ${message.args[2]}
			[🗝] >> Активаций в этом промокоде - 1000
			[💰] >> Валюты в этом промокоде - ${spaces(balance)} Coins  
			`);

});

cmd.on(/^(?:промокод)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return message.reply(`[🤔] >> Я всё понимаю, что ты уже что-то не то пишешь мне, но не надо забывать сам промокод.`, {attachment: promos});
	let promos = message.args[1];
	if(!promo[message.args[1]]) return message.reply(`[😩] >> Woooops... Наверное, промокод много раз использовали и он теперь недоступен!`, {attachment: promos});
	
	if(!promo[message.args[1]].users[message.senderId]){

		if(promo[promos].balance){ 
			let activ = promo[promos].activ - 1;
			if(!promo[promos].users[message.senderId]){
				promo[promos].users[message.senderId] = {
					activ: true
				}
			}
			message.user.balance += Number(promo[promos].balance);
			let coi = Number(promo[promos].balance);
			promo[promos].activ -= 1;
			if(promo[promos].activ == 0){
				delete promo[promos];
			}
			return message.reply(`[🤑] >> Ты активировал(а) промокод.\n[✨] >> В промокоде, Вы нашли: ${spaces(coi)} Coins\n\n[😏] | Подсказка: Нелзя активировать более двух раз промокод.`, {attachment: promos});
		}
	}else{
		return message.reply(`[😪] >> Простите, но нельзя промокод во второй раз активировать!`, {attachment: promos});
	}
});

cmd.on(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 4) return bot(`доступно с привилегии - Гл.Администратор.`);

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(` - я выполнил: ${result}`);
		} else if(typeof(result) === 'number')
		{
			return bot(` - я выполнил: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.on(/^(?:помощь|команды|меню|Начать)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
await message.reply(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Профиль - Ваш профиль в боте
💲 » Баланс - Ваш баланс
👑 » Рейтинг - ваш рейтинг |-| Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [id] [сумма] |-| Передать другому игроку деньги
💭 » Найти [id] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
🎁 » Товары - Купить игровые товары
🛒 » Магазин  - Купить что-то
➖ » Продать [предмет]  - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
🔰 Бизнесы - список бизнесов
📈 Бизнес [1-2] - Статистика
👥 Бизнес нанять [1-2] [Количество] - Нанять работников
✅ Бизнес улучшить [1-2] - улчшить бизнес
💵 Бизнес снять [1-2] [Сумма] - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [id]  - Сделать предложение игроку
💍⠀» Браки - Список игроков, которые хотят стать вашими партнёрами
💔 » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
👫 » Реферал - Деньги за друзей
🤖 » Бот - Информация о боте
💣 » Рандом баланс - Рандомно поменяет ваш баланс
💉 » Удалить аккаунт - Попрощаться с ботом

&#4448;[🎮] » Игры - Покажет игровые команды
&#4448;[🔔] » Чат - Покажет чат команды
&#4448;[🛡] » !Manager - Покажет команды для беседы

[🆘] || Репорт [текст] - Ошибки/пожелания/предожения
`);
}
if(message.user.keyboard == true) {
	await message.reply(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Профиль - Ваш профиль в боте
💲 » Баланс - Ваш баланс
👑 » Рейтинг - ваш рейтинг |-| Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [id] [сумма] |-| Передать другому игроку деньги
💭 » Найти [id] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
🎁 » Товары - Купить игровые товары
🛒 » Магазин  - Купить что-то
➖ » Продать [предмет]  - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
🔰 Бизнесы - список бизнесов
📈 Бизнес [1-2] - Статистика
👥 Бизнес нанять [1-2] [Количество] - Нанять работников
✅ Бизнес улучшить [1-2] - улчшить бизнес
💵 Бизнес снять [1-2] [Сумма] - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [id]  - Сделать предложение игроку
💍⠀» Браки - Список игроков, которые хотят стать вашими партнёрами
💔 » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
👫 » Реферал - Деньги за друзей
🤖 » Бот - Информация о боте
💣 » Рандом баланс - Рандомно поменяет ваш баланс
💉 » Удалить аккаунт - Попрощаться с ботом

&#4448;[🎮] » Игры - Покажет игровые команды
&#4448;[🔔] » Чат - Покажет чат команды
&#4448;[🛡] » !Manager - Покажет команды для беседы

[🆘] || Репорт [текст] - Ошибки/пожелания/предожения`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Игры"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Профиль"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Ферма"
			},
				"color": "positive"
			}]
		]
			})
		});
		}}
);	

cmd.on(/^(?:чат)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
	await message.reply(`[🎈] || Развлекательные:

🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] 
🔮 » Шар [фраза] 
⌚ » Дата [id]
⚖ » Выбери [фраза] или [фраза2]
📠 » Реши [пример]
↪ » Переверни [фраза]
🔑 » Вики [фраза]
🌆 » Погода [город]
🎀 » Оцени [картинка]
⏳ » Время
✨ » Бутылочка
🤡 » Анекдот
📹 » Гиф
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🎈] || Развлекательные:

🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] 
🔮 » Шар [фраза] 
⌚ » Дата [id]
⚖ » Выбери [фраза] или [фраза2]
📠 » Реши [пример]
↪ » Переверни [фраза]
🔑 » Вики [фраза]
🌆 » Погода [город]
🎀 » Оцени [картинка]
⏳ » Время
✨ » Бутылочка
🤡 » Анекдот
📹 » Гиф
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Гиф"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Анекдот"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.on(/^(?:игры)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
					await message.reply(`[🕹] || Игры:

🎲 » Кубик [1-6]
🎰 » Казино [сумма]
📈 » Трейд [вверх/вниз] [сумма]
🥛 » Стаканчик [1-3] [сумма]
🔦 » Сейф [случайные 2 цифры] 
🌟 » Монетка [сумма] [орел/решка]
👤 » Тир [1-3] [сумма]
👛 » Ловушка [сумма]
🏆 » Фортуна
🔫 » РР
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🕹] || Игры:

🎲 » Кубик [1-6]
🎰 » Казино [сумма]
📈 » Трейд [вверх/вниз] [сумма]
🥛 » Стаканчик [1-3] [сумма]
🔦 » Сейф [случайные 2 цифры] 
🌟 » Монетка [сумма] [орел/решка]
👤 » Тир [1-3] [сумма]
👛 » Ловушка [сумма]
🏆 » Фортуна
🔫 » РР
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 5к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.on(/^(?:!manager)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`пожалуйста, напишите эту команду в беседе.`);
let text = ``;	
if(chats[message.chatid].activate == false) text += `🚧 » !Activate - Активация чата.`;
if(chats[message.chatid].activate == true) text += `📝 » !Title [фраза] - Изменить название беседы
🆘 » !Warn [ссылка] - Выдать варн пользователю
⚠ » !Kick [ссылка] - Кикнуть пользователя с беседы
🔥 » !Unban [ссылка] - Разбанить пользователя
🌍 » !Permban [ссылка] - Забанить навсегда пользователя
✨ » !Роль - Ваша роль в беседе
🍎 » !Модер [ссылка] - Выдать модера пользователю
🍏 » !Админ [ссылка] - Выдать админа пользователю
🍊 » !Хелпер  [ссылка] - Выдать хелпера пользователю

♻ | Автоматически:
Варн за рекламу
Приветствие`;

			if(message.user.keyboard == false) {
					await message.reply(`[🛡] || Менеджер:

${text}
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🛡] || Менеджер:

${text}
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.on(/^(?:деятельность|Развлекательные)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.keyboard == true) {
					await message.reply(`По просьбе многих игроков, команда была перенесена.`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});}
					if(message.user.keyboard == false) {
					await message.reply(`По просьбе многих игроков, команда была перенесена.`);}
});	

cmd.on(/^(?:товары|донат|привилегии|tovar|tovars)$/i, async (message, bot) => {
	message.user.foolder += 1;
let text = ``;	
if(message.user.reals == 0) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

	😓 | Вы пока-что ничего не можете купить :(
	?? | Чтобы что-то купить, напишите [idВаш_id|Админу] и напишите нужную сумму

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;
if(message.user.reals == 1) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

	😓 | Вы пока-что ничего не можете купить :(
	😮 | Чтобы что-то купить, напишите [idВаш_id|Админу] и напишите нужную сумму

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;
if(message.user.reals == 2) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

	😓 | Вы пока-что ничего не можете купить :(
	😮 | Чтобы что-то купить, напишите [idВаш_id|Админу] и напишите нужную сумму

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;
if(message.user.reals == 3) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

	😓 | Вы пока-что ничего не можете купить :(
	😮 | Чтобы что-то купить, напишите [idВаш_id|Админу] и напишите нужную сумму

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;
if(message.user.reals == 4) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

	😓 | Вы пока-что ничего не можете купить :(
	😮 | Чтобы что-то купить, напишите [idВаш_id|Админу] и напишите нужную сумму

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;

if(message.user.reals > 149) text += `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

❤ || Привилегия: VIP 
🤑 | Стоимость: 149 RUB 

[💬] Команды: 
1) Send [id] [Сообщение] - отправить сообщение 
2) Kick [Ссылка] - кикнуть пользователя с беседы 
3) Крикнуть [Сообщение] - крикнуть в чате
4) И Всякие бонусы.

✨ || Id товара - 1

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;

if(message.user.reals > 1000) text += `

❤ || Привилегия: Админ 
🤑 | Стоимость: 1000 RUB 

[🤑]Привилегии:
VIP

[💬] Команды: 
1) Выдать [id] [сумма] - Выдать $
2) Забрать [id] - Снять все $
3) Ban [id] - Забанить пользователя
4) Unban [id] - Разбанить пользователя
5) Kick [id] - Кикнуть пользователя
6) Репорт [id] [Сообщение] - Жалобы/тд
7) Ответ [id] [Сообщение] - Ответить в репорте

✨ || Id товара - 2

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;

if(message.user.reals > 2500) text += `

❤ || Привилегия: Гл.Администратор 
🤑 | Стоимость: 2500 RUB 

[🤑]Привилегии:
VIP
Администратор

[💬] Команды: 
1) Eval [js code] - Выполнить код
2) Рассылка [Сообщение] - рассылка в беседах
3) Создать [количество активаций] [сумма] - Создать промокод 
4) Промокод [сумма] [название] - Создать промокод с своим названием (Активаций 1к)

✨ || Id товара - 3

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`;

let text1 = ``;	

if(message.user.reals > 1) text1 += `

😏 >> Чтобы приобрести товары, напишите: Купить [id товара]`;

	return message.reply(`[🎉] | [id${message.user.id}|${message.user.tag}], хочешь купить донат? Ты можешь его купить недорого!
		💸 >> На вашем балансе: ${message.user.reals}₽
		👾 >> Что Вы можете купить за ваши ₽:

${text}

🌟 || Пополнить баланс можно через || [idВаш_id|Администратора]
🎁 || Сейчас, там идут большие  скидки!
	`);
});

cmd.on(/^(?:Купить 1)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 2) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 3) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 5) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 5,
message.user.right = 2;
return message.send(`👍🏻 || Вы успешно купили привилегию: Vip`);
}
});

cmd.on(/^(?:Купить 2)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 3) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 50) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 50,
message.user.right = 3;
return message.send(`👍🏻 || Вы успешно купили привилегию: Администратор`);
}
});

cmd.on(/^(?:Купить 3)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 4) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.reals < 250) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 250,
message.user.right = 4;
return message.send(`👍🏻 || Вы успешно купили привилегию: Dev`);
}
});

cmd.on(/^(?:Купить)$/i, async (message, bot) => {
	message.user.foolder += 1;

return bot(`введите ID товара!`);
});

cmd.on(/^(?:вернуть клавиатуру)$/i, async (message, bot) => {
	message.user.foolder += 1;
message.user.keyboard = true;
	return bot(`ок!
	`);
});

cmd.on(/^(?:убрать клавиатуру)$/i, async (message, bot) => {
	message.user.foolder += 1;
message.user.keyboard = false;
	return bot(`ок!

		Вот статья, как вернуть клавиатуру - vk.com/@BananaBot-helpcmd1
	`);
});

cmd.on(/^(?:найти)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);
			let text = ``;	
	
	text += `🔎 ID: ${user.uid}\n`;
	text += `&#128279; Ссылка:  vk.com/id${user.id}\n`;
	text += `💰 Денег: ${utils.sp(user.balance)}$\n`;
	if(user.bank) text += `💳 В банке: ${utils.sp(user.bank)}$\n`;
	if(user.btc) text += `🌐 Биткоинов: ${utils.sp(user.btc)}\n`;
	text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`;
	if(user.work) text += `👔 Работа: ${works[user.work - 1].name}\n`;
	if(user.marriage.partner) text += `👬 Партнер: ${users[user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${user.level} [${user.exp}/24]\n`;

	if(user.transport.car || user.transport.yacht || user.transport.airplane || user.transport.helicopter ||
		user.realty.home || user.realty.apartment ||
		user.misc.phone || user.misc.farm || user.business)
	{
		text += `\n🔑 Имущество:\n`;

		if(user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`;
		if(user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`;
		if(user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`;
		if(user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`;
		
		if(user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`;
		if(user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`;

		if(user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`;
		if(user.misc.farm) text += `⠀🔋 Ферма: ${farms[user.misc.farm - 1].name}\n`;
		if(user.business) text += `⠀${businesses[user.business - 1].icon} ${businesses[user.business - 1].name}\n`;
	}

	if(user.dollars || user.euro || user.manat || user.diamonds || user.emeralds || user.coal || user.iron || user.gold)
		{
		text += `\n&#128184; Доп.Валюта:\n`;
        text += `\n`;

		if(user.dollars) text += `&#128181; Долларов: ${user.dollars}\n`;
	if(user.euro) text += `&#128182; Евро: ${user.euro}\n`;
	if(user.manat) text += `&#128183; Манат: ${user.manat}\n`;
    if(user.diamonds) text += `&#128142; Алмазов: ${user.diamonds}\n`;
    if(user.emeralds) text += `&#128160; Изумрудов: ${user.emeralds}\n`;
    if(user.coal) text += `&#128488; Угля: ${user.coal}\n`;
    if(user.iron) text += `&#11036; Железа: ${user.iron}\n`;
    if(user.gold) text += `&#128155; Золото: ${user.gold}\n`;
	}
	text += `\n🔥 ${user.right.toString().replace(/1/gi, "Привилегия: Пользователь").replace(/2/gi, "Привилегия: Вип").replace(/3/gi, "Привилегия: Админ").replace(/4/gi, "Привилегия: Гл.Администратор")}`;
	text += `\n📗 Дата регистрации в боте: ${user.regDate}`;
	return bot(`профиль игрока:\n${text}`);
	});

cmd.on(/^(?:Поиск)\s(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	if (message.args[4]) {
				var domain = message.args[4].split(" ");}

let user = users.find(x=> x.id === Number(message.args[3]));

			let text = ``;	
	
	text +=  `${user.uid}\n`;
	return bot(`Ид игрока\n${text}`);
});

cmd.on(/^(?:cid)$/i, async (message, bot) => {
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
	});   

cmd.on(/^(?:профиль)$/i, async (message, bot) => {
	message.user.foolder += 1;
			let text = ``;	

    text += `[❤] || Основное:\n`;
	text += `&#4448;🔎 ⇢ ID: ${message.user.uid}\n`;
	text += `&#4448;&#128279; ⇢ Ссылка:  vk.com/id${message.user.id}\n`;
	text += `&#4448;💰 ⇢ Денег: ${utils.sp(message.user.balance)}$\n`;
	if(message.user.ccard) text += `&#4448;💳 ⇢ Баланс карты: ${message.user.card}\n`;
	if(message.user.bank) text += `&#4448;💳 ⇢ В банке: ${utils.sp(message.user.bank)}$\n`;
	if(message.user.btc) text += `&#4448;🌐 ⇢ Биткоинов: ${utils.sp(message.user.btc)}\n`;
	text += `&#4448;👑 ⇢ Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `&#4448;👔 ⇢ Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `&#4448;👬 ⇢ Партнер: ${users[message.user.marriage.partner].tag}`;
	text += `&#4448;🌟 ⇢ Уровень: ${message.user.level} [${message.user.exp}/24]\n`;
	if(message.user.foolder) text += `&#4448;&#128228; ⇢ Использовано команд: ${message.user.foolder}\n`;
    if(message.user.floder) text += `&#4448;&#128229; ⇢ Всего сообщений: ${message.user.floder}\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business ||
		message.user.number)
	{
		text += `\n[🔑] || Имущество:\n`;

		if(message.user.transport.car) text += `&#4448;⠀🚗 ⇢ Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `&#4448;⠀🛥 ⇢ Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `&#4448;⠀🛩 ⇢ Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `&#4448;⠀🚁 ⇢ Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		
		if(message.user.realty.home) text += `&#4448;⠀🏠 ⇢ Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `&#4448;⠀🌇 ⇢ Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `&#4448;⠀📱 ⇢ Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.phone)	text += `&#4448;⠀📱 ⇢ Оператор: ${message.user.operator.toString().replace(/1/gi, "отсутствует || Команда: Купить номер").replace(/2/gi, "Теле2").replace(/3/gi, "Мегафон").replace(/4/gi, "Билайн").replace(/5/gi, "Yota").replace(/5/gi, "Vk mobile").replace(/6/gi, "Мтс")}\n`;
		if(message.user.number) text += `&#4448;⠀📱 ⇢ Номер телефона: +79${message.user.number}\n`;
		if(message.user.misc.farm) text += `&#4448;⠀🔋 ⇢ Ферма: ${farms[message.user.misc.farm - 1].name}\n`;
		if(message.user.business) text += `&#4448;⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}

	if(message.user.diamonds || message.user.emeralds || message.user.coal || message.user.iron || message.user.gold)
		{
		text += `\n[&#128184;] || Руды:\n`;

    if(message.user.diamonds) text += `&#4448;&#128142; ⇢ Алмазов: ${message.user.diamonds}\n`;
    if(message.user.emeralds) text += `&#4448;&#128160; ⇢ Изумрудов: ${message.user.emeralds}\n`;
    if(message.user.coal) text += `&#4448;&#128488; ⇢ Угля: ${message.user.coal}\n`;
    if(message.user.iron) text += `&#4448;&#11036; ⇢ Железа: ${message.user.iron}\n`;
    if(message.user.gold) text += `&#4448;&#128155; ⇢ Золото: ${message.user.gold}\n`;
	}

		text += `\n[👬] || Персонаж:\n`;

    text += `&#4448;📖 ⇢ Информация: ${message.user.realname} ${message.user.realfam}\n`;
    text += `&#4448;💬 ⇢ Ваш социальный статус: ${message.user.right.toString().replace(/1/gi, "Крестьянин").replace(/2/gi, "Помощник рыцаря").replace(/3/gi, "Рыцарь").replace(/4/gi, "Король")}\n`;
    text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
    text += `&#4448;❤ ⇢ Здоровья: ${message.user.healths}\n`;
    text += `&#4448;🍗 ⇢ Голода: ${message.user.hunger}\n`;
    text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
    text += `&#4448;⚠ ⇢ Жалоб: ${message.user.jalobs}\n`;
    text += `&#4448;🔥 ⇢ Привилегия: ${message.user.right.toString().replace(/1/gi, "Пользователь").replace(/2/gi, "Vip").replace(/3/gi, "Moderatot").replace(/4/gi, "Администратор").replace(/5/gi, "Sozdatel")}`;

	text += `\n\n📗 ⇢ Дата регистрации: ${message.user.regDate}`;

	return message.send(`📢 | [id${message.user.id}|${message.user.tag}], вот ваш профиль:\n\n${text}`);
		}
);	

cmd.on(/^(?:брак)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send('[Подсказка]: Нужно использовать так -> Брак 4\n\nПосмотреть ваш специальный Uid можно в профиле.');
});

cmd.on(/^(?:баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const coals = utils.random(500000000);
	let text = `📢 | [id${message.user.id}|${message.user.tag}], на ваших руках: \n`;
    text += `\n💰 ⇢ Денег: ${utils.sp(message.user.balance)}$`;
	if(message.user.bank) text += `\n💳 ⇢ В банке: ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n🌐 ⇢ Биткоинов: ${utils.sp(message.user.btc)}฿`;

	return message.send(text);
});

cmd.on(/^(?:банк)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`у вас на банковском счёте находится: ${utils.sp(message.user.bank)}$`);
});

cmd.on(/^(?:Клан создать)\s(.*)$/i, async (message, bot) => {
    if(!message.args[1]) return bot(`введите название для клана!`); 
    if(message.user.right <= 1) {
    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`[🆘] » Ой... Похоже, что [idВаш_id|Создатель] заблокировал запрещенные слова/символы/смайлики.\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а у || [idВаш_id|Администратора]`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.reply(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{ 
 	let user = message.user;
 	let name = message.args[1];
 	let clanid = message.user.clanid;
 	if(message.user.btc < 20) return message.reply(`[⚠] »  Создание клана стоит 20 БитКоинов!!!`);
 	message.user.btc -= 20;

 	if(clans[clanid]) return message.reply(`[⚠] »  У вас уже создан клан или Вы уже состоите в другом клане.`);
 	if(!clans[clanid]){
 		let smile = [`🤘`,`💥`,`💣`,`😻`,`😏`,`🤒`,`🤔`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌝`].random();  
 	 	botinfo.number += 1;
 	 	clans[botinfo.number] = {
 		owner: message.user,
 		users: {},
 		number: botinfo.number,
 		name: name,
 		balance: 0,
 		smile: smile,
 		open: true,
 		price: 100,
        exs: 0,
        people: 0
 	}
 	user.clanid = botinfo.number;
 	clans[botinfo.number].users[message.user.uid] = {
 		                    names: message.user.tag,
        	        		level: 2
    }
 	 

 	return message.send(`
 		&#4448;${clans[user.clanid].smile} + ${name} + ${clans[user.clanid].smile}&#4448; 

 		[${clans[user.clanid].smile}] >> Я успешно создал клан под названием - ${name}
 		[${clans[user.clanid].smile}] >> Создатель клана - vk.com/id${message.user.id}
 		[${clans[user.clanid].smile}] >> Логотип клана: ${clans[user.clanid].smile}
 		[${clans[user.clanid].smile}] >> Тип клана: открытый.

 		[${clans[user.clanid].smile}] >> Команды клана: Кпомощь
 		`);
}}
});

cmd.on(/^(?:покинуть)/i, async (message, bot) => {


  
 
	let user = message.user;
	let idclan = message.user.clanid;
	if(!clans[idclan]) return message.reply(`Вы не в клане.`); 
    
	if(message.user.clanid == false) return message.reply(`Вы не состоите в клане.`); 
	if(clans[idclan].users[message.user.uid].level == 2) return message.reply(`Создатель не может выйти из клана.`);
	user.clanid = false;
	delete clans[idclan].users[message.user.uid];
    return message.reply(`Вы добровольно покинули клан.`);
});


cmd.on(/^(?:Коткрыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`); 
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == true) return message.reply(`Клан уже открытый.`)
    clans[clanid].open = true;
	return message.reply(`Вы открыли клан. Цена за вход: ${clans[clanid].price}$`);
});


cmd.on(/^(?:Кзакрыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == false) return message.reply(`Клан уже закрытый.`)
    clans[clanid].open = false;
	return message.reply(`Вы закрыли клан. Набор участников могут проводить только зам/создатель :3`);
});


cmd.on(/^(?:Квход)\s([0-9]+)$/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(!message.args[1]) return message.reply(`Укажите сумму для входа в клан.`);
    if(message.args[1] < 100) return message.reply(`Сумма для входа в клан не должна быть < 100 Coins`);
    if(message.args[1] > 50000) return message.reply(`Сумма для входа в клан не должна быть > 50000 Coins`);
    clans[clanid].price = Number(message.args[1]);
    return message.reply(`Вы установили цену за вход в размере ${Number(message.args[1])} Coins`);
});


cmd.on(/^(?:Вступить)\s([0-9]+)$/i, async (message, bot) => {



    let user = message.user;
	let idclan = message.args[1]; 
	if(message.users.clanid != false) return message.reply(`Вы уже состоите в клане.`);
	if(!message.args[1]) return message.reply(`Вы не указали ID клана.`);
	 
	 
	if(!clans[idclan]) return message.reply(`Данного клана не существует.`);
	if(clans[idclan].open == false) return message.reply(`Данный клан закрыт. В него нельзя войти.`);
	if(clans[idclan].open == true){
		if(message.user.balance < clans[idclan].price) return message.reply(`Вход в данный клан стоит: ${spaces(clans[idclan].price)} Coins`);
		message.user.balance -= Number(clans[idclan].price);
		clans[idclan].price += clans[idclan].price;
		message.user.clanid = Number(message.args[1]);
		if(!clans[idclan].users[message.user]){
        	        	clans[idclan].users[message.user.uid] = {
        	        		level: 0
        	        	}
        }
        return message.reply(`Вы вошли в клан за ${spaces(clans[idclan].price)} Coins \n\n Команды клана - Кпомощь`, {attachment: 'photo512809754_456239056'});
	}
});


cmd.on(/^(?:Кназвание)\s([^]+)$/i, async (message, bot) => {


 	if(!message.args[1]) return message.send(`⚠ »  Укажите название для клана.`);
 	if(message.user.right <= 1) {
 	    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
 return message.reply(`[🆘] » Ой... Похоже, что [idВаш_id|Создатель] заблокировал запрещенные слова/символы/смайлики.\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а у || [idВаш_id|Администратора]`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.send(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{
		 	let user = message.user;
			let clanid = user.clanid;
			if(!clans[clanid]) return message.reply(`У вас нет клана.`);
			if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
		    if(clans[clanid].balance < 10000) return message.reply(`На балансе клана нету 10.000 Coins `);
		   	clans[clanid].balance -= 10000;

			if(clans[clanid]){
				if(message.user != clans[clanid].owner) return message.reply(`Изменить название клана может только Создатель!`);
				if(message.user == clans[clanid].owner){
					clans[clanid].name = message.args[1];
					return message.reply(`Вы успешно изменили название клана за 10.000 Coins!`);
				}
			}
	}  

});


cmd.on(/^(?:Клого)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 1) return message.reply(`Вы не создатель/заместитель клана.`);
    if(clans[clanid].balance < 10000) return message.reply(`На балансе клана нету 10.000 Coins`);
    clans[clanid].balance -= 10000;

	if(clans[clanid]){
			let smile = [`📺`,`💥`,`💣`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌈`,`🌝`].random(); 
			clans[clanid].smile = smile;
			return message.reply(`Вы успешно изменили логотип клана за 10.000 Coins!`);
	}
});



cmd.on(/^(?:Клан)/i, async (message, bot) => {

let user = message.user;
	let clanid = message.user.clanid;
if(!clans[clanid]) return message.reply(`У вас нет клана.`);

let text = ``;
let tipe = ``;
text += `[🏆] | Участники Клана: \n\n`;

text += `[${clans[clanid].smile}] >> [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}] | Создатель.\n\n`;
 	for(let id in clans[clanid].users) {
             let people = clans[clanid].users[id];   
        	 if(clans[clanid].users[id].level == 1) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Заместитель.\n\n`;
        	 if(clans[clanid].users[id].level == 0) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Участник.\n`;
        }

 function indexOfByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return i;
            }
        }
        return null;
    }
    
    var tops = []
    for (let i in clans) {
        tops.push({
            id: i,
            balance: clans[i].balance
        })
    }
    tops.sort(function(a, b) {
        if (b.balance > a.balance) return 1
        if (b.balance < a.balance) return -1
        return 0
    })
   
    var inTop = indexOfByKey(tops, 'id', message.user);
    inTop++; 


if(clans[clanid].open == true) tipe += `Открытый.`
if(clans[clanid].open == false) tipe += `Закрытый.`
if(clans[clanid]){
    let exs = 0;
    let convert = 0;


	return message.reply(`
		[${clans[clanid].smile}]: ~ ${clans[clanid].name} ~ :[${clans[clanid].smile}]

 		[${clans[clanid].smile}] »  Создатель: [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}]
 		[${clans[clanid].smile}] »  Номер клана: ${clans[clanid].number}
 		[${clans[clanid].smile}] »  Логотип клана: ${clans[clanid].smile} 
 		[${clans[clanid].smile}] »  Тип клана: ${tipe}
 		[${clans[clanid].smile}] »  Цена за вход: ${clans[clanid].price} Coins
        [💰] »  На балансе клана: ${clans[clanid].balance} Coins

        [🔥] »  Баланс клана: ${clans[clanid].balance}
        [🌍] »  Место в топе: ${inTop}

 		${text}
		`);
	} 
});

cmd.on(/^(?:Кпомощь)/i, async (message, bot) => {

	let user = message.user;
 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`У вас нет клана.`);

if(clans[clanid].users[message.user.uid].level < 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Кбанк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана(от vip юзера)
		`);
}
if(clans[clanid].users[message.user.uid].level == 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик ID(user'a) - выгнать из клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КБанк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана (Только от vip пользователей)
		`);
}
if(clans[clanid].users[message.user.uid].level == 2){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -   ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик (ID Пользователя) - выгнать из клана.
		${clans[clanid].smile} Кмодер (ID Пользователя) - назначить заместителем.
		${clans[clanid].smile} КУдалить (ID Пользователя) - снять заместителя.
		${clans[clanid].smile} КНазвание (name) - изменить название клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.

		${clans[clanid].smile} КОткрыть - Открыть клан.
		${clans[clanid].smile} КЦена - Установить цену за вход.
		${clans[clanid].smile} КЗакрыть - Закрыть клан.

		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КСнять <сумма> - снять Coins из банка клана.
		${clans[clanid].smile} КБанк - баланс клана.

		${clans[clanid].smile} Clanwar [id клана] [сумма] - Атаковать клан!
		`);
}
});

cmd.on(/^(?:Кбанк)/i, async (message, bot) => {

	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	return message.reply(`Баланс Вашего клана: ${spaces(clans[clanid].balance)} Coins`);

});



cmd.on(/^(?:Кположить)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму вклада.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Вклад не может быть меньше 0 или равен 0 Coins.` : `Вклад не может превышать Ваш баланс.`);
	message.user.balance -= Number(message.args[1]);
	clans[clanid].balance += Number(message.args[1]);
	return message.reply(`Вы успешно положили ${spaces(message.args[1])} Coins в банк клана.`);
});


cmd.on(/^(?:Кснять)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму снятия.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Снимать деньги может только создатель клана.`);
    
	if(message.args[1] > clans[clanid].balance) return message.reply(`Данной суммы нет в банке клана.`);
	if(message.args[1] <= 0) return message.reply(`Сумма не должна быть меньше или равно 0 Coins`);
	message.user.balance += Number(message.args[1]);
	clans[clanid].balance -= Number(message.args[1]);
	return message.reply(`[${clans[clanid].smile}] »  Вы успешно сняли ${spaces(message.args[1])} Coins с банка клана.`);
});

cmd.on(/^(?:clanwar)\s([0-9]+)\s([^\s	].*)$/i, async (message, bot) => {
		let clanid = message.user.clanid;
		if(!message.args[1]) return bot(`Укажите ID клана, который хотите атаковать.`);
		if(!message.args[2]) return bot(`Укажите ставку.`);
		let id = Number(message.args[1]); 
		let amount = parserInt(message.args[2]);
		if(!Number(amount)) return bot(`укажите корректно ставку.`);
		if(amount < 1000) return bot(`минимальная сумма для атаки 1.000💰`);
		if (clans[clanid].users[message.user.uid].level < 1) return bot(`вы не ~создатель/заместитель~  клана.`);
		if(id == clanid) return bot(`нельзя нападать на свой клан.`);
		if(amount > clans[clanid].balance) return bot(`на счету вашего клана не хватает 💰`);
		if(amount > clans[id].balance) return bot(`на счету клана не хватает 💰`); 
		if (clanid == false) return bot(`у вас нет клана.`);
		if (!clans[clanid]) return bot(`у вас нет клана.`);
		if (!clans[id]) return bot(`такого клана нет.`);

if(message.user.right <= 1) {
	if(message.user.timers.clanwar) return bot(`в ближайшие 10 минут, Вы сможете ещё раз атаковать клан!`);

	setTimeout(() => {
		message.user.timers.clanwar = false;
	}, 600000);

	message.user.timers.clanwar = true;
}

		let win = rand(1,2);
		if(win == 1){
			clans[id].balance += amount;
			clans[clanid].balance -= amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[id].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}else{
			clans[id].balance -= amount;
			clans[clanid].balance += amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[clanid].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}
	});	

cmd.on(/^(?:Кмодер)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);

 	let clanid = user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана.`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

        	        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
              	    if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
        	       

        	        clans[clanid].users[user.uid].level = 1;
        	        return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 

        })
        return;
    }else{

        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
        if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
          

        	clans[clanid].users[user.uid].level = 1;
        	return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 
    }
});


cmd.on(/^(?:Кудалить)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);


 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана!`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

              	    if(user.clanid != acc.users[message.user.uid].clanid) return message.reply(`Юзер уже состоит в другом клане.`);
         			if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
        	        
        	        clans[clanid].users[user.uid].level = 0;
        	        return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);
        })
        return;
    }else{

        if(acc.users[user.uid].clanid != acc.users[message.user].clanid) return message.reply(`Юзер уже состоит в другом клане.`);
         if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);

        	clans[clanid].users[user.uid].level = 0;
        	return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);      
    }
});

cmd.on(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы успешо сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.on(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
	if(message.args[1] <= 49) return bot(`минимальная сумма вклада 50$`);
	if(message.args[1] > 250000000000) return bot(`максимальная сумма вклада 250.000.000.000$`);

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили на свой банковский счёт ${utils.sp(message.args[1])}$`);
	}
});

cmd.on(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`🔕 || ${message.user.tag}, к сожалению, Вы отключили уведомления! :(`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return message.send(`🔔 || [id${message.user.id}|${message.user.tag}], Вы обрано включили уведомления! :3`);
	}
});

cmd.on(/^(?:передать|передай|перидать|пиредать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
 
		let amount = parserInt(message.args[2]); 
		if(message.user.right <= 1) {
		if(message.args[2] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много переводишь?`);
        
	if(message.user.timers.translation) return bot(`вы сможете передать игроку в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.translation = false;
	}, 600000);

	message.user.timers.translation = true;
}
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.on(/^(?:карта)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.user.foolder += 1;
  if(message.user.ccard == true) return message.send(`У вас уже ЕСТЬ карта.`);
	{
var result = '';
   var words = '0123456789';
   var max_position = words.length - 1;
       for( i = 0; i < 16; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            }
var results = '';
   var wordss = '0123456789';
       for( i = 0; i < 3; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            results = results + wordss.substring(position, position + 1);
            }
message.user.cardss = result;
message.user.seccard = results;
message.user.balance -= 300;
  message.user.ccard = true;
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜Добрый день, ${message.user.tag}.
Вы успешно приобрели карту VISA! Вот информация о карте:
========================
Номер карты: ${result}
Ваш CVC: ${results}
========================
Также, было снято 300$ с вашего баланса, за приобретение карты в боте.❜` }); 
}
});

cmd.on(/^(?:положить)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.args[1] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь?`);
	  if(message.user.ccard == false) return bot(`у вас нет карты.`);
	  const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!message.args[1])  return message.send(`[!] Введите сумму.`);
if(message.args[1] < 0) return bot(`сумма не должна быть ниже 0.`);
if(message.args[1] > message.user.balance) return bot(`на вашем счету не достаточно средств!`);
message.user.balance -=  Number(message.args[1]);
message.user.card +=  Number(message.args[1]);
vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜На вашу карту (${message.user.cardss}) было зачислено: ${Number(message.args[1])}$.
Ваш баланс на карте составляет: ${message.user.card}$❜` }); 
return message.send(`[💳] >> Вы успешно положили на карту: ${Number(message.args[1])}$`);
});

cmd.on(/^(?:снять)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

		if(message.args[1] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь?`);
	if(message.user.ccard == false) return bot(`у вас нет карты.`);
  if(!message.args[1])  return message.send(`[!] >> Введите сумму.`);
  if(message.args[1] > message.user.card) return bot(`на вашем счету не достаточно средств!`);
  let stavkaa = 10;
  let summa = Number(message.args[1]);
  proc = Number(summa) / 100 * Number(stavkaa);

    let vivod = Number(summa) - Number(proc);


  message.user.card -= summa;
  message.user.balance += Math.round(vivod);
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜С вашей карты (${message.user.cardss}) было снято: ${Math.round(vivod)}$.
Ваш баланс на карте составляет: ${message.user.card}$❜` }); 
  return message.send(`[🤑] >> Вы успешно сняли ${Math.round(vivod)}$ (С комиссией)`);
});

cmd.on(/^(?:рейтинг)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.on(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.on(/^(?:ник|зови меня|зови)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.right <= 1) {
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а у || [idВаш_id|Администратора]`);
}
	message.user.tag = message.args[1];
	return bot(`вы теперь "${message.user.tag}"`);
});

cmd.on(/^(?:магазин)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`разделы магазина:
🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:
⠀⠀📱 Телефоны
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
⠀⠀💼 Бизнесы
⠀⠀🌐 Биткоин [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.on(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/ферм(у|ы)/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.misc.farm == 0) return bot(`у вас нет фермы`);
		if(options.count > message.user.misc.farm_count) return bot(`у вас нет столько ферм`);
		if(options.count <= 0) return bot(`вы не можете продать столько ферм`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * options.count * 0.85);

		message.user.balance += a;
		message.user.misc.farm_count -= options.count;
		if(message.user.misc.farm_count == 0) message.user.misc.farm = 0;

		return bot(`вы продали свои фермы (${options.value} шт.) за ${utils.sp(a)}$`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

   if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.business.length == 0) return bot(`у вас нет бизнеса`);
		if(options.count < 1 || options.count > 2) return bot(`используйте: Продать бизнес [1 или 2]`);
		if(message.user.business.length < options.count) return bot(`у вас нет этого бизнеса`);
		options.count--;
		let a = Math.floor(businesses[message.user.business[options.count].id - 1][message.user.business[options.count].upgrade - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business.splice(options.count, 1);

		return bot(`вы продали свой бизнес за ${utils.sp(a)} $`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}

	if(/угль/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.coal) return bot(`недостаточно угля`);
		const coals = utils.random(500);

		message.user.balance += coals;
		message.user.coal -= options.count;

		return bot(`вы продали ${options.count} угль за ${utils.sp(coals)}$`);
	}

	if(/железо/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.iron) return bot(`недостаточно железа`);
		const irons = utils.random(1000);

		message.user.balance += irons;
		message.user.iron -= options.count;

		return bot(`вы продали ${options.count} слиток зелеза за ${utils.sp(irons)}$`);
	}

	if(/золото/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.gold) return bot(`недостаточно золота`);
		const golds = utils.random(3500);

		message.user.balance += golds;
		message.user.gold -= options.count;

		return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}$`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.diamonds) return bot(`недостаточно алмаза`);
		const diamonds = utils.random(5000);

		message.user.balance += diamonds;
		message.user.diamonds -= options.count;

		return bot(`вы продали ${options.count} алмаз за ${utils.sp(diamonds)}$`);
	}

	if(/изумруд/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
		const emeralds = utils.random(10000);

		message.user.balance += emeralds;
		message.user.emeralds -= options.count;

		return bot(`вы продали ${options.count} эмеральд за ${utils.sp(emeralds)}$`);
	}
});

cmd.on(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000$)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000$)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000$)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000$)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Мегафон С1 (250.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${message.args[1]}👑 за ${message.args[1] * 250000000}$`);
	}
});



cmd.on(/^(?:курс)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.on(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.on(/^(?:Топ)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`вот список топов:

		[$] >> Топ баланс
		[₿] >> Топ биткоинов
		[&#9993;] >> Топ сообщений
		[&#9993;] >> Топ кланы`);
});

	cmd.on(/^(?:топ кланы)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let text = "";
		let tops = [];
		
		for(key in clans) {
			tops.push({
				id: key,
				balance: clans[key].balance,
				name: clans[key].name,
				owner: clans[key].owner,
				exp: 0
			});
		}
		tops.sort((a,b) => {
			if(a.balance < b.balance)
				return 1;
			else if (a.balance > b.balance)
				return -1;
			return 0;
		});
		
		let topClans = [];
		for(i = 0; i < (tops.length > 10 ? 9 : tops.length); i++) {
			topClans.push({
				id: tops[i].id,
				balance: tops[i].balance,
				name: tops[i].name,
				owner: tops[i].owner,
				exp: 0,
				number: i
			})
		};
		
		
		return message.send(
			"💰 » Топ самых сильных кланов: \n\n" +
			topClans.map(e => 
				(e.number+1) + `&#8419;. ` + e.name +
				`\n🐱 » Основатель: [id${e.owner.id}|${e.owner.tag}]\n` +
				`🔥 » Баланс клана: ` + e.balance +
				`\n🔥 » Id клана: ` + e.number +
				`\n🌍 » Количество участников: ` + e.people + `\n\n`)
		);
});
cmd.on(/^(?:топ баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.rating)}👑 | ${utils.rn(user.balance)}$
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.rating)}👑 | ${utils.rn(message.user.balance)}$`);
});

cmd.on(/^(?:топ биткоинов)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ btc: x.btc, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.btc - a.btc;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.btc)}₿
		`;
	}

	return message.send(`Топ игроков по БитКоинам:
		${text}
—————————————————

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.btc)}₿`);
});

cmd.on(/^(?:топ сообщений)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ foolder: x.foolder, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.foolder - a.foolder;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.foolder)}&#9993;
		`;
	}

	return message.send(`Топ игроков по сообщениям:
		${text}
—————————————————

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.foolder)}&#9993;`);
});

cmd.on(/^(?:бонус)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	if(message.user.right <= 1) {
	if(message.user.timers.bonus) return bot(`вы сможете получить бонус в течении 24 часов.`);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;
}
	if(prize === 1)
	{
		message.user.balance += 5000;
		return bot(`вы выиграли 5.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 10;
		return bot(`вы выиграли 10₿`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑!\n👑 Рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт!\n💳 В банке: ${utils.sp(message.user.bank)}$`);
	}
});

/* |                         | */
/* | А тут уже идут - Звонки | */
/* V                         V */

cmd.on(/^(?:позвонить)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

if(!message.user.call) return message.reply(`Ой, ей! Похоже, у вас закончились вызовы....`);
if(message.args[1] < 9000000001) return message.send(`Пожалуйста, перепроверьте ваши данные. Чтобы зарегистрировать новый звонок, напишите так:\n\nПозвонить 9211437838`);

    let args = message.text.match(/^(?:позвонить)\s?(.*)/i);
    if(args[1].toLowerCase() == "") return message.send(nope)
    rq("http://avtobzvon.ru/api/c2e1b006a358894e9f15c29cf7a8a0ed/11?phone=" + encodeURIComponent(args[1]) + "")
 return message.reply(`😜 | Звонок зарегистрирован! 
❤ >> Осталось наборов: ${message.user.call}

🎁 || Скоро новый год! А у нас скидки :3
`);
});

/* |                        | */
/* | А тут уже идут - Браки | */
/* V                        V */

cmd.on(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.on(/^(?:браки)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.on(/^(?:развод)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.marriage.partner) return bot(`ты и так свободен!`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек! Удачи ;)`);
});

/* |                          | */
/* | А тут уже идут - Репорты | */
/* V                          V */

cmd.on(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.isChat) return bot(`команда работает только в ЛС.`);

       let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(🥃|👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`☒ -> Отказ отправление репорта!

    	⚠ >> Причина:
    	Прости, но нельзя использовать символы и маты в репортах.`);
}

	vk.api.messages.send({ user_id: Ваш_id, forward_messages: message.id, message: `<<☐>> Чтобы отправить ответ пользователю, вы должны написать - Ответ ${message.user.uid} (Ваш ответ) <<☐>>` }).then(() => {
		return bot(`ваше сообщение на стадии расмотрения.`);
	}).catch((err) => {
		return message.send(`☒ -> Отказ отправление репорта!
			
			⚠ >> Причина:
			Нет Админов в сити. Тех Администратор - [idВаш_id|Сергею] (https://vk.com/zenoviov)`);
	});
});


cmd.on(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(message.args[2] <= 0) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `
	<- &#4448;Тех поддержка#4448&; 

[Тех Поддержки] ${new Date().getHours()}:${new Date().getMinutes()}
❜${message.args[2]}❜` });
});

cmd.on(/^(?:купить номер)$/i, async (message, bot) => {
	message.user.foolder += 1;

	const operator1 = utils.random(2, 6);
	if(message.user.number > 9) return bot(`Вы уже имеете номер!`);
	if(!message.user.misc.phone) return message.send(`📱 >> У вас нет телефона.`);
	{
var result = '';
   var words = '0123456789';
   var max_position = words.length - 1;
       for( i = 0; i < 9; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            }
message.user.balance -= 300,
message.user.number = result;
message.user.numberss = true;
message.user.operator = operator1;
return message.send(`📱 || Вы успешно получили телефонный номер: +79${result} || Оператор: ${message.user.operator.toString().replace(/2/gi, "Теле2").replace(/3/gi, "Мегафон").replace(/4/gi, "Билайн").replace(/5/gi, "Yota").replace(/5/gi, "Vk mobile").replace(/6/gi, "Мтс")}`);
}
});

cmd.on(/^(?:!русский)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.user.language += 1;

	return bot(`успешно! Вы сменили язык на русский.`);
});

cmd.on(/^(?:шахта)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.exp < 1) return bot(`мало опыта!`);
if(message.user.right <= 1) {
	if(message.user.timers.mine) return bot(`прости, но ты уже работал(а) на шахте!
		Шахта будет доступна в течении 1 дня.`);

	setTimeout(() => {
		message.user.timers.mine = false;
	}, 86400000);

	message.user.timers.mine = true;
}
	const coals = utils.random(500);
	const irons = utils.random(150);
	const golds = utils.random(100);
	const emeralds = utils.random(20);
	const diamondss = utils.random(10);

	message.user.coal += coals;
	message.user.iron += irons;
	message.user.gold += golds;
	message.user.diamonds += diamondss;
	message.user.emeralds += emeralds;

	return bot(`в шахте, вы нашли:
			&#128488; Угля: ${utils.sp(coals)}
		&#11036; Железа: ${utils.sp(irons)}
		&#128155; Золото: ${utils.sp(golds)}
		&#128142; Алмазов: ${utils.sp(diamondss)}
		&#128160; Изумрудов: ${utils.sp(emeralds)}`);
});

/* |                         | */
/* | А тут уже идёт - Работа | */
/* V                         V */

cmd.on(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});



cmd.on(/^(?:работа)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	👔 1. Дворник || Зарплата ~2.000$ || Левел: 1
	👔 2. Сторож || Зарплата ~3.750$ || Левел: 3
	👔 3. Продавец || Зарплата ~4.000$ || Левел: 5
	👔 4. Няня || Зарплата ~6.000$ || Левел: 8
	👔 5. Курьер || Зарплата ~7.500$ || Левел: 10
	👔 6. Слесарь || Зарплата ~9.000$ || Левел: 14
	👔 7. Охранник -|| Зарплата ~10.000$ || Левел: 22
	👔 8. Библиотекарь || Зарплата ~12.500$ || Левел: 25
	👔 9. Воспитатель || Зарплата ~14.500$ || Левел: 35
	👔 10. Педагог || Зарплата ~16.000$ || Левел: 49
	👔 11. Повар || Зарплата ~17.500$ || Левел: 65
	👔 12. Грузчик || Зарплата ~19.500$ || Левел: 95
	👔 13. Парикмахер || Зарплата ~23.500$ || Левел: 105
	👔 14. Врач || Зарплата ~24.500$ || Левел: 125
	👔 15. Торговый представитель || Зарплата ~26.500$ || Левел: 145
	👔 16. Специалист по валютным операциям || Зарплата ~55.500$ || Левел: 200
	👔 17. Юрист по налоговому праву || Зарплата ~70.500$ || Левел: 250
	👔 18. Программист PHP || Зарплата ~90.500$ || Левел: 300

	[💡] » Для усройства на работу - Работа [номер] 
    [💡] » Для для того, чтобы уволиться - уволиться
	
    [💰] || Зарплату можно получать в течении 10 мин.
    [💰] | Командой - Работать`);
});

cmd.on(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);
if(message.user.right <= 1) {
	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;
}
	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.on(/^(?:уволиться|уволится)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

/* |                       | */
/* | А тут уже идут - Игры | */
/* V                       V */

cmd.on(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});



cmd.on(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.5, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return message.send(`[🎰] >> Вам выпала комбинация [${['🍒🍊🍓','💰🍊🍒', '🍊🍊💰', '🍋🍊🍊', '💰🍓💰'].random()}]
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}$` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}$`}`}
		[❤] >> На этот раз, мы умножили вашу сумму на -> x${multiply}
		
		[💰] || Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.on(/^(?:ловушка)\s(.*)$/i, async (message, bot) => {
  if(!message.args[1]) return message.send(`укажите ставку`);	
  let text = parserInt(message.args[1]); 
  if(!Number(text)) return bot(`ставка должна быть целым числом.`); 
  if(!text) return bot("укажите ставку!");
  if(!message.args[1]) return bot(`Вы не указали ставку`);
  if(text > message.user.balance || text <= 0) return bot(text <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`);
{
 	if(rand(1,100) > 50) {
        let win = text * 2;
        message.user.balance += Math.round(win);   
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
        return bot(`Вы засунули руку в коробку...\n[😎] >> Из нее вы достали -> [${['💶','💍', '💎', '💰', '🎁', '⚽'].random()}] \n💴 >> Вы выиграли:  ${spaces(win)}$`);
    }else{
        let win = text;
        message.user.balance -= Math.round(win);  
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
        return bot(`Вы засунули руку в коробку...\n[💀] >> Какая неудача... Вы повредили руку -> [${['ловушкой','мышеловкой', 'капканом'].random()}] \n[💴] >> Вы проиграли:  ${spaces(win)}$`);
   
    } 		

}
})

cmd.on(/^(?:тир)\s(.*)\s(.*)$/i, async (message, bot) => {

		if(!message.args[1]) return bot(`укажите ID мишени (от 1 до 3)`)
		if(!message.args[2]) return bot(`укажите ставку.`)
		let stavka = parserInt(message.args[2]); 
  		if(!Number(stavka)) return bot(`ставка должна быть целым числом.`); 
		if(stavka > message.user.balance) return bot(`у вас нет столько денег`);
		let text = message.args[1];   
		if(message.args[1] > 3) return bot(`укажите ID мишени (от 1 до 3)`)
		if(message.args[1] < 1) return bot(`укажите ID мишени (от 1 до 3)`)
		if(stavka > message.user.balance || stavka <= 0) return bot(stavka <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`);

 	if(rand(1,100) > 50){
	    message.user.balance += stavka;
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
	    return bot(`поздравляю! Вы попали прямо в цель!!\n[👤] >> Вы забираете ваш выигрыш :3`, {attachment: win});
	  }else{
	    message.user.balance -= stavka;
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }

    return bot(`Вы промохнулись...\n[💀] >> Вы теряете всю свою ставку.`, {attachment: lose});
  	}
	   
});

cmd.on(/^(?:рр)$/i, async (message, bot) => {


    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Русская Рулетка"\n\n [🤤] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 1.000.000.000.000$, а если в вас попала пуля, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - 🔫`);
	return message.user.pp = 1;
});

cmd.on(/^(?:🔫|выстрел)$/i, async (message, bot) => {

	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
		let ran =  ["неуспешно","уcпешно"];
		let rand = ran.random();

	if(message.user.pp == 0) return;
	if(message.user.pp > 0){
		if(rand != "неуспешно"){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 1000000000000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 1.000.000.000.000$`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			return message.reply(`[😎] >> Пуля попала вам в голову - неуспешно\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

		}
		if(rand != "успешно"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			message.reply(`[🤕] >> Пуля попала вам в голову - успешно\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Баланс анулирован. `);
			message.user.balance = 5000;
			return message.user.pp = 0;
				}
			}


});


cmd.on(/^(?:монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {


    if(!message.args[1]) return message.reply(`Ⓜ » Проверьте вводимые данные:\nⓂ »  монетка ставка орел/решка`);
    let user = message.user;
    if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);
   	
	let a = rand(1,100);
    if(a > 50) {
    	if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    }
    }
    if(a < 50) {
       if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    		}
   		 }
	return message.reply(`[Подсказка] » монетка [ставка] [орел/решка]`);
});

cmd.on(/^(?:Фортуна)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
		return message.reply(`
    [👾]: Призы рулетки :[👾]
    💠 | Алмазы.
    💠 | Уголь.
    💠 | Валюта.
    💠 | БитКоины.

    [✳] >> Цена прокрутки: 20 БитКоинов.
    [✳] >> Команда, чтобы начать играть: крутить
    `, {attachment: fortyn});
	});
 
cmd.on(/^(?:Крутить)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
		let user = message.user
		   	if (message.user.btc < 20) return message.reply(`[🍏] >> Прокрутка рулетки стоит 20 БитКоинов.`, {attachment: fortyn});
			message.user.btc -= 20;

		let balan = rand(350000, 550000);
		let win = rand(1, 6);
		if (win == 1) {
			let win2 = rand(1, 3);
			if (win2 == 1) {
				let win3 = rand(1, 3);
				if (win3 == 3) {
					if (message.user.level > 1) {
						message.user.balance += 500000;
						return message.reply(`[🔆] >> Вы выиграли 500.000$`, {attachment: fortyn});
					}
			        message.user.balance += 100000;
					return message.reply(`[✨] >> Вы выиграли 100.000$`, {attachment: fortyn});
				}
			} else {
				message.user.balance += balan;
				return message.reply(`[🍀] >> Вы выиграли ${spaces(balan)}$`, {attachment: fortyn});
			}
			if (win2 > 1) {
				message.user.balance += balan;
				return message.reply(`[⚡] >> Вы выиграли ${spaces(balan)}$`, {attachment: fortyn});
			}
		}
		if (win == 2) {
			message.user.balance += balan;
			return message.reply(`[🎉] >> Вы выиграли ${spaces(balan)}$`, {attachment: fortyn});
		}
		if (win == 3) {
			let balenc = balan - 5000;
			message.user.balance += balenc;
			return message.reply(`[🎄] >> Вы выиграли ${spaces(balenc)}$`, {attachment: fortyn});
		}
		if (win == 4) {
			let don = rand(5, 16);
			message.user.btc += don;
			return message.reply(`[💥] >> Вы выиграли ${spaces(don)} БитКоинов.`, {attachment: fortyn});
		}
		if (win == 5) {
			let exs = rand(135, 160);
			message.user.coal += exs;
			return message.reply(`[💣] >> Вы выиграли ${spaces(exs)} угля.`, {attachment: fortyn});
		}
		if (win == 6) {
			let bit = rand(3, 7);
			message.user.diamond += bit;
			return message.reply(`[🔥] >> Вы выиграли ${spaces(bit)} алмазов.`, {attachment: fortyn});
		}
	});

cmd.on(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.on(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`вы не угадали, это был ${cup} стаканчик`);
		}
	}
});

cmd.on(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию с VIP'а.\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`вау! Невероятно! Вы угадали число - ${int}!!!
	    Вам начислено 10.000.000.000$ 😎`);
	} else if(int !== message.args[1])
	{
		return bot(`к сожалению, вы не угадали число. Правильно число, это - "${int}"
		❤ Не отчаивайтесь, ведь количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});

/* |                         | */
/* | А тут уже идёт - Бизнес | */
/* V                         V */

cmd.on(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1])
	{
		var text = `бизнесы:\n`;
		for(var i = 0; i < businesses.length; i++)
		{
			text += `${(message.user.business.length == 1 && message.user.business[0].id == i + 1) || (message.user.business.length == 2 && message.user.business[1].id == i + 1) ? '🔸' : '🔹'} ${i + 1}. ${businesses[i][0].name} - ${utils.sp(businesses[i][0].cost)}$\nПрибыль: ${utils.sp(businesses[i][0].earn)}$/час\n`;
		}
		return bot(text);
	}
	if(message.user.business.length == 2) return bot(`у вас уже есть 2 бизнеса`);

	message.args[1] = Number(message.args[1]) - 1;
	const sell = businesses[message.args[1]][0];
	if(sell == null) return;
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	message.user.balance -= sell.cost;
	message.user.business.push({
		"id": message.args[1] + 1,
		"upgrade": 1,
		"workers": 1,
		"moneys": 0
	});

	return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
});

cmd.on(/^(?:бизнес)\s(\d)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	const biz = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}$/час
	💼 Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰 На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}$

	${ (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "$)" : "") }`);
});


cmd.on(/^(?:бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес нанять [1 или 2] [кол-во работников]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для покупки рабочих`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса #${message.args[1] + 1}`);
});

cmd.on(/^(?:бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес снять [1 или 2] [количество]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return bot(`вы не можете снять столько со счёта бизнеса`);
	if(message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас нет денег на счёте этого бизнеса`);

	message.user.balance += message.args[2];
	message.user.business[message.args[1]].moneys -= message.args[2];

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}$`);
});

cmd.on(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес улучшить [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
		if(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`нет доступных улучшений для вашего бизнеса`);
	const cost = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].upgrade++;

	return bot(`вы улучшили бизнес #${message.args[1] + 1} за ${utils.sp(cost)}$`);
});


/* |                        | */
/* | А тут уже идёт - Ферма | */
/* V                        V */

cmd.on(/^(?:финфо|инфо ферма|ферма инфо)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	let text = ``
	if(message.user.misc.farm) text += `⠀🔋 Ферма: ${farms[message.user.misc.farm - 1].name}\n`; 
	text += ` 📟 Количество: ${message.user.misc.farm_count}\n`;
	text += ` 🅱 BTC: ${message.user.farm_btc}\n`;
    text += `\n\n📘 Для снятия введите "ферма снять"\n`;
   return message.send(`📗 Информация: \n${text}`)
  });
  
cmd.on(/^(?:ферма снять|ферма)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	if(!message.user.farm_btc) return bot(`на вашей ферме пусто, новые биткоины появятся скоро`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали ${utils.sp(btc_)}₿, следующие биткоины появятся через 15мин
	🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`);
});

cmd.on(/^(?:фермы)\s?([0-9]+)?\s?(.*)?$/i, async (message, bot) => {
	if(!message.args[1])  return bot(`Майнинг фермы:
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [количество]"
Посмотреть статистику "Финфо"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	const count = Math.floor(message.args[2] ? Number(message.args[2]) : 1);
	if(count <= 0) return bot(`нельзя купить 0 ферм или меньше`);
	if(count + message.user.misc.farm_count > 1000) return bot(`вы не можете иметь больше 1000 ферм одновременно`);
	if(message.user.misc.farm != 0 && message.user.misc.farm != message.args[1]) return bot(`вы не можете купить ферму другого типа`);

	if(message.user.balance < sell.cost * count) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost * count)
	{
		message.user.balance -= sell.cost * count;
		message.user.misc.farm = sell.id;
		message.user.misc.farm_count += count;

		return bot(`вы купили "${sell.name}" (${count} шт.) за ${utils.sp(sell.cost * count)}$`);
	}
});

/* |                          | */
/* | А тут уже идёт - Реферал | */
/* V                          V */

cmd.on(/^(?:реф|реферал)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"
	
	За каждого друга вы получаете 100.000.000$ (100 миллионов)
	Если друг активирует вашу рефералку, то он получит 50.000.000$ (50 миллионов)`);
});

cmd.on(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный ID`);
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.balance += 10000000;
	message.user.balance += 5000000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `
	[👋🏻] || Привет, ${user.tag}!

	[🎉] >> Спасибо за приглашение [${message.user.id}|друга] в бота!
	[💸] >> Вам начислено 10.000.000$ на баланс.` });
	return bot(`вы успешно активировали рефералку игрока - [${user.id}|${user.tag}]!.
	[💲] >> За это, вам начислено 5.000.000$`);
});


cmd.on(/^(?:бот)$/i, async (message, bot) => {
	message.user.foolder += 1;

const percent = utils.random(100);
const ping = utils.random(300);
	await message.send(`[📖] » Техническая информация:

     👾 || Мой проект: [club182717712|BananaBot]
     &#4448;⚙ » OC: Пока на ПК
	 &#4448;🔐 » Версия бота: 1.0
	 &#4448;❤ » Нагрузка: ${percent}%
	 &#4448;📡 » Пинг: ${ping}

	 😎 || Мой создатель - [idВаш_id|Сергей Зиновьев]
	 &#4448;🕳 » Отвечает только на ВАЖНЫЕ вопросы.
`);
});	

/* |                                       | */
/* | А тут уже идут - Чат команды (Беседа) | */
/* V                                       V */

cmd.on(/^(?:кто)/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.isChat) return bot(`команда работает только в беседе!`);
    let { profiles } = await vk.api.messages.getConversationMembers({
        peer_id: message.peerId
    });
    let profile = getRandomElement(profiles);
    await message.send(
        getRandomElement(['Это точно', 'Я уверен, что это', 'Твоя мама говрит, что это', 'Кнч, это', 'Думаю, что это', 'Наверное, это', 'Википедия говорит, что это', 'Сотку даю, что это']) + ' -- @id' + profile.id + '(' + profile.first_name + ')'
    );
});

cmd.on(/^(?:бутылочка)$/i, async (message, bot) => { 
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles); 
message.send(`[🍷]: Бутылочка :[🍷]

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] — ваше действие: ` + utils.pick(['Заняться сексом!', 'Поцеловаться', 'Сесть на бутылочку', 'Начать встречаться', '*Вы пропускаете ход*', 'Раздеться', 'Бухнуть', 'Пожениться'])); 
});

cmd.on(/^(?:онлайн)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `[😎] || Список людей, которые сейчас находятся онлайн:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online != 0) text += `${['😍', '😎', '😏', '🙂', '🙃', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '🤑'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.on(/^(?:очистить чат)$/i, async (message, bot) => {
	message.user.foolder += 1;
				if(message.user.right < 2) return bot(`доступно с привилегии - Vip.`);
		return message.send("&#4448;\n".repeat(200) + "Я очистила чат от лишних сообщений!");
});

/* |                              | */
/* | А тут уже идут - Чат команды | */
/* V                              V */

cmd.on(/^(?:погода|weather)/i, async (message, bot) => {
	message.user.foolder += 1;
    let args = message.text.match(/^(?:погода|weather)\s?(.*)/i);
    if(args[1].toLowerCase() == "") return message.send(nope)
    rq("http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(args[1]) + "&appid=fe198ba65970ed3877578f728f33e0f9&units=metric")
        .then((res) => {
    let Utils = {
    	filter: (text) => { 
    	text = text.replace(/^(RU)/i, 'Россия')
        text = text.replace(/^(UA)/i, 'Украина')
        text = text.replace(/^(BY)/i, 'Беларусь')
        text = text.replace(/^(KZ)/i, 'Казахстан')
        text = text.replace(/^(AE)/i, 'Объединенные Арабские Эмираты')
        return text;
    }};
    function TempTo () {
    	if(res.main.temp < -10) return 'очень холодно'
    	else if(res.main.temp < -5) return 'холодно'
    	else if(res.main.temp < 5) return 'холодновато'
    	else if(res.main.temp < 20) return 'комфортно'
    	else if(res.main.temp < 25) return 'тепло'
    	else if(res.main.temp < 30) return 'жарко'
        else if(res.main.temp < 50) return 'Очень жарко'
    };
    function Timer () {
    	let now = new Date(res.dt*1000).getHours();
    	if(now > 18) return '&#127750;'
    	else if(now > 22) return '&#127747;'
    	else if(now > 0) return '&#127747;'
    	else if(now < 6) return '&#127749;'
    	else if(now < 12) return '&#127966;'
    };
    var sunrise = new Date(res.sys.sunrise*1000);
    var sunset = new Date(res.sys.sunset*1000);
    function sunmin () {
    	if(sunrise.getMinutes() < 10) "0" + sunrise.getMinutes();
    	return sunset.getMinutes();
    };
    function sunsmin () {
    	if(sunset.getMinutes() < 10) "0" + sunset.getMinutes();
    	return sunset.getMinutes();
    };
    function daterh () {
    	if(date.getHours() < 10) "0" + date.getHours();
    	return date.getHours()
    };
    function daterm () {
    	if(date.getMinutes() < 10) "0" + date.getMinutes();
    	return date.getMinutes();
    };
    var date = new Date(res.dt*1000);
    return message.reply(`${Timer()} ${res.name}, ${Utils.filter(res.sys.country)}

➖ Сейчас там ${TempTo()}: ${res.main.temp}°С
➖ Рассвет: ${sunrise.getHours()}:${sunmin()}
➖ Закат: ${sunset.getHours()}:${sunsmin()}
➖ Скорость ветра: ${res.wind.speed} м/с`)})
});


cmd.on(/^(?:гиф)/i, async (message, bot) => {
	message.user.foolder += 1;
       vk.api.call('docs.search', {q: utils.pick(['ржака', 'игры', 'каваи', 'лайфхаки', 'тян', 'крафт', 'любовь', 'аниме', 'животные', '5 minute', 'пиздец', 'смешно', 'мем', 'классно', 'ня', 'пикча', 'авария']) + '.gif', count: 1})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.on(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи : "${text.split('').reverse().join('')}"`)
});

cmd.on(/^(?:когда|when)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
    let times = {
    60: ['секунду', 'секунды', 'секунд'], 
    60: ['минуту', 'минуты', 'минут'], 
    24: ['час', 'часа', 'часов'], 
    365: ['день', 'дня', 'дней'], 
    2018: ['год', 'года', 'лет']
};
    let item = utils.pick(Object.keys(times));
    let time = utils.random(Number(item));
    let date = await nDay(time, times[item]);
    return await bot(`событие произойдет, через ${time} ${date}`);

function nDay(n, titles) {
    return titles[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
};
});

cmd.on(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.on(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'данная информация достоверна на', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.on(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.on(/^(?:анекдот)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let filter = (text) => { 
			text = text.replace('&quot;', '"');
			text = text.replace('!&quot;', '"');
			text = text.replace('?&quot;', '"');
			text = text.replace(/(&quot;)/ig, '"');
			return text;
		}

    let anek = await getAnek();
    return bot(`держи:\n\n ${filter(anek)}\n\n🤤 >> Понравилось? Напиши команду "Анекдот" ещё раз!`);

function getAnek() {
    return rq('https://www.anekdot.ru/random/anekdot/').then(body => {
        		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
        		res = res[0].split('</div>');
        		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
        	});
   
	}
});

cmd.on(/^(?:Кот,)/i, async (msg, bot) => { 
	msg.user.foolder += 1;
	rq("https://isinkin-bot-api.herokuapp.com/1/talk?q=" + encodeURIComponent(msg.text))
	.then(res => {
		return msg.send(res.text)
	})
});

cmd.on(/^(?:Время|time)/i, async (msg, bot) => { 
	message.user.foolder += 1;
    await bot(`время сейчас:

⏰ | Москва: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Азия/Токио: ${new Date().getHours()+6}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Лондон: ${new Date().getHours()-7}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Дубаи: ${new Date().getHours()+3}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Берлин/Мюнхен: ${new Date().getHours()-1}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Екатеринбург: ${new Date().getHours()+5}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Баку: ${new Date().getHours()+4}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
});

cmd.on(/^(?:оцени)/i, async (message, bot) => {
	message.user.foolder += 1;
message.send(`мне кажется, что эта картинка идёт на: ` + utils.random(1, 10) + `/10`);
})

cmd.on(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`ваша дата регистрации в [В]Контакте - ${user.tag}: ${user.regDate}`);
});


cmd.on(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.on(/^(?:wiki|вики)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
    let args = message.text.match(/^(?:wiki|вики)\s?(.*)/i);
    function isEmpty( str ) { if (str.trim() == '') return true; return false; }
        rq("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent((args[1] ? args[1] : "ВКонтакте"))+"&meta=siteinfo&rvprop=content&format=json")
        .then((res) => {
            if(isEmpty(res[2][0])) {
                if(isEmpty(res[2][1])) {
                    if(isEmpty(res[2][2])) return message.reply('Статья не полная, либо отсутствует.\n\nСсылка: ' + res[3][0]);
                } else {
                    return message.reply(`Я нашла то, что Вы попросили найти! \n\nСсылка: ${res[3][1]}`);
                }
            } else {
                return message.reply(`Я нашла то, что Вы попросили найти!\n\nСсылка: ${res[3][0]}`);
            }
        });
});

/* |                               | */
/* | А тут уже идут - Чат Менеджер | */
/* V                               V */

cmd.on(/^(?:!стата)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
			[🎉] » ID беседы: ${message.chatId}
			[🎉] » Сообщений собрано: ${chats[message.chatId].flood}

			** - Здесь показана вся информация о беседе.`);
	}); 

cmd.on(/^(?:!правило|!правила)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return bot(`Вот правило беседы:

		 ${chats[message.chatId].rules}`);
	}); 

cmd.on(/^(?:!новыеправила)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
let argses = message.text.split("!новыеправила ");
			chats[message.chatId].rules = argses[1];
			return message.send(`Новое правило установлено!`);
	});

cmd.on(/^(?:!роль)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
Ваша роль в беседе — ${chats[message.chatId].users[message.user.id].group.toString().replace(/0/gi, "Пользователь").replace(/1/gi, "Модератор").replace(/2/gi, "Администратор").replace(/3/gi, "Helper").replace(/4/gi, "Создатель беседы")}`);
	}); 

cmd.on(/^(?:!снять)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!снять ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 4) return message.send(`❌ Данный пользователь имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 0;
			return message.send('@id' + user.object_id + ', вы теперь пользователь.');
	});

cmd.on(/^(?:!moder|!модер|!модератор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!модер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 1) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 1;
			return message.send('@id' + user.object_id + ', вы теперь Moder.');
	});

cmd.on(/^(?:!Администратор|!админ|!администратор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!админ ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 2) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 2;
			return message.send('@id' + user.object_id + ', вы теперь Админ.');
	});

cmd.on(/^(?:!хелпер|!helper)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!хелпер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 3) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 3;
			return message.send('@id' + user.object_id + ', вы теперь Хелпер.');
	});

cmd.on(/^(?:!unban)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!unban ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(!chats[message.chatId].users[user.object_id].isBanned && chats[message.chatId].users[user.object_id].permanently) return message.send('@id' + user.object_id + ' не забанен.')
			chats[message.chatId].users[user.object_id].isBanned = false;
		    chats[message.chatId].users[user.object_id].permanently = false;
		    chats[message.chatId].users[user.object_id].group = 0;
		    chats[message.chatId].users[user.object_id].reason = "";
		    vk.api.call("messages.addChatUser", {chat_id: chatid, user_id: user.object_id})
			return message.send('@id' + user.object_id + ' - разбанен.');
	});

cmd.on(/^(?:!permban)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!permban ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(user.object_id == Ваш_id) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
			if(chats[message.chatId].users[user.object_id].isBanned && chats[message.chatId].users[user.object_id].permanently) return message.send('@id' + user.object_id + ' уже забанен.')
			chats[message.chatId].users[user.object_id].isBanned = true;
		    chats[message.chatId].users[user.object_id].permanently = true;
		    chats[message.chatId].users[user.object_id].group = 0;
		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
			return message.send('@id' + user.object_id + ' - забанен навсегда.');
	});

cmd.on(/^(?:!kick|!кик)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 2) return;
		let argses = message.text.split("!kick ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(user.object_id == Ваш_id) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
		});

cmd.on(/^(?:!warn)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 1) return;
		let argses = message.text.split("!warn ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
					if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
			if(user.object_id == Ваш_id) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			
			if(chats[message.chatId].users[user.object_id].isBanned == true) {
				return message.send('Пользователь и так уже заблокирован!');
			}
			if(chats[message.chatId].users[user.object_id].isBanned == false) {
									if(chats[message.chatId].users[user.object_id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id})
		message.send(`@id` + user.object_id + `, был кикнут из беседы за большое количество нарушений.`)
		chats[message.chatId].users[user.object_id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[user.object_id].isBanned = true;
		chats[message.chatId].users[user.object_id].warns = 0;
	}
	if(chats[message.chatId].users[user.object_id].isBanned == false) {
				chats[message.chatId].users[user.object_id].warns += 1
			return message.send('@id' + user.object_id + ', Вы получили предупреждение ' + chats[message.chatId].users[user.object_id].warns + '/3. Впредь ведите себя адекватнее, иначе можете быть кикнуты из чата.');
}}});

cmd.on(/^(?:!activate)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(chats[message.chatId].activate == true) return bot(`беседу уже кто-то активировал...`);
	if(!message.isChat) return;
return [chats[message.chatId].activate = true, 
chats[message.chatId].users[message.user].group = 4]
});

cmd.on(/^(?:!erazessssss)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId]) {
		chats[message.chatId] = {
			activate: false,
			name: 0,
			flood: 0,
			rules: "Бла-бла-бла, историк херов",
			title: "",
			banned: [],
			users: {}
		}
	}
	if(!chats[message.chatId].users[message.user.id])
	{
		chats[message.chatId].users[message.user.id] = {
			warns: 0,
			isBanned: false,
			permanently: false,
			group: 0
		}
	}
	if(!settings[message.chatId]) settings[message.chatId] = {};
	if(!chatslist.includes(message.chatId)) chatslist.push(message.chatId);
	if(!base[message.user]) {
		await vk.api.call('users.get', {
			user_ids: message.user.id,
			fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
		}).then(res => {
			base[message.user] = {
				prefix: `${message.user.realname}`
			}
		})

	};
});

cmd.on(/^(?:!title)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(chats[message.chatId].users[message.user.id].group < 3) return;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
			let args = message.text.split("title ")
			let chatid = message.chatId;
			chats[message.chatId].title = args[1];
				if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а у || [idВаш_id|Админа]`);
			vk.api.call("messages.editChat", {chat_id: chatid, title: chats[message.chatId].title})
			return message.send(`[id` + message.user.id + `|${message.user.realname}] || Я успешно изменил название беседы!!!`)
		});

cmd.on(/\.(com|ru|me|xyz|pro|ooo|community|steam|pw)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
		let chatid = message.chatId;
		if(chats[message.chatId].users[message.user.id].group == 1) return;
		if(chats[message.chatId].users[message.user.id].group == 2) return;
		if(chats[message.chatId].users[message.user.id].group == 3) return;
		if(chats[message.chatId].users[message.user.id].group == 4) return;
		if(chats[message.chatId].users[message.user.id].isBanned == true) {
				return message.send('...');
			}

			if(chats[message.chatId].users[message.user.id].isBanned == false) {
				chats[message.chatId].users[message.user.id].warns += 1
				return message.send(`[id${message.user.id}|${message.user.realname}], вы получили предупреждение за подозрительные ссылки!\n\nКоличество предупреждений: ` + chats[message.chat].users[message.user.id].warns + `/3. При достижении 3-х предупреждений вы будете кикнуты из беседы.`)
		if(chats[message.chatId].users[message.user.id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id})
		message.send('был кикнут из беседы за большое количество нарушений.')
		chats[message.chatId].users[message.user.id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[message.user.id].isBanned = true;
		chats[message.chatId].users[message.user.id].warns = 0;
	}
			}
	});

cmd.on(/youtube\.(com)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
		let chatid = message.chatId;
		if(chats[message.chatId].users[message.user.id].group == 1) return;
		if(chats[message.chatId].users[message.user.id].group == 2) return;
		if(chats[message.chatId].users[message.user.id].group == 3) return;
		if(chats[message.chatId].users[message.user.id].group == 4) return;
		if(chats[message.chatId].users[message.user.id].isBanned == true) {
				return message.send('...');
			}
			if(chats[message.chatId].users[message.user.id].isBanned == false) {
				chats[message.chatId].users[message.user.id].warns += 1
				return message.send(`[id${message.user.id}|${message.user.realname}], вы получили предупреждение за подозрительные ссылки!\n\nКоличество предупреждений: ` + chats[message.chat].users[message.user.id].warns + `/3. При достижении 3-х предупреждений вы будете кикнуты из беседы.`)
		if(chats[message.chatId].users[message.user.id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id})
		message.send('был кикнут из беседы за большое количество нарушений.')
		chats[message.chatId].users[message.user.id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[message.user.id].isBanned = true;
		chats[message.chatId].users[message.user.id].warns = 0;
}
			}
	});

/* |                                | */
/* | А тут уже идут - Админ команды | */
/* V                                V */

cmd.on(/^(?:раздача)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right < 4) return bot(`доступно с привилегии - Гл.Администратор.`);
	if(giving) return bot(`серьёзно? СЕРЬЁЗНО?! Создавать по 500 постов с раздачей я также не могу. Пойди посмотри канал "Тарелка"`);
	giving = true;
	user.api.wall.post({
		owner_id: Ваш_id,
		message: `
        🔥 >> Эй! Няшечка, а вот мы проводим раздачу, поэтому, лучше сделай репост и получи 5.000.000$ на свой баланс! 

		📢 >> Предупреждение:
		⚠ || Перед тем, как репостить, Вы должны написать любое сообщение в ЛС нашему сообществу. Так же необходимо, чтобы у Вас был открыт профиль. 
		(Наш бот для раздачи проверяет репост на вашей стене)

		💥 >> Ограничение по времени:
		⏰ || Внимание! Раздача будет проходить ТОЛЬКО 12 часов.

		UPD: Деньги на баланс будут выданы по окончанию акции.`,
		attachments: 'photo-174226458_456239388'
	}).then((response) => {
		user.api.wall.openComments({
				owner_id: Ваш_id,
				post_id: response.post_id
			});
		user.api.wall.createComment({
				owner_id: Ваш_id,
				post_id: response.post_id,
				from_group: 182717712,
				message: '😜 >> Приветствую вас! Здесь, Вы можете комментарировать эту запись, но только... Тебе нельзя использовать маты, ведь за них, мы тебя забаним.\n\n[🤤] Также, тут отвечают админы на ваши вопросы/пожелания/идеи, ну или просто можно с ними пообщаться.'
			});
		setTimeout(() => {
			user.api.call('wall.getReposts', { owner_id: Ваш_id, post_id: response.post_id, count: 1000 }).then((res) => { 
				res.items.map(x=> {
					if(x.from_id < 0) return;
					let user = users.find(a => a.id === x.from_id);
					if(!user) return; 
					user.balance +=5000000; 
					vk.api.messages.send({ user_id: user.id, message: `Приветик!!!\n\n[id${user.id}|${user.tag}], спасибо за участие в нашей раздаче! Вы получили +${utils.sp(5000000)}$, поэтому ваш баланс составляет сейчас - ${user.balance}$! \n\nС уважением,\nВаш виртуальный помощник [bot_banana|BananaBot]` });
					vk.api.messages.send({ user_id: Ваш_id, message: `[😜] >> [idВаш_id|Одмэн], я выдал игроку ([id${user.id}|${user.tag}]) - ${utils.sp(5000000)} на баланс.\n\nНа данный момент, его баланс составляет:\n${user.balance}$`})
				});
			});
			user.api.wall.openComments({
				owner_id: Ваш_id,
				post_id: response.post_id
			});
			user.api.wall.createComment({
				owner_id: Ваш_id,
				post_id: response.post_id,
				from_group: 182717712,
				message: 'Ебаттт... Люди, с вами всё норм?\n\nЛадно, ща окончу раздачу.'
			});
			user.api.wall.createComment({
				owner_id: Ваш_id,
				post_id: response.post_id,
				from_group: 182717712,
				message: 'ВСЁ! Раздача закончена!'
			});
			user.api.wall.closeComments({
				owner_id: Ваш_id,
				post_id: response.post_id
			});
			giving = false;
		}, 43200000);
	});
});

cmd.on(/^(?:!Стоп)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.senderId !== Ваш_id) return;
	await bot(`идёт отключение бота, подождите...`);
	await message.send(`База сохранена на - 10%`);
	await message.send(`База сохранена на - 20%`);
	await message.send(`База сохранена на - 30%`);
	await message.send(`База сохранена на - 40%`);
	await message.send(`База сохранена на - 50%`);
	await message.send(`База сохранена на - 60%`);
	await message.send(`База сохранена на - 70%`);
	await message.send(`База сохранена на - 80%`);
	await message.send(`База сохранена на - 90%`);
	await message.send(`База сохранена на - 100%`);
    await message.send(`Вы успешно отключили бота! \n\nЧтобы его включить.\n\nС уважением,\nВаш любимый кодер - [idВаш_id|Самид]`);

	await saveUsers();
	process.exit(-1);
});

cmd.on(/^(?:запись)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right < 4) return bot(`доступно с привилегии - Гл.Администратор.`);
				let photos = ['photo-174226458_456239040',
	'photo-174226458_456239041',
	'photo-174226458_456239042',
	'photo-174226458_456239043',
	'photo-174226458_456239044',
	'photo-174226458_456239045',
	'photo-174226458_456239046',
	'photo-174226458_456239047',
	'photo-174226458_456239048',
	'photo-174226458_456239049',
	'photo-174226458_456239050',
	'photo-174226458_456239051',
	'photo-174226458_456239052']
	user.api.wall.post({
		owner_id: Ваш_id,
		message: `${message.args[1]}`,
		attachments: `${utils.pick(atts)}`
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: Ваш_id,
			post_id: response.post_id
		});
	});
});

cmd.on(/^(?:промокодд)$/i, async (message, bot) => {
	if(message.user.right < 4) return bot(`доступно с привилегии - Гл.Администратор.`);
	let answers = ['Опа! Новые промокод! Быстрее активируй его :3',
	'Быстрее активируй промо, а то его другие разберут!',
	'Держи промокод, пока его другие не разобрали',
	'Что насчёт нового прома?)',
	'Ыыыыы, новый промокод',
	'Че не ставишь лайки?)',
	'КРЯЯЯЯЯЯ!!! Новый промокод ниже ↓↓↓']
	let rullka = ['За 50 лайков, сделаем раздачу денег',
	'Го за 20 лайков, я сделаю новое КРУТОЕ обновление?)',
	'Набёрем 10 лайков, для следующего промо?']
				var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: 500000000,
		            		activ: 75,
		            		users: {}
		            	}
		}else{
		}
			user.api.wall.post({
		owner_id: Ваш_id,
		message: `[☺] | ${utils.pick(answers)}

		[📝] >> Промокод ${result}
		[🗝] >> Активаций в этом промокоде - 75
		[💰] >> Валюты в этом промокоде - 500.000.000$ 

		[🤴] || ${utils.pick(rullka)}`,
		attachments: 'photo-174226458_456239378'
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: Ваш_id,
			post_id: response.post_id
		});
		});
});

cmd.on(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.right < 4) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[🔔] Рассылка || ${message.args[1]}` });
        }
        return message.send(`💬 || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n[bot_banana|BananaBot], Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);
 
})

cmd.on(/^(?:пострассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.right < 4) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `[👮] >> Быстро посмотрел запись:`, attachment: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[👮] >> Быстро посмотрел запись:`,
              attachment: `${message.args[1]}` });
        }
        return message.send(`💬 || Я успешно сделал рассылку!`);
 
})

cmd.on(/^(?:Смс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => { 
	message.user.foolder += 1;
		if(message.user.numberss == false) return bot(`доступно при номере телефона!.\nЧтобы приобрести номер, напишите: Купить номер`);

const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`такого игрока не существует. Вероятно, вы ошиблись.`); 

vk.api.messages.send({ user_id: user.id, message: `Вам пришло сообщение!` }); 

vk.api.messages.send({ user_id: user.id, message: `Сообщение открывается...` }); 

vk.api.messages.send({ user_id: user.id, message: `
<- &#4448;Администратор&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜${message.args[2]}❜` }); 

message.user.balance -= 134;
	return message.send(`Сообщение успешно отправлено! С вас списано - 134$`);
});

cmd.on(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(message.args[2] <= 0) return;
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance += message.args[2];
	return bot(`Успешно! Вы накрутили пользователю (${user.tag}) -> ${utils.sp(message.args[2])}$`);
}
	});

cmd.on(/^(?:Забрать)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance = 5000;
	return bot(`Успешно! Вы убрали весь баланс у пользователя -> (${user.tag})`);
}
	});

cmd.on(/^(?:removebtc)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.btc = 0;
	return bot(`Успешно! Вы убрали все БитКоины у пользователя -> (${user.tag})`);
}
	});

cmd.on(/^(?:givebtc)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	let amount = parserInt(message.args[2]); 
		if(message.args[2] <= 0) return;
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.btc += message.args[2];
	return bot(`Успешно! Вы накрутили пользователю (${user.tag}) -> ${utils.sp(message.args[2])}$`);
}
	});

cmd.on(/^(?:ban)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = true;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239146',
			message: `
[😵] >> [id${user.id}|${user.tag}], к сожалению, Вы забанены. 
[💣] || Вас забанил: + Администратор + 
[⚠] || Вы забанены с ${new Date().getHours()}:${new Date().getMinutes()} - НАВЕЧНО

🍀 Вы можете купить разбан у || [idВаш_id|Админа]
🎁 ОчЕнЬ БоЛьШиЕ  СкИдКи!!!` }); 

	return bot(`Вы смогли забанить пользователя (${user.tag}) - навечно.`);
}
	});


cmd.on(/^(?:unban)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = false;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239145',
			message: `
[😜] >> [id${user.id}|${user.tag}], ВЫ РАЗБАНЕНЫ!!!! :D
[❤] || Вас разабанил: + Администратор + ` }); 

	return bot(`Успешно! Вы разбанили пользователя -> (${user.tag})`);
}
	});

function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
}

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

	var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));


		setInterval(() => {
			fs.writeFileSync("./base/promo.json", JSON.stringify(promo, null, "\t"));
			fs.writeFileSync("./base/clans.json", JSON.stringify(clans, null, "\t"));
			fs.writeFileSync("./base/botinfo.json", JSON.stringify(botinfo, null, "\t"));
		}, 15000);



	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}

	function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}

		function spaces(string) {
		if (typeof string !== "string") string = string.toString();
		return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
	};
		setTimeout(() => {
	let answers = ['Опа! Новые промокод! Быстрее активируй его :3',
	'Быстрее активируй промо, а то его другие разберут!',
	'Держи промокод, пока его другие не разобрали',
	'Что насчёт нового прома?)',
	'Ыыыыы, новый промокод',
	'Че не ставишь лайки?)',
	'КРЯЯЯЯЯЯ!!! Новый промокод ниже ↓↓↓']
	let rullka = ['За 20 лайков, сделаем раздачу денег',
	'Го за 50 лайков, я сделаю новое КРУТОЕ обновление?)',
	'Набёрем 10 лайков, для следующего промо?']
				var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: 500000000,
		            		activ: 75,
		            		users: {}
		            	}
		}else{
		}
			user.api.wall.post({
		owner_id: Ваш_id,
		message: `[☺] | ${utils.pick(answers)}

		[📝] >> Промокод ${result}
		[🗝] >> Активаций в этом промокоде - 75
		[💰] >> Валюты в этом промокоде - 500.000.000$ 

		[🤴] || ${utils.pick(rullka)}`,
		attachments: 'photo-174226458_456239378'
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: Ваш_id,
			post_id: response.post_id
		});
		});
	}, 86400000);

setInterval(() => {
	let fs = require("fs");
	fs.writeFileSync("./base.json", JSON.stringify(base, null, "\t"));
	fs.writeFileSync("./settings.json", JSON.stringify(settings, null, "\t"));
	fs.writeFileSync("./chats.json", JSON.stringify(chats, null, "\t"));
}, 1000)


setInterval(() => {
let chatid = 0;
let fs = require("fs");
for (key in base)
{
	if(chats.users[key].isBanned)
	{
		chats.users[key].isBanned == false
		chats.users[key].reason == ""
	}
}}, 604800000);

function Manager(access_token) {
	vk.longpoll.on('message', async function(message) {
	let chatid = message.chat;
	if(message.hasFlag('outbox')) return;
		vk.longpoll.start();
	if(!chats[message.chatId]) {
		chats[message.chatId] = {
			activate: false,
			name: 0,
			flood: 0,
			rules: "Бла-бла-бла, историк херов",
			title: "",
			banned: [],
			users: {}
		}
	}
	if(!chats[message.chatId].users[message.user.id])
	{
		chats[message.chatId].users[message.user.id] = {
			warns: 0,
			isBanned: false,
			permanently: false,
			group: 0
		}
	}
	if(!settings[message.chatId]) settings[message.chatId] = {};
	if(!chatslist.includes(message.chatId)) chatslist.push(message.chatId);
	if(!base[message.user.id]) {
		await vk.api.call('users.get', {
			user_ids: message.user,
			fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
		}).then(res => {
			base[message.user.id] = {
				prefix: `${res[0].first_name}`
			}
		})
	};
	setInterval(() => {
		chatslist.map(chatid => {
			vk.api.call("messages.getChat", {chat_id: chatid})
			.then((res) => {
				if(res.title !== settings[message.chatid].title) {
				vk.api.call("messages.send", {chat_id: chatid, message: ``})
				vk.api.call("messages.editChat", {chat_id: chatid, title: chats[message.chatid].title})}
			})
		})
	}, 15000);
	var args = message.text.split(" ");
})}
