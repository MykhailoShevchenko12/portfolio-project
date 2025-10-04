import { FaSquarePhone, FaSquareJs, FaCircleUser } from 'react-icons/fa6';
import { IoIosMailUnread } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandRedux, TbBrandVscode } from 'react-icons/tb';
import { FaHtml5, FaCss3, FaUserGraduate } from 'react-icons/fa';
import { LuFigma } from 'react-icons/lu';
import { SiInsomnia, SiUdemy } from 'react-icons/si';
import { MdWorkHistory } from 'react-icons/md';

import { Link } from 'react-router-dom';

import my_photo from '../../assets/images/photo.png';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <img src={my_photo} alt="my-photo" className={styles.photo} />
            <div className={styles.name}>
              <p>Шевченко Михайло</p>
              <p>Junior Frontend Developer</p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarContent}>
                <h2>Контакти</h2>
                <ul>
                  <div className={styles.listItem}>
                    <FaSquarePhone />
                    <li>+380660054160</li>
                  </div>
                  <div className={styles.listItem}>
                    <IoIosMailUnread />
                    <li>mikhailshevchenko075@gmail.com</li>
                  </div>
                </ul>
              </div>
              <div className={styles.sidebarContent}>
                <h2>Навички</h2>
                <ul>
                  <div className={styles.listItem}>
                    <FaSquareJs />
                    <li>JavaScript</li>
                  </div>
                  <div className={styles.listItem}>
                    <RiReactjsLine />
                    <li>React</li>
                  </div>
                  <div className={styles.listItem}>
                    <TbBrandRedux />
                    <li>Redux</li>
                  </div>
                  <div className={styles.listItem}>
                    <FaHtml5 />
                    <li>HTML</li>
                  </div>
                  <div className={styles.listItem}>
                    <FaCss3 />
                    <li>Css</li>
                  </div>
                </ul>
              </div>
              <div className={styles.sidebarContent}>
                <h2>Інструменти</h2>
                <ul>
                  <div className={styles.listItem}>
                    <TbBrandVscode />
                    <li>vsCode</li>
                  </div>
                  <div className={styles.listItem}>
                    <LuFigma />
                    <li>Figma</li>
                  </div>
                  <div className={styles.listItem}>
                    <SiInsomnia />
                    <li>Insomnia</li>
                  </div>
                </ul>
              </div>
              <div className={styles.sidebarContent}>
                <h2>Сертифікати</h2>
                <ul>
                  <div className={styles.listItem}>
                    <SiUdemy />
                    <Link
                      to={
                        'https://www.udemy.com/certificate/UC-69f6bf84-3064-424e-a674-0f825d292baf/'
                      }
                      target="_blank"
                    >
                      React, Redux, Redux/Toolkit
                    </Link>
                  </div>

                  <div className={styles.listItem}>
                    <SiUdemy />
                    <Link
                      to={
                        'https://www.udemy.com/certificate/UC-0c099c67-530d-4644-8716-8dd65a4fca30/'
                      }
                      target="_blank"
                    >
                      Css
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
            <div className={styles.mainInfo}>
              <div className={styles.mainContent}>
                <div className={styles.mainContentHeader}>
                  <FaCircleUser className={styles.listIcon} />
                  <h2>Про себе</h2>
                </div>
                <div className={styles.contentText}>
                  <p className={styles.about}>
                    Я почав вивчати сферу розробки веб-застосунків наприкінці
                    2024 року, паралельно працюючи над своїм дипломним
                    бакалаврським проєктом - книжковим інтернет-магазином
                    "BookNest", на даний момент навчаюсь на магістратурі. За цей
                    час, проходячи курси по HTML, Css та JavaScript, я працював
                    над декількома проєктами які включають в себе реалізацію
                    застосунку за допомогою vanillaJS, бібліотеки React, з
                    використанням бібліотеки Redux, також є приклади власних
                    простих API сервісів. В своїй роботі я завжди орієнтуюсь на
                    якість та намагаюсь удосконалити свої навички з кожним
                    проєктом.
                  </p>
                </div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.mainContentHeader}>
                  <FaUserGraduate className={styles.listIcon} />
                  <h2>Освіта</h2>
                </div>
                <div className={styles.contentText}>
                  <p className={styles.speciality}>
                    Обслуговування комп’ютерних систем і мереж (2016 - 2020)
                  </p>
                  <p className={styles.university}>
                    Коледж інформаційних систем і технологій ДВНЗ КНЕУ імені
                    Вадима Гетьмана
                  </p>
                </div>
                <div className={styles.contentText}>
                  <p className={styles.speciality}>
                    Комп’ютерні науки (Бакалавр) (2020 - 2025)
                  </p>
                  <p className={styles.university}>
                    Київський національний економічний університет імені Вадима
                    Гетьмана
                  </p>
                </div>
                <div className={styles.contentText}>
                  <p className={styles.speciality}>
                    Інформаційні управляючи системи і технології (Магістр) (2025
                    - Нині)
                  </p>
                  <p className={styles.university}>
                    Київський національний економічний університет імені Вадима
                    Гетьмана
                  </p>
                </div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.mainContentHeader}>
                  <MdWorkHistory className={styles.listIcon} />
                  <h2>Досвід</h2>
                </div>
                <div className={styles.contentText}>
                  <h3 className={styles.projectName}>BookNest</h3>
                  <p className={styles.projectDescription}>
                    Книжковий інтернет-магазин з інтегрованою платіжною системою
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS, для централізованого управління
                      станами використовалась бібліотека Redux.
                    </li>
                    <li>Інтегрована платіжна система LiqPay.</li>
                    <li>
                      Серверна частина побудована на платформі Node.js з
                      використанням Express.
                    </li>
                    <li>В якості бази даних використовуєтся MongoDB.</li>
                  </ul>
                </div>
                <div className={styles.contentText}>
                  <h3 className={styles.projectName}>Random Quotes App</h3>
                  <p className={styles.projectDescription}>
                    Генерація випадкової цитати через публічний API, з
                    можливістю зберігання цитат у список обраних
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS Modules, для передачі props через
                      дерево компонентів використовується ContextAPI.
                    </li>
                    <li>Масив обраних цитат зберігається в localStorage.</li>
                  </ul>
                </div>
                <div className={styles.contentText}>
                  <h3 className={styles.projectName}>Book Library App</h3>
                  <p className={styles.projectDescription}>
                    Додавання книг до списку улюблених по назві, випадкова книга
                    з власного API сервісу
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS, для централізованого управління
                      станами використовалась бібліотека Redux.
                    </li>
                    <li>Масив улюблених книг зберігається в localStorage.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
