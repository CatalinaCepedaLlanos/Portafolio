import React from 'react'

import projects from "./../Data/projects";
import SecondaryBanner from '../Components/SecondaryBanner'
import Resume from '../Components/Resume'
import LineTime from '../Components/LineTime'
import ImgRow from '../Components/ImgRow'
import Image from '../Components/Image'
import Poster from '../Components/Poster'
import WistiaEmbed from '../Components/WistiaEmbed'
import ImgGallery from '../Components/ImgGallery'


export default () => {
  const copadas = projects.find(p => p.name === 'Copadas')

  return (
    <React.Fragment>
      <SecondaryBanner
        title={copadas.name.toUpperCase()}
        paragraph={copadas.description}
      />
      <div className="container">
        <Resume
          title="DESCRIPCIÓN DEL PROYECTO"
          paragraphs={copadas.resume.paragraphs}
          duration={copadas.resume.duration}
          rol={copadas.resume.rol}
        />

        <LineTime />

        <h3 className="text-heading">PROCESO</h3>
        <h3 className="text-heading subtitle">Investigación de usuarios</h3>

        <div className="row">
          <div className="col-md-8">
            <p className="sample-text">
              El objetivo era saber la percepción que tenían los auditores de <strong>Copadas</strong>, qué temas les gustaba escuchar y qué les gustaría ver en el sitio web. Todo esto con el fin de determinar qué información se incluiría en el proyecto y cuál sería nuestra propuesta de valor.
            </p>
            <p className="sample-text">
              Logramos determinar que el podcast gustaba por los diversos temas que tocan y porque los auditores sienten que es educativo, ya que los temas centrales los respaldan con entrevistados expertos en la materia. Además, el tópico más relevante es sexo y salud para los auditores.
            </p>
            <p className="sample-text">
              Por último, obtuvimos información relevante para nuestro desafío de generar una propuesta de valor. En esta instancia fue que les gustaría poder tener instancias para compartir con otros auditores y poder enviar contenido que fuese publicado en el sitio.
            </p>
          </div>
          <div className="col-md-4">
            <Image src="imagen-1-copadas.jpg" alt="planning reference" style="height: 243px;" />
          </div>
        </div>

        <div className="row pt-40">
          <div className="col-md-12">
            <h3 className="text-heading">Entendiendo al usuario</h3>
            <p className="sample-text">
              Basándonos en la información obtenida, creamos dos <em>user persona</em>, los cuáles representan a nuestro usuario a mayor cabalidad.
            </p>
          </div>
        </div>

        <ImgRow src="UserCopadas1.svg" alt="copadas user persona 1" />
        <ImgRow src="UserCopadas2.svg" alt="copadas user persona 2" />

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              Para poder tener más claro a qué público objetivo apuntábamos, decidimos usar esta herramienta, que nos ayudó a visualizar de mejor manera los puntos que debíamos abordar para realizar las propuestas del modelo de fidelización.
            </p>
          </div>
        </div>

        <ImgRow src="SocioFilantropocopadasSolidaria.svg" alt="América solidaria user persona 1" />

        <ImgRow src="SocioSocialcopadasSolidaria.svg" alt="América solidaria user persona 2" />

        <div className="row pt-40">
          <div className="col-md-12">
            <p className="sample-text">
              También, quisimos rescatar cómo sería el viaje de un usuario desde que conoce <strong>Copadas</strong> hasta que encuentra el sitio web y cumple su objetivo. A continuación puedes verlo en detalle.
          </p>
          </div>
        </div>

        <ImgRow src="JourneyCopadas.svg" alt="copadas journey" />

      </div>

      <Poster
        title="DESAFÍO"
        paragraphs={[
          '<p>Que los auditores pudiesen interactuar con el <em>staff</em> de <strong>Copadas</strong></p>',
          '<p>¿Cómo podríamos generar escucha y visibilización de las opiniones de la comunidad de <strong>Copadas</strong> en el sitio web?</p>'
        ]}
      />

      <div className="container">
        <h3 className="text-heading pt-80">CUMPLIENDO EL OBJETIVO</h3>
        <div className="row">
          <div className="col-md-9">
            <h3 className="text-heading">Definiendo ideas</h3>
            <p className="sample-text">
              Este proceso fue fundamental para poder comenzar a materializar el proyecto. Pudiendo aterrizar lo que los usuarios y <strong>Copadas</strong> necesitan del sitio.
            </p>
            <p className="sample-text">
              Fue aquí donde pudimos plasmar nuestra propuesta de valor. “Colaboración Copada” es una instancia donde se publica quincenalmente un tema diferente a tratar, el cuál puede ser desarrollado por los usuarios enviando una columna escrita por ellos mismos. Esto permite la interacción directa con el <em>staff</em> de <strong>Copadas</strong>.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <Image src="imagen-2-copadas.jpg" alt="cuaderno fondo rosado" style="height: 243px;" />
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <h3 className="text-heading">Categorización de contenido</h3>
            <p className="sample-text">
              En esta etapa debíamos ordenar todo el contenido que tenía <strong>Copadas</strong> en categorías y subcategorías para que al usuario se le hiciese más fácil encontrar los artículos, o lo que quiera visualizar del sitio web.
            </p>
            <p>
              Para esto utilizamos la técnica de <em>cardsorting</em>, donde los mismos usuarios categorizan el contenido. El resultado fue ordenar de forma diferente el menú del sitio, ya que, al principio queríamos que todas las categorías fuesen visibles en el menú, pero al ver que solo el 12% entendió dicho esquema, debimos simplificarlo. A continuación puedes revisar nuestro <em>sitemap</em>.
          </p>
          </div>
        </div>

        <ImgRow src="SitemapCopadas.svg" alt="copadas sitemap" />

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-heading">Prototipo de alta fidelidad</h3>
            <p className="sample-text">
              A continuación puedes ver el siguiente video, donde aparecen todas las interacciones del prototio. También, más abajo encontrarás una galería de imágenes.
            </p>
          </div>
        </div>

        <WistiaEmbed src={copadas.videoUrl} />

        <hr className="mt-40 mb-20" />

        <ImgGallery images={copadas.gallery} />

      </div>
    </React.Fragment>
  )
}