import { FaSquarePhone, FaSquareJs } from 'react-icons/fa6';
import { IoIosMailUnread } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandRedux, TbBrandVscode } from 'react-icons/tb';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { LuFigma } from 'react-icons/lu';
import { SiInsomnia, SiUdemy } from 'react-icons/si';

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
              <p>ШЕВЧЕНКО МИХАЙЛО</p>
              <p>Junior frontend developer</p>
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
                <h2>Про себе</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, autem impedit. Necessitatibus doloremque consequatur,
                  rem nemo excepturi magni asperiores blanditiis quos culpa
                  aliquam incidunt quis corporis, eveniet at quo, beatae eos
                  temporibus placeat. Cum tempora velit consequuntur aperiam
                  rerum, fuga blanditiis maxime, necessitatibus optio sint
                  excepturi ratione. Voluptatem modi, perspiciatis neque
                  architecto accusamus repudiandae dolores quam, blanditiis
                  harum corporis facere eum eius quo dolorem, sit sint impedit
                  soluta fugiat id maiores incidunt possimus tempore suscipit?
                  Voluptatem culpa optio, temporibus quibusdam soluta facilis
                  est maxime corrupti labore rerum minus sapiente ut nostrum sed
                  voluptate distinctio necessitatibus, nemo inventore
                  reprehenderit laboriosam. Tenetur nisi voluptates, facere,
                  accusamus repellendus consequuntur eos ut dolor at laborum
                  ipsa ducimus repudiandae corporis iste aliquid unde obcaecati
                  suscipit eveniet quasi dolorem nobis ad sint odit deserunt.
                  Facilis cumque aliquid, quidem fugit ut minima non inventore
                  dignissimos provident id laboriosam porro error vitae dolores
                  magnam facere quis eaque dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
