import { useCallback } from "react";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const onLandingPageContainerClick = useCallback(() => {
    // Please sync "Marcas" to the project
  }, []);

  return (
    <div className={styles.landingPage} onClick={onLandingPageContainerClick}>
      <div className={styles.landingPageChild} />
      <div className={styles.suscribeteYObten20DeDsctParent}>
        <div className={styles.suscribeteYObtenContainer}>
          <span>{`Suscribete y obten 20% de dscto en tu siguiente compra. `}</span>
          <span className={styles.suscribirse}>Suscribirse</span>
        </div>
        <img className={styles.frameIcon11} alt="" src="/undefined.png" />
      </div>
      <div className={styles.image30Parent}>
        <img className={styles.image30Icon} alt="" src="/undefined1.png" />
        <div className={styles.frameParent}>
          <div className={styles.categoriasParent}>
            <div className={styles.categorias}>Categorias</div>
            <img className={styles.frameIcon12} alt="" src="/undefined2.png" />
          </div>
          <div className={styles.categorias}>Nosotros</div>
          <div className={styles.categorias}>Novedades</div>
          <div className={styles.categorias}>Marcas</div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon13} alt="" src="/undefined3.png" />
          <div className={styles.categorias}>Busca productos...</div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameIcon13} alt="" src="/undefined4.png" />
          <img className={styles.frameIcon13} alt="" src="/undefined5.png" />
        </div>
      </div>
      <b className={styles.deliciasQueInspiran1}>
        Delicias que inspiran, sabores que enamoran
      </b>
      <div
        className={styles.encuentraEnUn1}
      >{`Encuentra en un solo lugar todas las fiambres, quesos, y accesorios que necesites. `}</div>
      <div className={styles.comprarAhoraWrapper}>
        <div className={styles.comprarAhora}>Comprar ahora</div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.parent}>
          <b className={styles.categorias}>200+</b>
          <div className={styles.marcasReconocidas}>Marcas reconocidas</div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.parent}>
          <b className={styles.categorias}>2,000+</b>
          <div className={styles.marcasReconocidas}>
            Productos de alta calidad
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.parent}>
          <b className={styles.categorias}>30,000+</b>
          <div className={styles.marcasReconocidas}>Clientes satisfechos</div>
        </div>
      </div>
      <div className={styles.landingPageItem} />
      <div className={styles.group1}>
        <img className={styles.image15Icon} alt="" src="/undefined6.png" />
      </div>
      <b className={styles.novedades1}>Novedades</b>
      <b className={styles.msVendidos}>Más vendidos</b>
      <b className={styles.loQueDicen1}>Lo que dicen nuestros clientes</b>
      <div className={styles.frameParent2}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
          <img className={styles.frameChild4} alt="" src="/undefined11.png" />
        </div>
        <div className={styles.categorias}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameChild4} alt="" src="/undefined12.png" />
        </div>
        <div className={styles.categorias}>
          <span>3.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
          <img className={styles.frameChild4} alt="" src="/undefined11.png" />
        </div>
        <div className={styles.categorias}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
          <img className={styles.frameChild4} alt="" src="/undefined11.png" />
        </div>
        <div className={styles.categorias}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <b className={styles.jamnDePechuga1}>Jamón de Pechuga Zimmerman</b>
      <b className={styles.jamnIbericoEnrique1}>Jamón Iberico Enrique Tomas</b>
      <b className={styles.surtidoEspaolLa1}>Surtido Español La Tapería</b>
      <b className={styles.jamnIbericoLa1}>Jamón Iberico La Bellota 60g</b>
      <div className={styles.s80XKgWrapper}>
        <b className={styles.categorias}>S./80 x kg</b>
      </div>
      <div className={styles.s56Parent}>
        <b className={styles.categorias}>S./56</b>
        <b className={styles.s80}>S./80</b>
        <div className={styles.wrapper}>
          <div className={styles.comprarAhora}>-30%</div>
        </div>
      </div>
      <div className={styles.s480Parent}>
        <b className={styles.categorias}>S./480</b>
        <b className={styles.s80}>S./600</b>
        <div className={styles.wrapper}>
          <div className={styles.comprarAhora}>-20%</div>
        </div>
      </div>
      <b className={styles.s204}>S./204</b>
      <div className={styles.wrapper1}>
        <div className={styles.comprarAhora}>-20%</div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
          <img className={styles.frameInner} alt="" src="/undefined13.png" />
        </div>
        <div className={styles.categorias}>
          <span>5.0/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent7}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
        </div>
        <div className={styles.categorias}>
          <span>4.0/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent8}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
        </div>
        <div className={styles.categorias}>
          <span>3.0/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <div className={styles.frameParent9}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/undefined7.png" />
          <img className={styles.frameInner} alt="" src="/undefined8.png" />
          <img className={styles.frameInner} alt="" src="/undefined9.png" />
          <img className={styles.frameInner} alt="" src="/undefined10.png" />
          <img className={styles.frameChild4} alt="" src="/undefined11.png" />
        </div>
        <div className={styles.categorias}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      <b className={styles.jamnInglesCasa1}>Jamón Ingles Casa Europa</b>
      <b className={styles.packDeQuesos1}>Pack de Quesos De Origen</b>
      <b className={styles.tocinoAhumadoZimmermann1}>
        Tocino Ahumado Zimmermann
      </b>
      <b className={styles.jamnCrocanteCasa1}>Jamón Crocante Casa Europa</b>
      <b className={styles.s14}>S./14</b>
      <b className={styles.s18}>S./18</b>
      <div className={styles.s799XKgWrapper}>
        <b className={styles.categorias}>S./ 79.9 x kg</b>
      </div>
      <b className={styles.s50}>S./50</b>
      <b className={styles.s1790}>S./17.90</b>
      <div className={styles.viewAllWrapper}>
        <div className={styles.comprarAhora}>View All</div>
      </div>
      <div className={styles.viewAllContainer}>
        <div className={styles.comprarAhora}>View All</div>
      </div>
      <div className={styles.landingPageInner} />
      <div className={styles.navegaPorCategoriaParent}>
        <b className={styles.navegaPorCategoria1}>Navega por categoria</b>
        <div className={styles.image11Parent}>
          <img className={styles.image11Icon} alt="" src="/undefined14.png" />
          <b className={styles.fiambres}>Fiambres</b>
        </div>
        <div className={styles.accesoriosParent}>
          <b className={styles.fiambres}>Accesorios</b>
          <img className={styles.image13Icon} alt="" src="/undefined15.png" />
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image13Icon1} alt="" src="/undefined16.png" />
          <b className={styles.fiambres}>Quesos</b>
        </div>
        <div className={styles.image12Parent}>
          <img className={styles.image12Icon} alt="" src="/undefined17.png" />
          <b className={styles.fiambres}>Packs</b>
        </div>
      </div>
      <div className={styles.landingPageInner1}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent10}>
            <div className={styles.starParent6}>
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined18.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined19.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined20.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined21.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined22.png"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.categoriasParent}>
                <b className={styles.marceloH}>Marcelo H.</b>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined23.png"
                />
              </div>
              <div
                className={styles.losSaboresDe1}
              >{`Los sabores de la tabla nunca me han decepcionado, todos los productos que he comprado por su pagina son de la mejor calidad y llegan a mi casa en tiempo record. `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageInner2}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent10}>
            <div className={styles.starParent6}>
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined18.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined19.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined20.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined21.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined22.png"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.categoriasParent}>
                <b className={styles.marceloH}>Sarah M.</b>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined23.png"
                />
              </div>
              <div className={styles.losSaboresDe1}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageInner3}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent10}>
            <div className={styles.starParent6}>
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined18.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined19.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined20.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined21.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined22.png"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.categoriasParent}>
                <b className={styles.marceloH}>Lucas P.</b>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined23.png"
                />
              </div>
              <div
                className={styles.losSaboresDe1}
              >{`Encontrar un establecimiento que nunca me decepcione es una tarea que pense era imposible, pero desde que pido en Sabores de la tablea, esa percepción que tenia cambio. Tienen las mejores marcas al mejor precio. `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageInner4}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent10}>
            <div className={styles.starParent6}>
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined18.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined19.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined20.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined21.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined22.png"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.categoriasParent}>
                <b className={styles.marceloH}>Lorena T.</b>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined23.png"
                />
              </div>
              <div
                className={styles.losSaboresDe1}
              >{`Esta pagina se ha convertido en la que siempre pido cada vez que quiero hacer un brunch con mis amigas. Nunca me ha decepcionado, el delivery es rapido y los precios son los mejores del mercado. 100% satisfecha. `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageInner5}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent10}>
            <div className={styles.starParent6}>
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined18.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined19.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined20.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined21.png"
              />
              <img
                className={styles.frameChild36}
                alt=""
                src="/undefined22.png"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.categoriasParent}>
                <b className={styles.marceloH}>Macarena</b>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined23.png"
                />
              </div>
              <div className={styles.losSaboresDe1}>
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.arrowDownBold1Icon1}
        alt=""
        src="/undefined24.png"
      />
      <img
        className={styles.arrowDownBold2Icon1}
        alt=""
        src="/undefined25.png"
      />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.enterateDeNuestrasNovedadesParent}>
            <b className={styles.enterateDeNuestras1}>
              Enterate de nuestras novedades
            </b>
            <div className={styles.frameParent20}>
              <div className={styles.frameParent21}>
                <img
                  className={styles.frameIcon13}
                  alt=""
                  src="/undefined26.png"
                />
                <div className={styles.categorias}>
                  Lucas valdivia@gmail.com
                </div>
              </div>
              <div className={styles.suscribeteWrapper}>
                <div className={styles.comprarAhora}>Suscribete</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent22}>
            <div className={styles.image31Parent}>
              <img
                className={styles.image30Icon}
                alt=""
                src="/undefined27.png"
              />
              <div className={styles.parent}>
                <div
                  className={styles.tenemosTodoLo1}
                >{`Tenemos todo lo que necesitas para que tu comida sea inolvidable. `}</div>
              </div>
              <img
                className={styles.socialIcon}
                alt=""
                src="/undefined28.png"
              />
            </div>
            <div className={styles.helpMenuParent}>
              <div className={styles.helpMenu}>Nosotros</div>
              <div className={styles.aboutFeaturesWorksContainer}>
                <p className={styles.acercaDe}>{`Acerca de `}</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Características</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>{`Trabajos          `}</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Carreras</p>
              </div>
            </div>
            <div className={styles.helpMenuParent}>
              <div className={styles.helpMenu}>Ayuda</div>
              <div className={styles.aboutFeaturesWorksContainer1}>
                <p className={styles.acercaDe}>Soporte al cliente</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Delivery</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Terminos y condiciones</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Politica de privacidad</p>
              </div>
            </div>
            <div className={styles.helpMenuParent}>
              <div className={styles.helpMenu}>FAQ</div>
              <div className={styles.aboutFeaturesWorksContainer2}>
                <p className={styles.acercaDe}>Cuenta</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Gestión de pedidos</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Pedidos</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Pagos</p>
              </div>
            </div>
            <div className={styles.helpMenuParent}>
              <div className={styles.helpMenu}>Recursos</div>
              <div className={styles.aboutFeaturesWorksContainer1}>
                <p className={styles.acercaDe}>eBooks</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Tutoriales</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Blog</p>
                <p className={styles.acercaDe}>&nbsp;</p>
                <p className={styles.acercaDe}>Playlist de YT</p>
              </div>
            </div>
          </div>
          <div className={styles.badgeParent}>
            <img className={styles.badgeIcon} alt="" src="/undefined29.png" />
            <img className={styles.badgeIcon} alt="" src="/undefined30.png" />
            <img className={styles.badgeIcon} alt="" src="/undefined31.png" />
            <img className={styles.badgeIcon} alt="" src="/undefined32.png" />
            <img className={styles.badgeIcon} alt="" src="/undefined33.png" />
          </div>
          <div className={styles.allRightsReserved1}>
            Los sabores de la tabla © 2023, Todos los derechos reservados.
          </div>
        </div>
      </div>
      <img className={styles.image16Icon} alt="" src="/undefined34.png" />
      <img className={styles.image17Icon} alt="" src="/undefined35.png" />
      <img className={styles.image18Icon} alt="" src="/undefined36.png" />
      <img className={styles.image20Icon} alt="" src="/undefined37.png" />
      <img className={styles.image21Icon} alt="" src="/undefined38.png" />
      <img className={styles.image22Icon} alt="" src="/undefined39.png" />
      <img className={styles.image23Icon} alt="" src="/undefined40.png" />
      <img className={styles.image25Icon} alt="" src="/undefined41.png" />
      <img className={styles.image26Icon} alt="" src="/undefined42.png" />
      <img className={styles.image27Icon} alt="" src="/undefined43.png" />
      <img className={styles.image28Icon} alt="" src="/undefined44.png" />
      <img className={styles.image19Icon} alt="" src="/undefined45.png" />
      <img className={styles.image33Icon} alt="" src="/undefined46.png" />
    </div>
  );
};

export default LandingPage;
