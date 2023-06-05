const questions = [
    {					
        id	:	1	,		
        ru	:	"	(Как технологии изменили способ общения между нами?)	"	,
        eng	:	"	How has technology changed the way we communicate with each other?	"	
        }	,				
        {					
        id	:	2	,		
        ru	:	"	(Обсудите влияние социальных медиа на личные отношения и социальные взаимодействия.)	"	,
        eng	:	"	Discuss the impact of social media on personal relationships and social interactions.	"	
        }	,				
        {					
        id	:	3	,		
        ru	:	"	(Пробовали ли вы технологии дополненной реальности для просмотра видео, игр или работы в программах? Ваши мысли об этом?)	"	,
        eng	:	"	Have you ever tried VR? Virtual reality headsets to watch videos or play games or work in some software? What do you think about it?	"	
        }	,				
        {					
        id	:	4	,		
        ru	:	"	(Ваши мысли об использовании технологии распознавания лиц в общественных местах.)	"	,
        eng	:	"	What are your thoughts of facial recognition technology in public spaces.	"	
        }	,				
        {					
        id	:	5	,		
        ru	:	"	(Обсудите роль искусственного интеллекта в формировании будущего труда.)	"	,
        eng	:	"	Discuss the role of artificial intelligence in shaping the future of work.	"	
        }	,				
        {					
        id	:	6	,		
        ru	:	"	(Как мы можем поощрять устойчивые практики в нашей повседневной жизни для защиты окружающей среды?)	"	,
        eng	:	"	How can we promote sustainable practices in our daily lives to protect the environment?	"	
        }	,				
        {					
        id	:	7	,		
        ru	:	"	(Есть ли потенциальная необходимость повторной подготовки и повышения квалификации в твоей отрасли.)	"	,
        eng	:	"	Is there any potential need for retraining and upskilling in your field?.	"	
        }	,				
        {					
        id	:	8	,		
        ru	:	"	(Обсудите этические аспекты использования технологии редактирования генов у людей.)	"	,
        eng	:	"	Discuss the ethical considerations of using gene editing technology in humans.	"	
        }	,				
        {					
        id	:	9	,		
        ru	:	"	(Каковы потенциальные преимущества и недостатки криптовалюты и технологии блокчейн?)	"	,
        eng	:	"	What are the potential benefits and drawbacks of cryptocurrency and blockchain technology?	"	
        }	,				
        {					
        id	:	10	,		
        ru	:	"	(Обсудите преимущества и недостатки обучения за рубежом.)	"	,
        eng	:	"	Discuss the advantages and disadvantages of studying abroad.	"	
        }	,				
        {					
        id	:	11	,		
        ru	:	"	(Каковы преимущества изучения второго языка?)	"	,
        eng	:	"	What are the benefits of learning a second language?	"	
        }	,				
        {					
        id	:	12	,		
        ru	:	"	(Обсудите роль технологий на рабочем месте.)	"	,
        eng	:	"	Discuss the role of technology in the workplace.	"	
        }	,				
        {					
        id	:	13	,		
        ru	:	"	(С какими экологическими проблемами сталкивается наша планета сегодня?)	"	,
        eng	:	"	What are the environmental challenges that our planet is facing today?	"	
        }	,				
        {					
        id	:	14	,		
        ru	:	"	(Опишите ситуацию, когда социальные сети могут стать причиной для расторжения брака (развода)	"	,
        eng	:	"	Describe a situation when social media can be a reason for the divorce.	"	
        }	,				
        {					
        id	:	15	,		
        ru	:	"	(Обсудите преимущества и недостатки онлайн-шопинга.)	"	,
        eng	:	"	Discuss the benefits and drawbacks of online shopping. 	"	
        }	,				
        {					
        id	:	16	,		
        ru	:	"	(Какие обычаи свадьбы распространены в вашей стране?)	"	,
        eng	:	"	What are some common wedding traditions in your country?	"	
        }	,				
        {					
        id	:	17	,		
        ru	:	"	(Что, по вашему мнению, является самой важной частью свадебной церемонии?)	"	,
        eng	:	"	What do you think is the most important part of a wedding ceremony?	"	
        }	,				
        {					
        id	:	18	,		
        ru	:	"	(Понятие свадьбы и брака изменилось в последние годы?)	"	,
        eng	:	"	Has the concept of weddings and marriage changed in recent years? How?	"	
        }	,				
        {					
        id	:	19	,		
        ru	:	"	(Обсудите плюсы и минусы большой свадьбы по сравнению с маленькой, интимной встречей.)	"	,
        eng	:	"	Discuss the pros and cons of having a large wedding versus a small, intimate gathering.	"	
        }	,				
        {					
        id	:	20	,		
        ru	:	"	(Какие есть уникальные свадебные обычаи или ритуалы из разных культур, которые вам интересны?)	"	,
        eng	:	"	What are some unique wedding customs or rituals from different cultures that you find interesting?	"	
        }	,				
        {					
        id	:	21	,		
        ru	:	"	(Обсудите роль планирования свадьбы и трудности, с которыми могут столкнуться пары в процессе подготовки.)	"	,
        eng	:	"	Discuss the role of wedding planning and the challenges that couples may face during the process.	"	
        }	,				
        {					
        id	:	22	,		
        ru	:	"	(Как понятие свадебных расходов и планирования бюджета изменилось со временем?)	"	,
        eng	:	"	How has the concept of wedding expenses and budgeting changed over time?	"	
        }	,				
        {					
        id	:	23	,		
        ru	:	"	(Какие есть альтернативные идеи свадьбы или тренды, которые вам нравятся?)	"	,
        eng	:	"	What are some alternative wedding ideas or trends that you find appealing?	"	
        }	,				
        {					
        id	:	24	,		
        ru	:	"	(Обсудите значение свадебного наряда и культурное влияние на свадебную моду.)	"	,
        eng	:	"	Discuss the significance of wedding attire and the cultural influences on bridal fashion.	"	
        }	,				
        {					
        id	:	25	,		
        ru	:	"	(Каковы ваши мысли о праздновании свадьбы в экзотических местах?)	"	,
        eng	:	"	What are your thoughts on the idea of destination weddings?	"	
        }	,				
        {					
        id	:	26	,		
        ru	:	"	(Как часто вы ходите в спортзал или занимаетесь физическими упражнениями?)	"	,
        eng	:	"	How often do you go to the gym or engage in physical exercise?	"	
        }	,				
        {					
        id	:	27	,		
        ru	:	"	(Каковы некоторые преимущества регулярных упражнений и поддержания физической активности?)	"	,
        eng	:	"	What are some benefits of regular exercise and staying physically active?	"	
        }	,				
        {					
        id	:	28	,		
        ru	:	"	(Обсудите значение разминки до и заминки после тренировки.)	"	,
        eng	:	"	Discuss the importance of warming up before and cooling down after a workout.	"	
        }	,				
        {					
        id	:	29	,		
        ru	:	"	(Какие есть популярные тренды фитнеса или программы тренировок, которые вам интересны?)	"	,
        eng	:	"	What are some popular fitness trends or workout programs that you find interesting?	"	
        }	,				
        {					
        id	:	30	,		
        ru	:	"	(Обсудите роль питания и диеты в достижении фитнес-целей.)	"	,
        eng	:	"	Discuss the role of nutrition and diet in achieving fitness goals.	"	
        }	,				
        {					
        id	:	31	,		
        ru	:	"	(Как вы поддерживаете мотивацию для регулярных тренировок?)	"	,
        eng	:	"	How do you stay motivated to exercise regularly?	"	
        }	,				
        {					
        id	:	32	,		
        ru	:	"	(Какие обычные проблемы сталкиваются люди, начинающие тренировочный режим, и как они могут их преодолеть?)	"	,
        eng	:	"	What are some common challenges people face when starting a workout routine, and how can they overcome them?	"	
        }	,				
        {					
        id	:	33	,		
        ru	:	"	(Обсудите преимущества групповых занятий или наличия партнера по тренировкам.)	"	,
        eng	:	"	Discuss the benefits of group exercise classes or having a workout buddy.	"	
        }	,				
        {					
        id	:	34	,		
        ru	:	"	(Какие есть альтернативные способы поддерживать активность и физическую форму без похода в спортзал?)	"	,
        eng	:	"	What are some alternative ways to stay active and fit without going to the gym?	"	
        }	,				
        {					
        id	:	35	,		
        ru	:	"	(Обсудите значение отдыха и восстановления в фитнес-режиме.)	"	,
        eng	:	"	Discuss the importance of rest and recovery in a fitness routine.	"	
        }	,						
]
const answers = [
    {
        id: 101,
        ru: "	Ты красавчик / красотка !",
        eng: "	You are sexy! "
    },
    {
        id: 102,
        ru: "	What did you buy yesterday? What do you want to buy next month?",
        eng: "	придумай вопрос с глаголом  buy "
    },
]	