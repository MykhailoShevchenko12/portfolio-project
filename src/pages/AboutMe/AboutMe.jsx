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
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="about-wrapper">
          <div className="about-header">
            <img src={my_photo} alt="my-photo" className="about-photo" />
            <div className="about-name">
              <p>Шевченко Михайло</p>
              <p>Junior Frontend Developer</p>
            </div>
          </div>
          <div className="about-info">
            <div className="about-sidebar">
              <div className="about-sidebar-content">
                <h2>Контакти</h2>
                <ul>
                  <div className="about-listItem">
                    <FaSquarePhone className="listItem-icon" />
                    <li>+380660054160</li>
                  </div>
                  <div className="about-listItem">
                    <IoIosMailUnread className="listItem-icon" />
                    <li>mikhailshevchenko075@gmail.com</li>
                  </div>
                </ul>
              </div>
              <div className="about-sidebar-content">
                <h2>Навички</h2>
                <ul>
                  <div className="about-listItem">
                    <FaSquareJs className="listItem-icon" />
                    <li>JavaScript</li>
                  </div>
                  <div className="about-listItem">
                    <RiReactjsLine className="listItem-icon" />
                    <li>React</li>
                  </div>
                  <div className="about-listItem">
                    <TbBrandRedux className="listItem-icon" />
                    <li>Redux</li>
                  </div>
                  <div className="about-listItem">
                    <FaHtml5 className="listItem-icon" />
                    <li>HTML</li>
                  </div>
                  <div className="about-listItem">
                    <FaCss3 className="listItem-icon" />
                    <li>Css</li>
                  </div>
                </ul>
              </div>
              <div className="about-sidebar-content">
                <h2>Інструменти</h2>
                <ul>
                  <div className="about-listItem">
                    <TbBrandVscode className="listItem-icon" />
                    <li>vsCode</li>
                  </div>
                  <div className="about-listItem">
                    <LuFigma className="listItem-icon" />
                    <li>Figma</li>
                  </div>
                  <div className="about-listItem">
                    <SiInsomnia className="listItem-icon" />
                    <li>Insomnia</li>
                  </div>
                </ul>
              </div>
              <div className="about-sidebar-content">
                <h2>Сертифікати</h2>
                <ul>
                  <div className="about-listItem">
                    <SiUdemy className="listItem-icon" />
                    <Link
                      to={
                        'https://www.udemy.com/certificate/UC-69f6bf84-3064-424e-a674-0f825d292baf/'
                      }
                      target="_blank"
                    >
                      React, Redux, Redux/Toolkit
                    </Link>
                  </div>

                  <div className="about-listItem">
                    <SiUdemy className="listItem-icon" />
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
            <div className="about-main-info">
              <div className="about-main-content">
                <div className="about-main-content-header">
                  <FaCircleUser className="about-main-list-icon" />
                  <h2>Про себе</h2>
                </div>
                <div className="about-main-content-text">
                  <p>
                    Я почав вивчати сферу розробки веб-застосунків наприкінці
                    2024 року, паралельно працюючи над своїм дипломним
                    бакалаврським проєктом - книжковим інтернет-магазином
                    "BookNest", на даний момент навчаюсь на магістратурі. За цей
                    час, проходячи курси по HTML, Css та JavaScript, я працював
                    над деякими навчальними проєктами які включають в себе
                    реалізацію застосунку як за допомогою звичайного vanillaJS,
                    так і за допомогою бібліотеки React, з використанням
                    бібліотеки Redux, також є приклади простих API сервісів.
                    Працюючи над проєктом я намагаюсь дотримуватись
                    загальнообізнаних практик та зробити свою роботу якісно, а
                    також навчитись новому.
                  </p>
                </div>
              </div>
              <div className="about-main-content">
                <div className="about-main-content-header">
                  <FaUserGraduate className="about-main-list-icon" />
                  <h2>Освіта</h2>
                </div>
                <div className="about-main-content-text">
                  <p className="about-main-speciality">
                    Обслуговування комп’ютерних систем і мереж (2016 - 2020)
                  </p>
                  <p className="about-main-university">
                    Коледж інформаційних систем і технологій ДВНЗ КНЕУ імені
                    Вадима Гетьмана
                  </p>
                </div>
                <div className="about-main-content-text">
                  <p className="about-main-speciality">
                    Комп’ютерні науки (Бакалавр) (2020 - 2025)
                  </p>
                  <p className="about-main-university">
                    Київський національний економічний університет імені Вадима
                    Гетьмана
                  </p>
                </div>
                <div className="about-main-content-text">
                  <p className="about-main-speciality">
                    Інформаційні управляючи системи і технології (Магістр) (2025
                    - Нині)
                  </p>
                  <p className="about-main-university">
                    Київський національний економічний університет імені Вадима
                    Гетьмана
                  </p>
                </div>
              </div>
              <div className="about-main-content">
                <div className="about-main-content-header">
                  <MdWorkHistory className="about-main-list-icon" />
                  <h2>Досвід</h2>
                </div>
                <div className="about-main-content-text">
                  <h3 className="about-main-projectName">BookNest</h3>
                  <p className="about-main-projectDescription">
                    Книжковий інтернет-магазин з інтегрованою платіжною системою
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS, для централізованого управління
                      станами використовувалась бібліотека Redux.
                    </li>
                    <li>Інтегрована платіжна система LiqPay.</li>
                    <li>
                      Серверна частина побудована на платформі Node.js з
                      використанням Express.
                    </li>
                    <li>В якості бази даних використовуєтся MongoDB.</li>
                  </ul>
                </div>
                <div className="about-main-content-text">
                  <h3 className="about-main-projectName">Random Quotes App</h3>
                  <p className="about-main-projectDescription">
                    Генерація випадкової цитати через публічний API, з
                    можливістю зберігання цитат у список обраних
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS, для передачі props використовується
                      ContextAPI.
                    </li>
                    <li>Масив обраних цитат зберігається в localStorage.</li>
                  </ul>
                </div>
                <div className="about-main-content-text">
                  <h3 className="about-main-projectName">Book Library App</h3>
                  <p className="about-main-projectDescription">
                    Додавання книг до списку по назві та автору, додавання
                    випадкової книги з власного API сервісу
                  </p>
                  <ul>
                    <li>
                      Інтерфейс користувача реалізований через бібліотеку React,
                      стилізація через CSS, для централізованого управління
                      станами використовується бібліотека Redux.
                    </li>
                    <li>
                      Масив улюблених книг зберігається в localStorage,
                      використовуючи redux-persist.
                    </li>
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

export default AboutMe;
