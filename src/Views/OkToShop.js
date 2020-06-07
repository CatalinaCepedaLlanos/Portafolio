import React from 'react'

import projects from "./../Data/projects"
import SecondaryBanner from '../Components/SecondaryBanner'
import Resume from '../Components/Resume'
import LineTime from '../Components/LineTime'
import ImgRow from '../Components/ImgRow'
import Image from '../Components/Image'
import Poster from '../Components/Poster'
import WistiaEmbed from '../Components/WistiaEmbed'


export default () => {

  const okToShop = projects.find(p => p.name === 'OK TO SHOP')

  return (
    <React.Fragment>
      <SecondaryBanner
        title={okToShop.name.toUpperCase()}
        paragraph={okToShop.description}
      />
      <div className="container">
        <Resume
          title="DESCRIPCIÓN DEL PROYECTO"
          paragraphs={okToShop.resume.paragraphs}
          duration={okToShop.resume.duration}
          rol={okToShop.resume.rol}
        />

        <LineTime />

        <h3 className="text-heading">PROCESO</h3>
        <h3 className="text-heading subtitle">Investigación de usuarios</h3>

        <div className="row">
          <div className="col-md-12">
            <p className="sample-text">
              Primero realizamos entrevistas con el objetivo de determinar qué tan intuitiva y fácil de usar es la aplicación y saber si el usuario comprende -desde que ingresa- cuál es el uso de esta.
            </p>
            <p className="sample-text">
              Los grandes resultados que obtuvimos fueron los siguientes:
            </p>
            <ol className="ordered-list">
              <li><span> Cuando se utiliza por primera vez, no se logra entender cuál es el objetivo de esta.</span></li>
              <li><span> Mayoritariamente la usan mamás que tienen hijos con alergias alimentarias.</span></li>
              <li><span> El 66,6% piensa que la aplicación es fácil de usar y se encuentran rápidamente los productos.</span></li>
              <li><span> Existen elementos que entorpecen la visibilidad de la aplicación. En consecuencia se pierde información valiosa.</span></li>
            </ol>
          </div>
        </div>

        <div className="row pt-40">
          <div className="col-md-12">
            <h3 className="text-heading">Entendiendo al usuario</h3>
            <p className="sample-text">
              Antes de comenzar con las oportunidades de mejora, decidimos crear un <em>user persona</em> que fuera afín a lo que logramos extraer de las entrevistas.
            </p>
          </div>
        </div>

        <ImgRow src="OTSUserPersona.svg" alt="SOk To Shop user persona 1" />

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              A partir de la herramienta anterior, quisimos crear un viaje de usuario que fuese ideal desde que una mamá sabe que su hijo tiene una alergia alimentaria hasta que finalmente utiliza la aplicación.
            </p>
          </div>
        </div>

        <ImgRow src="JourneyOTS.svg" alt="Ok To Shop journey" />

        <div className="row pt-40 pb-80">
          <div className="col-md-12">
            <h3 className="text-heading subtitle">Oportunidades de mejora</h3>
            <p className="sample-text">
              Basándonos en el análisis y síntesis de toda la información recopilada en el proceso anterior, identificamos las necesidades de los usuarios y las reflejamos en dos grupos de oportunidades de mejoras:
            </p>
            <ol className="ordered-list">
              <li><span>Teniendo información clara y concisa sería más fácil para los usuarios entender el objetivo de la aplicación.</span></li>
              <li><span>Un mejor diseño de interacción haría la aplicación más amigable.-</span></li>
            </ol>
            <p className="sample-text">
              ¿Cómo podríamos lograr que la información fuese más sencilla para los usuarios? Y, ¿Cómo podríamos hacer que la aplicación sea más amigable y consistente?
            </p>
          </div>
        </div>
        
      </div>

      <Poster
        title="EN SIMPLES PALABRAS"
        paragraphs={[
          '<p>Mejorar interfaz, interacción e información ... Pero ¿Cómo?</p>'
        ]}
      />

      <div className="container pb-80">
        <h3 className="text-heading pt-80">CUMPLIENDO EL OBJETIVO</h3>
        
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-heading">Definiendo ideas</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 pb-10">
            <Image src="InterfazOTS.png" height={240} alt="Interfaz OTS" />
          </div>
          <div className="col-md-8">
            <p className="sample-text">
              Interfaz : resideñaremos la aplicación, cambiando alineación de elementos, tamaño de botones y consistencia en los colores usados.
          </p>
            <p>
              Interacción: en este punto, se priorizará que la navegación dentro de la aplicación sea más fluida. Para ello, trabajaremos en los botones de volver atrás, volver al <em>inicio</em> y en los filtros al momento de buscar productos.
          </p>
            <p>
              Información: los esfuerzos en este punto, van a estar centrados en mostrar el objetivo de la aplicación desde que el usuario ingresa y que las instrucciones sean más claras y visuales.
          </p>
          </div>
        </div>

        <div className="row pt-40">
          <div className="col-md-12">
            <h3 className="text-heading">Prototipando</h3>
            <p className="sample-text">
              Quisimos que la bienvenida fuese visualmente atractiva, con información precisa, que se pudiese entender fácilmente y llamara a la acción. Además, de realzar los colores corporativos.
          </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 pb-40">
                <Image src="Bienvenida.svg" alt="Bienvenida OTS" />
              </div>
              <div className="col-md-4 pb-40">
                <Image src="Tutorial 1 - Escanear.svg" alt="Escanear OTS" />
              </div>
              <div className="col-md-4">
                <Image src="Tutorial 2 - Geolocalizacion.svg" alt="Geolocalización OTS" />
              </div>
            </div>
            <div className="row pt-20">
              <div className="col-md-4 offset-md-2 pb-40">
                <Image src="Tutorial 3 - Aceptar Terminos y Condiciones.svg" alt="Terminos y Condiciones OTS" />
              </div>
              <div className="col-md-4">
                <Image src="Tutorial 4 - Comenzar.svg" alt="Tutorial OTS" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              Dejamos de utilizar la palabra “perfil” ya que da la sensación de tener que llenar un formulario. Esto a veces produce tedio y posible abandono de la aplicación Por eso, preferimos utilizar la frase “personaliza tu búsqueda”.
          </p>
            <p className="sample-text">
              También era importante que al completar la búsqueda se guardara la información de los alimentos a evitar, como se muestra a continuación.
          </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-4 pb-40">
                <Image src="Personalizar Busqueda MARIA.svg" alt="Búsqueda María" />
              </div>
              <div className="col-md-4 pb-40">
                <Image src="Personalizar Busqueda JUAN.svg" alt="Búsqueda Juan" />
              </div>
              <div className="col-md-4">
                <Image src="PRIMER Perfil - Maria.svg" alt="Perfil María" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              Diseñamos un <em>inicio</em> que fuese llamativo. <strong>OK to Shop</strong> tiene un blog que solo es visible desde el sitio web, por ende, quisimos sacarle provecho a esto y lo incluimos en el <em>inicio</em> de la aplicación, así los usuarios pudiesen tener más contenido para ver.
            </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-4 offset-md-2 pb-40">
                <Image src="Home.svg" alt="Home OTS" />
              </div>
              <div className="col-md-4">
                <Image src="Blog.svg" alt="Blog OTS" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              Por último, rediseñamos la opción “categorías”, ya que antes se llamaba “productos” y tenía una apariencia plana.
          </p>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-4 pb-40">
                <Image src="Categorias.svg" alt="Categorías OTS" />
              </div>
              <div className="col-md-4 pb-40">
                <Image src="Alimentacion Infantil.svg" alt="Alimentación OTS" />
              </div>
              <div className="col-md-4">
                <Image src="Alimentacion Infantil _ Nestum Banana.svg" width={500} height={500} alt="Nestum Banana" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-20">
          <div className="col-md-12">
            <p className="sample-text">
              Para un mayor entendimiento de la navegación que tiene la aplicación graficamos el recorrido que podría tener el usuario al realizar todas las tareas dispuestas dentro de la aplicación.
          </p>
            <p className="sample-text">
              Puedes verlo haciendo click <a href="https://overflow.io/s/BMLKPM?node=1f16491d" target="_blank"><strong>aquí</strong></a>.
          </p>
          </div>
        </div>

        <div class="row pt-20">
          <div class="col-md-10 offset-md-1">
            <div class="row">
              <div class="col-md-12 text-center">
                <Image src="Userflow.png" width={500} height={800} alt="User Flow OTS" />
              </div>
            </div>
          </div>
        </div>

        <div class="row pt-20">
          <div class="col-md-12">
            <p class="sample-text">
              Puedes ver el siguiente video con el prototipo final y las interacciones de este.
            </p>  
          </div>
        </div>

        <WistiaEmbed src={okToShop.videoUrl} />

      </div>
    </React.Fragment>
  )
}