import React, { useEffect } from 'react'

import projects from "./../Data/projects";
import SecondaryBanner from '../Components/SecondaryBanner'
import Resume from '../Components/Resume'
import LineTime from '../Components/LineTime'
import ImgRow from '../Components/ImgRow'
import Image from '../Components/Image'
import Poster from '../Components/Poster'
import WistiaEmbed from '../Components/WistiaEmbed'
import ImgGallery from '../Components/ImgGallery'
import baguetteBox from 'baguettebox.js'

export default () => {
  useEffect(() => {
    baguetteBox.run('.grid-gallery', { animation: 'slideIn' })
  }, [])

  const america = projects.find(p => p.name === 'América Solidaria')

  return (
    <React.Fragment>
      <SecondaryBanner
        title={america.name.toUpperCase()}
        paragraph={america.description}
      />
      <div className="container">
        <Resume 
          title="DESCRIPCIÓN DEL PROYECTO"
          paragraphs={america.resume.paragraphs}
          duration={america.resume.duration}
          rol={america.resume.rol}
        />

        <LineTime />
            
        <h3 className="text-heading">PROCESO</h3>
        <h3 className="text-heading subtitle">Investigación de usuarios</h3>

        <div className="row">
          <div className="col-md-12">
            <p className="sample-text">
              Para comenzar con esta investigación, dividimos a los socios según el comportamiento de afiliación que presentan frente a <strong>América Solidaria</strong>:
            </p>
            <ol className="ordered-list">
              <li><span> Socios-socios: aquellos que llevan años aportando a la Organización.</span></li>
              <li><span> Socios fuga: comprender porqué se desafiliaron de <strong>América Solidaria</strong>, y de cualquier otra Organización.</span></li>
              <li><span> Socios potenciales: personas que aún no son socios, pero que podrían serlo.</span></li>
            </ol>
            <p className="sample-text" style={{paddingTop: '1em'}}>
              De lo anterior extrajimos que los socios gustarían de realizar voluntariados por un día. Esto sería significante para ellos, sin dejar de hacer su aporte mensual. No se entendía la transparencia de los fondos de la Organización y que un factor clave es la cercanía y comunicación entre ellos y <strong>América Solidaria</strong>.
            </p>
          </div>
        </div>

        <div className="row pt-40">
          <div className="col-md-12">
            <h3 className="text-heading">Entendiendo al usuario</h3>
            <p className="sample-text">
              El primer paso que realizamos fue utilizar la herramienta <em>service blueprint</em> para tener una visión global tanto del usuario, como de la Organización y así, poder rastrear en su totalidad todos los componentes del servicio y encontrar posibles puntos de mejora.
            </p>
          </div>
        </div>

        <ImgRow src="ServiceBlueprint.svg" alt="Service Blueprint" />

        <div className="row">
          <div className="col-md-12">
            <p className="sample-text">
              Para poder tener más claro a qué público objetivo apuntábamos, decidimos usar esta herramienta, que nos ayudó a visualizar de mejor manera los puntos que debíamos abordar para realizar las propuestas del modelo de fidelización.
            </p>
          </div>
        </div>

        <ImgRow src="SocioFilantropoAmericaSolidaria.svg" alt="América solidaria user persona 1" />

        <ImgRow src="SocioSocialAmericaSolidaria.svg" alt="América solidaria user persona 2" />

        <div className="row pt-40">
          <div className="col-md-12">
            <p className="sample-text">
              Decidimos desarrollar un <em>customer journey map</em> para conocer y entender al detalle cuáles son los puntos de contacto y con esto las oportunidades de mejorar en el viaje que realiza el usuario cuando quiere asociarse a la Organización.
            </p>
          </div>
        </div>

        <ImgRow src="JourneyAmericaSolidaria.svg" alt="América solidaria journey" />

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              En la imagen se puede ver que existen dos puntos de dolor, donde el usuario siente frustración por la acción que está realizando. Estas situaciones son realidades que viven ellos actualmente con el sitio web de <strong>América Solidaria</strong>. Por lo tanto, nos permitió sondear cómo es el proceso y dónde eventualmente se podía mejorar.
            </p>
          </div>
        </div>

        <div className="row pt-40">
          <div className="col-9 col-md-10">
            <h3 className="text-heading pt-10">Análisis de problemas</h3>
          </div>
          <div className="col-3 col-md-2">
            <a href="AnalisisProblemasAmericaSolidaria1.svg" className="img-pop-up">
              <Image src="AnalisisProblemasAmericaSolidaria1.svg" alt="América solidaria análisis de problemas iconos" />
            </a>
          </div>
        </div>

        <ImgRow src="AnalisisProblemasAmericaSolidaria.svg" alt="América solidaria análisis de problemas" />

        <div className="row pt-20 pb-80">
          <div className="col-md-12">
            <p className="sample-text">
              Luego del análisis de problemas, nos dimos cuenta de lo siguiente:
            </p>
            <ol className="ordered-list-disc" style={{margin: '20px'}}>
              <li><span> Existe poca difusión a través de los medios de comunicación, por lo que hace que <strong>América Solidaria</strong> sea poco conocida.</span></li>
              <li><span> Los socios no saben en qué realmente se utilizan las donaciones. Esto está muy ligado a la Transparencia de la organización, ya que mucho creen que es inexistente.</span></li>
              <li><span> Una sola persona está encargada de la fidelización de socios, por ende, es muy poco personal para tanto trabajo (llamar, fidelizar, enviar mandatos, reunirse a firmar mandato, etc).</span></li>
              <li><span> El sistema que tienen ahora de fidelización no garantiza que funcione realmente.</span></li>
              <li><span> No se informa a los socios la alianzas o beneficios que tienen.</span></li>
            </ol>
          </div>
        </div>

      </div>

      <Poster 
        title="DESAFÍO"
        paragraphs={[
          '<p>Crear un modelo de fidelización que genere en el socio sentido de pertenecia con <strong>América Solidaria</strong>.</p>',
          '<p>¿Cómo podríamos generar este sentido de pertenencia?</p>'
        ]}
      />

      <div className="container">
        <h3 className="text-heading pt-80">CUMPLIENDO EL OBJETIVO</h3>
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-heading">Proponiendo soluciones</h3>
            <p className="sample-text">
              Gracias a la investigación que realizamos, nos basamos en dos conceptos para crear el modelo de fidelización: difundir y conectar.
            </p>
            <p className="sample-text">
              Debemos hacer más visibles las causas que lleva acabo <strong>América Solidaria</strong>, por ende rediseñamos el sitio web y además, creamos un modelo de negocio llamado <strong>Café Solidario</strong>, el cual permite a los socios poder pertenecer a este acumulando puntos. Este modelo se haría con Juan Valdez, ya que <strong>América Solidaria</strong> tiene una alianza con Falabella.
            </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <h3 className="text-heading">Un Café Solidario en palabras simples ...</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Image src="JuanValdez.svg" alt="Juan Valdez logo" />
          </div>
          <div className="col-md-8">
            <p className="sample-text">
              Se creó con dos objetivos: socios potenciales, los que compran el café sin pertenecer a la Organización y hacen su aporte de forma puntual (cabe mencionar, que ayuda a dar difusión a <strong>América Solidaria</strong>). Y los socios que son parte de la Organización y que con este sistema juntan estrellas para ser canjeadas al alcanzar un mínimo.
            </p>
            <p>
              Gracias a esto generamos posicionamiento de marca y una buena experiencia pudiendo disfrutar y aportar al mismo tiempo.
            </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <h3 className="text-heading">Público objetivo</h3>
            <p className="sample-text">
              Más allá de la causa u organización que ayuden, nuestra propuesta está dirigida a jóvenes profesionales que sean amantes del café y trabajen en lugares cercanos a cafeterías.
            </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-6">
                <Image src="JovenProfesional2.jpeg" height={300} alt="Joven Profesional 2" />
              </div>
              <div className="col-md-6">
                <Image src="JovenProfesional3.jpeg" height={300} alt="Joven Profesional 3" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-50">
          <div className="col-md-12">
            <h3 className="text-heading">Viaje del usuario</h3>
            <p className="sample-text">
              Para mostrar nuestra propuesta como un diseño de servicios, nos enfocamos en prototipar un <em>storyboard</em>, con las escenas primordiales, para proyectar el viaje del usuario y cómo sería la interacción que tendría con el servicio.
            </p>
          </div>
        </div>

        <ImgRow src="Storyboard.png" height={300} alt="Storyboard América solidaria" />

        <div className="row pt-50">
          <div className="col-md-12">
            <h3 className="text-heading">Testeos a partir del storyboard</h3>
            <p className="sample-text">
              Para validar y generar mejoras en la propuesta, realizamos una serie de testeos con usuarios que cumplieran el perfil del socio de <strong>América Solidaria</strong>.  El testeo se basó en una entrevista con preguntas claves sobre sensaciones que el usuario podría experimentar con ciertas acciones que iban sucediendo en el servicio propuesto.
            </p>
          </div>
        </div>

        <ImgRow src="GraficoAmericaSolidaria.svg" alt="Gráfico América Solidaria" />

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-heading">Prototipando</h3>
            <p className="sample-text">
              Puedes ver el siguiente video con el prototipo final y las interacciones de este. Además, más abajo encontrarás una galería de imágenes.
            </p>
          </div>
        </div>

        <WistiaEmbed src={america.videoUrl} />

        <hr className="mt-40 mb-20" />

        <ImgGallery images={america.gallery} />

      </div>
    </React.Fragment>
  )
}